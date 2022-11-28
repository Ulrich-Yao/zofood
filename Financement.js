const mongoose = require('mongoose')

const FinancementSchema = new mongoose.Schema({
    id: Number,
    montant_total:Number,
    total_kg_livre: Number,
    reste_argent: Number
})


mongoose.model("financement", FinancementSchema)   