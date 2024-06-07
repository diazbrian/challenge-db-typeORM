import { Request, Response } from 'express';
import { User } from '../entities/User';
import { Profile } from '../entities/Profile';

// export para ser usado en users.router
export const getUsers = async (req: Request, res: Response) => {
    console.log('entrando...');
    try {
        const users = await User.find({
            relations: { profile: true },
        }); // `find` sin parametros devuelve todos los registros

        console.log('users: ==>'), users;
        return res.json(users);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const createUser = async (req: Request, res: Response) => {
    const { email, password, profile } = req.body;

    const profileUser = new Profile()
    profileUser.gender = profile.gender;
    profileUser.photo = profile.photo;
    await profileUser.save();

    const user = new User();
    user.email = email;
    user.password = password;
    user.profile = profileUser

    await user.save();
    return res.json(user);
};
