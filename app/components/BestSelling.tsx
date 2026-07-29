'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './BestSelling.module.css';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  bgColor: string;
  isNew?: boolean;
}

const bestProducts: Product[] = [
  {
    id: 101,
    name: 'The north coat',
    price: 260,
    originalPrice: 360,
    rating: 5,
    reviews: 65,
    image: '/headphones.png',
    bgColor: '#f5f5f5',
  },
  {
    id: 102,
    name: 'Gucci duffle bag',
    price: 960,
    originalPrice: 1160,
    rating: 4.5,
    reviews: 50,
    image: '/bag.png',
    bgColor: '#f5f5f5',
  },
  {
    id: 103,
    name: 'RGB liquid CPU Cooler',
    price: 160,
    originalPrice: 170,
    rating: 4.5,
    reviews: 88,
    image: '/watch.png',
    bgColor: '#f5f5f5',
    isNew: true,
  },
  {
    id: 104,
    name: 'Small BookSelf',
    price: 360,
    rating: 5,
    reviews: 99,
    image: '/shoes.png',
    bgColor: '#f5f5f5',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className={styles.stars} aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} width="14" height="14" viewBox="0 0 24 24" fill={star <= Math.floor(rating) ? '#FFAD33' : 'none'} stroke="#FFAD33" strokeWidth="1.5">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
        </svg>
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className={styles.card} id={`best-product-${product.id}`}>
      <div className={styles.cardImageWrapper} style={{ background: product.bgColor }}>
        {product.isNew && <span className={styles.badgeNew}>NEW</span>}
        <div className={styles.cardImage}>
          <Image src={product.image} alt={product.name} fill style={{ objectFit: 'contain', padding: '20px' }} />
        </div>
        <div className={styles.cardActions}>
          <button
            className={`${styles.cardAction} ${isWishlisted ? styles.wishlisted : ''}`}
            onClick={() => setIsWishlisted(!isWishlisted)}
            aria-label="Add to wishlist"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill={isWishlisted ? '#db4444' : 'none'} stroke={isWishlisted ? '#db4444' : 'currentColor'} strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
          <button className={styles.cardAction} aria-label="Quick view">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </button>
        </div>
        <button className={styles.addToCart} id={`best-cart-${product.id}`}>Add To Cart</button>
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.productName}>{product.name}</h3>
        <div className={styles.priceRow}>
          <span className={styles.price}>${product.price}</span>
          {product.originalPrice && <span className={styles.originalPrice}>${product.originalPrice}</span>}
        </div>
        <div className={styles.ratingRow}>
          <StarRating rating={product.rating} />
          <span className={styles.reviewCount}>({product.reviews})</span>
        </div>
      </div>
    </div>
  );
}

export default function BestSelling() {
  return (
    <section className={styles.section} id="best-selling">
      <div className="container">
        <div className={styles.labelRow}>
          <div className={styles.labelBar}></div>
          <span className={styles.labelText}>This Month</span>
        </div>

        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Best Selling Products</h2>
          <a href="/best-selling" className={styles.viewAll} id="view-all-best">View All</a>
        </div>

        <div className={styles.productGrid}>
          {bestProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
