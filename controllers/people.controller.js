import People from "../models/people.models.js";
export const getPeoples = async (req, res) => {
  let perPage = 10;
  let page = req.query.page || 1;
  if (req.query.search) {
    const cont = await People.find({
      name: new RegExp(req.query.search, "i"),
    }).count();
    let peoples = {
      count: cont,
      next:
        perPage * page < cont
          ? `http://localhost:4000/api/people/?search=${
              req.query.search
            }&page=${+page + 1}`
          : null,
      previous:
        page > 1
          ? `http://localhost:4000/api/people/?search=${
              req.query.search
            }&page=${page - 1}`
          : null,
      results: await People.find({ name: new RegExp(req.query.search, "i") })
        .skip(perPage * page - perPage)
        .limit(perPage),
    };
    res.json(peoples);
  } else {
    const cont = await People.find().count();
    let peoples = {
      count: cont,
      next:
        perPage * page < cont
          ? `http://localhost:4000/api/people/?page=${+page + 1}`
          : null,
      previous:
        page > 1 ? `http://localhost:4000/api/people/?page=${page - 1}` : null,
      results: await People.find()
        .skip(perPage * page - perPage)
        .limit(perPage),
    };
    res.json(peoples);
  }
};

export const getPeople = async (req, res) => {
  let peoples = await People.find()
    .skip(req.params.id - 1)
    .limit(1);
  res.json(peoples);
};

export const postPeople = async (req, res) => {
  console.log(req.body);
  const {
    name,
    heigth,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
    species,
    films,
    vehicles,
    starships,
  } = req.body;
  const people = new People({
    name,
    heigth,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
    species,
    films,
    vehicles,
    starships,
  });
  await people.save();
  return res.json({ message: "People registrado", resultado: people });
};

export const putPeople = async (req, res) => {
  const updatePeople = await People.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.json(updatePeople);
};

export const deletePeople = async (req, res) => {
  const deletedTask = await People.findByIdAndRemove(req.params.id);
  if (!deletedTask)
    return res.status(404).json({ message: "People not found" });
  return res.sendStatus(204).json({ message: "People Elimited" });
};
