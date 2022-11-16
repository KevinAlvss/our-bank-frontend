import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import ilustracao from "../../images/ilustracao.svg";

export function CreateAccount() {
  // const camposForms[]

  return (
    <div className={styles.container}>
      <div className={styles.ilustracao}>
        <img src={ilustracao} alt="ilustracão de melhor banco digital" />
      </div>

      <div className={styles.forms}>
        <div>
          <h1>
            Our <span>Bank</span>
          </h1>
        </div>
        <h2>Criar uma conta</h2>

        <div className={styles.campos}>
          <div className={styles.box1}>
            <span>Nome completo</span>
            <input type="text" name="nome" id="nome" />
          </div>

          <div className={styles.box2}>
            <div className={styles.cpf}>
              <span>CPF</span>
              <input type="number" name="cpf" id="cpf" />
            </div>

            <div className={styles.data}>
              <span>Data</span>
              <input type="date" name="data" id="data" />
            </div>
          </div>

          <div className={styles.box3}>
            <div className={styles.endereco}>
              <span>Endereço</span>
              <input type="text" name="endereco" id="endereco" />
            </div>

            <div className={styles.num}>
              <span>Número</span>
              <input type="number" name="numero" id="numero" />
            </div>
          </div>

          <div className={styles.box2}>
            <div className={styles.cep}>
              <span>CEP</span>
              <input type="number" name="cep" id="cep" />
            </div>

            <div className={styles.data}>
              <span>Complemento</span>
              <input type="text" name="comp" id="comp" />
            </div>
          </div>

          <div className={styles.box1}>
            <span>Email</span>
            <input type="email" name="email" id="email" />
          </div>

          <div className={styles.box1}>
            <span>Senha</span>
            <input type="password" name="senha" id="senha" />
          </div>
          <div className={styles.botao}>
            <Link to={"/dashboard"}>Criar</Link>
          </div>
          <div className={styles.linkCadastro}>
            <p>
              Já possui uma conta?
              <a href="/login" className={styles.linkCriarConta}>
                Faça login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
