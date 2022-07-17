if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
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



app.get('/', (req,res) => {
    res.render('home.ejs')
})

app.get('/game/:id', (req,res) => {
  res.render('game.ejs')
})

app.get('/history/:id', (req,res) => {
  res.render('history.ejs')
})

app.get('/api/award/:user/:pts', async(req,res) => {
  let u = await User.findOne({name:req.params.user})
  u.points = parseInt(u.points) + parseInt(req.params.pts)
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
  res.json(g)
})

app.get('/api/game/:game/finishguessing/:attempts', async(req,res) => {
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
  g.history.push({
    word:g.latest[0],
    points_awarded:g.latest[1],
    img_data:g.latest[2],
    attempts:attempts,
    drawn_by:drawn_by
  })
  g.latest = []
  await g.save()
  g = await Game.findById(req.params.game)
  if (g.latest != []) {
    console.log("scraping latest failed")
    g.latest = []
    await g.save()
  }
  res.json(g)
})

app.post('/api/game/:game/updatelatest/', async(req,res) => {
  let g = await Game.findById(req.params.game)
  if (g == null) {
    res.redirect('/')
  } else {
    g.latest = req.body.data
  
    await g.save()
    res.json({data:g})
  }

})

app.get('/api/historyComment/:game/:index/:user/:comment', async(req,res) => {
  let g = await Game.findById(req.params.game)
  let index = parseInt(req.params.index)
  let user = req.params.user
  let comment = req.params.comment

  g.history[index].comments.push(user + ": "+comment)
  await g.save()
  res.json({data:g})
})

app.get('/api/get/user/:user/', async(req,res) => {
  let u = await User.findOne({name:req.params.user.toLowerCase()})
  res.json({data:u})
})

app.get('/api/get/game/:game/', async(req,res) => {
    let g = await Game.findById(req.params.game)
    if (g == null) {
      let u = User.find({}, async function(err,docs) {
        for (let i=0;i<docs.length;i++) {
          if (err || docs[i] == null) {
            console.log(err, docs[i])
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

app.get('/api/game/:id/delete', async(req,res) => {
    let g = await Game.findByIdAndDelete(req.params.id)
    let g2 = await Game.findByIdAndDelete(req.params.id)
    res.json({status:'ok', game:g2})
})  

app.get("*", (req,res) => {
    res.redirect('/')
})

const testingAccountName = "test"

async function cleanUp() {
  User.find({}, async function(err,u) {
    for (let i=0;i<u.length;i++) {
      if (u[i].name.includes(testingAccountName)) {
        for (let g=0;g<u[i].current_game_ids.length;g++) {
          let newarray = []
          await Game.findByIdAndDelete(u[i].current_game_ids[g])
          console.log("Game deleted: "+u[i].current_game_ids[g])
        }
        await User.findByIdAndDelete(u[i].id)
      } else {
        let newarray = []
        for (let g=0;g<u[i].current_game_ids.length;g++) {
          let g = await Game.findById(u[i].current_game_ids[i])
          if (g != null) {
            let p1 = await User.findById(g.player_ids[0])
            let p2 = await User.findById(g.player_ids[1])
            if (g != null && p1 != null && p2 != null && !p1.name.includes(testingAccountName) && !p2.name.includes(testingAccountName)) {
              newarray.push(g.id)
            }
          } else {
            await Game.findByIdAndDelete(u[i].current_game_ids[i])
            console.log("Game deleted: "+u[i].current_game_ids[g])
          }


        }
        u[i].current_game_ids = newarray
      }
    }
  })
  let g = await Game.find()
  for (let i=0;i<g.length;i++) {
    let cg = g[i]
    let p1 = await User.findById(cg.player_ids[0])
    let p2 = await User.findById(cg.player_ids[1])

    if (p1 == null || p2 == null) {
      await Game.findByIdAndDelete(cg.id)
      console.log("Game deleted: "+cg.id)
    }
  }
  
}

cleanUp() 

 
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Listening on port', port);
});
