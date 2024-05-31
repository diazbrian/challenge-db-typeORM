import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import usersRouter from './routes/users.router';
import eventRouter from './routes/event.router';
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json()); // para analizar el body de las peticiones POST (req.body)

// `/api` ruta de acceso general que nos lleva a `usersRouter`  (alias de users.router.ts)
// app.use("/api", usersRouter);
app.use("/api", eventRouter);

export default app;
