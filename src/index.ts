import "reflect-metadata"
import app from "./app"
import { AppDataSource } from "./db"

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected")
        app.listen(3000)
        console.log("Server is listening on port ", 3000)
    })
    .catch((error) => console.log(error))