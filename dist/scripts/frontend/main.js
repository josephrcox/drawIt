import { gameObject, awardPoints } from "/dist/scripts/frontend/obj_game.js"
import { historyItemObject } from "/dist/scripts/frontend/obj_history_item.js"

let home_yourturn_list = document.getElementById('home_yourturn_list')
let home_waiting_list = document.getElementById('home_waiting_list')

function sendAnalyticalData(event_name, event_data) {
    gtag('event', event_name, event_data)
}

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
        sendAnalyticalData('create_user', {'user': localStorage.draw_user})
    }
    dailyAward(localStorage.draw_user)
    document.getElementById('currentScore').style.display = ''
    document.getElementById('currentScore').innerText = ""+data.points+" 🪙"
    if (data.notifications.length > 0) {
        document.getElementById('notifBell').style.display = ''
        document.getElementById('notifBell').innerText = ""+data.notifications.length+" 🔔"
        document.getElementById('notifBell').addEventListener('click', function() { 
            window.location.href = "/notifications"
        })
    }


    gtag('set', 'user_properties', {
        username: localStorage.draw_user,
        coins: data.points,
        total_games: data.current_game_ids.length
    });

    if (window.location.pathname.includes('/game/')) {
        sendAnalyticalData('view_game', {'user': localStorage.draw_user})
        let gameid = window.location.pathname.split('/game/')[1]
        let r = await fetch('/api/get/game/'+gameid)
        let g = await r.json()
        if (g.data != null) {
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
        sendAnalyticalData('view_game_history', {'user': localStorage.draw_user})
        let r = await fetch('/api/get/game/'+window.location.pathname.split('/')[2])
        let g = await r.json()
        if (window.location.pathname.split('/').length == 4) {
            g.data.history = [g.data.history[window.location.pathname.split('/')[3]]]
        }
        console.log(g.data.history)
       

        for (let i=0;i<g.data.history.length;i++) {
            let h = g.data.history[i]
            let item = Object.create(historyItemObject)
            item.word = h.word
            item.points_awarded = h.points_awarded
            item.img_data = h.img_data
            item.attempts = h.attempts
            item.comments = h.comments
            item.drawn_by = h.drawn_by
            item.index = h.index
            item.paid_for_hint = h.paid_for_hint
            item.superhint_letters = h.superhint_letters
            item.gameid = h.gameid
            item.player_names = h.player_names
            item.display()
        }
    } else if (window.location.pathname.includes('/feed')) {
        sendAnalyticalData('view_feed', {'user': localStorage.draw_user})
        let r = await fetch('/api/get/feed')
        let g = await r.json()
        for (let j=0;j<g.data.length;j++) {
            // for every history item
            let h = g.data[j]
            let item = Object.create(historyItemObject)
            item.word = h.word
            item.points_awarded = h.points_awarded
            item.img_data = h.img_data
            item.attempts = h.attempts
            item.comments = h.comments || []
            item.drawn_by = h.drawn_by
            item.date = h.createdAt
            item.index = h.index
            item.paid_for_hint = h.paid_for_hint
            item.superhint_letters = h.superhint_letters
            item.for_the_feed = true
            item.players = h.player_names
            item.gameid = h.gameid
            item.display()
        }
    } else if (window.location.pathname.includes('/notifications')) {
        sendAnalyticalData('view_notifications', {'user': localStorage.draw_user})
        let r = await fetch('/api/get/notifications/'+localStorage.draw_user)
        let d = await r.json()

        if (d.data.length > 0) {
            for (let i=0;i<d.data.length;i++) {
                let container = document.createElement('div')
                let notif = document.createElement('div')
                container.className = 'notification'
                notif.innerHTML = d.data[i].initiator+" "+d.data[i].type+" on <a href='/history/"+d.data[i].gameid+"/"+d.data[i].index+"'>this game</a>"
                let del = document.createElement('button')
                del.className = 'deleteNotification'
                del.innerText = "✔️"
                del.dataset.id = d.data[i].id
                del.onclick = async function() {
                    await fetch('/api/notification/delete/'+localStorage.draw_user+'/'+del.dataset.id)
                    container.innerHTML = ""
                    container.style.display = 'none'
                }
                container.append(del,notif)
    
                document.getElementById("notif_area").append(container)
            }
        } else {
            document.getElementById("notif_area").innerHTML = "No notifications"
        }


    } else {
        if (data.current_game_ids == undefined) {
            window.location.reload()
        }
        for (let i=0;i<data.current_game_ids.length;i++) {
            let r = await fetch('/api/get/game/'+data.current_game_ids[i])
            let g = await r.json()
            if (g.data != null) {
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
    sendAnalyticalData('view_game_list', {'user': localStorage.draw_user})
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
    sendAnalyticalData('daily_coins', {'user': localStorage.draw_user})
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

