import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export function Transfers() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>
          Our <span>Bank</span>
        </h1>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Minhas transferências</h1>
        <table></table>
        <Link to={"/dashboard"} className={styles.voltar}>
          Voltar
        </Link>
      </div>
    </div>
  );
}
