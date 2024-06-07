/*
 `Router` especifica una ruta de acceso a un endpoint (una funcion o metodo).
 En este caso, a un metodo que accede a la base de datos (getUsers).
 */
import { Router } from "express";

import {
    createUser,
    getUsers,
} from "../controllers/user.controller";

const router = Router();

// `/users` ruta que nos lleva al metodo `getUsers`
router.get("/users", getUsers);

// router.get("/users/:id", getUser);
router.post("/users", createUser);
// router.put("/users/:id", updateUser);
// router.delete("/users/:id", deleteUser);

export default router;
