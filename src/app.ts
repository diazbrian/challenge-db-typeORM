import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import usersRouter from './routes/users.router';
import eventRouter from './routes/event.router';
import todosRouter from './routes/todos.router';
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json()); // para analizar el body de las peticiones POST (req.body)

// `/api` ruta de acceso general que nos lleva a `usersRouter`  (alias de users.router.ts)
// app.use("/api", usersRouter);
// app.use("/api", eventRouter);
app.use("/api/todos", todosRouter);

export default app;
