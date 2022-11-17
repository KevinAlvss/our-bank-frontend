import { Link } from "react-router-dom";
import { Banner } from "../../components/Banner";
import styles from "./styles.module.scss";

export function Login() {
  return (
    <div className={styles.container}>
      <Banner />
      <div className={styles.content}>
        <h1 className={styles.title}>
          Our <span>Bank</span>
        </h1>
        <h3 className={styles.subtitle}>Entrar na sua conta</h3>
        <div className={styles.inputBox}>
          <input type={"text"} placeholder="Email" />
          <input type={"password"} placeholder="Senha" />
        </div>
        <Link to={"/dashboard"} className={styles.entrar}>
          Entrar
        </Link>
        <p className={styles.criarConta}>
          Não tem uma conta? <Link to={"/create-account"}>Crie agora</Link>
        </p>
      </div>
    </div>
  );
}
