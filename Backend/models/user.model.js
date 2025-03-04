const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const userSchema=new mongoose.Schema({  fullname:{
    firstName:{
        type:String,
        required:true,minlength:[3,'First name must be atleast 3 characters']
    },
    lastName:{
        type:String,
        minlength:[3,'Last name must be atleast 3 characters']
     }
},
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
       
    },
    socketId:{
        type:String
    }
})
userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({
        _id:this._id},process.env.JWT_SECRET)
        return token;
    }
    userSchema.methods.comparePassword=async function(password){
        return await bcrypt.compare(password,this.password);
    }
    userSchema.statics.hashPassword=async function(password){
        return await bcrypt.hash(password,10);
        
    }
    const userModel=mongoose.model('user',userSchema);
    module.exports=userModel;