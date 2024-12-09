import { createContext, useEffect, useState } from "react"

export const ContactsContext = createContext()

function ContactsProvider({ children }) {
    const [contact, setContact] = useState({
        id: "",
        name: "",
        lastName: "",
        email: "",
        phone: ""
    })
    const [contacts, setContacts] = useState(() => {
        const savedContacts = JSON.parse(localStorage.getItem("contacts"))
        return savedContacts || []
    }
    )
    const [newContacts, setNewContacts] = useState([])
    const [savedModal, setSavedModal] = useState(false)
    const [deleteAllModal, setDeleteAllModal] = useState(false)

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts))
    }, [contacts])

    return (
        <ContactsContext.Provider
            value={{ contact, setContact, contacts, setContacts, newContacts, setNewContacts, savedModal, setSavedModal, deleteAllModal, setDeleteAllModal }}>
            {children}
        </ContactsContext.Provider>
    )
}

export default ContactsProvider