import { Router } from "express"
import { mutation, stats } from "../controllers/adn.controllers"

const adnRoutes = Router()

adnRoutes.post("/mutation", mutation)

adnRoutes.get("/stats", stats)

export default adnRoutes