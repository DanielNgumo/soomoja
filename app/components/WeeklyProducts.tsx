'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './WeeklyProducts.module.css';

const products = [
  {
    id: 1,
    name: 'Gaming Headphone',
    desc: 'Table with air purifier, stained veneer/black',
    price: 239.00,
    rating: 5,
    reviews: 121,
    image: '/headphones.png'
  },
  {
    id: 2,
    name: 'Base Camp Duffel M',
    desc: 'Table with air purifier, stained veneer/black',
    price: 159.00,
    rating: 4.5,
    reviews: 121,
    image: '/bag.png'
  },
  {
    id: 3,
    name: 'Tomford Watch',
    desc: 'Table with air purifier, stained veneer/black',
    price: 39.00,
    rating: 5,
    reviews: 121,
    image: '/watch.png'
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className={styles.stars} aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} width="10" height="10" viewBox="0 0 24 24"
          fill={star <= Math.floor(rating) ? '#1a933d' : star - 0.5 <= rating ? '#1a933d' : 'none'}
          stroke="#1a933d" strokeWidth="1.5">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
        </svg>
      ))}
    </div>
  );
}

export default function WeeklyProducts() {
  return (
    <section className={styles.section} id="weekly-products">
      <div className="container">
        <h2 className={styles.sectionTitle}>Weekly Popular Products</h2>
        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'contain', padding: '32px' }}
                />
                <button className={styles.wishBtn} aria-label="Add to wishlist">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
              </div>
              
              <div className={styles.info}>
                <div className={styles.titleRow}>
                  <h3 className={styles.name}>{product.name}</h3>
                  <span className={styles.price}>
                    <span className={styles.dollar}>$</span>
                    {product.price.toFixed(2)}
                  </span>
                </div>
                <p className={styles.desc}>{product.desc}</p>
                
                <div className={styles.ratingRow}>
                  <StarRating rating={product.rating} />
                  <span className={styles.reviewCount}>({product.reviews})</span>
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
