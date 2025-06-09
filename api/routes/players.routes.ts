import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send({
    players: [
      {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
      },
      {
        id: 2,
        name: "Jane Doe",
        email: "jane.doe@example.com",
      },
    ],
  });
});

export default router;
