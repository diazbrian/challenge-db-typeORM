import { Router } from "express";

import {
    getUsers,
} from "../controllers/event.controller";

const router = Router();

// `/users` ruta que nos lleva al metodo `getUsers`
router.get("/users", getUsers);

// router.get("/users/:id", getUser);
// router.post("/users", createUser);
// router.put("/users/:id", updateUser);
// router.delete("/users/:id", deleteUser);

export default router;
