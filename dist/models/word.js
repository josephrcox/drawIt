const mongoose = require('mongoose')

const wordSchema = new mongoose.Schema(
    {
        word:{type:String, required:true},
        creator:{type:String, required:true},
        times_shown:{type:Number, required:true, default:0},
        times_used:{type:Number, required:true, default:0},
        approved_by_admin:{type:Boolean, required:true, default:false},
    },
    { collection: 'customwords', timestamps:true}
)

const User = mongoose.model('wordSchema', wordSchema)

module.exports = User
