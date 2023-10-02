import express from "express";
import { hashPassword } from "../hashing";
import { createPersona, getPersonas, getPersona, putPersona } from "../prisma";

const router = express.Router();
type persona = {
  nombre: string;
  apellido: string;
  hash_contrasena: string;
  email: string;
  fecha_nacimiento: Date;
};

router.post("", async (req, res, next) => {
  try {
    let aux = JSON.parse(req.body) as persona;
    aux.hash_contrasena = await hashPassword(req.body.hash_contrasena);
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
        res.statusCode = 404;
        res.send("No se encontro usuario");
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
