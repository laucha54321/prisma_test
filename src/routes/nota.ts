import express from "express";
import { getNota, createNota, putNota, getNotas } from "../prisma";

const router = express.Router();

type nota = {
  descripcion: string;
  nota: number;
  ID_Persona: string;
  ID_Curso: string;
};

router.post("", async (req, res, next) => {
  await createNota(req.body)
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
  const aux = JSON.parse(JSON.stringify(res.getHeaders()));
  getNota(aux.id)
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
