import People from "../models/people.models.js"
export const getPeoples = async (req, res) => {
    let perPage = 10
    let page = req.query.page || 1;
    const cont = await People.find().count();
    let peoples =  {
        count: cont,
        next: perPage * page < cont ?  `http://localhost:4000/api/people/?page=${+page + 1}` : null,
        previous: page > 1 ? `http://localhost:4000/api/people/?page=${page - 1}` : null,
        results: (await People.find().skip((perPage * page) - perPage).limit(perPage))
    }
    res.json(peoples);
}

export const getPeople = async (req, res) => {
    let peoples = await People.find().skip(req.params.id - 1).limit(1);
    res.json(peoples);
}