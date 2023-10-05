import router from "./router.js";
import { getFilms, postFilm } from "../controllers/film.controller.js";

const routerFilm = router;
routerFilm.get("/film", getFilms);
routerFilm.post("/film/", postFilm);

export default routerFilm;
