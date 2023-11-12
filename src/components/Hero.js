import styles from "./Hero.module.css";

function Hero() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Spiderman</h2>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className="hero__right">
                    <img className={styles.hero__image} src="https://picsum.photos/536/354" alt="placeholder"/>
                </div>
            </section>
        </div>
    );
}

export default Hero;