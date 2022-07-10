const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name:{type:String, required:true},
        points:{type:Number, required:true, default:0},
        current_game_ids:{type:Array, required:true, default:[]},
    },
    { collection: 'users', timestamps:true}
)

const User = mongoose.model('userSchema', userSchema)

module.exports = User
