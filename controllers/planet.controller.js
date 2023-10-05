import Planet from "../models/planet.module.js";

export const getPlanets = async (req, res) => {
  const planets = await Planet.find();
  res.json(planets);
};

export const postPlanet = async (req, res) => {
  const planet = new Planet(req.body);
  await planet.save();
  return res.json(planet);
};
