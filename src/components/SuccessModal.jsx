import { useContext } from "react";

import { ContactsContext } from "../context/ContactsProvider";

import styles from "../css/SuccessModal.module.css";

function SuccessModal() {
    const {setSavedModal} = useContext(ContactsContext)

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <p>Changes Successfully Saved!</p>
                <span onClick={() => setSavedModal(false)}>X</span>
            </div>
        </div>
    )
}

export default SuccessModal