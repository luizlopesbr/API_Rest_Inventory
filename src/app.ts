import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import equipmentRouter from "./routers/equipmentRouter";
import authRouter from './routers/authRouter';
import metricsRouter from "./routers/metricsRouter";

// Importa a função de conexão ao MongoDB.
import { connectToDatabase } from "./config/database";
connectToDatabase();

const app = express();

app.use(morgan("tiny")); // Ver o que chega de requisição na aplicação
app.use(cors()); // Conectar a um front-end
app.use(helmet()); // Proteção contra ataques comuns
app.use(express.json());

//Rotas
app.use("/equipments", equipmentRouter);
app.use("/metrics", metricsRouter);
app.use('/auth', authRouter);


// // Rota padrão
// app.use("/",(req: Request, res: Response, next: NextFunction) => {
//   res.send("Bem vindo!");
// });

// // Tratamento de erro para não quebrar a aplicação
// app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
//   res.status(500).send(error.message);
// });

// Rota de boas-vindas (para "/")
app.get("/", (req: Request, res: Response) => {
  res.send("Bem vindo!");
});

// Middleware para rotas não encontradas (404)
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Rota não encontrada" });
});

// Middleware global de tratamento de erros
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Erro no servidor:", error.message); // Log do erro no console
  res.status(500).json({
    message: "Erro interno do servidor",
    error: error.message,
  });
});

export default app;
