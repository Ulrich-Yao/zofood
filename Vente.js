const mongoose = require('mongoose')

const VenteSchema = new mongoose.Schema({

    produit: String,
    nombre_de_sac: Number,
    nombre_de_kg: Number,
    usine: String,
    prix_kg: Number,
    montant_total: Number,
    date: Date
})


mongoose.model("vente", VenteSchema)   