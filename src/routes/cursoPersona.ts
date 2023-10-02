import express from "express";
import { inscribirCurso } from "../prisma";
import { cursoPersona } from "@prisma/client";
const router = express.Router();

router.post("/:id", async (req, res, next) => {
  const aux = res.getHeaders();
  const data: cursoPersona = {
    ID_Persona: aux.id as string,
    ID_Curso: req.params.id,
    categoria: req.body.categoria,
  };
  console.log(data);
  inscribirCurso(data)
    .then((aux) => {
      res.send(aux);
    })
    .catch((error) => {
      res.send(data);
    });
});
router.get("", async (req, res, next) => {});
router.put("", async (req, res, next) => {});
router.delete("", async (req, res, next) => {});

export default router;
