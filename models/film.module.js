import mongoose from "mongoose"

const filmsSchema = new mongoose.Schema({
    title: String , // titulo
    director: String, // director
    producer: String, // productor  
},{
    timestamps: true
});

export default mongoose.model('Film', filmsSchema);