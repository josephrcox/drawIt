export const historyItemObject = {
    word:"",
    is_custom:false,
    custom_word_creator:"",
    points_awarded:-1,
    img_data:"",
    attempts:[],
    comments:[],
    drawn_by:"",
    index:-1,
    superhint_letters:-1,
    paid_for_hint:false,
    for_the_feed:false,
    players:[],
    date:"",
    gameid:"",

    display() {
        const container = document.createElement("div")
        container.dataset.index = this.index
        container.dataset.gameid = this.gameid
        container.classList.add('history_container')
        if (this.players.length > 0) {
            container.innerHTML += "<span style='font-size:15px;color:black;font-variant:super;'>"+this.players[0].toUpperCase() +" vs "+ this.players[1].toUpperCase()+"</span><br/>"
        }
        let color = "red"
        if (this.is_custom) {
            color = "#dfff00"
        }
        container.innerHTML += "<span style='font-weight:700'>"+this.drawn_by + "</span> drew <span style='font-weight:700;color:"+color+";'>" + this.word + "</span> for <span style='font-weight:700;color:blue;'>"+this.points_awarded + " coins</span>"
        let date = new Date(this.date)
        const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
        container.innerHTML += " <span style='font-size:14px;'>("+date.toLocaleString()+ ")</span><br/>"
        container.innerHTML += "<span style='font-weight:700;font-size:14px;'>Guesses: </span><span style='font-size:14px;'>" +this.attempts+ "</span><br/>"
        if (this.is_custom) {
            container.innerHTML += "<span style='font-size:12px;font-style:italic;'>Custom word by <span style='font-weight:700'>"+this.custom_word_creator+"</span></span>"
        }
        if (this.paid_for_hint == "true" || this.paid_for_hint == true) {
            container.innerHTML += "<span style='font-style:italic;font-size:10px;'>They paid for a hint</span><br/>"
        }
        if (this.superhint_letters > 0) {
            if (this.superhint_letters == 1) { 
                container.innerHTML += "<span style='font-style:italic;font-size:10px;'>They used 1 superhint</span><br/>"
            } else {
                container.innerHTML += "<span style='font-style:italic;font-size:10px;'>They used "+this.superhint_letters+" superhints</span><br/>"
            }
            
        }
        
        if (this.is_custom) {
            container.innerHTML += "<img loading='lazy' src='"+this.img_data+"' style='border:3px solid gold;'>"
        } else {
            container.innerHTML += "<img loading='lazy' src='"+this.img_data+"'>"
        }
        
        container.innerHTML += "<br/>Comments<br/>"
        const commentContainer = document.createElement("div")
        for (let i=0;i<this.comments.length;i++) {
        
            let c = this.comments[i]
            commentContainer.innerHTML += "<span style='font-weight:700;'>" +c.split(': ')[0] + "</span>: "+c.split(': ')[1] + "<br/>"
        }
        const commentInput = document.createElement('input')
        commentInput.maxLength = "80"
        

        commentInput.addEventListener('keydown', function(e) {
            if (e.key == "Enter" && commentInput.value.length > 0) {
                comment(container.dataset.index, commentInput.value, container.dataset.gameid)
                commentContainer.innerHTML += "<span style='font-weight:700;'>" +localStorage.draw_user + "</span>: "+commentInput.value + "<br/>"
                commentInput.value = ""
            }
        })

        container.append(commentContainer,commentInput)

        document.querySelector('.history_area').insertBefore(container, document.querySelector('.history_area').firstChild)
    }
}

async function comment(index, comment, gameid) {
    const response = await fetch('/api/historyComment/'+gameid+"/"+index+"/"+localStorage.draw_user+"/"+comment)
}

