import styles from "../assets/Hero.module.css";
function Hero() {
  return (
    <div classname={styles.hero}>
      <section className="hero" id="home">
        <div classname={styles.heroBanner}>
          <h1>backroads app</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            explicabo debitis est autem dicta.
          </p>
          <a href="#tours" className={styles.heroBtn}>
            explore tours
          </a>
        </div>
      </section>
    </div>
  );
}

export default Hero;
