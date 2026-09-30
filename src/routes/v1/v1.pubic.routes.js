import { Router } from "express";
import { obtenerUsuariosExternosController } from "../../controllers/api-externas.controller.js";

const publicRoutes = Router();


publicRoutes.get("/user-externos", obtenerUsuariosExternosController);


export default publicRoutes;