import { Router } from "express";

import {
    createUser,
    deleteUser,
    getAllUsers,
    getUser,
    updateUser,
} from "../controllers/event.controller";

const router = Router();

// `/events` ruta que nos lleva al metodo `getAllUsers`
router.get("/events", getAllUsers);

router.get("/events/:id", getUser);
router.post("/events", createUser);
router.put("/events/:id", updateUser);
router.delete("/events/:id", deleteUser);

export default router;
