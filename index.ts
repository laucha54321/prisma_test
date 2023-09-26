import express from "express";
import cors from "cors";
import personasRouter from "./routes/personas";
import cursoRouter from "./routes/cursos";
import cursoPersonaRouter from "./routes/cursoPersona";
import notaRouter from "./routes/nota";
import loginRouter from "./routes/login";
import authRouter from "./routes/auth";

const app = express();

app.use(express.json());

app.use(cors({ origin: "http://localhost:4200" }));

app.use("/personas", personasRouter);
app.use("/curso", cursoRouter);
app.use("/nota", notaRouter);
app.use("/curso_persona", cursoPersonaRouter);
app.use("/login", loginRouter);
app.use("/auth", authRouter);

app.listen(8080, () => {
  console.log("Listening on Port 8080");
});
