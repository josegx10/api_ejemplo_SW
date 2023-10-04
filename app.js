import  express from "express";
import morgan from "morgan";
import cors from "cors"

import indexrouter from "./routes/router.js";
import routerPeople from "./routes/people.routes.js"

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use("/api/", indexrouter);
app.use("/api", routerPeople)

export default app;