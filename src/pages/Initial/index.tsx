import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import card from "../../images/card.svg";
import mobile from "../../images/mobile.svg";

export function Initial() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1>
            Our <span>Bank</span>
          </h1>
          <div className={styles.btn}>
            <Link className={styles.login} to="/login">
              Login
            </Link>
            <Link to="/create-account">Crie sua conta</Link>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.descricao}>
          <h1>O futuro é a razão que a gente faz planos.</h1>
          <h2>
            Escolha o futuro. Comece a controlar melhor sua vida financeira com
            o OurBank.
          </h2>
        </div>
        <div className={styles.card}>
          <img src={card} alt="imagens de cartões" />
        </div>
      </div>
      <div className={styles.content2}>
        <div className={styles.card}>
          <img src={mobile} alt="imagens de cartões" />
        </div>
        <div className={styles.descricao}>
          <h2>Our Bank</h2>
          <h1>
            Diferente, sem pegadinhas e sem tarifas: como você sempre quis.
          </h1>
          <h2>
            Conta digital gratuita, shopping nacional e internacional,
            investimentos, seguros, e o que mais a sua vida precisar.
          </h2>
        </div>
      </div>
      <div className={styles.footer}>
        <h6>@ 2022 - Grupo OurBank</h6>
        <h1>Our Bank</h1>
      </div>
    </div>
  );
}
