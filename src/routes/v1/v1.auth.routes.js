import express from 'express';
import { login, register } from '../../controllers/auth.controller.js';
import { middlewareValidateLoginBody, middlewareValidateRegisterBody } from '../../middlewares/auth.middleware.js';
    
const authRoutes = express.Router();


authRoutes.post("/login", middlewareValidateLoginBody, login)
authRoutes.post("/register", middlewareValidateRegisterBody ,register); 

export default authRoutes;