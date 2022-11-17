import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import editPen from "../../images/editPen.svg";
import deleteTrash from "../../images/deleteTrash.svg";
import ReactModal from "react-modal";
import { useState } from "react";

export function Transfers() {
  const [isOpenDelete, setIsOpenDelete] = useState(false);

  function handleIsOpenDelete() {
    setIsOpenDelete(!isOpenDelete);
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>
            Our <span>Bank</span>
          </h1>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Minhas transferências</h1>
          <table>
            <thead>
              <tr>
                <th>Destinatário</th>
                <th>Descrição</th>
                <th>Data</th>
                <th>Valor</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fulano da Silva </td>
                <td>Blá bla bla</td>
                <td>17/11/2022</td>
                <td>R$ 18,90</td>
                <td>
                  <img src={editPen} alt="editar" />
                </td>
                <td>
                  <img
                    src={deleteTrash}
                    alt="deletar"
                    onClick={() => handleIsOpenDelete()}
                    style={{ cursor: "pointer" }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <Link to={"/dashboard"} className={styles.voltar}>
            Voltar
          </Link>
        </div>
      </div>
      <ReactModal
        isOpen={isOpenDelete}
        onRequestClose={handleIsOpenDelete}
        shouldCloseOnOverlayClick
        style={{ content: { width: 800, height: 400, margin: "auto" } }}
      >
        <div className={styles.modalContainerDelete}>
          <h1>Você deseja realmente deletar esta transferência?</h1>
          <button
            className={styles.voltarButtonDelete}
            onClick={() => handleIsOpenDelete()}
          >
            Voltar
          </button>
          <button
            className={styles.deleteButton}
            onClick={() => handleIsOpenDelete()}
          >
            Deletar
          </button>
        </div>
      </ReactModal>
    </>
  );
}
