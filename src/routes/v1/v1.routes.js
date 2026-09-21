import { Router } from "express"
import userRoutes from "./v1.user.routes.js"
import authRoutes from "./v1.auth.routes.js"
import categoryRoutes from "./v1.category.routes.js";


const v1Routes = Router()
//falta middelware validate que valida el body del login
v1Routes.use("/auth", authRoutes);
v1Routes.use("/users", userRoutes);
v1Routes.use("/category", categoryRoutes);



export default v1Routes
