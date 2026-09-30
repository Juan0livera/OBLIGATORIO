import { getUsuariosExternosService } from "../services/api-externa.service.js";

export const obtenerUsuariosExternosController  = async(req, res) =>{
    const usuarios = await getUsuariosExternosService();
    return res.status(200).json(usuarios);
}