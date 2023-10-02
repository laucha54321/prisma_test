import express from "express";
import { getNota, createNota, putNota, getNotas, esProfesor } from "../prisma";
import { Nota } from "../models/types";
const router = express.Router();

router.post("/:id", async (req, res, next) => {
  let id = res.getHeader("id") as string;
  console.log(req.params.id, id);
  console.log(await esProfesor(req.params.id, id));
  let aux: Nota = req.body;
  await createNota(aux)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.sendStatus(400);
    });
});

// router.get("", async (req, res, next) => {
//   await getNotas(req.body.ID)
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((error) => {
//       res.sendStatus(404);
//     });
// });

router.get("/", async (req, res, next) => {
  const aux = res.getHeaders();
  getNota(aux.id as string)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.send("No se encontraron notas");
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
