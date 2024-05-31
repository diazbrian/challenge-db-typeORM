import { Request, Response } from 'express';
import { Event as User } from '../entities/Event';

// export para ser usado en users.router
export const getAllUsers = async (req: Request, res: Response) => {
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

export const getUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params; // `id` viene de la url
        const user = await User.findOneBy({ id: parseInt(id) });

        if (!user)
            return res.status(404).json({ message: 'User not found' });

        return res.json(user);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};


export const createUser = async (req: Request, res: Response) => {
    const { type, firstname, gps } = req.body;
    const user = new User();
    user.type = type;
    user.firstname = firstname;
    user.gps = gps;
    await user.save();
    return res.json(user);
};

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await User.findOneBy({ id: parseInt(id) });
        if (!user)
            return res.status(404).json({ message: 'User not found' });

        await User.update({ id: parseInt(id) }, req.body);

        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await User.delete({ id: parseInt(id) });

        if (result.affected === 0)
            return res.status(404).json({ message: 'User not found' });

        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }

}
