import Vehicle from "../models/vehicle.module.js"

export const getVehicles = async (req, res) => {
    const vehicles = await Vehicle.find();
    res.json(vehicles)
}

export const postVehicle = async (req, res) => {
    const vehicle = new Vehicle(req.body);
    await vehicle.save();
    return res.json(vehicle);
}