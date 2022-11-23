import axios from "axios";

const app = axios.create({
  baseURL: "http://localhost:8080/clientes",
});

export interface Cliente {
  idCliente: Number;
  nome: String;
  email: String;
  cpf: String;
  senha: String;
  dataNasc: "String";
}

export class ClienteService {
  async buscarClientePorId(id: String) {
    try {
      const response = await app.get(`/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("cannot get");
    }
  }
}
