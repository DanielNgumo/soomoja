'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './MostSelling.module.css';

const products = [
  {
    id: 1,
    name: 'Fujifilm Instax Mini 11',
    desc: 'Instant camera with automatic exposure',
    price: 69.95,
    rating: 4.5,
    reviews: 98,
    image: '/watch.png',
  },
  {
    id: 2,
    name: 'Citizen Promaster Diver',
    desc: 'Professional dive watch, 200m water resist.',
    price: 289.00,
    rating: 5,
    reviews: 212,
    image: '/watch.png',
  },
  {
    id: 3,
    name: 'Floral Print Sneakers',
    desc: 'Lightweight canvas with cushioned sole',
    price: 79.00,
    rating: 5,
    reviews: 145,
    image: '/shoes.png',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className={styles.stars}>
      {[1,2,3,4,5].map((s) => (
        <svg key={s} width="10" height="10" viewBox="0 0 24 24"
          fill={s <= Math.floor(rating) ? '#1a933d' : 'none'}
          stroke="#1a933d" strokeWidth="1.5">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
        </svg>
      ))}
    </div>
  );
}

export default function MostSelling() {
  const [wishlisted, setWishlisted] = useState<number[]>([]);
  const toggle = (id: number) =>
    setWishlisted((p) => p.includes(id) ? p.filter((x) => x !== id) : [...p, id]);

  return (
    <section className={styles.section} id="most-selling">
      <div className="container">
        <h2 className={styles.sectionTitle}>Most Selling Products</h2>
        <div className={styles.grid}>
          {products.map((p) => (
            <div key={p.id} className={styles.card}>
              <div className={styles.imgWrap}>
                <Image src={p.image} alt={p.name} fill style={{ objectFit: 'contain', padding: '32px' }} />
                <button
                  className={`${styles.wish} ${wishlisted.includes(p.id) ? styles.wishActive : ''}`}
                  onClick={() => toggle(p.id)}
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
                <div className={styles.titleRow}>
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
          ))}
        </div>
      </div>
    </section>
  );
}
