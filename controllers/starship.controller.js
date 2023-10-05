import Starship from "../models/starship.module.js";

export const getStarships = async (req, res) => {
  const starships = await Starship.find();
  res.json(starships);
};

export const postStarship = async (req, res) => {
  const starship = new Starship(req.body);
  await starship.save();
  return res.json(starship);
};
