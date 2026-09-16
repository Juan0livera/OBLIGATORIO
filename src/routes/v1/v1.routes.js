import { Router } from "express"
import userRoutes from "./v1.user.routes.js"
import authRoutes from "./v1.auth.routes.js"


const v1Routes = Router()
//falta middelware validate que valida el body del login
v1Routes.use("/auth", authRoutes);
v1Routes.use("/users", userRoutes)

export default v1Routes
