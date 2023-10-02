import express from "express";
import { getID } from "./prisma";
import jwt from "jsonwebtoken";
import jwtDecode from "jwt-decode";
require("dotenv").config({ path: "../process.env" });

interface jtoken {
  id: string;
  exp: number;
  iat: number;
}

const router = express.Router();

router.use(async (req, res, next) => {
  if (req.headers.authorization) {
    const aux = req.headers.authorization.split(" ")[1];

    jwt.verify(aux, process.env.ACCESS_TOKEN_SECRET!, async (err) => {
      if (err) {
        res.sendStatus(403);
      } else {
        const token = jwtDecode<jtoken>(aux);
        const id = await getID(token.id);
        res.set("ID", id);
        next();
      }
    });
  } else {
    res.statusCode = 400;
    res.send("Request no permitido. No hay token.");
  }
});

export default router;
