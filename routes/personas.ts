import express from "express";
import { hashPassword } from "../hashing";
import { createPersona } from "../prisma";
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

export default router;
