const mongoose = require('mongoose')

const MagasinSchema = new mongoose.Schema({
    nom_magasin: String,
    sac_de_cacao: Number,
    kg_de_cacao: Number,
    sac_cafe: Number,
    kg_cafe: Number,
})


mongoose.model("magasin", MagasinSchema)  