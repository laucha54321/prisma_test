import express from "express";
import { getNota, createNota, putNota, getNotas } from "../prisma";

const router = express.Router();

router.post("", async (req, res, next) => {
  await createNota(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.sendStatus(400);
    });
});
router.get("", async (req, res, next) => {
  await getNotas(req.body.ID)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.sendStatus(404);
    });
});
router.get("/:id", async (req, res, next) => {
  await getNota(req.params.id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});
router.put("/:id", async (req, res, next) => {
  const params = { ID: req.params.id, data: req.body };
  putNota(params)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.sendStatus(400);
    });
});
router.delete("", async (req, res, next) => {});

export default router;
