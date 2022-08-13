import { word_list, extended_word_list } from "./word_list.js"
import { sendAnalyticalData } from "./main.js"

let modal = document.getElementById('modal')
let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

export const gameObject = {
    latest:[],
    player_names:[],
    whos_turn:-1,
    id:"",
    total_turns:-1,
    history:[],
    paid_for_hint:false,

    list() {
        console.log(this)
        localStorage.draw_submitvalidate = "false"
        const home_yourturn_list = document.getElementById('home_yourturn_list')
        const home_waiting_list = document.getElementById('home_waiting_list')

        let currentPlayerName = localStorage.draw_user

        let containerwithx = document.createElement('div')

        let container = document.createElement('div')
        container.id = this.id
        container.classList.add('home_game')
        if (this.whos_turn == 0) {
            container.innerHTML = "<span style='font-weight:700;'>"+this.player_names[0]+"</span> vs "+this.player_names[1] + " ("+this.total_turns+" moves)"
        } else {
            container.innerHTML = this.player_names[0]+" vs <span style='font-weight:700;'>"+this.player_names[1]+"</span> ("+this.total_turns+" moves)"
        }    
        
        let deleteX = document.createElement('button')
        deleteX.classList.add('deleteGameButton')
        deleteX.innerHTML = "Delete"
        
        deleteX.addEventListener(touchEvent, async function() {
            // delete game
            
            let areyousurestring = "Are you sure?"
            if (deleteX.innerHTML == areyousurestring) {
                const response = await fetch('/api/game/'+container.id+'/delete')
                const data = await response.json() 
                if (data.status == 'ok') {
                    sendAnalyticalData("game_deleted")
                    containerwithx.innerHTML = ""
                } else {
                    alert(data)
                }
            } else {
                deleteX.innerHTML = areyousurestring
            }

        })
        
        let game_history = document.createElement('button')
        game_history.classList.add('gameHistoryButton')
        game_history.innerHTML = "History"
        game_history.addEventListener(touchEvent, async function() {
            window.location.href = '/history/'+container.id
        })
        containerwithx.append(container, game_history, deleteX)

        if (this.player_names[this.whos_turn] == currentPlayerName) {

            container.addEventListener(touchEvent, function() {
                window.location.href = '/game/'+container.id
                sendAnalyticalData("game_selected")
            })
            container.classList.add('animated','wobble')
            home_yourturn_list.append(containerwithx)
        } else {
            container.dataset.latest_word = this.latest[0]
            container.addEventListener(touchEvent, function() {
                sendAnalyticalData("check_game_word")
                alert('The word they must guess is '+container.dataset.latest_word)
            })
            home_waiting_list.append(containerwithx)
        }
        
    },
    display() {

        localStorage.draw_submitvalidate = "false"
        let currentPlayerName = localStorage.draw_user
        let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
        let drawing_submit = document.getElementById("drawing-submit")
        const info = document.getElementById('info')
        const hint = document.getElementById('payforhint')
        const superhint = document.getElementById('superhint')

        if (this.player_names[this.whos_turn] == currentPlayerName) {
            const image = document.getElementById("image")
            const guess = document.getElementById("guess")
            const canvas = document.getElementById('drawing-area')
            const newwords = document.getElementById('newwords')
            
            
            canvas.dataset.gameid = this.id
    
            // NO WORD - DISPLAY NEW WORDS
            if (this.latest.length < 4) {
                let choices = []
                if (localStorage.draw_temp_choices == null || localStorage.draw_temp_choices == "null") {
                    choices = returnRandomWords()
                    localStorage.draw_temp_choices = choices
                } else {
                    choices = localStorage.draw_temp_choices.replaceAll('[','').replaceAll(']','').split(',')
                }

                
                modal.style.display = 'flex'

                for (let i=0;i<modal.children.length-2;i++) {
                    if (localStorage.draw_extended == "true") {
                        sendAnalyticalData("extended_word_list")
                        modal.children[i].innerHTML = choices[i] + " ("+((i+1)*2)+" coins)"
                    } else {
                        sendAnalyticalData("word_list")
                        modal.children[i].innerHTML = choices[i] + " ("+(i+1)+" coins)"
                    }

                    modal.children[i].addEventListener(touchEvent, function() {
                        // word chosen, close modal, and store locally to be used in the submit call
                        localStorage.setItem('draw_temp_chosenword', modal.children[i].innerHTML.split(' (')[0])
                        if (localStorage.draw_extended == "true") {
                            localStorage.setItem('draw_temp_points', (i+1)*2)
                        } else {
                            localStorage.setItem('draw_temp_points', i+1)
                        }
                        localStorage.draw_customword = "false"
                        modal.style.display = 'none'
                        init_canvas()
                        canvas.style.display = 'block'
                        info.innerHTML = "Draw <span style='font-weight:700;'>"+localStorage.draw_temp_chosenword+"</span>"
                    })
                    newwords.addEventListener('click', async function() {
                        sendAnalyticalData("new_word_list")
                        if (parseInt(document.getElementById('currentScore').innerText) >= 5) {
                            localStorage.draw_temp_choices = null
                            await awardPoints(localStorage.draw_user, -5)
                            window.location.reload()
                        }
                    })
                }

                if (Math.random() > 0.95) {
                    drawRandomWordFromDB()
                }
                
                drawing_submit.style.display = ''
                drawing_submit.addEventListener(touchEvent, async function() {
                    if (localStorage.draw_submitvalidate == "true") {
                    localStorage.draw_temp_choices = null
                        var image = canvas.toDataURL("image/png")
                        let body = {
                            data:[
                                localStorage.draw_temp_chosenword, 
                                localStorage.draw_temp_points,
                                image,
                                localStorage.draw_customword
                            ], 
                        }
                        
                        const fetchResponse = await fetch('/api/game/'+canvas.dataset.gameid+'/updatelatest', {
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                                },
                            method: 'POST',
                            body: JSON.stringify(body)
                        }); 
                        await changeTurn(canvas.dataset.gameid)
                        localStorage.draw_submitvalidate = "false"
                        window.location.reload()
                } else {
                drawing_submit.innerHTML = "Are you sure?"
                localStorage.draw_submitvalidate = "true"
                }
                    
                })
                
                // only change turn after finishing drawing
                // changeTurn(image.dataset.gameID)
            } else {
                // guessing state
                let attempts = [] // list of attempted words
                hint.style.display = ''
                canvas.style.display = 'none'
                image.style.display = ''
                guess.style.display = ''
                image.dataset.value = this.latest[0]
                image.dataset.points = this.latest[1]
                image.src = this.latest[2]
                image.dataset.gameID = this.id
                let superhint_letters = 0
                if (this.latest[3] == "true") {
                    image.style.border = "3px solid gold"
                }
                info.innerHTML = 'Find the '+(image.dataset.value.length)+" letter word"
                // User is guessing the word
                guess.addEventListener('keydown', async function(e) {
                    if (e.key == "Enter" && guess.value.length > 0) {
                        if (guess.value.toLowerCase() == image.dataset.value.toLowerCase()) {
                            sendAnalyticalData("correct_guess")
                            guess.setAttribute('placeholder', '')
                            await awardPoints("", parseInt(image.dataset.points), image.dataset.gameID)
                            await finishGuessing(image.dataset.gameID, attempts, superhint_letters, hint)
                            window.location.reload()
                        } else {
                            sendAnalyticalData("wrong_guess")
                            attempts.push(guess.value)
                            guess.value = ""
                            guess.setAttribute('placeholder', 'Incorrect')
    
                        }
                    }
                })
                // User wants a hint
                hint.addEventListener(touchEvent, async function() {
                    if (parseInt(document.getElementById('currentScore').innerText) >= 5) {
                        sendAnalyticalData("hint")
                        await awardPoints(localStorage.draw_user, -10)
                        info.innerHTML = 'Find the '+(image.dataset.value.length)+" letter word with these letters:<br/>"+scramble(image.dataset.value)
                        hint.style.display = 'none'
                        superhint.style.display = ''
                        document.getElementById('currentScore').innerText = ""+(parseInt(document.getElementById('currentScore').innerText)-10)+" 🪙"
                    }
                })
                
                superhint.addEventListener(touchEvent, async function() {
                    sendAnalyticalData("superhint")
                    if ((guess.value.length != image.dataset.value.length) && parseInt(document.getElementById('currentScore').innerText) >= 5) {
                        superhint_letters++
                        guess.value = ""
                        await awardPoints(localStorage.draw_user, -5)
                        document.getElementById('currentScore').innerText = ""+(parseInt(document.getElementById('currentScore').innerText)-5)+" 🪙"
                        for (let i=0;i<superhint_letters;i++) {
                            guess.value += image.dataset.value[i]
                        }
                    }

                })
            }
        } else {
            window.location.href = '/'
        }
        

    }
}

export async function awardPoints(user, points, game, gift, givegiver) {
    if (user.length < 1) {
        const response = await fetch('/api/awardall/'+game+"/"+points)
    } else {
        const response = await fetch('/api/award/'+user+"/"+points+"/"+gift+"/"+givegiver)
    }
}

async function changeTurn(gameID) {
    const response = await fetch('/api/game/'+gameID+'/changeturn' )
}

async function finishGuessing(gameID, attempts, superhint, hint) {
    if (attempts == "") {
        attempts = "none"
    } 
    let paid = false
    if (document.getElementById('payforhint').style.display == "none") {
        paid = true
    }
    const response = await fetch('/api/game/'+gameID+'/finishguessing/'+attempts+"/"+paid+"/"+superhint)
    
}

function returnRandomWords() {
    let x = []
    while (x.length < 3) {
        if (localStorage.draw_extended == "true") {
            console.info("USING EXTENDED WORD LIST")
            x.push(extended_word_list[Math.floor(Math.random() * extended_word_list.length)])
        } else {
            x.push(word_list[Math.floor(Math.random() * word_list.length)])
        }
    }
    return x
}

async function drawRandomWordFromDB() {
    const response = await fetch('/api/get/randomword')
    let data  = await response.json()

    data = data.data

    let word = document.createElement("button")
    word.style.backgroundColor = 'gold'
    let points = Math.floor((Math.random() * 14)+1)
    word.innerHTML = data.word + " ("+points+" coins)"
    modal.insertBefore(word, modal.children[0])

    word.addEventListener(touchEvent, function() {
        localStorage.draw_customword = "true"
        // word chosen, close modal, and store locally to be used in the submit call
        localStorage.setItem('draw_temp_chosenword', data.word)
        if (localStorage.draw_extended == "true") {
            localStorage.setItem('draw_temp_points', points)
        } else {
            localStorage.setItem('draw_temp_points', points)
        }
        
        modal.style.display = 'none'
        init_canvas()
        canvas.style.display = 'block'
        canvas.style.border = "3px solid gold"
        info.innerHTML = "Draw <span style='font-weight:700;'>"+localStorage.draw_temp_chosenword+"</span>"
    })
}

function scramble(x) {
    let scrambled = ""
    x = x.split('')
    scrambled = (x.sort((a, b) => 0.5 - Math.random())).join().replaceAll(',','').toUpperCase()
    return scrambled
}

// CANVAS CODE

let canvas, canvasContext
const state = {
    mousedown: false
};
    
let lineWidth = 5;
let fillStyle = '#333';
let strokeStyle = '#333';
let shadowColor = '#333';

let drawingHistory = []

function init_canvas() {
    canvas = document.getElementById('drawing-area');
    canvas.style.display = 'none'

    canvasContext = canvas.getContext('2d');
    canvasContext.canvas.width = window.innerWidth * 0.9
    canvasContext.canvas.height = window.innerHeight * 0.5
    canvasContext.fillStyle = "white"
    canvasContext.lineCap = "round";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    
    canvas.addEventListener('mousedown', handleWritingStart);
    canvas.addEventListener('mousemove', handleWritingInProgress);
    canvas.addEventListener('mouseup', handleDrawingEnd);
    canvas.addEventListener('mouseout', handleDrawingEnd);
    
    canvas.addEventListener('touchstart', handleWritingStart);
    canvas.addEventListener('touchmove', handleWritingInProgress);
    canvas.addEventListener('touchend', handleDrawingEnd);

    const color_picker = document.getElementById("color_picker")
    color_picker.style.display = 'block'
    strokeStyle = color_picker.value
    color_picker.addEventListener('change', function() {
        strokeStyle = color_picker.value
    })
    const width_picker = document.getElementById("width_picker")
    width_picker.style.display = 'block'
    lineWidth = width_picker.value
    width_picker.addEventListener('change', function() {
        lineWidth = width_picker.value
    })
    const clear = document.getElementById("drawing-clear")
    clear.style.display = ''
    clear.onclick = function() {
        clearCanvas()
    }
    const undo = document.getElementById("drawing-undo")
    undo.style.display = ''
    undo.onclick = function() {
        sendAnalyticalData("canvas_undo")
        var image = new Image();
        image.onload = function() {
            canvasContext.drawImage(image, 0,0)
        };
        image.src = drawingHistory[drawingHistory.length - 1]
        drawingHistory.splice(-1)
    }
}

function handleWritingStart(event) {
  event.preventDefault();
  drawingHistory.push(canvas.toDataURL("image/png"))
  const mousePos = getMosuePositionOnCanvas(event);
  
  canvasContext.beginPath();

  canvasContext.moveTo(mousePos.x, mousePos.y);

  canvasContext.lineWidth = lineWidth;
  canvasContext.strokeStyle = strokeStyle;
  canvasContext.shadowColor = null;
  canvasContext.arc(mousePos.x, mousePos.y, lineWidth/4, 3, 2 * Math.PI, false);

  canvasContext.fill();
  
  state.mousedown = true;

}

function handleWritingInProgress(event) {
  event.preventDefault();
  
  if (state.mousedown) {
    const mousePos = getMosuePositionOnCanvas(event);

    canvasContext.lineTo(mousePos.x, mousePos.y);
    canvasContext.stroke();
  }

}

function handleDrawingEnd(event) {
  event.preventDefault();
  console.log("drawing end")
  
  if (state.mousedown) {
    canvasContext.shadowColor = shadowColor;

    canvasContext.stroke();
  }
  
  state.mousedown = false;
}

function getMosuePositionOnCanvas(event) {
  const clientX = event.clientX || event.touches[0].clientX;
  const clientY = event.clientY || event.touches[0].clientY;
  const { offsetLeft, offsetTop } = event.target;
  const canvasX = clientX - offsetLeft;
  const canvasY = clientY - offsetTop;

  return { x: canvasX, y: canvasY };
}

function clearCanvas() {
    sendAnalyticalData("canvas_clear")
    canvasContext.fillStyle = "white"
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);

}
