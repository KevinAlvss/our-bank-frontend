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
        </div>
      </div>
      <div className="content"></div>
    </div>
  );
}
