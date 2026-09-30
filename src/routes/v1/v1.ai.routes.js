import { analyzeFoodWithAIController } from "../../controllers/ai.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { Router } from "express";

const aiRoutes = Router();


aiRoutes.get("/food/:id/analysis", authMiddleware, analyzeFoodWithAIController);


export default aiRoutes;