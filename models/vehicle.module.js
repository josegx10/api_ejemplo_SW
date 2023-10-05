import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema(
  {
    name: String, // nombre de la nave
    model: String, // modelo
    vehicle_class: String, // clase
    length: String, // tamaño
    passengers: String, // numero de pasajeros
    max_atmosphering_speed: String, // maxima velocidad
    cargo_capacity: String, //Capacidad de carga
    consumables: String, //tiempo maximo de combustible
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Vehicles", vehicleSchema);
