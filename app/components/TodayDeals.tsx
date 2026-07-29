'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './TodayDeals.module.css';

const categories = ['Gadgets', 'Fashion', 'Toys', 'Education', 'Beauty', 'Fitness', 'Furniture', 'Sneakers'];

const allProducts = [
  {
    id: 1,
    name: 'Laptop Sleeve MacBook',
    desc: 'Organic Cotton, fairtrade certified',
    price: 59.00,
    rating: 5,
    reviews: 121,
    image: '/bag.png',
    category: 'Gadgets',
  },
  {
    id: 2,
    name: 'AirPods Max',
    desc: 'A perfect balance of high-fidelity audio',
    price: 559.00,
    rating: 5,
    reviews: 121,
    image: '/headphones.png',
    category: 'Gadgets',
  },
  {
    id: 3,
    name: 'Flower Laptop Sleeve',
    desc: '15 in. x 10 in. -Flap top closure',
    price: 39.00,
    rating: 5,
    reviews: 121,
    image: '/bag.png',
    category: 'Fashion',
  },
  {
    id: 4,
    name: 'Supreme Water Bottle',
    desc: 'Table with air purifier, stained veneer/black',
    price: 19.00,
    rating: 5,
    reviews: 121,
    image: '/watch.png',
    category: 'Fitness',
  },
  {
    id: 5,
    name: 'Nike Air Max Sneakers',
    desc: 'Cushioned sole with mesh upper',
    price: 129.00,
    rating: 5,
    reviews: 98,
    image: '/shoes.png',
    category: 'Sneakers',
  },
  {
    id: 6,
    name: 'Vintage Leather Bag',
    desc: 'Handcrafted genuine leather',
    price: 89.00,
    rating: 4,
    reviews: 76,
    image: '/bag.png',
    category: 'Fashion',
  },
  {
    id: 7,
    name: 'Smart Watch Pro',
    desc: 'AMOLED display, GPS tracking',
    price: 249.00,
    rating: 5,
    reviews: 210,
    image: '/watch.png',
    category: 'Gadgets',
  },
  {
    id: 8,
    name: 'Wireless Headphones',
    desc: 'Active noise cancellation, 30hr battery',
    price: 179.00,
    rating: 5,
    reviews: 334,
    image: '/headphones.png',
    category: 'Gadgets',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className={styles.stars}>
      {[1,2,3,4,5].map((s) => (
        <svg key={s} width="11" height="11" viewBox="0 0 24 24"
          fill={s <= rating ? '#1a933d' : 'none'}
          stroke="#1a933d" strokeWidth="1.5">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
        </svg>
      ))}
    </div>
  );
}

export default function TodayDeals() {
  const [active, setActive] = useState('Gadgets');
  const [wishlisted, setWishlisted] = useState<number[]>([]);

  const filtered = allProducts.filter((p) => p.category === active).slice(0, 4);

  const toggleWish = (id: number) =>
    setWishlisted((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);

  return (
    <section className={styles.section} id="today-deals">
      <div className="container">
        <div className={styles.topRow}>
          <h2 className={styles.sectionTitle}>Todays Best Deals For You!</h2>
        </div>

        {/* Filter pills */}
        <div className={styles.pills}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.pill} ${active === cat ? styles.pillActive : ''}`}
              onClick={() => setActive(cat)}
              id={`deal-cat-${cat.toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className={styles.grid}>
          {filtered.length > 0 ? filtered.map((p) => (
            <div key={p.id} className={styles.card}>
              <div className={styles.imgWrap}>
                <Image src={p.image} alt={p.name} fill style={{ objectFit: 'contain', padding: '28px' }} />
                <button
                  className={`${styles.wish} ${wishlisted.includes(p.id) ? styles.wishActive : ''}`}
                  onClick={() => toggleWish(p.id)}
                  aria-label="Wishlist"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24"
                    fill={wishlisted.includes(p.id) ? '#e53e3e' : 'none'}
                    stroke={wishlisted.includes(p.id) ? '#e53e3e' : '#999'}
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
              </div>
              <div className={styles.info}>
                <div className={styles.nameRow}>
                  <h3 className={styles.name}>{p.name}</h3>
                  <span className={styles.price}><sup>$</sup>{p.price.toFixed(2)}</span>
                </div>
                <p className={styles.desc}>{p.desc}</p>
                <div className={styles.ratingRow}>
                  <StarRating rating={p.rating} />
                  <span className={styles.reviews}>({p.reviews})</span>
                </div>
                <button className={styles.addBtn}>Add to Cart</button>
              </div>
            </div>
          )) : (
            /* Fallback – show 4 cards from all products */
            allProducts.slice(0, 4).map((p) => (
              <div key={p.id} className={styles.card}>
                <div className={styles.imgWrap}>
                  <Image src={p.image} alt={p.name} fill style={{ objectFit: 'contain', padding: '28px' }} />
                  <button className={styles.wish} aria-label="Wishlist">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  </button>
                </div>
                <div className={styles.info}>
                  <div className={styles.nameRow}>
                    <h3 className={styles.name}>{p.name}</h3>
                    <span className={styles.price}><sup>$</sup>{p.price.toFixed(2)}</span>
                  </div>
                  <p className={styles.desc}>{p.desc}</p>
                  <div className={styles.ratingRow}>
                    <StarRating rating={p.rating} />
                    <span className={styles.reviews}>({p.reviews})</span>
                  </div>
                  <button className={styles.addBtn}>Add to Cart</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
