import { useContext, useEffect, useState } from "react"

import { ContactsContext } from "../context/ContactsProvider"

import DeleteAllModal from "../components/DeleteAllModal"
import Contact from "../components/Contact"

import styles from "../css/Contacts.module.css"

function Contacts() {
  const { contacts, newContacts, setNewContacts, deleteAllModal, setDeleteAllModal } = useContext(ContactsContext)

  const [text, setText] = useState("")
  const [type, setType] = useState("name")

  console.log("contacts", contacts);


  useEffect(() => {
    const search = () => {
      if (text) {
        const newContactsArray = contacts.filter(contact => contact[type]?.startsWith(text))
        setNewContacts(newContactsArray)
      } else {
        setNewContacts([])
      }
    }
    search()
  }, [text])

  const deleteAllHandler = () => {
    setDeleteAllModal(true)
  }

  return (
    <div className={styles.container}>
      <div className={styles.contactsHeader}>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search..."
            onChange={e => setText(e.target.value)}
            value={text} />
          <select
            value={type}
            className={styles.selectBox}
            onChange={e => setType(e.target.value)}>
            <option value="name">Name</option>
            <option value="lastName">Last Name</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
        </div>
        {
          contacts.length ? <span onClick={() => deleteAllHandler()}>⛌</span> : ""
        }
        {
          deleteAllModal && <DeleteAllModal />
        }
      </div>
      <div className={styles.contacts}>
        {!text ? contacts.map(contact => <Contact contact={contact} key={contact.id} />) : ""}
        {newContacts.map(contact => <Contact contact={contact} key={contact.id} />)}
        {
          contacts.length === 0 &&
          <div className={styles.alert} > No Contacts Found!</div >
        }
        {
          (text && newContacts.length === 0) && <div className={styles.alert} > No Contacts Found!</div >
        }
      </div>
    </div>
  )
}

export default Contacts
