import router from "./router.js";
import { getPeoples, getPeople, postPeople, putPeople, deletePeople } from "../controllers/people.controller.js";

const routerPeople = router;
routerPeople.get("/people", getPeoples);
routerPeople.get("/people/:id", getPeople);
routerPeople.post("/people/", postPeople);
routerPeople.put("/people/:id", putPeople);
routerPeople.delete("/people/:id", deletePeople);

export default routerPeople;