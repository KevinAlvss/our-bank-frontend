import { ToastContainer } from "react-toastify";
import { Router } from "./routes";
import "./styles/globalStyles.scss";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Router />
    </>
  );
}

export default App;
