import { Router } from "express";
import { authMiddleware } from '../../middlewares/auth.middleware.js';
import express from 'express';
import uploadImageController from "../../controllers/uploadImage.controller.js";
import upload from "../../middlewares/upload.middleware.js";

const uploadImage = express.Router();

uploadImage.use(authMiddleware)
uploadImage.post("/", upload.single("image"), uploadImageController)



export default uploadImage