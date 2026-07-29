import Image from 'next/image';
import styles from './Categories.module.css';

const categories = [
  {
    id: 1,
    name: 'Furniture',
    bg: '#3d9e8c',   // teal green
    image: '/shoes.png',
  },
  {
    id: 2,
    name: 'Hand Bag',
    bg: '#f0a500',   // amber
    image: '/bag.png',
  },
  {
    id: 3,
    name: 'Books',
    bg: '#9b2335',   // dark red
    image: '/headphones.png',
  },
  {
    id: 4,
    name: 'Tech',
    bg: '#1e8c3a',   // green
    image: '/watch.png',
  },
  {
    id: 5,
    name: 'Sneakers',
    bg: '#e8789a',   // pink
    image: '/shoes.png',
  },
  {
    id: 6,
    name: 'Travel',
    bg: '#f5a623',   // orange
    image: '/bag.png',
  },
];

export default function Categories() {
  return (
    <section className={styles.section} id="categories">
      <div className="container">
        <h2 className={styles.sectionTitle}>Shop Our Top Categories</h2>

        <div className={styles.grid}>
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`/category/${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
              className={styles.card}
              id={`cat-card-${cat.id}`}
              style={{ background: cat.bg }}
            >
              <div className={styles.cardImage}>
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  style={{ objectFit: 'contain', padding: '16px' }}
                />
              </div>
              <div className={styles.cardOverlay}>
                <span className={styles.cardName}>{cat.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
