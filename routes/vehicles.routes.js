import router from "./router.js";
import { getVehicles, postVehicle} from "../controllers/vehicle.controller.js";

const routerVehicle = router;
routerVehicle.get("/vehicle", getVehicles);
routerVehicle.post("/vehicle/", postVehicle);

export default routerVehicle;