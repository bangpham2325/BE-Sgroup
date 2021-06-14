import {model, Schema } from 'mongoose';
const ArticleSchema = new Schema({
    title:String,
    url:String,
    src:String,
    content:String
});

const ArticleModel = model('articles', ArticleSchema);

export default ArticleModel;
