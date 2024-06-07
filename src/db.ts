import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Event } from "./entities/Event";
import { Profile } from "./entities/Profile";
// import { Photo } from "./entity/Photo";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "local",
    // logging: true, // muestra peticiones a la bd
    synchronize: true,
    entities: [User, Event, Profile],
});
