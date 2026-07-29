'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './ExploreProducts.module.css';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  image: string;
  bgColor: string;
  isNew?: boolean;
}

const exploreProducts: Product[] = [
  { id: 201, name: 'Breed Dry Dog Food', price: 100, rating: 3, reviews: 35, image: '/bag.png', bgColor: '#f5f5f5' },
  { id: 202, name: 'CANON EOS DSLR Camera', price: 360, rating: 4, reviews: 95, image: '/watch.png', bgColor: '#f5f5f5' },
  { id: 203, name: 'ASUS FHD Gaming Laptop', price: 700, rating: 5, reviews: 325, image: '/shoes.png', bgColor: '#f5f5f5' },
  { id: 204, name: 'Curology Product Set', price: 500, rating: 4, reviews: 145, image: '/headphones.png', bgColor: '#f5f5f5' },
  { id: 205, name: 'Kids Electric Car', price: 960, originalPrice: 1100, discount: 15, rating: 5, reviews: 65, image: '/headphones.png', bgColor: '#f5f5f5', isNew: true },
  { id: 206, name: 'Jr. Zoom Soccer Cleats', price: 1160, originalPrice: 1300, rating: 5, reviews: 35, image: '/shoes.png', bgColor: '#f5f5f5', isNew: true },
  { id: 207, name: 'GP11 Shooter USB Gamepad', price: 660, originalPrice: 700, rating: 4.5, reviews: 55, image: '/watch.png', bgColor: '#f5f5f5' },
  { id: 208, name: 'Quilted Satin Jacket', price: 660, rating: 4.5, reviews: 55, image: '/bag.png', bgColor: '#f5f5f5', isNew: true },
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
    <div className={styles.card} id={`explore-${product.id}`}>
      <div className={styles.cardImageWrapper} style={{ background: product.bgColor }}>
        {product.discount && <span className={styles.badge}>-{product.discount}%</span>}
        {product.isNew && <span className={`${styles.badge} ${styles.badgeNew}`}>NEW</span>}
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
        <button className={styles.addToCart} id={`explore-cart-${product.id}`}>Add To Cart</button>
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

export default function ExploreProducts() {
  return (
    <section className={styles.section} id="explore-products">
      <div className="container">
        <div className={styles.labelRow}>
          <div className={styles.labelBar}></div>
          <span className={styles.labelText}>Our Products</span>
        </div>

        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Explore Our Products</h2>
        </div>

        <div className={styles.productGrid}>
          {exploreProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className={styles.viewAllWrapper}>
          <a href="/products" className={styles.viewAll} id="view-all-products">View All Products</a>
        </div>
      </div>
    </section>
  );
}
