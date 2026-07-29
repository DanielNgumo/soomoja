import styles from './Brands.module.css';

const brands = [
  { id: 1, name: 'Staples', delivery: 'Delivery with in 24 hours', color: '#cc0000', short: 'Staples' },
  { id: 2, name: 'Sprouts', delivery: 'Delivery with in 24 hours', color: '#1a7532', short: 'Sprouts' },
  { id: 3, name: 'Grocery outlet', delivery: 'Delivery with in 24 hours', color: '#b31b2c', short: 'Grocery' },
  { id: 4, name: 'Mollie stones', delivery: 'Delivery with in 24 hours', color: '#000000', short: 'Mollie' },
  { id: 5, name: 'Sports Basement', delivery: 'Delivery with in 24 hours', color: '#1a933d', short: 'Sports' },
  { id: 6, name: 'Container Store', delivery: 'Delivery with in 24 hours', color: '#005b9f', short: 'Container' },
  { id: 7, name: 'Target', delivery: 'Delivery with in 24 hours', color: '#cc0000', short: 'Target' },
  { id: 8, name: 'Bevmo!', delivery: 'Delivery with in 24 hours', color: '#cc1d24', short: 'Bevmo' },
];

export default function Brands() {
  return (
    <section className={styles.section} id="brands">
      <div className="container">
        <h2 className={styles.sectionTitle}>Choose By Brand</h2>
        <div className={styles.grid}>
          {brands.map((brand) => (
            <div key={brand.id} className={styles.card}>
              <div className={styles.logoCircle} style={{ backgroundColor: brand.color }}>
                <span className={styles.logoText}>{brand.short}</span>
              </div>
              <div className={styles.info}>
                <h3 className={styles.brandName}>{brand.name}</h3>
                <p className={styles.delivery}>{brand.delivery}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
