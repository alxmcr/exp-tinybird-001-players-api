import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send({
    status: "Welcome to the Players API!",
  });
});

router.get("/api/v1/ping", (req, res) => {
  res.send({
    status: "pong!",
  });
});

export default router;