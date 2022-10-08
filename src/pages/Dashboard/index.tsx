import { useEffect, useState } from "react";
import CurrencyInput from "react-currency-input-field";

import { Link } from "react-router-dom";
import "./styles.scss";

import wifiIcon from "../../images/wifi.png";

export function Dashboard() {
  const [dinheiro, setDinheiro] = useState(3456.78);
  const [dinheiroExibido, setDinheiroExibido] = useState("");

  const [moedaSelecionada, setMoedaSelecionada] = useState("BRL");

  const [deposito, setDeposito] = useState("");

  function depositar() {
    setDinheiro(dinheiro + Number(deposito.replace(/\D/g, "")));
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

  return (
    <div className="container">
      <div className="dashboard-header">
        <div>
          <h1>
            Our <span>Bank</span>
          </h1>

          <Link to="/edit-account">Minha conta</Link>
        </div>
      </div>

      <div className="user-name">
        <div>
          <h2>Olá, grupo 1!</h2>
          <p>Número da conta: 12345</p>
        </div>
      </div>
      <div className="content"></div>

      <div className="first-line">
        <div className="first-row-first-line">
          <div className="saldo">
            <h3>Meu Saldo</h3>
            <div className="saldo-shape">
              <span>{dinheiroExibido}</span>
              <select
                className="select-moeda"
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
          <div className="deposito">
            <h3>Depósito</h3>
            <div className="deposito-shape">
              <span>Valor do depósito</span>
              {/* dar um jeito disso aqui reconhecer centavos 
              atualmente ele converte centavos para real no momento de depositar
              ele retira a virgula e ignora os zeros a esquerda
              exemplo = R$ 0,1 => 1 */}
              <CurrencyInput
                intlConfig={{ locale: "pt-br", currency: "BRL" }}
                allowNegativeValue={false}
                maxLength={5}
                onChange={(e) => {
                  setDeposito(e.target.value);
                }}
              />
              <button onClick={depositar}>Depositar</button>
            </div>
          </div>
        </div>
        <div className="second-row-first-line">
          <div className="cartao">
            <h3>Meu cartão</h3>
            <div className="cartao-shape">
              <div className="cartao-desenho">
                <div className="header-cartao">
                  <h2>OurBank</h2>

                  <div className="icons-cartao">
                    <div className="bandeira">
                      <div className="lado-um"></div>
                      <div className="lado-dois"></div>
                    </div>
                    <div className="aproximacao">
                      <img src={wifiIcon} alt={"aproximação"} />
                    </div>
                  </div>
                </div>

                <div className="footer-cartao">
                  <span className="numero-cartao">1234 1234 1234 1234</span>
                  <div className="dados-cartao">
                    <span className="nome-cliente">Kevin Alves</span>
                    <div className="codigos-cartao">
                      <span className="cvv">999</span>
                      <span className="data-validade">10/27</span>
                    </div>
                  </div>
                </div>
              </div>
              <button>Desativar cartão</button>
              <button>Desativar aproximação</button>
            </div>
          </div>
        </div>
      </div>

      <div className="second-line">
        <div className="nova-transferencia">
          <h3>Nova transferência</h3>
          <div className="nova-transferencia-shape">
            <div className="input-wrapper">
              <div className="input-box">
                <span>Numero da conta do destinatário</span>
                <input type={"number"} min={"0"} max={"99999"} />
              </div>
              <div className="input-box">
                <span>Valor da transferência</span>
                <input type={"number"} min={"0"} max={"99999"} />
              </div>
            </div>
            <button>Tranferir</button>
          </div>
        </div>
        <div className="ver-transferencia">
          <h3>Minhas transferências</h3>
          <div className="ver-transferencia-shape"></div>
        </div>
      </div>
    </div>
  );
}
