import router from "./router.js";
import { getPeoples, getPeople } from "../controllers/people.controller.js";

const routerPeople = router;
routerPeople.get("/people", getPeoples);
routerPeople.get("/people/", getPeoples);
routerPeople.get("/people/:id", getPeople);


export default routerPeople;