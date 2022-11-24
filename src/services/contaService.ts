import axios from "axios";

const app = axios.create({
  baseURL: "http://localhost:8080/conta",
});

export interface Conta {
  idConta: Number;
  numConta: String;
  codBanco: String;
  agencia: String;
  saldo: Number | 0;
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

  async realizarTransferencia(
    contaBeneficiario: String,
    valor: Number,
    idMinhaConta: Number
  ) {
    try {
      const res = await app.put("/transferir", {
        contaBeneficiario,
        valor,
        idMinhaConta,
      });
      return res.data;
    } catch (error) {
      console.log(error);
      throw new Error("cannot put");
    }
  }

  async realizarDeposito(valor: String, id: String) {
    try {
      const res = await app.put("/depositar", {
        valor,
        id,
      });
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
