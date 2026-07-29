import Image from 'next/image';
import styles from './DiscountBanners.module.css';

const banners = [
  {
    id: 1,
    save: '100',
    desc: 'Explore Our Furniture & Home Furnishing Range',
    bg: '#f3e6d8',
    image: '/headphones.png'
  },
  {
    id: 2,
    save: '29',
    desc: 'Explore Our Furniture & Home Furnishing Range',
    bg: '#f8d7da',
    image: '/bag.png'
  },
  {
    id: 3,
    save: '67',
    desc: 'Explore Our Furniture & Home Furnishing Range',
    bg: '#e8d5c4',
    image: '/shoes.png'
  },
  {
    id: 4,
    save: '59',
    desc: 'Explore Our Furniture & Home Furnishing Range',
    bg: '#d1f2eb',
    image: '/watch.png'
  }
];

export default function DiscountBanners() {
  return (
    <section className={styles.section} id="discount-banners">
      <div className="container">
        <h2 className={styles.sectionTitle}>Get Up To 70% Off</h2>
        <div className={styles.grid}>
          {banners.map((banner) => (
            <div key={banner.id} className={styles.card} style={{ backgroundColor: banner.bg }}>
              <div className={styles.textContent}>
                <span className={styles.saveText}>Save</span>
                <div className={styles.priceRow}>
                  <span className={styles.dollar}>$</span>
                  <span className={styles.amount}>{banner.save}</span>
                </div>
                <p className={styles.desc}>{banner.desc}</p>
              </div>
              <div className={styles.imageWrap}>
                <Image
                  src={banner.image}
                  alt="Product"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
