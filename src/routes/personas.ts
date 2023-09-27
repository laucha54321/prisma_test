import express from "express";
import { hashPassword } from "../hashing";
import { createPersona, getPersonas, getPersona, putPersona } from "../prisma";
import { Persona } from "../models/interfaces";

const router = express.Router();

router.post("", async (req, res, next) => {
  try {
    let aux: Persona = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      hash_contrasena: await hashPassword(req.body.hash_contrasena),
      email: req.body.email,
      fecha_nacimiento: new Date(req.body.fecha_nacimiento),
    };

    const aux1 = await createPersona(aux)
      .then((response) => {
        res.send(response);
      })
      .catch((error) => {
        res.status(400);
      });
  } catch (error) {
    console.log(error);
  }
});

router.get("", async (req, res, next) => {
  getPersonas()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

router.get("/:id", async (req, res, next) => {
  getPersona(req.params.id)
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
  putPersona(params)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.sendStatus(400);
    });
});

export default router;
