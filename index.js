require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose' );
const routes = require('./routes/routes');
const app = express();
const mongoString = process.env.DATABASE_URL
app.use(express.json());
app.use('/api', routes)

mongoose.connect(mongoString);
//'mongodb+srv://carlaheyde:KpdAfrrltjBWdddm@cluster0.e1fh1gi.mongodb.net/apiMongoose'
const database = mongoose.connection ;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.listen(3000, () => {
    console.log(`Server Started at ${ 3000}`)
    })
// import mongoose from "mongoose";
// mongoose.connect("mongodb://localhost:27017/databaseName");

// // Create a new blog post and insert into database
// const article = await Blog.create({
// title: 'Awesome Post!',
// slug: 'awesome-post',
// published: true,
// content: 'This is the best post ever',
// tags: ['featured', 'announcement'],
// });
// console.log(article);

// article.title = "The Most Awesomest Post!!";
// await article.save();
// console.log(article);