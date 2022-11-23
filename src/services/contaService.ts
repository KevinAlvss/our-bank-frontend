import axios from "axios";

const app = axios.create({
  baseURL: "http://localhost:8080/conta",
});

export interface Conta {
  numConta: String;
  codBanco: String;
  agencia: String;
  saldo: Number;
  fk_id_cliente: Number;
}

export class ContaService {
  async listarContas() {
    try {
      const response = await app.get("/");
      return response.data;
    } catch (error) {
      throw new Error("cannot get");
    }
  }

  async buscarContaPorId(id: String) {
    try {
      const res = await app.get(`/${id}`);
      return res.data;
    } catch (error) {
      throw new Error("cannot get");
    }
  }

  async buscarContaPorNumeroDaConta(numeroDaConta: String) {
    try {
      const res = await app.get(`/${numeroDaConta}`);
      return res.data;
    } catch (error) {
      throw new Error("cannot get");
    }
  }

  async cadastrarConta(conta: Conta) {
    try {
      const res = await app.post("/conta", conta);
      return res.data;
    } catch (error) {
      throw new Error("cannot post");
    }
  }

  async realizarTransferencia() {
    try {
      const res = await app.put("/conta/transferir");
      return res.data;
    } catch (error) {
      throw new Error("cannot put");
    }
  }

  async realizarDeposito() {
    try {
      const res = await app.put("/conta/depositar");
      return res.data;
    } catch (error) {
      throw new Error("cannot put");
    }
  }

  async deletarConta(id: String) {
    try {
      const res = await app.delete(`/conta/${id}`);
      return res.data;
    } catch (error) {
      throw new Error("cannot delete");
    }
  }
}
