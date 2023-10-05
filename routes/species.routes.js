import router from "./router.js";
import { getSpecies, postSpecie} from "../controllers/specie.controller.js";

const routerSpecie = router;
routerSpecie.get("/specie", getSpecies);
routerSpecie.post("/specie/", postSpecie);

export default routerSpecie;