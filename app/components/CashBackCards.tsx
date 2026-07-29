import styles from './CashBackCards.module.css';

export default function CashBackCards() {
  return (
    <section className={styles.section} id="cashback-cards">
      <div className={styles.banner}>
        {/* Left: text */}
        <div className={styles.left}>
          <h2 className={styles.heading}>Get 5% Cash Back</h2>
          <p className={styles.sub}>on Soomoja.com</p>
          <a href="/cashback" className={styles.cta} id="cashback-cards-learn-more">Learn More</a>
        </div>

        {/* Right: stacked credit cards illustration */}
        <div className={styles.right} aria-hidden="true">
          <div className={styles.cardsStack}>
            {/* Gold card (bottom) */}
            <div className={`${styles.card} ${styles.cardGold}`}>
              <div className={styles.cardChip}></div>
              <div className={styles.cardLogo}>Soomoja</div>
              <div className={styles.cardNetwork}></div>
              <div className={styles.cardNumber}>**** **** **** 4521</div>
              <div className={styles.cardExpiry}>12/28</div>
            </div>
            {/* Red card (middle) */}
            <div className={`${styles.card} ${styles.cardRed}`}>
              <div className={styles.cardChip}></div>
              <div className={styles.cardLogo}>Soomoja</div>
              <div className={styles.cardNetwork}></div>
              <div className={styles.cardNumber}>**** **** **** 7812</div>
              <div className={styles.cardExpiry}>09/27</div>
            </div>
            {/* Green card (top / front) */}
            <div className={`${styles.card} ${styles.cardGreen}`}>
              <div className={styles.cardTopRow}>
                <div className={styles.cardLogoIcon}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#52b788" strokeWidth="2">
                    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                </div>
                <div className={styles.cardLogoText}>Soomoja</div>
                <div className={styles.contactless}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5">
                    <path d="M5 12.5c1.5-2 4-3.5 7-3.5s5.5 1.5 7 3.5"/>
                    <path d="M8 15.5c1-1.5 2.5-2.5 4-2.5s3 1 4 2.5"/>
                    <circle cx="12" cy="18" r="1.2" fill="rgba(255,255,255,0.6)" stroke="none"/>
                  </svg>
                </div>
              </div>
              <div className={styles.cardChipRow}>
                <div className={styles.cardChipGold}></div>
              </div>
              <div className={styles.cardNumberLarge}>4532 •••• •••• 1289</div>
              <div className={styles.cardBottom}>
                <div>
                  <div className={styles.cardLabel}>CARD HOLDER</div>
                  <div className={styles.cardHolder}>Daniel Austin</div>
                </div>
                <div>
                  <div className={styles.cardLabel}>EXPIRES</div>
                  <div className={styles.cardHolder}>07/30</div>
                </div>
                <div className={styles.cardNetworkCircles}>
                  <div className={styles.circle1}></div>
                  <div className={styles.circle2}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
