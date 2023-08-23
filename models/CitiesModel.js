import mongoose from 'mongoose'
const {Schema,model } = mongoose

let collection = 'cities'

let schema = new Schema({
    name: { type:String, required: true },
    Country: {type:String, required:true},
    population: { type:Number, required: true },
    image: { type:String, required: false },
    currency: { type:String, required: false }
},
{
    timestamps: true
})

let Citie = model(collection, schema)

export default Citie

