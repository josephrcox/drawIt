import { gameObject, awardPoints } from "/dist/scripts/frontend/obj_game.js"
import { historyItemObject } from "/dist/scripts/frontend/obj_history_item.js"

function init_frontend() {
    console.info("loading frontend")
    if (localStorage.draw_user == null) {
        let u = prompt("Enter username")
        if (u == null || u.length < 3) {
            return init_frontend()
        }
        localStorage.draw_user = u
    }
    localStorage.draw_user = localStorage.draw_user.toLowerCase()

    var myRegEx  = /[^a-z\d]/i;
    var isValid = !(myRegEx.test(localStorage.draw_user))

    if (isValid) {
        loadGames(localStorage.draw_user)
    } else {
        localStorage.clear()
        window.location.reload()
    }


}

init_frontend()

async function loadGames(u) {
    const response = await fetch('/api/get/user/'+u+'/')
    let data = await response.json()
    data = data.data
    if (data == null){
        const r2 = await fetch('/createuser/'+localStorage.draw_user)
        data = await r2.json()
        window.location.reload()
    }
    dailyAward(localStorage.draw_user)
    console.log(data)
    document.getElementById('currentScore').style.display = ''
    document.getElementById('currentScore').innerText = ""+data.points+" 🪙"

    if (window.location.pathname.includes('/game/')) {
        let gameid = window.location.pathname.split('/game/')[1]
        let r = await fetch('/api/get/game/'+gameid)
        let g = await r.json()
        if (g.data != null) {
            console.log(g.data)
            const go = Object.create(gameObject)

            go.id = g.data._id
            go.latest = g.data.latest
            go.whos_turn = g.data.whos_turn
            go.player_names = g.data.player_names
            go.history = g.data.history
            go.total_turns = Math.floor(parseInt(g.data.total_turns)/2)
            go.display()
        }
    } else if (window.location.pathname.includes('/history/')) {
        let r = await fetch('/api/get/game/'+window.location.pathname.split('/history/')[1])
        let g = await r.json()
        for (let i=0;i<g.data.history.length;i++) {
            let h = g.data.history[i]
            let item = Object.create(historyItemObject)
            item.word = h.word
            item.points_awarded = h.points_awarded
            item.img_data = h.img_data
            item.attempts = h.attempts
            item.comments = h.comments
            item.drawn_by = h.drawn_by
            item.index = i
            item.paid_for_hint = h.paid_for_hint
            item.display()
        }
    } else {
        if (data.current_game_ids == undefined) {
            window.location.reload()
        }
        for (let i=0;i<data.current_game_ids.length;i++) {
            let r = await fetch('/api/get/game/'+data.current_game_ids[i])
            let g = await r.json()
            if (g.data != null) {
                console.log(g.data)
                const go = Object.create(gameObject)
    
                go.id = g.data._id
                go.latest = g.data.latest
                go.whos_turn = g.data.whos_turn
                go.player_names = g.data.player_names
                go.total_turns = Math.floor(parseInt(g.data.total_turns)/2)
                go.history = g.data.history
                if (window.location.pathname.includes('/game/')) {
                    console.log("game")
                    go.display()
                } else {
                    go.list()
                }
            }
        }
    }
    loadPlayerList()
}

document.getElementById('createNewGame').onclick = function() {
    createNewGame()
    
}

async function createNewGame(user, prefilled) {
    let vsplayer = ""
    if (user == null || user == undefined || prefilled.length > 0) {
        vsplayer = prompt("New game with who?", prefilled)
    } else {
        vsplayer = user
    }

    if (vsplayer.length >= 3 && vsplayer.toLowerCase() != localStorage.draw_user) {
        const response = await fetch('/creategame/'+localStorage.draw_user+'/'+vsplayer)
        const data = await response.json()
        if (data != null) {
            window.location.href = '/game/'+data.g._id
        }
    } 
    gtag('event', 'create_new_game', {
        'event_name':'create_new_game'
    })
      
}

async function loadPlayerList() {
    const player_list = document.getElementById('player_list')
    const response = await fetch('/api/get/playerlist')
    let data = await (await response).json()
    data = data.data
    for (let i=0;i<data.length;i++) {
        if (localStorage.draw_user == data[i][0]) {
            player_list.innerHTML += "<a href='#' class='playerbutton'>"+data[i][0]+"<span style='font-size:14px'> ( you )</span></a>"
        } else {
            player_list.innerHTML += "<a href='#' class='playerbutton'>"+data[i][0]+"<span style='font-size:14px'> ( "+data[i][1]+" 🪙 )</span></a>"
        }
        
        if (i != data.length-1) {
            player_list.innerHTML += " ~  "
        }
    }
    let playerButtons = document.getElementsByClassName('playerbutton')
    for (let i=0;i<playerButtons.length;i++) {
        playerButtons[i].onclick = function() {
            createNewGame(playerButtons[i].innerText.split(" (")[0], playerButtons[i].innerText.split(" (")[0])
        }
    }
}

async function dailyAward(u) {
    let triggerReward = false
    let now = Math.floor(new Date().getTime() / 1000)
    let random = Math.floor(Math.random() * 15) + 5
    if (localStorage.draw_lastplayed == null) {
        localStorage.draw_lastplayed = Math.floor(new Date().getTime() / 1000)
        triggerReward = true
    } else if ((parseInt(now) - parseInt(localStorage.draw_lastplayed)) >= 86400) {
        triggerReward = true
    }

    if (triggerReward) {
        alert(`Today's daily reward is ${random} coins! Have fun!`)
        localStorage.draw_lastplayed = Math.floor(new Date().getTime() / 1000)
        await awardPoints(localStorage.draw_user, random)
        //await fetch('/api/add/points/'+localStorage.draw_user+'/'+random)
        window.location.reload()
    }
}

