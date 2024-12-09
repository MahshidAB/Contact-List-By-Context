import { useContext } from "react";

import { ContactsContext } from "../context/ContactsProvider";

import styles from "../css/DeleteModal.module.css";

function DeleteModal({ id, setDeleteModal }) {
    const { contacts, setContacts } = useContext(ContactsContext)

    const successDeleteHandler = () => {
        const newContactsArray = contacts.filter(contact => contact.id !== id)
        setContacts(newContactsArray)
        setDeleteModal(false)
    }

    const failedDeleteHandler = () => {
        setDeleteModal(false)
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

export default DeleteModal