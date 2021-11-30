const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nom: String,
    numero: Number,
    profilPicture: String,
    IdRecto: String,
    IdVerso: String,   
})


mongoose.model("user", UserSchema)