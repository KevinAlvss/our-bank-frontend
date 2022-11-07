import { Link } from "react-router-dom";

import "./styles.scss";
import notFoundImage from "../../images/not-found.png";

export function NotFound() {
  return (
    <div className="container">
      <div className="image">
        <img src={notFoundImage} alt="not-found" />
      </div>
      <div className="content">
        <div className="title-box">
          <h1>404...</h1>
          <h3>Repito, 404. Câmbio!</h3>
        </div>
        <div className="content-box">
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
