import { Router } from "express";
import { deleteUserController, createUserController, updateUserController, replaceUserController} from "../../controllers/user.controller.js";

const userRoutes = Router()

userRoutes.post("/", createUserController);
userRoutes.put("/:id", replaceUserController);
userRoutes.patch("/:id", updateUserController);
userRoutes.delete("/:id", deleteUserController);


export default userRoutes;


//Arranca en app, va para index, luego v1