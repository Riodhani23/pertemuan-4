import styles from "./Footer.module.css";

function Footer() {
    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <h2 className={styles.footer__title}>@rioadtyramadhan_</h2>
                <p className={styles.Footer__author}>Copy@right R10</p>
            </footer>
        </div>
    );
}

export default Footer;