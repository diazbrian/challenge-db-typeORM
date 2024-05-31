import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import usersRouter from './routes/users.router';
const app = express();

app.use(morgan('dev'));
app.use(cors());

// `/api` ruta de acceso general que nos lleva a `usersRouter`  (alias de users.router.ts)
app.use("/api", usersRouter);

export default app;
