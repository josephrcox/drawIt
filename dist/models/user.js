const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema(
    {
        gameid:{type:String, required:false},
        index:{type:Number, required:true}, // for gifts, used as amount
        type:{type:String, required:true},
        initiator:{type:String, required:true},
        word:{type:String, required:false},
        text:{type:String, required:false, default:""},
    },{timestamps:true}
)

const userSchema = new mongoose.Schema(
    {
        name:{type:String, required:true},
        points:{type:Number, required:true, default:0},
        current_game_ids:{type:Array, required:true, default:[]},
        notifications:[notificationSchema],
    },
    { collection: 'users', timestamps:true}
)

const User = mongoose.model('userSchema', userSchema)

module.exports = User
