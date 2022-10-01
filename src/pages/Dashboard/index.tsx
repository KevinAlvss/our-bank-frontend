import { Link } from "react-router-dom";
import "./styles.scss";

export function Dashboard() {
  return (
    <div className="container">
      <div className="dashboard-header">
        <div>
          <h1>
            Our <span>Bank</span>
          </h1>

          <Link to="/edit-account">Minha conta</Link>
        </div>
      </div>

      <div className="user-name">
        <div>
          <h2>Olá, grupo 1!</h2>
          <p>Número da conta: 12345</p>
        </div>
      </div>
      <div className="content"></div>

      <div className="first-line">
        <div className="first-row-first-line">
          <div className="saldo">
            <h3>Meu Saldo</h3>
            <div className="saldo-shape">
              <span>R$ 3.456,78</span>
              <select className="select-moeda">
                <option value="Real Brasileiro">Real Brasileiro</option>
                <option value="Dolár Americano">Dolár Americano</option>
                <option value="Bitcoin">Bitcoin</option>
              </select>
            </div>
          </div>
          <div className="deposito">
            <h3>Depósito</h3>
            <div className="deposito-shape"></div>
          </div>
        </div>
        <div className="second-row-first-line">
          <div className="cartao">
            <h3>Meu cartão</h3>
            <div className="cartao-shape"></div>
          </div>
        </div>
      </div>

      <div className="second-line">
        <div className="nova-transferencia">
          <h3>Nova transferência</h3>
          <div className="nova-transferencia-shape"></div>
        </div>
        <div className="ver-transferencia">
          <h3>Minhas transferências</h3>
          <div className="ver-transferencia-shape"></div>
        </div>
      </div>
    </div>
  );
}
