const mongoose = require('mongoose')

const MenuSchema = new mongoose.Schema({

   Name: String,
   Picture: String,
   Price: Number,
   Accompagnement: String,
   Description: String,
   Restaurant: String,
   
})


mongoose.model("menu", MenuSchema)