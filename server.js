const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000;
const app = express();

const mongoose = require('mongoose')

require('./Employee')
require('./User')
require('./Restaurant')
require('./Menu')

const Employee = mongoose.model("employee")
const User = mongoose.model("user")
const Restaurant = mongoose.model("restaurant")
const Menu = mongoose.model("menu")



app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: false }))

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

app.get('/', (req, res) => {
   res.render('index')
  });

app.get('/getRestaurant',(req,res)=>{
    Restaurant.find({}).then(data=>{
        res.send(data)
    }).catch(err=>{
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
          console.log(data)
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
          console.log(data)
          res.redirect('/')
      }).catch(err => {
          console.log(err)
      })
})
 

  
app.listen(port);
console.log('Server started at http://localhost:' + port);







