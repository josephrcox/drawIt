const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema(
    {
        gameid:{type:String, required:true},
        index:{type:Number, required:true},
        type:{type:String, required:true},
        initiator:{type:String, required:true},
        word:{type:String, required:false},
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
