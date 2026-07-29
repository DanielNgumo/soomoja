import styles from './CashBackBanner.module.css';

export default function CashBackBanner() {
  return (
    <section className={styles.section} id="cashback-banner">
      <div className={styles.banner}>
        {/* Background: living room photo via CSS gradient + colored bg */}
        <div className={styles.bgLeft} aria-hidden="true">
          {/* Simulated living room scene with CSS shapes */}
          <div className={styles.wall}></div>
          <div className={styles.wallRight}></div>
          {/* Sofa */}
          <div className={styles.sofa}>
            <div className={styles.sofaBack}></div>
            <div className={styles.sofaSeat}></div>
            <div className={styles.sofaLeg}></div>
            <div className={styles.sofaLeg2}></div>
            {/* Cushions */}
            <div className={styles.cushion1}></div>
            <div className={styles.cushion2}></div>
            <div className={styles.cushion3}></div>
          </div>
          {/* Plant */}
          <div className={styles.plant}>
            <div className={styles.plantStem}></div>
            <div className={styles.plantLeaf1}></div>
            <div className={styles.plantLeaf2}></div>
            <div className={styles.plantLeaf3}></div>
          </div>
          {/* Coffee table */}
          <div className={styles.table}></div>
          <div className={styles.tableLeg1}></div>
          <div className={styles.tableLeg2}></div>
        </div>

        {/* Dark green info box */}
        <div className={styles.infoBox}>
          <h2 className={styles.heading}>
            Get 5% Cash<br />Back On $200
          </h2>
          <p className={styles.subtext}>
            Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.
          </p>
          <a href="/cashback" className={styles.cta} id="cashback-learn-more">Learn More</a>
        </div>
      </div>
    </section>
  );
}
