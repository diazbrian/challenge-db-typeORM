"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
// import { User } from "./entities/User";
// import { Event } from "./entity/Event";
// import { Profile } from "./entity/Profile";
// import { Photo } from "./entity/Photo";
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "local",
    // logging: true, // muestra peticiones a la bd
    synchronize: true,
    entities: [],
});
