import router from "./router.js";
import { getPlanets, postPlanet } from "../controllers/planet.controller.js";

const routerPlanet = router;
routerPlanet.get("/planet", getPlanets);
routerPlanet.post("/planet/", postPlanet);

export default routerPlanet;
