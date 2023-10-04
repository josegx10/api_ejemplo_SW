import mongoose from "mongoose"

const planetSchema = new mongoose.Schema({
    name: String , // nombre del planeta
    diameter: String, //diametro
    rotation_period:String, // periodo de rotacio
    orbital_period: String, // periodo orbital
    gravity: String, // gravedad
    population: String, // poblacion
    climate: String, // clima
    terrain: String, // terrno
    surface_water: String, // porcentaje de agua
    
},{
    timestamps: true
});

export default mongoose.model('Planet', planetSchema);