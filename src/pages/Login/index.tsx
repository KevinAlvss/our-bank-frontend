import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import ilustracao from "../../images/ilustracao.svg";

export function Login() {
  /*const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
/*useEffect(() => {
  function validateForm(){
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event: { preventDefault: () => void; }){
    event.preventDefault();
  }*/

  return (
    <div className={styles.container}>
      <div className={styles.ilustracao}>
        <img src={ilustracao} alt="ilustracão de melhor banco digital" />
      </div>
      <div>
        <form className={styles.loginForm}>
          <div>
            <h1>
              Our <span>Bank</span>
            </h1>
          </div>
          <h1>Entrar na sua conta</h1>
          <input
            id="enderecoEmail"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Email"
            //onChange={(e) => setEmail(e.target.value)}
          />
          <div>
            <input
              id="senha"
              name="senha"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Senha"
            />
          </div>
          <div className={styles.botao}>
            <Link to={"/dashboard"}>Entrar</Link>
          </div>
          <div className={styles.linkCadastro}>
            <p>
              Não tem uma conta?
              <a href="/create-account" className={styles.linkCriarConta}>
                Crie agora
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
