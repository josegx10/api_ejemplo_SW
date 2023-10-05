import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";

import indexrouter from "./routes/router.js";
import routerPeople from "./routes/people.routes.js";
import routerFilm from "./routes/film.routes.js";
import routerPlanet from "./routes/planet.routes.js";
import routerSpecie from "./routes/species.routes.js";
import routerStarship from "./routes/starships.routes.js";
import routerVehicle from "./routes/vehicles.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/api/", indexrouter);
app.use("/api", routerPeople);
app.use("/api", routerFilm);
app.use("/api", routerSpecie);
app.use("/api", routerPlanet);
app.use("/api", routerStarship);
app.use("/api", routerVehicle);

export default app;
