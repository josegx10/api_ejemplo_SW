import Specie from "../models/species.module.js"

export const getSpecies = async (req, res) => {
    const species = await Specie.find();
    res.json(species)
}

export const postSpecie = async (req, res) => {
    const specie = new Specie(req.body);
    await specie.save();
    return res.json(specie);
}