import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import barra from "../../images/barra.svg";
import { title } from "process";

export function DeleteAccount() {
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

      <div className={styles.content}>
        <h1>
          Our <span>Bank</span>
        </h1>
        <h2>Deletar minha conta</h2>

        <h1 className={styles.delete}>Você tem certeza que quer DELETAR a sua conta?</h1>

        <button className={styles.voltar}>
          <Link to={"/dashboard"}>Voltar</Link>
        </button>
        <button className={styles.deletar}>
          <Link to={"/login"}>Deletar</Link>
        </button>
      </div>
    </div>
  );
}
