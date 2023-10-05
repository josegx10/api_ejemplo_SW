import router from "./router.js";
import { getStarships, postStarship} from "../controllers/starship.controller.js";

const routerStarship = router;
routerStarship.get("/starship", getStarships);
routerStarship.post("/starship/", postStarship);

export default routerStarship;