import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div>
                    <h1 className={styles.navbar__brand}>CocoPandan.</h1>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;