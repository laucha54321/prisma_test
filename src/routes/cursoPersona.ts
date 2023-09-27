import express from "express";
import { inscribirCurso } from "../prisma";

const router = express.Router();

router.post("/:id", async (req, res, next) => {
  const data = { id: req.params.id, email: req.body.email };
  inscribirCurso(data)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(data);
    });
});
router.get("", async (req, res, next) => {});
router.put("", async (req, res, next) => {});
router.delete("", async (req, res, next) => {});

export default router;
