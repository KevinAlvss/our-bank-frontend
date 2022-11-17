import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import barra from "../../images/barra.svg";

export function EditAccount() {
  // const camposForms[]

  const sidebar = [
    { id: "1", link: "/my-account", title: "Minha conta", icon: "barra" },
    {
      id: "2",
      link: "/edit-account",
      title: "Alterar minha conta",
      icon: "barra",
    },
    {
      id: "3",
      link: "/delete-account",
      title: "Deletar minha conta",
      icon: "barra",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        {sidebar.map(({ id, link, title, icon }) => (
          <div className={styles.nav}>
            <img src={barra} alt="barra" />
            <a href={link}>{title}</a>
          </div>
        ))}
        <div className={styles.botao}>
          <Link to={"/dashboard"}>Voltar</Link>
        </div>
      </div>

      <div className={styles.forms}>
        <div>
          <h1>
            Our <span>Bank</span>
          </h1>
        </div>
        <h2>Alterar minha conta</h2>

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
              <span>Data de nascimento</span>
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
          <button className={styles.entrar}>Alterar</button>
        </div>
      </div>
    </div>
  );
}
