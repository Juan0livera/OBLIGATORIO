import axios from "axios";

const urlExternaBase = "https://jsonplaceholder.typicode.com";

const apiExternas = axios.create({
    baseURL: urlExternaBase,
    headers: {
        "Content-Type": "application/json"
    }
});


export const getUsuariosExternosService = async () => {

    const response = await apiExternas.get("/users");

    return response.data;
};