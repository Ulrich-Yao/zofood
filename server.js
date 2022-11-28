const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override')
const bodyParser = require('body-parser') ;
const nodemailer = require('nodemailer');

const port = process.env.PORT || 3000;
const app = express();

const mongoose = require('mongoose')

require('./Employee')
require('./User')
require('./Restaurant')
require('./Menu')
require('./Magasin')
require('./Financement')
require('./Delegue')
require('./Vente')

const Employee = mongoose.model("employee")
const User = mongoose.model("user")
const Restaurant = mongoose.model("restaurant")
const Menu = mongoose.model("menu")

const Magasin = mongoose.model("magasin")
const Financement = mongoose.model("financement")
const Delegue = mongoose.model("delegue")
const Vente = mongoose.model("vente")




app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(cors());

mongoose.connect("mongodb+srv://ulrich:chqIGYjaPKNeSXta@cluster0.3egif.mongodb.net/ZoFood?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(
    () => { console.log('ZOFOOD CONNECTEE') },
    err => { console.log(err) }
);

app.set('view engine', 'ejs');
app.use(express.static("public"));


app.get('/',(req,res)=>{
  res.render('seccure')
})

app.post('/admin',(req,res)=>{
  let password = req.body.password
  let username = req.body.username
  if(password === '7415369' && username === 'ulrich2021'){
    res.render('index')
  }else{
    res.json({
      acces: 'refusé'
    })
  }
})

app.get('/getRestaurant',(req,res)=>{
    Restaurant.find({}).then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })    
}) 

/// GET FONCTION FOR SOCODD ///

app.get('/magasin', (req,res)=>{
    Magasin.find({}).then(data => {
      res.send(data)
    }).catch(err => {
      console.log(err)
    })
})



app.get('/financement', (req, res) =>{
  Financement.find({}).then(data =>{
    res.send(data)
  }).catch(err =>{
    console.log(err)
  })
})

app.get('/delegue', (req,res) => {
  Delegue.find({}).then( data => {
    res.send(data)
  }).catch(err => {
    console.log(err)
  })
})

app.get('/vente', (req,res) => {
  Vente.find({}).then(data =>{
    res.send(data)
  }).catch(err => {
    console.log(err)
  })
})


// GET MENU 
app.get('/getMenu',(req,res)=>{
    Menu.find({}).then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })    
})

// ADD RESTAURANT 

app.post('/addRestaurant', (req, res) => {
  const restaurant = new Restaurant({
    RestaurantName: req.body.RestaurantName,
    RestaurantNumber: req.body.phoneNumber,
    RestaurantPicture: req.body.RestaurantPicture,
    UserLocal: req.body.UserLocal,
    RestaurantSpecialite: req.body.RestaurantSpecialite,
  })
  restaurant.save()
      .then(data => {
          res.send(data)
      }).catch(err => {
          console.log(err)
      })
})

// ADD MENU 

app.post('/addMenu', (req, res) => {
  const menu = new Menu({
   Name: req.body.name,
   Picture: req.body.picture,
   Price: req.body.price,
   Accompagnement: req.body.accompagnement,
   Description : req.body.description,
   Restaurant: req.body.restaurant,
  })
  menu.save()
      .then(data => {
        res.send(data)
      }).catch(err => {
          console.log(err)
      })
})

// NODEMAILER FOR POST COMMANDE // 

var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", 
      port: 587,
      secure: false,
    auth: {
      user: "kleimy2021@gmail.com",
      pass: "KLeiMY2@2I" 
    }
  });

 
  // verifying the connection configuration
    transporter.verify(function(error, success) {
        if (error) {
        console.log(error);
        } else {
        console.log("Server is ready to take our messages!");
        }
    });
 
    app.post('/access', (req, res, next) => {
        var email = 'kleimy2021@gmail.com'
        var message = req.body.message
        console.log(message)
        var content = `email: ${email} \n message: ${message} `
      
        var mail = {
          from: 'kleimy2021@gmail.com', 
          to: 'leresponsable3@gmail.com', 
          message: 'text d envoi',
          text: content
        }
      
        transporter.sendMail(mail, (err, data) => {
          if (err) {
            res.json({
              status: 'fail'
            })
          } else {
            res.json({
             status: 'success'
            })
          }
        })
      })
      

  
app.listen(port);
console.log('Server started at http://localhost:' + port);







