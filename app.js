import express from 'express';


connectMongo();


const app = express();
const port = 3000;

app.use(express.json());
//app.use(routerUsuarios); --> para usar los controladores.

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localHost${port}`);
})

