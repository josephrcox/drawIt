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
      req.params.player1,
      req.params.player2
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

app.get('/api/game/:game/finishguessing', async(req,res) => {
  let g = await Game.findById(req.params.game)
  g.latest = []
  await g.save()
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

app.get('/api/get/user/:user/', async(req,res) => {
  let u = await User.findOne({name:req.params.user.toLowerCase()})
  res.json({data:u})
})

app.get('/api/get/game/:game/', async(req,res) => {
    let g = await Game.findById(req.params.game)
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

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Listening on port', port);
});