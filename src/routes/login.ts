import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getPasswordHash } from "../prisma";

require("dotenv").config({ path: ".../process.env" });

const router = express.Router();

type credenciales = {
  email: string;
  contrasena: string;
};

router.post("", async (req, res, next) => {
  const { email, contrasena }: credenciales = req.body;
  console.log(email, contrasena);
  if (!email) {
    res.statusCode = 400;
    res.send("El formato del ID es incorrecto");
  } else {
    const aux = await getPasswordHash(email);

    if (aux !== undefined) {
      const validPass = await bcrypt.compare(contrasena, aux);

      if (validPass) {
        const accessToken = jwt.sign(
          { id: email },
          process.env.ACCESS_TOKEN_SECRET!,
          {
            expiresIn: "5h",
          }
        );
        res.send({
          email: email,
          accessToken: accessToken,
        });
      } else {
        res.status(400).send("Credenciales Incorrectas.");
      }
    } else {
      res.statusCode = 400;
      res.send("Email incorrecto");
    }
  }
});
router.get("", async (req, res, next) => {});
router.put("", async (req, res, next) => {});
router.delete("", async (req, res, next) => {});

export default router;
