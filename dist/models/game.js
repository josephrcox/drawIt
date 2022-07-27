const mongoose = require('mongoose')

const historicalItems = new mongoose.Schema(
    {
        word:{type:String, required:true},
        is_custom:{type:Boolean, required:true, default:false},
        custom_word_creator:{type:String, required:false},
        points_awarded:{type:Number, required:true},
        img_data:{type:String, required:true},
        attempts:{type:Array, required:true, default:[]},
        comments:{type:Array, required:true, default:[]},
        drawn_by:{type:String, required:true},
        paid_for_hint:{type:Boolean, required:false},
        superhint_letters:{type:Number, required:false},
        player_names:{type:Array, required:false, default:[]},
        gameid:{type:String, required:false, default:""},
        index:{type:Number, required:false, default:-1},
        watchers:{type:Array, required:false, default:[]},
    }, {timestamps:true}
)

const gameSchema = new mongoose.Schema(
    {
        latest:{type:Array, required:true, default:[]}, // ["water", 3, "https://www.google.com/image/water"],
        history:[historicalItems],
        player_ids:{type:Array, required:true},
        player_names:{type:Array, required:true},
        whos_turn:{type:Number, required:true, default:0},
        total_turns:{type:Number, required:true, default:0},
    },
    { collection: 'games', timestamps:true}
)

const User = mongoose.model('gameSchema', gameSchema)

module.exports = User
