import { Link } from "react-router-dom";
import "./styles.scss";

export function Dashboard() {
  return (
    <div className="dashboard-header">
      <div>
        <h1>
          Our <span>Bank</span>
        </h1>

        <Link to="/edit-account">Minha conta</Link>
      </div>
    </div>
  );
}
