import { useContext } from "react";

import { ContactsContext } from "../context/ContactsProvider";

import styles from "../css/DeleteAllModal.module.css";

function DeleteAllModal() {
  const { setDeleteAllModal, setContacts, setNewContacts } = useContext(ContactsContext)

  const successDeleteHandler = () => {
    setContacts([])
    setNewContacts([])
    setDeleteAllModal(false)
  }

  const failedDeleteHandler = () => {
    setDeleteAllModal(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h3>Are You Sure You Want To Delete?</h3>
        <div className={styles.modalButton}>
          <button onClick={() => successDeleteHandler()}>Yes</button>
          <button onClick={() => failedDeleteHandler()}>No</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteAllModal