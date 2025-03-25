import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import equipmentRouter from "./routers/equipmentRouter";

// Importa a função de conexão ao MongoDB.
import { connectToDatabase } from "./config/database";
connectToDatabase();

const app = express();

app.use(morgan("tiny")); // Ver o que chega de requisição na aplicação
app.use(cors()); // Conectar a um front-end
app.use(helmet()); // Proteção contra ataques comuns
app.use(express.json());

app.use("/equipments", equipmentRouter);

// Rota padrão
app.use((req: Request, res: Response, next: NextFunction) => {
  res.send("Hello world");
});

// Tratamento de erro para não quebrar a aplicação
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send(error.message);
});

export default app;
