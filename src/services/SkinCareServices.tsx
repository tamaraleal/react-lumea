import axios from "axios";
import type { SkinCare } from "../types/SkinCare";

export const getSkinCare = async (): Promise<SkinCare[]> => {
    try {
        const resposta = await axios.get("http://localhost:3000/produtos");
        console.log(resposta.data);
        
        return resposta.data
    } catch (error) {
        console.error("Erro ao buscar os dados: ", error);
        throw error;
    }
}