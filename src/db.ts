import { DataSource } from "typeorm"
import { Adn } from "./entities/Adn"
require('dotenv').config({ path: './.env' })

//Datos de mi db
export const AppDataSource = new DataSource({
    type: "postgres",
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'prueba',
    synchronize: true,
    logging: true,
    entities: [Adn],
    subscribers: [],
    migrations: [],
})

