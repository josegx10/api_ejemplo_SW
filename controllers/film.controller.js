import Film from "../models/film.module.js";

export const getFilms = async (req, res) => {
  const films = await Film.find();
  res.json(films);
};

export const postFilm = async (req, res) => {
  const film = new Film(req.body);
  await film.save();
  return res.json(film);
};
