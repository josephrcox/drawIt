import { gameObject } from "/dist/scripts/frontend/obj_game.js"

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
    loadGames(localStorage.draw_user)
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

    console.log(data)
    document.getElementById('currentScore').style.display = ''
    document.getElementById('currentScore').innerText = "🪙 "+data.points

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
            go.display()
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
                if (window.location.pathname.includes('/game/')) {
                    console.log("game")
                    go.display()
                } else {
                    go.list()
                }
            }
        }
    }

}

document.getElementById('createNewGame').onclick = async function() {
    let vsplayer = prompt("New game with who?")
    if (vsplayer.length >= 3 && vsplayer.toLowerCase() != localStorage.draw_user) {
        const response = await fetch('/creategame/'+localStorage.draw_user+'/'+vsplayer)
        const data = await response.json()
        if (data != null) {
            window.location.reload()
        }
    } 
    
}