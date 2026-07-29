import styles from './TrendingProducts.module.css';

const items = [
  {
    id: 1,
    title: 'Furniture Village',
    delivery: 'Delivery with in 24 hours',
    bg: '#e8c832',
    accentBg: '#4dbfb8',
  },
  {
    id: 2,
    title: 'Fashion World',
    delivery: 'Delivery with in 24 hours',
    bg: '#e8d0c4',
    accentBg: '#c8a090',
  },
];

export default function TrendingProducts() {
  return (
    <section className={styles.section} id="trending-products">
      <div className="container">
        <h2 className={styles.sectionTitle}>Trending Products For You!</h2>
        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item.id} className={styles.card}>
              {/* Illustrated scene as card background */}
              <div className={styles.imgArea} style={{ background: item.bg }}>
                {item.id === 1 ? (
                  /* Living room scene */
                  <div className={styles.roomScene}>
                    <div className={styles.roomWallTeal} style={{ background: item.accentBg }}></div>
                    <div className={styles.roomSofa}>
                      <div className={styles.sofaBack}></div>
                      <div className={styles.sofaSeat}></div>
                    </div>
                    <div className={styles.roomCushion1}></div>
                    <div className={styles.roomCushion2}></div>
                    <div className={styles.roomCushion3}></div>
                    <div className={styles.roomLamp}>
                      <div className={styles.lampShade}></div>
                      <div className={styles.lampPole}></div>
                      <div className={styles.lampBase}></div>
                    </div>
                    <div className={styles.roomTable}></div>
                    <div className={styles.roomPlant}>
                      <div className={styles.plantBody}></div>
                      <div className={styles.plantStem}></div>
                    </div>
                  </div>
                ) : (
                  /* Fashion / clothing rack scene */
                  <div className={styles.fashionScene}>
                    <div className={styles.fashionWall} style={{ background: item.accentBg }}></div>
                    <div className={styles.rack}>
                      <div className={styles.rackBar}></div>
                      <div className={styles.rackPole}></div>
                      <div className={styles.rackBase}></div>
                      {/* Hanging garments */}
                      {['#f5c518', '#e07b30', '#c83244', '#2d6a4f', '#f5a030', '#1a4731', '#d4a200'].map((color, i) => (
                        <div key={i} className={styles.garment} style={{ background: color, left: `${12 + i * 13}%` }}></div>
                      ))}
                      {/* Hat on top */}
                      <div className={styles.hat}></div>
                    </div>
                  </div>
                )}
              </div>
              {/* Card footer */}
              <div className={styles.cardInfo}>
                <div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDelivery}>{item.delivery}</p>
                </div>
                <a
                  href={`/category/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className={styles.shopBtn}
                  id={`trending-${item.id}`}
                >
                  Shop Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
