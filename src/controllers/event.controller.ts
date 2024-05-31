import { Request, Response } from 'express';
import { Event as User } from '../entities/Event';

// export para ser usado en users.router
export const getUsers = async (req: Request, res: Response) => {
    console.log('entrando...');
    try {
        const users = await User.find(); // `find` sin parametros devuelve todos los registros
        console.log('users: ==>'), users;
        return res.json(users);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};
