import styles from './NewArrivals.module.css';

const bannerItems = [
  {
    id: 1,
    bg: '#1c3a35',
    title: "PlayStation 5",
    subtitle: "Black and White version of the\nPS5 coming out on sale.",
    size: 'large',
    textColor: '#fff',
  },
  {
    id: 2,
    bg: '#1a1a1a',
    title: "Women's Collections",
    subtitle: "Featured woman collections\nthat give you another vibe.",
    size: 'large',
    textColor: '#fff',
  },
  {
    id: 3,
    bg: '#f5f5f5',
    title: "Speakers",
    subtitle: "Amazon wireless speakers",
    size: 'small',
    textColor: '#1a1a1a',
  },
  {
    id: 4,
    bg: '#1a1a1a',
    title: "Perfume",
    subtitle: "GUCCI INTENSE OUD EDP",
    size: 'small',
    textColor: '#fff',
  },
];

export default function NewArrivals() {
  return (
    <section className={styles.section} id="new-arrivals">
      <div className="container">
        <div className={styles.labelRow}>
          <div className={styles.labelBar}></div>
          <span className={styles.labelText}>Featured</span>
        </div>

        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>New Arrival</h2>
        </div>

        <div className={styles.grid}>
          {/* Large left banner */}
          <div className={styles.featureLeft} style={{ background: bannerItems[0].bg }}>
            <div className={styles.featureContent} style={{ color: bannerItems[0].textColor }}>
              <h3 className={styles.featureTitle}>{bannerItems[0].title}</h3>
              <p className={styles.featureSubtitle}>{bannerItems[0].subtitle}</p>
              <a href="/products/playstation" className={styles.featureLink} id="arrivals-ps5">Shop Now</a>
            </div>
            {/* PS5 visual */}
            <div className={styles.featureImageLeft}>
              <div className={styles.ps5Art}>
                <svg viewBox="0 0 200 300" width="180" height="260" fill="none">
                  <ellipse cx="100" cy="150" rx="55" ry="100" fill="white" opacity="0.9"/>
                  <ellipse cx="100" cy="150" rx="35" ry="80" fill="#e0e0e0" opacity="0.8"/>
                  <rect x="85" y="60" width="30" height="180" rx="15" fill="white" opacity="0.7"/>
                  <circle cx="100" cy="280" r="18" fill="white" opacity="0.8"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className={styles.rightCol}>
            {/* Top right banner */}
            <div className={styles.featureTopRight} style={{ background: bannerItems[1].bg }}>
              <div className={styles.featureContent} style={{ color: bannerItems[1].textColor }}>
                <h3 className={styles.featureTitle}>{bannerItems[1].title}</h3>
                <p className={styles.featureSubtitle}>{bannerItems[1].subtitle}</p>
                <a href="/products/women" className={styles.featureLink} id="arrivals-women">Shop Now</a>
              </div>
              <div className={styles.featureImageRight}>
                <div className={styles.womenArt}>
                  <svg viewBox="0 0 120 160" width="140" height="180" fill="none">
                    <ellipse cx="60" cy="40" rx="25" ry="30" fill="#d4a0a0" opacity="0.8"/>
                    <path d="M35 80 Q20 120 25 160 L95 160 Q100 120 85 80 Q75 95 60 100 Q45 95 35 80Z" fill="#c07070" opacity="0.7"/>
                    <path d="M35 80 Q25 70 20 50 Q40 60 60 55 Q80 60 100 50 Q95 70 85 80" fill="#d4a0a0" opacity="0.8"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Bottom two smaller banners */}
            <div className={styles.bottomRow}>
              <div className={styles.featureSmall} style={{ background: bannerItems[2].bg }}>
                <div className={styles.featureContent} style={{ color: bannerItems[2].textColor }}>
                  <h3 className={`${styles.featureTitle} ${styles.featureTitleSmall}`}>{bannerItems[2].title}</h3>
                  <p className={styles.featureSubtitleSmall}>{bannerItems[2].subtitle}</p>
                  <a href="/products/speakers" className={styles.featureLinkDark} id="arrivals-speakers">Shop Now</a>
                </div>
                <div className={styles.featureSmallImg}>
                  <svg viewBox="0 0 80 100" width="80" height="100" fill="none">
                    <rect x="15" y="10" width="50" height="70" rx="8" fill="#888" opacity="0.7"/>
                    <circle cx="40" cy="50" r="18" fill="#555" opacity="0.8"/>
                    <circle cx="40" cy="50" r="8" fill="#222" opacity="0.9"/>
                    <circle cx="40" cy="20" r="6" fill="#666" opacity="0.7"/>
                  </svg>
                </div>
              </div>
              <div className={styles.featureSmall} style={{ background: bannerItems[3].bg }}>
                <div className={styles.featureContent} style={{ color: bannerItems[3].textColor }}>
                  <h3 className={`${styles.featureTitle} ${styles.featureTitleSmall}`}>{bannerItems[3].title}</h3>
                  <p className={styles.featureSubtitleSmall}>{bannerItems[3].subtitle}</p>
                  <a href="/products/perfume" className={styles.featureLink} id="arrivals-perfume">Shop Now</a>
                </div>
                <div className={styles.featureSmallImg}>
                  <svg viewBox="0 0 80 100" width="80" height="100" fill="none">
                    <rect x="28" y="30" width="24" height="55" rx="4" fill="#d4af37" opacity="0.9"/>
                    <rect x="32" y="18" width="16" height="14" rx="2" fill="#b8960e" opacity="0.8"/>
                    <rect x="36" y="10" width="8" height="10" rx="2" fill="#888" opacity="0.7"/>
                    <rect x="25" y="82" width="30" height="6" rx="3" fill="#b8960e" opacity="0.8"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
