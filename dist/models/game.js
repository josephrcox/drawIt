const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema(
    {
        latest:{type:Array, required:true, default:[]}, // ["water", 3, "https://www.google.com/image/water"]
        player_ids:{type:Array, required:true},
        player_names:{type:Array, required:true},
        whos_turn:{type:Number, required:true, default:0},
        total_turns:{type:Number, required:true, default:0}
    },
    { collection: 'games', timestamps:true}
)

const User = mongoose.model('gameSchema', gameSchema)

module.exports = User
