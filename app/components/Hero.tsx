import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero-section">
      <div className={styles.heroInner}>
        {/* Left: text content */}
        <div className={styles.leftContent}>
          <h1 className={styles.heading}>
            Shopping And<br />
            Department Store.
          </h1>
          <p className={styles.subtext}>
            Shopping is a bit of a relaxing hobby for me, which<br />
            is sometimes troubling for the bank balance.
          </p>
          <a href="/shop" className={styles.cta} id="hero-learn-more">
            Learn More
          </a>
        </div>

        {/* Right: 3D podium product display */}
        <div className={styles.rightContent} aria-hidden="true">
          <div className={styles.podiumScene}>
            {/* Back platform (tallest) */}
            <div className={styles.platformBack}>
              <div className={styles.platformFace}></div>
              <div className={styles.platformSideRight}></div>
              <div className={styles.platformSideBottom}></div>
              <div className={styles.backProducts}>
                <div className={styles.productImg1}>
                  <Image
                    src="/bag.png"
                    alt="Handbag"
                    width={110}
                    height={100}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>

            {/* Mid platform */}
            <div className={styles.platformMid}>
              <div className={styles.platformFace}></div>
              <div className={styles.platformSideRight}></div>
              <div className={styles.platformSideBottom}></div>
              <div className={styles.midProducts}>
                <div className={styles.productImg2}>
                  <Image
                    src="/shoes.png"
                    alt="Luggage"
                    width={90}
                    height={110}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>

            {/* Front platform (lowest) */}
            <div className={styles.platformFront}>
              <div className={styles.platformFace}></div>
              <div className={styles.platformSideRight}></div>
              <div className={styles.platformSideBottom}></div>
              <div className={styles.frontProducts}>
                <div className={styles.productImg3}>
                  <Image
                    src="/watch.png"
                    alt="Electronics"
                    width={100}
                    height={90}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>

            {/* Floating product images around podium */}
            <div className={styles.floatImg1}>
              <Image src="/headphones.png" alt="Headphones" width={80} height={80} style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
