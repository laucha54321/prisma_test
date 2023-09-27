import express from "express";
import { createCurso, getCursos, getCurso, putCurso } from "../prisma";

const router = express.Router();

router.post("", async (req, res, next) => {
  await createCurso(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.sendStatus(400);
    });
});

router.get("", async (req, res, next) => {
  await getCursos()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

router.get("/:id", async (req, res, next) => {
  await getCurso(req.params.id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.statusCode = 404;
        res.send("El id no existe");
      }
    })
    .catch((error) => {
      res.sendStatus(400);
    });
});

router.put("/:id", async (req, res, next) => {
  const params = { ID: req.params.id, data: req.body };
  putCurso(params)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.sendStatus(400);
    });
});

router.delete("", async (req, res, next) => {});

export default router;
