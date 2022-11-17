import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import editPen from "../../images/editPen.svg";
import deleteTrash from "../../images/deleteTrash.svg";
import ReactModal from "react-modal";
import { useState } from "react";

export function Transfers() {
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  function handleIsOpenDelete() {
    setIsOpenDelete(!isOpenDelete);
  }

  function handleIsOpenEdit() {
    setIsOpenEdit(!isOpenEdit);
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
                  <img
                    src={editPen}
                    alt="editar"
                    onClick={() => handleIsOpenEdit()}
                    style={{ cursor: "pointer" }}
                  />
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
      <ReactModal
        isOpen={isOpenEdit}
        onRequestClose={handleIsOpenEdit}
        shouldCloseOnOverlayClick
        style={{ content: { width: 1000, height: 600, margin: "auto" } }}
      >
        <div className={styles.modalContainerEdit}>
          <h1>Editar Transferência</h1>
          <div className={styles.modalEditContent}>
            <div className={styles.inputBox}>
              <p>Nome do destinatário</p>
              <input type={"text"} placeholder={"Fulano da Silva"} />
            </div>
            <div className={styles.secondLine}>
              <div className={styles.inputBox}>
                <p>Numero da conta do destinatário</p>
                <input type={"text"} placeholder={"12345678-9"} />
              </div>
              <div className={styles.inputBox}>
                <p>Valor da Transferência</p>
                <input type={"text"} placeholder={"R$ 123,34"} />
              </div>
            </div>
            <div className={styles.inputBox}>
              <p>Descrição</p>
              <input type={"text"} placeholder={"Aula de canto"} />
            </div>
          </div>
          <div className={styles.buttonBox}>
            <button onClick={() => handleIsOpenEdit()}>Confirmar</button>
          </div>
        </div>
      </ReactModal>
    </>
  );
}
