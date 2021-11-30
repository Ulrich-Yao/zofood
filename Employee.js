const mongoose = require('mongoose')

const EmpoyeeSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: String,
    caracteristique: String,
    categorie: String,
    vendeur: String,
    image: String,
    photo: String,
    profil: String,
})


mongoose.model("employee", EmpoyeeSchema)