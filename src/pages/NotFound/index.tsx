import { Link } from "react-router-dom";

import styles from "./styles.module.scss";
import notFoundImage from "../../images/not-found.png";

export function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={notFoundImage} alt="not-found" />
      </div>
      <div className={styles.content}>
        <div className={styles.titleBox}>
          <h1>404...</h1>
          <h3>Repito, 404. Câmbio!</h3>
        </div>
        <div className={styles.contentBox}>
          <h2>ESTAÇÃO RESPONDE:</h2>

          <p>
            Acho que você chegou ao limite do universo. A página que você
            requisitou não foi encontrada.
          </p>
        </div>
        <Link to={"/dashboard"}>Ir para home</Link>
      </div>
    </div>
  );
}
