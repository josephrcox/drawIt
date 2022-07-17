const mongoose = require('mongoose')

const historicalItems = new mongoose.Schema(
    {
        word:{type:String, required:true},
        points_awarded:{type:Number, required:true},
        img_data:{type:String, required:true},
        attempts:{type:Array, required:true, default:[]},
        comments:{type:Array, required:true, default:[]},
        drawn_by:{type:String, required:true},
        paid_for_hint:{type:Boolean, required:false}
    }, {timestamps:true}
)

const gameSchema = new mongoose.Schema(
    {
        latest:{type:Array, required:true, default:[]}, // ["water", 3, "https://www.google.com/image/water"],
        history:[historicalItems],
        player_ids:{type:Array, required:true},
        player_names:{type:Array, required:true},
        whos_turn:{type:Number, required:true, default:0},
        total_turns:{type:Number, required:true, default:0}
    },
    { collection: 'games', timestamps:true}
)

const User = mongoose.model('gameSchema', gameSchema)

module.exports = User
