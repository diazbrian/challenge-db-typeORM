import { Router } from "express";

import {
    createUser,
    deleteUser,
    getAllUsers,
    getUser,
    updateUser,
} from "../controllers/event.controller";

const router = Router();

// `/users` ruta que nos lleva al metodo `getAllUsers`
router.get("/users", getAllUsers);

router.get("/users/:id", getUser);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
