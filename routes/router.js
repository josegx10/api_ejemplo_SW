import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  res.send("Api basada en la api de SWAPI");
});

export default router;
