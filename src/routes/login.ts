import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {} from "../prisma";
import { getPasswordHash } from "../prisma";

require("dotenv").config({ path: ".../process.env" });

const router = express.Router();

router.post("", async (req, res, next) => {
  const { ID, contrasena } = req.body;

  if (!ID) {
    res.statusCode = 400;
    res.send("El formato del ID es incorrecto");
  } else {
    const aux = await getPasswordHash(ID);

    if (aux !== undefined) {
      const validPass = await bcrypt.compare(contrasena, aux);
      if (validPass) {
        const accessToken = jwt.sign(
          { id: ID },
          process.env.ACCESS_TOKEN_SECRET!,
          {
            expiresIn: "5h",
          }
        );
        res.send({
          id: ID,
          accessToken: accessToken,
        });
      } else {
        res.status(401).send("Credenciales Incorrectas.");
      }
    } else {
      res.statusCode = 500;
      res.send("Error en el servidor vuelva a intentarlo.");
    }
  }
});
router.get("", async (req, res, next) => {});
router.put("", async (req, res, next) => {});
router.delete("", async (req, res, next) => {});

export default router;
