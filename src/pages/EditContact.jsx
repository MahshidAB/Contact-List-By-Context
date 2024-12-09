import { useContext } from "react";

import { ContactsContext } from "../context/ContactsProvider"
import inputs from "../constants/inputs.js"

import styles from "../css/EditContact.module.css";

function EditContact({ contact }) {
console.log("editcontact",contact);

    const submitHandler = () => {

    }

    const changeHandler = () => {
        
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
                        // value={contact[input.name]}
                        onChange={changeHandler} />)}
                <button type="submit">Edit Contact</button>
            </form>
        </div>
    )
}

export default EditContact