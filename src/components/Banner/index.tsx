import bannerImage from "../../images/bannerImage.svg";
import styles from "./styles.module.scss";

export function Banner() {
  return (
    <div className={styles.container}>
      <img src={bannerImage} alt="banner" />
      <h1>O melhor banco digital da américa latina</h1>
      <p>Invista seu dinheiro sem sair de casa</p>
    </div>
  );
}
