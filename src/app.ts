import express from "express"
import morgan from "morgan"
import cors from "cors"
import adnRoutes from "./routes/adn.routes"

const app = express()

app.use(morgan("dev"))
app.use(cors({
  origin: "*",
}))
app.use(express.json())

app.use(adnRoutes)

export default app