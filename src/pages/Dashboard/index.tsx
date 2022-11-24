import { useEffect, useState } from "react";
import CurrencyInput from "react-currency-input-field";

import ReactModal from "react-modal";

import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

import wifiIcon from "../../images/wifi.png";
import qrCode from "../../images/qrCode.svg";
import { Cliente, ClienteService } from "../../services/clienteService";
import { Conta, ContaService } from "../../services/contaService";
import { toast } from "react-toastify";
import App from "../../App";

const clienteService = new ClienteService();
const contaService = new ContaService();

export function Dashboard() {
  const [dinheiro, setDinheiro] = useState(0);
  const [dinheiroExibido, setDinheiroExibido] = useState("");
  const [dinheiroMudou, setDinheiroMudou] = useState(false);

  const [moedaSelecionada, setMoedaSelecionada] = useState("BRL");

  const [deposito, setDeposito] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [cartaoDesativado, setCartaoDesativado] = useState(false);
  const [aproximacaoDesativada, setAproximacaoDesativada] = useState(false);

  function handleIsOpen() {
    setIsOpen(!isOpen);
  }

  async function depositar() {
    if (!deposito) {
      toast.error("Informe um valor para ser depositado");
      return;
    }

    await contaService.realizarDeposito(
      deposito.replace(/\D/g, ""),
      String(conta?.idConta)
    );
    notify("Deposito realizado com sucesso!");
    setDinheiroMudou(!dinheiroMudou);
  }

  useEffect(() => {
    function converterParaBRL() {
      setDinheiroExibido(
        dinheiro.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })
      );
    }

    function coverterParaUSD() {
      let dolar = dinheiro / 5.21;

      setDinheiroExibido(
        dolar.toLocaleString("us", {
          style: "currency",
          currency: "USD",
        })
      );
    }

    function coverterParaBTC() {
      let bitcoin = dinheiro / 101856.53;

      setDinheiroExibido(
        "BTC " +
          bitcoin.toLocaleString("pt-br", {
            style: "decimal",
          })
      );
    }

    function mudarMoeda(moeda: string) {
      switch (moeda) {
        case "BRL":
          converterParaBRL();
          break;
        case "USD":
          coverterParaUSD();
          break;
        case "BTC":
          coverterParaBTC();
          break;
      }
    }

    mudarMoeda(moedaSelecionada);
  }, [moedaSelecionada, dinheiro]);

  const [cliente, setCliente] = useState<Cliente>();
  const [conta, setConta] = useState<Conta>();

  async function fetchCliente() {
    const response = await clienteService.buscarClientePorId("1");
    setCliente(response);
  }

  async function fetchConta() {
    const response = await contaService.buscarContaPorId("1");
    setConta(response);
  }

  const [valorTransferencia, setValorTransferencia] = useState("");
  const [numeroContaBeneficiario, setNumeroContaBeneficiario] = useState("");

  async function transferir() {
    if (!valorTransferencia || !numeroContaBeneficiario) {
      toast.error("Informe todos os parametros necessários!");
      return;
    }

    await contaService.realizarDeposito(
      String(Number(valorTransferencia.replace(/\D/g, "")) * -1),
      String(conta?.idConta)
    );
    notify("Transferencia realizada com sucesso");
    setDinheiroMudou(!dinheiroMudou);
    handleIsOpen();
  }

  useEffect(() => {
    fetchCliente();
    fetchConta();
  }, [dinheiroMudou]);

  useEffect(() => {
    setDinheiro(Number(conta?.saldo));
  }, [conta?.saldo, dinheiroMudou]);

  function notify(mensagem: String) {
    toast.success(mensagem);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.dashboardHeader}>
          <div>
            <h1>
              Our <span>Bank</span>
            </h1>

            <Link to="/edit-account">Minha conta</Link>
          </div>
        </div>

        <div className={styles.userName}>
          <div>
            <h2>Olá, {cliente?.nome}</h2>
            <p>Número da conta: {conta?.numConta}</p>
          </div>
        </div>
        <div className={styles.content}></div>

        <div className={styles.firstLine}>
          <div className={styles.firstRowFirstLine}>
            <div className={styles.saldo}>
              <h3>Meu Saldo</h3>
              <div className={styles.saldoShape}>
                <span>{dinheiroExibido}</span>
                <select
                  className={styles.selectMoeda}
                  onChange={(e) => {
                    setMoedaSelecionada(e.target.value);
                  }}
                >
                  <option value="BRL">Real Brasileiro</option>
                  <option value="USD">Dolár Americano</option>
                  <option value="BTC">Bitcoin</option>
                </select>
              </div>
            </div>
            <div className={styles.deposito}>
              <h3>Depósito</h3>
              <div className={styles.depositoShape}>
                <span>Valor do depósito</span>
                {/* dar um jeito disso aqui reconhecer centavos 
              atualmente ele converte centavos para real no momento de depositar
              ele retira a virgula e ignora os zeros a esquerda
              exemplo = R$ 0,1 => 1 */}
                <CurrencyInput
                  intlConfig={{ locale: "pt-br", currency: "BRL" }}
                  allowNegativeValue={false}
                  maxLength={9}
                  onChange={(e) => {
                    setDeposito(e.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    depositar();
                  }}
                >
                  Depositar
                </button>
              </div>
            </div>
          </div>
          <div className={styles.secondRowFirstLine}>
            <div className={styles.cartao}>
              <h3>Meu cartão</h3>
              <div className={styles.cartaoShape}>
                <div className={styles.cartaoDesenho}>
                  <div className={styles.headerCartao}>
                    <h2>OurBank</h2>

                    <div className={styles.iconsCartao}>
                      <div className={styles.bandeira}>
                        <div className={styles.ladoUm}></div>
                        <div className={styles.ladoDois}></div>
                      </div>
                      <div className={styles.aproximacao}>
                        <img src={wifiIcon} alt={"aproximação"} />
                      </div>
                    </div>
                  </div>

                  <div className={styles.footerCartao}>
                    <span className={styles.numeroCartao}>
                      1234 1234 1234 1234
                    </span>
                    <div className={styles.dadosCartao}>
                      <span className={styles.nomeCliente}>
                        {cliente?.nome}
                      </span>
                      <div className={styles.codigosCartao}>
                        <span className={styles.cvv}>999</span>
                        <span className={styles.dataValidade}>10/27</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setCartaoDesativado(!cartaoDesativado);
                    notify(
                      cartaoDesativado
                        ? "Cartão ativado com sucesso"
                        : "Cartão desativado com sucesso"
                    );
                  }}
                >
                  {cartaoDesativado ? "Ativar cartão" : "Desativar cartão"}
                </button>
                <button
                  onClick={() => {
                    setAproximacaoDesativada(!aproximacaoDesativada);
                    notify(
                      aproximacaoDesativada
                        ? "Aproximação ativada com sucesso"
                        : "Aproximação desativada com sucesso"
                    );
                  }}
                >
                  {aproximacaoDesativada
                    ? "Ativar aproximação"
                    : "Desativar aproximação"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.secondLine}>
          <div className={styles.novaTransferencia}>
            <h3>Nova transferência</h3>
            <div className={styles.novaTransferenciaShape}>
              <div className={styles.inputWrapper}>
                <div className={styles.inputBox}>
                  <span>Numero da conta do destinatário</span>
                  <input
                    type={"text"}
                    onChange={(e) => setNumeroContaBeneficiario(e.target.value)}
                  />
                </div>
                <div className={styles.inputBox}>
                  <span>Valor da transferência</span>
                  <input
                    type={"number"}
                    min={"0"}
                    max={"99999"}
                    onChange={(e) => setValorTransferencia(e.target.value)}
                  />
                </div>
              </div>
              <button
                onClick={() => {
                  transferir();
                }}
              >
                Tranferir
              </button>
            </div>
          </div>
          <div className={styles.verTransferencia}>
            <h3>Minhas transferências</h3>
            <div className={styles.verTransferenciaShape}>
              <table>
                <thead>
                  <tr>
                    <th>Destinatário</th>
                    <th>Descrição</th>
                    <th>Data</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Fulano da Silva</td>
                    <td>Bla bla bla</td>
                    <td>17/11/2022</td>
                    <td className={styles.transacaoValor}>R$ 18,90</td>
                  </tr>
                  <tr>
                    <td>Kevin Alves</td>
                    <td>Seu dinheiro aqui</td>
                    <td>16/11/2022</td>
                    <td className={styles.transacaoValor}>R$ 6,99</td>
                  </tr>
                  <tr>
                    <td>Ednaldo Pereira</td>
                    <td>Opaaaa</td>
                    <td>15/11/2022</td>
                    <td className={styles.transacaoValorNegativo}>R$ 36,00</td>
                  </tr>
                  <tr>
                    <td>Nathalia da Rocha</td>
                    <td>Predicate</td>
                    <td>14/11/2022</td>
                    <td className={styles.transacaoValorNegativo}>R$ 412,23</td>
                  </tr>
                  <tr>
                    <td>Vyviane Santos</td>
                    <td>Dinheiro do teu pai</td>
                    <td>14/11/2022</td>
                    <td className={styles.transacaoValor}>R$ 100,00</td>
                  </tr>
                  <tr>
                    <td>Mariana Souza</td>
                    <td>conta um dois tres</td>
                    <td>13/11/2022</td>
                    <td className={styles.transacaoValorNegativo}>R$ 130,00</td>
                  </tr>
                  <tr>
                    <td>Zé</td>
                    <td>Mano do VBA</td>
                    <td>13/11/2022</td>
                    <td className={styles.transacaoValor}>R$ 1,00</td>
                  </tr>
                </tbody>
              </table>
              <div className={styles.linkTransacao}>
                <Link to={"/transfers"}>Ver tudo</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleIsOpen}
        shouldCloseOnOverlayClick
        style={{ content: { width: 800, height: 600, margin: "auto" } }}
      >
        <div className={styles.modalContainer}>
          <h1>Transferência realizada com sucesso!</h1>
          <img src={qrCode} alt="qrCode" />
          <p>Escaneie seu comprovante de transferência</p>
        </div>
      </ReactModal>
    </>
  );
}
