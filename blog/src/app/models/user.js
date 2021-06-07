const {model}=require('mongoose')

const UserModel= model('user',{
    username: String,
    password: String,
})
module.exports=UserModel;
