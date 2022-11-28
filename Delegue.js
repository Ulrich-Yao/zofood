const mongoose = require('mongoose')

const DelegueSchema = new mongoose.Schema({

    nom_et_prenom: String,
    contact: String,
    section: String,
    photo: String
})


mongoose.model("delegue", DelegueSchema)   