//import express from 'express'
const express = require ('express')
//import path from 'path'
const path = require ('path')
//import fs from 'fs'
const fs = require ('fs')
//import mongoose from 'mongoose';
const mongoose = require ('mongoose')
//import bodyParser from 'body-parser';
const bodyParser = require ('body-parser')
const fileUpload = require('express-fileupload')
//import cors from 'cors'
const cors = require ('cors')
//import News from './models/news.js'
const News = require ('./models/news.js')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join('./', 'public')));
app.use(fileUpload());

const CONNECTION_URL = "mongodb+srv://admin:admin@cluster0.wanlbx7.mongodb.net/mintportal?retryWrites=true&w=majority" 
const PORT = process.env.PORT || 5000;
async function main() {
  try {
    await mongoose.connect('mongodb://localhost:27017/mintport', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

main();



  app.post('/admin/news/add-news', async (req, res) => {
    try {
      let imageFile = req.files && req.files.file ? req.files.file.name : "";


    const { title, author, content, category, date } = req.body;

    const newNews = new News({
      title,
      author,
      content,
      category,
      date,
      imageFile

    });
 
    const savedNews = await newNews.save()
    res.json(savedNews);

//jknj  
    
    fs.mkdir('public/news_images/' + newNews._id, { recursive: true }, (err) => {
    if (err) {
    console.error('Error creating directory:', err);
    } else {
    console.log('Directory created successfully');
    }
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  });
    /*fs.mkdir('public/product_images/' + product._id + '/gallery', { recursive: true }, (err) => {
    if (err) {
    console.error('Error creating directory:', err);
    } else {
    console.log('Directory created successfully');
    }
    });

    fs.mkdir('public/product_images/' + product._id + '/gallery/thumbs', { recursive: true }, (err) => {
    if (err) {
    console.error('Error creating directory:', err);
    } else {
    console.log('Directory created successfully');
    }
    });

    if (imageFile !== "") {
    let productImage = req.files.image;
    let path = 'public/product_images/' + product._id + '/' + imageFile;

    productImage.mv(path, function (err) {
    if (err) {
      // Handle the error
      console.error('Error while moving the file:', err);
      // You can return an error response or take appropriate action here.
    } else {
      // File moved successfully
      console.log('File moved successfully.');
      // You can proceed with other actions here.
    }
    });
    }

    req.flash('success', 'Product added!');
    res.redirect('/admin/products');
   
 






//pl';l
   
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

*/




  app.get('/news', async (req, res) => {
    try {
      const news = await News.find(); // Fetch all news from the MongoDB collection
      res.json(news);
    } catch (error) {
      console.log('error')
      res.status(500).json({ error: 'Server error' });
    }
  });



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
