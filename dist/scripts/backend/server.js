let STRIPE_PUBLIC_KEY = "pk_live_51LOj8hDE6ekUA9vc0NNVkwl2gAZGelNxTUMCvfWLhOosQyHCzOE2tzmeehhx1HeBy8rZVDjk3p01C0OnNvqeZLQG006BZGv59P"
let stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
    STRIPE_PUBLIC_KEY = "pk_test_51LOj8hDE6ekUA9vcgqqmYVw3vdqyaFjZdiki0zXoyWjBfC6JnPIBQMY526dUZ5f5Tb4sIjxAC9IBTmDiGBH3I9CN00RIozUEIN"
    stripe = require('stripe')(process.env.STRIPE_TESTSEC_KEY)
}


const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const { response } = require('express');
const path = require('path');
const fs = require('fs');

app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, '/views'))
app.set('layout', 'layouts/layout')

app.use(express.static(path.join(__dirname, '../../../')));
app.set('views',path.join(__dirname, '../../', '/views'))

app.use(expressLayouts)
const bodyParser = require('body-parser')
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(bodyParser.text({ limit: '200mb' }));
app.use(express.json())

const mongoose = require('mongoose')
mongoose.connect(process.env.DATEBASE_URL, {
	
})
const connection = mongoose.connection;

connection.once("open", function(res) {
	console.log("Connected to Mongoose!")
	connectedToDB = true
}); 

const User = require('../../models/user')
const Game = require('../../models/game')
const Word = require('../../models/word')


async function createNotification(username,type,gameid,index, initiator) {
  let g = await Game.findById(gameid)
  User.find({name:username}, async function(err,docs) {
    let word = null
    if (g != null ){
      word = g.history[index].word
    }
    if (docs.length > 0) {
      let n = {
        type: type,
        gameid: gameid,
        index: index,
        initiator: initiator,
        word: word, 
      }
      docs[0].notifications.push(n)
      await docs[0].save()
    }
    if (g != null) {
      for (let i = 0; i < g.history[index].watchers.length; i++) {
        if (g.history[index].watchers[i] != initiator) {
          User.find({name:g.history[index].watchers[i]}, async function(err,docs) {
            let word = null
            if (g != null ){
              word = g.history[index].word
            }
            
            if (docs.length > 0) {
              let n = {
                type: type,
                gameid: gameid,
                index: index,
                initiator: initiator,
                word: word, 
              }
              docs[0].notifications.push(n)
              await docs[0].save()
            }
          })
    
        }
        }
      }
    })
}

const testingAccountName = ["test", "test2", "undefined", "Chase"]

async function cleanUp() {
  let x = 0
  Game.find({}, async function(err,docs) {
    docs.forEach(async function(doc) {
      if (doc.active_game == null) {
        doc.active_game = true
        await doc.save()
        x++
      }

    })
  })
  console.log("Cleaned up " + x )
}

cleanUp()

async function correctHistory() {
  Game.find({}, async function(err,docs) {
    for (let i=0;i<docs.length;i++) {
      for (let j=0;j<docs[i].history.length;j++) {
          if (docs[i].history[j].player_names == [] ) { 
            docs[i].history[j].player_names = []
            docs[i].history[j].player_names.push(docs[i].player_names[0])
            docs[i].history[j].player_names.push(docs[i].player_names[1])

          }
          docs[i].history[j].index = j

          docs[i].history[j].gameid = docs[i].id
        await docs[i].save()
      }
    }
    
  })
  // console.log("History corrected")
}

function uniq_fast(a) {
  var seen = {};
  var out = [];
  var len = a.length;
  var j = 0;
  for(var i = 0; i < len; i++) {
       var item = a[i];
       if(seen[item] !== 1) {
             seen[item] = 1;
             out[j++] = item;
       }
  }
  return out;
}

// CLEANUP SCRIPS, ONLY RUN WHEN ABSOLUTELY NECESSARY

// cleanUp() 
// correctHistory()

app.post('/api/post/addword', async function(req,res) {
  let u = await User.findOne({name:req.body.creator})
  if (u.points >= 60) {
    if (req.body.word != null && req.body.word != "" && req.body.word.length >= 3 && req.body.word.length < 18) {
      let existing = await Word.findOne({word:req.body.word})
      if (existing == null) {
        let c = await Word.create({
          word: req.body.word,
          creator: req.body.creator,
          times_shown:0,
          times_used:0,
          approved_by_admin:false
        })
        console.log(c)
        u.points = parseInt(u.points) - 60
        await u.save()
        res.json({status: "ok", data:c})
      } else {
        res.json({status:'error', error:"This word already exists"})
      }
      
    } else {
      res.json({status:'error', error:"Invalid word"})
    }
  } else {
    res.json({status:'error', error:"Not enough coins"})
  }
  

})

app.get('/api/get/randomword', async function(req,res) {
  let w = await Word.find({})
  let r = Math.floor(Math.random() * w.length)
  w[r].times_shown = w[r].times_shown + 1
  await w[r].save()
  res.json({status:'ok', data:w[r]})
})

app.get('/api/get/randomwor')

app.post('/payment/payment', function(req, res){
  stripe.customers.create({
      email: req.body.stripeEmail,
      source: req.body.stripeToken,
  })
  .then((customer) => {

      return stripe.charges.create({
          amount: req.body.amount, 
          description: req.body.description,
          currency: 'USD',
          customer: customer.id
      });
  })
  .then((charge) => {
      res.send('Success! Contact Joey for your coins!')
  })
  .catch((err) => {
      res.json({status:'error', error:err})
  });
})

app.get('/payment', (req,res) => {
  res.render('payment.ejs', {
    key: STRIPE_PUBLIC_KEY
  })
})

app.get('/', (req,res) => {
    res.render('home.ejs')
})

app.get('/game/:id', (req,res) => {
  res.render('game.ejs')
})

app.get('/history/:id', (req,res) => {
  res.render('history.ejs')
})

app.get('/history/:id/:index', (req,res) => {
  res.render('history.ejs')
})

app.get('/feed/', (req,res) => {
  res.render('history.ejs')
})

app.get('/notifications', (req,res) => {
  res.render('notifications.ejs')
})

app.get('/store/', (req,res) => {
  res.render('store.ejs', {
    key: STRIPE_PUBLIC_KEY
  })
})

app.get('/api/get/notifications/:user', async(req,res) => {
  let u = await User.findOne({name:req.params.user})
  res.json({data:u.notifications})
})

app.get('/api/notification/delete/:user/:id', async(req,res) => {
  let u = await User.findOne({name:req.params.user})
  let index = u.notifications.indexOf(req.params.id)
  u.notifications.splice(index,1)
  console.log(req.params.user, req.params.id, index)
  await u.save()
  res.json({data:u.notifications})
})

app.get('/api/notifications/clearAll/:user', async(req,res) => {
  let u = await User.findOne({name:req.params.user})
  u.notifications = []
  await u.save()
  res.json({status:"ok"})
})

app.get('/api/award/:user/:pts/:gift/:giftgiver', async(req,res) => {
  let u = await User.findOne({name:req.params.user})
  u.points = parseInt(u.points) + parseInt(req.params.pts)
  if (req.params.gift == "true") {
    createNotification(u.name, "gifted", null, req.params.pts, req.params.giftgiver)
  }
  await u.save()


  res.json(u)
})

app.get('/api/get/playerlist', async(req,res) => {
  let users = await User.find({})
  let list = []
  for (let i=0;i<users.length;i++) {
    list.push([users[i].name,users[i].points])
  }
  res.json({data:list})
})

app.get('/api/awardall/:game/:pts', async(req,res) => {
  let g = await Game.findById(req.params.game)
  for (let i=0;i<g.player_names.length;i++) {
    let u = await User.findOne({name:g.player_names[i]})
    u.points = parseInt(u.points) + parseInt(req.params.pts)
    await u.save()
  }
  res.json({status:'ok'})
})

app.get('/createuser/:user/', async(req,res) => {
    
    let u = await User.create({
      name:req.params.user.toLowerCase()
    }) 
    res.json({u})
})

app.get('/creategame/:player1/:player2', async(req,res) => {
  let p1 = await User.findOne({name:req.params.player1})
  let p2 = await User.findOne({name:req.params.player2})

  if (p2 == null) {
    p2 = await User.create({
      name:req.params.player2
    }) 
  }

  let g = await Game.create({
    player_ids:[
      p1.id, p2.id
    ],
    player_names:[
      req.params.player1.toLowerCase(),
      req.params.player2.toLowerCase()
    ]
  }) 
  p1.current_game_ids.push(g.id)
  await p1.save()
  p2.current_game_ids.push(g.id)
  await p2.save()

  res.json({g})
})

app.get('/api/game/:game/changeturn', async(req,res) => {
  let g = await Game.findById(req.params.game)
  if (g == null) {
    res.redirect('/')
  }
  g.total_turns = parseInt(g.total_turns) + 1
  switch (g.whos_turn) {
    case 0:
      g.whos_turn = 1
      break;
    case 1:
      g.whos_turn = 0
      break;
  }
  await g.save()
console.log("end of change")
  res.json(g)
})

app.get('/api/game/:game/finishguessing/:attempts/:paidforhint/:superhint/', async(req,res) => {
  let g = await Game.findById(req.params.game)
  if (g.history == null) {
    g.history = []
  }
  let attempts = req.params.attempts.split(',')
  let drawn_by = ""
  switch(g.whos_turn) {
    case 0: 
      drawn_by = g.player_names[1]
      break;
    case 1:
      drawn_by = g.player_names[0]
      break;
    
  }
  let custom_word_creator = ""
console.log(g.latest[3])
  if (g.latest[3] == "true") {
    let w = await Word.findOne({word:g.latest[0]})
    custom_word_creator = w.creator
  }
  g.history.push({
    word:g.latest[0],
    is_custom:g.latest[3],
    custom_word_creator:custom_word_creator,
    points_awarded:g.latest[1],
    img_data:g.latest[2],
    attempts:attempts,
    drawn_by:drawn_by,
    paid_for_hint:req.params.paidforhint,
    superhint_letters:parseInt(req.params.superhint),
    hint_used:req.params.hint,
    gameid:g.id,
    player_names:g.player_names,
    index:g.history.length
  })
  g.latest = []
  await g.save()
  g = await Game.findById(req.params.game)
  if (g.latest != []) {
    // console.log("scraping latest failed")
    g.latest = []
    await g.save()
  }
console.log("end of finish")
  res.json(g)
})

app.post('/api/game/:game/updatelatest/', async(req,res) => {
  let g = await Game.findById(req.params.game)
  if (g == null) {
    res.redirect('/')
  } else {
    g.latest = req.body.data

    await g.save()

    Word.findOne({word:g.latest[0]}, async function(err, docs) {
      if (docs != null && err == null) {
        docs.times_used = parseInt(docs.times_used) + 1
        await docs.save()
      }
      
    })

    res.json({data:g})
  }

})

app.get('/api/historyComment/:game/:index/:user/:comment', async(req,res) => {
  let g = await Game.findById(req.params.game)
  let index = parseInt(req.params.index)
  let user = req.params.user
  let comment = req.params.comment
  let usertobenotified = ""

  if (g.player_names[0] == user) {
    usertobenotified = g.player_names[1]
  } else {
    usertobenotified = g.player_names[0]
  }

  g.history[index].comments.push(user + ": "+comment)
  g.history[index].watchers.push(req.params.user)
  g.history[index].watchers = uniq_fast(g.history[index].watchers)
  createNotification(usertobenotified, "commented", g.id, parseInt(req.params.index), user)
  await g.save()
  res.json({data:g})
})

app.get('/api/get/user/:user/', async(req,res) => {
  let u = await User.findOne({name:req.params.user.toLowerCase()})
  res.json({data:u})
})

app.get('/api/get/game/:game/', async(req,res) => {
    let g = await Game.findOne({_id:req.params.game, active_game:true})
    if (g == null) {
      let u = User.find({}, async function(err,docs) {
        for (let i=0;i<docs.length;i++) {
          if (err || docs[i] == null) {
            // null
          } else {
            var index = docs[i].current_game_ids.indexOf(req.params.game);
            if (index !== -1) {
              docs[i].current_game_ids.splice(index, 1);
            }
            await docs[i].save()
          }
        }
        

      })
    }
    res.json({data:g})

})

app.get('/api/get/feed/', async(req,res) => {
  Game.find({}, async function(err,docs) {
    let historyItems = []
    for (let i=0;i<docs.length;i++) {
      if (err || docs[i] == null) {
        // console.log(err, docs[i])
      } else {
        if (docs[i].history != null) {
          for (let j=0;j<docs[i].history.length;j++) {
            historyItems.push(docs[i].history[j])
            
          }
        }
      }
    }
    historyItems.sort((a, b) => a.createdAt - b.createdAt)

    res.json({data:historyItems})
  })
})

app.get('/api/game/:id/delete', async(req,res) => {
    Game.findOne({id:req.params.id}, async(err,docs) => {
      if (docs != null && err == null) {
        docs.active_game = false
        await docs.save()
        res.json({status:'ok', game:docs})
      } else {
        res.json({status:'error'})
      }
    })
})  

app.get("*", (req,res) => {
    res.redirect('/')
})

 
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Listening on port', port);
});
