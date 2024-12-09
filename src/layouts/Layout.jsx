import { NavLink } from "react-router-dom";

import styles from "../css/Layout.module.css";

function Layout({ children }) {
    return (
        <>
            <header className={styles.header}>
                <NavLink to="/" className={styles.navLink}>Home</NavLink>
                <NavLink to="/contacts" className={styles.navLink}>contacts</NavLink>
            </header>
            {children}
            <footer className={styles.footer}>Contact-App-Project</footer>
        </>
    )
}

export default Layout