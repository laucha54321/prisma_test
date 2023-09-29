import express from "express";
import cors from "cors";
import personasRouter from "./routes/personas";
import cursoRouter from "./routes/cursos";
import cursoPersonaRouter from "./routes/cursoPersona";
import notaRouter from "./routes/nota";
import loginRouter from "./routes/login";
import authRouter from "./authRouter";

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:4200" }));
app.use(authRouter);

app.use("/personas", personasRouter);
app.use("/cursos", cursoRouter);
app.use("/notas", notaRouter);
app.use("/curso", cursoPersonaRouter);
app.use("/login", loginRouter);

app.listen(8080, () => {
  console.log("Listening on Port 8080");
});
