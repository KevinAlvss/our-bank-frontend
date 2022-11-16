import { useEffect, useState } from "react";
import CurrencyInput from "react-currency-input-field";

import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

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
          <h2>Olá, grupo 1!</h2>
          <p>Número da conta: 12345</p>
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
              <button onClick={depositar}>Depositar</button>
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
                    <div className={styles.andeira}>
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
                    <span className={styles.nomeCliente}>Kevin Alves</span>
                    <div className={styles.codigosCartao}>
                      <span className={styles.cvv}>999</span>
                      <span className={styles.dataValidade}>10/27</span>
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

      <div className={styles.secondLine}>
        <div className={styles.novaTransferencia}>
          <h3>Nova transferência</h3>
          <div className={styles.novaTransferenciaShape}>
            <div className={styles.inputWrapper}>
              <div className={styles.inputBox}>
                <span>Numero da conta do destinatário</span>
                <input type={"number"} min={"0"} max={"99999"} />
              </div>
              <div className={styles.inputBox}>
                <span>Valor da transferência</span>
                <input type={"number"} min={"0"} max={"99999"} />
              </div>
            </div>
            <button>Tranferir</button>
          </div>
        </div>
        <div className={styles.verTransferencia}>
          <h3>Minhas transferências</h3>
          <div className={styles.verTransferenciaShape}></div>
        </div>
      </div>
    </div>
  );
}
