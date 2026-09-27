import { Router } from "express";
import { deleteUserController, createUserController, updateUserController, replaceUserController, upgradeUserPlanController} from "../../controllers/user.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";

const userRoutes = Router()

userRoutes.use(authMiddleware);

userRoutes.post("/", createUserController);
userRoutes.put("/:id", replaceUserController);
userRoutes.patch("/upgrade", upgradeUserPlanController);
userRoutes.patch("/:id", updateUserController);
userRoutes.delete("/:id", deleteUserController);



export default userRoutes;


//Arranca en app, va para index, luego v1