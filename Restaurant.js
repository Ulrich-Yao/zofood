const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
    
    RestaurantName: String,
    RestaurantNumber:String,
    RestaurantPicture: String,
    UserLocal: String,
    RestaurantSpecialite:String,
   
})


mongoose.model("restaurant", RestaurantSchema)