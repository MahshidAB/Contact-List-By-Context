import { useState } from "react";
import { NavLink } from "react-router-dom";

import DeleteModal from "./DeleteModal";
import EditContact from "../pages/EditContact";

import styles from "../css/Contact.module.css";

function Contact({ contact }) {
    // console.log("contact", contact);
    
    const [editContact, setEditContact] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)

    return (
        <li key={contact.id} className={styles.contactList}>
            <p>{contact.name} {contact.lastName}</p>
            <p><span>📩</span>{contact.email}</p>
            <p><span>📞</span>{contact.phone}</p>
            <div className={styles.button}>
                <button onClick={() => setDeleteModal(true)
                }>🗑️</button>
                <NavLink to={"/edit"}>
                    <button onClick={() => setEditContact(true)}>✎</button>
                </NavLink>
            </div>
            {
                deleteModal &&
                <DeleteModal id={contact.id} setDeleteModal={setDeleteModal} />
            }
            {
                editContact &&
                <EditContact contact={contact} />
            }
        </li>
    )
}

export default Contact