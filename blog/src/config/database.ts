
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import * as ArticleModel from '../app/models/article';
import * as UserModel from '../app/models/user';
export default async () =>{
    try {
        const DEFAULT_PWD = bcrypt.hashSync('123456', 10);
        await mongoose.connect('mongodb://localhost:27017/Article', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
         console.log('connect to mongodb')
         await UserModel.default.deleteMany();
         await UserModel.default.insertMany([
             {
                 id:12,
                 username: 'bangpham@gmail.com',
                 password: DEFAULT_PWD
             },
             {
                id:13,
                 username: 'bang@gmail.com',
                 password: DEFAULT_PWD
             }
         ]);
         await ArticleModel.default.deleteMany();
         await ArticleModel.default.insertMany([
            {
                id:1,
                title: "Jennie",
                slug: "jennie_xinh_gai",
                url: 'https://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/',
                src: 'https://vcdn-giaitri.vnecdn.net/2021/02/24/j-4353-1614154422.jpg',
                content:'Web applications become more and more powerful every year, but there is still room for desktop apps with full access to the hardware of your computer. Today you can create desktop apps using the already familiar HTML, JS and Node.js, then package it into an executable file and distribute it accordingly across Windows, OS X and Linux.'
            },
            {
                id:2,
                title: "Rose",
                slug: "Rose",
                url: 'https://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/',
                src:'https://kenh14cdn.com/thumb_w/660/2020/4/14/rose-1586871279171887574344.jpg',
                content:'Web applications become more and more powerful every year, but there is still room for desktop apps with full access to the hardware of your computer. Today you can create desktop apps using the already familiar HTML, JS and Node.js, then package it into an executable file and distribute it accordingly across Windows, OS X and Linux.'
            },
            {
                id:3,
                title: "Lisa",
                slug: "Lisa",
                url: 'https://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/',
                src: 'https://www.elleman.vn/wp-content/uploads/2020/03/26/174307/nu-ca-sy-lisa-blackpink-1.jpg',
                content:'Web applications become more and more powerful every year, but there is still room for desktop apps with full access to the hardware of your computer. Today you can create desktop apps using the already familiar HTML, JS and Node.js, then package it into an executable file and distribute it accordingly across Windows, OS X and Linux.'
            },
            {
                id:4,
                title: "Jisoo",
                slug: "Jisoo",
                url: 'https://tutorialzine.com/2016/02/quick-tip-easiest-way-to-make-responsive-headers/',
                src: 'https://cdn.tgdd.vn//GameApp/-1//Jisoo-800x1200.jpg',
                content:'Web applications become more and more powerful every year, but there is still room for desktop apps with full access to the hardware of your computer. Today you can create desktop apps using the already familiar HTML, JS and Node.js, then package it into an executable file and distribute it accordingly across Windows, OS X and Linux.'
            }  
            
    ])
      } catch (error) {
        console.log(error)
        process.exit(1);
      }

    
}