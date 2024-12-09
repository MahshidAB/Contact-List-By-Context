import { useContext, useState } from "react";
import { v4 } from "uuid";

import { ContactsContext } from "../context/ContactsProvider";

import inputs from "../constants/inputs";
import SuccessModal from "../components/successModal";

import styles from "../css/Home.module.css";

function Home() {
    const { contact, setContact, setContacts, savedModal, setSavedModal } = useContext(ContactsContext)
    const [alert, setAlert] = useState("")

    const changeHandler = event => {
        setAlert("")
        const name = event.target.name
        const value = event.target.value
        if (name === 'name' || name === 'lastName') {
            value.length <= 2 ? setAlert('plz enter at least 6 characters') : setAlert("")
        }
        if (name === 'email') {
            value.length <= 6 ? setAlert('plz enter at least 7 characters') : setAlert("")
        }
        if (name === 'phone') {
            value.length <= 10 ? setAlert('plz enter at least 11 digits') : setAlert("")
        }
        setContact(contact => ({ ...contact, [name]: value }))
    }

    const submitHandler = event => {
        event.preventDefault()
        if (
            contact.name.length <= 2 ||
            contact.lastName.length <= 2 ||
            contact.email.length <= 6 ||
            contact.phone.length <= 10) {
            setAlert('enter valid data!')
            return
        }
        const newContact = { ...contact, id: v4() }
        setContacts(contacts => ([...contacts, newContact]))
        setContact({
            name: "",
            lastName: "",
            email: "",
            phone: ""
        })
        setAlert("")
        setSavedModal(true)
    }


    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={submitHandler}>
                {inputs.map((input, index) =>
                    <input
                        key={index}
                        type={input.type}
                        placeholder={input.placeholder}
                        name={input.name}
                        value={contact[input.name]}
                        onChange={changeHandler} />)}
                <button type="submit">Add Contact</button>
            </form>
            <div className={styles.alert}>
                {alert && <p>{alert}</p>}
            </div>
            {!!savedModal && <SuccessModal />}
        </div>
    )
}

export default Home