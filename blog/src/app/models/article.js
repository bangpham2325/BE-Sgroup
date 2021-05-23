const {model}=require('mongoose')

const ArtilceModel= model('article',{
    title:String,
    url:String,
    src:String,
    content:String
})

module.exports=ArtilceModel
