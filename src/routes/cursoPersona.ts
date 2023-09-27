import express from "express";
import { inscribirCurso } from "../prisma";

const router = express.Router();

router.post("/:id", async (req, res, next) => {
  await inscribirCurso(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.sendStatus(400);
    });
});
router.get("", async (req, res, next) => {});
router.put("", async (req, res, next) => {});
router.delete("", async (req, res, next) => {});

export default router;
