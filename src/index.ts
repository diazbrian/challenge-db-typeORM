import "reflect-metadata";

import app from "./app";
import { AppDataSource } from "./db";
const port = 3000;

async function main() {
    try {
        await AppDataSource.initialize(); // inicia la conexión con la base de datos
        console.log("Database connected...");

        app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
    } catch (error) {
        console.error(error);
    }
}

main();
