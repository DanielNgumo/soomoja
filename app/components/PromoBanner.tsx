import styles from './PromoBanner.module.css';

export default function PromoBanner() {
  return (
    <section className={styles.section} id="promo-banner">
      <div className="container">
        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <span className={styles.topLabel}>Categories</span>
            <h2 className={styles.heading}>
              Enhance Your<br />Music Experience
            </h2>
            <div className={styles.countdown}>
              {[
                { num: '23', label: 'Hours' },
                { num: '05', label: 'Days' },
                { num: '59', label: 'Minutes' },
                { num: '35', label: 'Seconds' },
              ].map((item, i) => (
                <div key={i} className={styles.timeUnit}>
                  <span className={styles.timeNum}>{item.num}</span>
                  <span className={styles.timeLabel}>{item.label}</span>
                </div>
              ))}
            </div>
            <a href="/shop" className={styles.cta} id="promo-buy-now">Buy Now!</a>
          </div>
          <div className={styles.bannerDecor}>
            {/* Decorative circles */}
            <div className={styles.circle1}></div>
            <div className={styles.circle2}></div>
            {/* Headphone visual */}
            <div className={styles.productVisual}>
              <div className={styles.headphoneArt}>
                <svg viewBox="0 0 200 200" width="260" height="260" fill="none">
                  {/* Headphone body */}
                  <path d="M100 30 C55 30 20 65 20 110 L20 130 C20 142 30 152 42 152 L42 110 C42 78 68 52 100 52 C132 52 158 78 158 110 L158 152 C170 152 180 142 180 130 L180 110 C180 65 145 30 100 30Z" fill="#fff" opacity="0.15"/>
                  <rect x="14" y="108" width="30" height="50" rx="14" fill="#fff" opacity="0.9"/>
                  <rect x="156" y="108" width="30" height="50" rx="14" fill="#fff" opacity="0.9"/>
                  <path d="M44 108 C44 72 68 44 100 44 C132 44 156 72 156 108" stroke="#fff" strokeWidth="6" opacity="0.6" fill="none"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
