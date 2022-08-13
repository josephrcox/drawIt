import { gameObject, awardPoints } from "/dist/scripts/frontend/obj_game.js"
import { historyItemObject } from "/dist/scripts/frontend/obj_history_item.js"

let home_yourturn_list = document.getElementById('home_yourturn_list')
let home_waiting_list = document.getElementById('home_waiting_list')
let modal = document.getElementById("alertModal")
let modal_logs = document.getElementById("modal_logs")

export function sendAnalyticalData(event_name, event_data) {
    if (localStorage.draw_user != "joseph") {
        gtag('event', event_name, event_data)
    } else {
        gtag('event', 'admin_event', 'admin_event')
    }

}

function init_frontend() {
    console.info("loading frontend")
    if (localStorage.draw_user == null && window.location.search != "?override=true") {
        alertModal("Login", "login", false)
    } else {
        loadGames(localStorage.draw_user)
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
        if (g.data != null && g.data.active_game == true) {
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
            item.is_custom = h.is_custom
            if (h.custom_word_creator != null) {
                item.custom_word_creator = h.custom_word_creator
            }
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
            item.is_custom = h.is_custom
            if (h.custom_word_creator != null) {
                item.custom_word_creator = h.custom_word_creator
            }
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
                if (d.data[i].type == "gifted") {
                    if (parseInt(d.data[i].index) > 1) {
                        notif.innerHTML = d.data[i].initiator + " <a href='/store' style='font-color:blue;'>"+d.data[i].type+" you </a>"+d.data[i].index+" coins! 💰"
                    } else {
                        notif.innerHTML = d.data[i].initiator + " <a href='/store' style='font-color:blue;'>"+d.data[i].type+" you </a>"+d.data[i].index+" coin! 💰"
                    }
                    
                } else {
                    if (d.data[i].word != null) {
                            notif.innerHTML = d.data[i].initiator+" "+d.data[i].type+" on <a href='/history/"+d.data[i].gameid+"/"+d.data[i].index+"' style='font-style:italic;'>"+d.data[i].word+"</a>"

                    } else {
                        notif.innerHTML = d.data[i].initiator+" "+d.data[i].type+" on <a href='/history/"+d.data[i].gameid+"/"+d.data[i].index+"'>this game</a>"
                    }
                }

                
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


    } else if (window.location.pathname.includes('/store')) {
        sendAnalyticalData('view_store', {'user': localStorage.draw_user})

        let store_items = document.getElementsByClassName('store-item')
        let giftcoins = document.getElementById("store-giftcoins")
        let addword = document.getElementById("store-addword")

        let buycoins = document.getElementById("store-buycoins")
        let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
        let purchaseModal = document.getElementById("purchaseModal")

        giftcoins.addEventListener(touchEvent, async function(e) {
            
            let amount = prompt("How many coins would you like to gift?")
            let towhom = prompt("Who would you like to gift them to?")
            let am = parseInt(amount)

            if (am > 0 && towhom.length > 0 && parseInt(document.getElementById("currentScore").innerText.split(' ')[0]) >= am) {
                sendAnalyticalData('store_giftcoins', {'user': localStorage.draw_user})
                if (localStorage.draw_user == towhom) {
                    alert("You can't gift yourself coins!")
                } else {
                    await awardPoints(towhom, am, null, true, localStorage.draw_user)
                    await awardPoints(localStorage.draw_user, -am)
                    window.location.reload()
                }
            }
        })

        addword.addEventListener(touchEvent, async function(e) {
            if (document.getElementById("currentScore").innerText.split(' ')[0] >= 60) {
                alertModal("Upload a new word to the game", "addword", true)
            } else {
                alert("You need at least 60 coins to add a word!")
            }
            let input = document.getElementById("modal_addword_input")
            let submit = document.getElementById("modal_addword_submit")

            input.addEventListener('keyup', function(e) {
                if (e.keyCode == 13) {
                    submit.click()
                }
            })

            submit.addEventListener(touchEvent, async function(e) {
                // post request to add word
                let bodyJSON = {
                    "word": input.value,
                    "creator": localStorage.draw_user,
                }
                const response = await fetch('/api/post/addword', {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                        },
                    method: 'POST',
                    body: JSON.stringify(bodyJSON)
                }); 
                var data = await response.json()
                if (data.status == "ok") {
                    alertModal("Your word '"+input.value+"' has been added!", "ok", false, true)
                } else {
                    modalLog(data.error)
                }
            })
            
        })

        buycoins.addEventListener(touchEvent, function(e) {
            window.location.href = "/payment/"
        })
    } else {
        if (data.current_game_ids == undefined) {
            window.location.reload()
        }
        for (let i=0;i<data.current_game_ids.length;i++) {
            let r = await fetch('/api/get/game/'+data.current_game_ids[i])
            let g = await r.json()
            console.log(g.data)
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
        sendAnalyticalData('view_game_list', {'user': localStorage.draw_user})
        document.getElementById('createNewGame').onclick = function() {
            alertModal("Create new game", "createnewgame", true)
        }
    }


    loadPlayerList()
}

async function createNewGame(user) {
    if (user.length >= 3 && user.toLowerCase() != localStorage.draw_user) {
        const response = await fetch('/creategame/'+localStorage.draw_user+'/'+user)
        const data = await response.json()
        if (data != null) {
            window.location.href = '/game/'+data.g._id
        }
    } else {
        modalLog("Please enter a valid player")
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
    let triggerReward = false
    let now = Math.floor(new Date().getTime() / 1000)
    let random = Math.floor(Math.random() * 10) + 2
    if (localStorage.draw_lastplayed == null) {
        localStorage.draw_lastplayed = Math.floor(new Date().getTime() / 1000)
        triggerReward = true
    } else if ((parseInt(now) - parseInt(localStorage.draw_lastplayed)) >= 86400) {
        triggerReward = true
    }

    if (triggerReward) {
        sendAnalyticalData('daily_coins', {'user': localStorage.draw_user})
        alertModal(`Today's daily reward is ${random} coins! Have fun!`, "ok", true)
        localStorage.draw_lastplayed = Math.floor(new Date().getTime() / 1000)
        await awardPoints(localStorage.draw_user, random)
        document.getElementById('currentScore').innerHTML = (parseInt(document.getElementById('currentScore').innerHTML.split(" ")[0])+random)+" 🪙"
    }
}

export function alertModal(heading, scenario, allowClose, reload) {
    for (let i=0;i<modal.children.length;i++) {
        modal.children[i].style.display = 'none'
    }
    modal_logs.style.display = ''
    modal.style.display = "flex"
    modal.children[0].style.display = ""
    modal.children[1].innerText = heading
    modal.children[1].style.display = ""

    if (allowClose == true) {
        modal.children[2].style.display = "" // close button
    }

    document.querySelector(".page-content").style.display = 'none'

    Array.from(document.getElementsByClassName("modal_"+scenario)).forEach(e => {
        e.style.display = ''
        if (scenario == "login") {
            document.getElementById("modal_login_submit").onclick = function() {
                login(document.getElementById("modal_login_input").value)
            }
            document.getElementById("modal_login_input").addEventListener('keydown', function(e) {
                if (e.keyCode == 13) {
                    login(document.getElementById("modal_login_input").value)
                }
            })
        } else if (scenario == "createnewgame") {
            document.getElementById("modal_cng_submit").onclick = function() {
                createNewGame(document.getElementById("modal_cng_input").value)
            }
            document.getElementById("modal_cng_input").addEventListener('keydown', function(e) {
                if (e.keyCode == 13) {
                    createNewGame(document.getElementById("modal_cng_input").value)
                }
            })
        } else if (scenario == "ok") {
            document.querySelector(".modal_ok").onclick = function() {
                closeModal()
                if (reload == true) {
                    window.location.reload()
                }
            }

        }

    });
}

export function modalLog(log) {
    modal_logs.style.maxHeight = '500px'
    modal_logs.style.padding = '13px'
    modal_logs.innerText = log

    setTimeout(function() {
        modal_logs.style.maxHeight = '0px'
        modal_logs.style.padding = '0px'
    }, 3000)
    setTimeout(function() {
        modal_logs.innerText = ""
    }, 4000)
    

}

document.getElementById("modal_close").addEventListener('click', function() {
    closeModal()
})

export function closeModal() {
    modal.style.display = "none"
    document.querySelector(".page-content").style.display = ''
}

function login(u) {
    u = u.toLowerCase()
    var myRegEx  = /[^a-z\d]/i;
    var isValid = !(myRegEx.test(u))
    console.log(isValid)
    if (u == null || u.length < 3 || !isValid) {
        console.log(u)
        return init_frontend()
    }
    localStorage.draw_user = u

    myRegEx  = /[^a-z\d]/i;
    isValid = !(myRegEx.test(localStorage.draw_user))

    if (isValid) {
        loadGames(localStorage.draw_user)
        closeModal()
    } else {
        localStorage.clear()
        window.location.reload()
    }
}