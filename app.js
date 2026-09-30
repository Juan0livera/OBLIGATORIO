import express from 'express';
import "dotenv/config";
import { connectMongo } from './src/config/mongo.config.js';
import authRoutes from './src/routes/v1/v1.auth.routes.js'
import categoryRoutes from "./src/routes/v1/v1.category.routes.js";
import apiRoutes from './src/routes/v1/index.js';
import { middlewareErrores } from './src/middlewares/error.middleware.js';


const app = express();
const port = 5000;

app.use(express.json());

app.use("/", (req,res)=> {
    res.status(200).json({message : "Servidor disponible"});
})


app.use("/api", apiRoutes)
app.use(middlewareErrores);

await connectMongo();


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localHost:${port}`);
})


export default app;
