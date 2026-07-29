'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './FlashSale.module.css';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
}

const deals: Product[] = [
  {
    id: 1,
    name: 'Apple HomePod mini – Space Gray',
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    rating: 4.5,
    reviews: 128,
    image: '/headphones.png',
    category: 'Electronics',
  },
  {
    id: 2,
    name: 'Fujifilm Instax Mini 11 Camera',
    price: 69.95,
    originalPrice: 89.95,
    discount: 22,
    rating: 4.7,
    reviews: 245,
    image: '/watch.png',
    category: 'Photography',
  },
  {
    id: 3,
    name: 'Waterproof Outdoor Duffel Bag',
    price: 49.00,
    originalPrice: 65.00,
    discount: 25,
    rating: 4.3,
    reviews: 87,
    image: '/bag.png',
    category: 'Travel',
  },
  {
    id: 4,
    name: 'Nike Air Zoom Running Shoes',
    price: 89.99,
    originalPrice: 119.99,
    discount: 25,
    rating: 4.8,
    reviews: 312,
    image: '/shoes.png',
    category: 'Sneakers',
  },
  {
    id: 5,
    name: 'Sony WH-1000XM5 Headphones',
    price: 279.99,
    originalPrice: 349.99,
    discount: 20,
    rating: 4.9,
    reviews: 598,
    image: '/headphones.png',
    category: 'Audio',
  },
  {
    id: 6,
    name: 'Apple Watch Series 9 GPS',
    price: 329.00,
    originalPrice: 399.00,
    discount: 18,
    rating: 4.6,
    reviews: 421,
    image: '/watch.png',
    category: 'Wearables',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className={styles.stars} aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} width="13" height="13" viewBox="0 0 24 24"
          fill={star <= Math.floor(rating) ? '#f5a623' : star - 0.5 <= rating ? '#f5a623' : 'none'}
          stroke="#f5a623" strokeWidth="1.5">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
        </svg>
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className={styles.card} id={`deal-${product.id}`}>
      {/* Image area */}
      <div className={styles.imageWrap}>
        <div className={styles.img}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: 'contain', padding: '24px' }}
          />
        </div>
        {product.discount && (
          <span className={styles.discountBadge}>-{product.discount}%</span>
        )}
        <button
          className={`${styles.wishBtn} ${wishlisted ? styles.wishBtnActive : ''}`}
          onClick={() => setWishlisted(!wishlisted)}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <svg width="18" height="18" viewBox="0 0 24 24"
            fill={wishlisted ? '#e53e3e' : 'none'}
            stroke={wishlisted ? '#e53e3e' : '#888'}
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>

      {/* Info area */}
      <div className={styles.info}>
        <span className={styles.category}>{product.category}</span>
        <h3 className={styles.name}>{product.name}</h3>
        <div className={styles.ratingRow}>
          <StarRating rating={product.rating} />
          <span className={styles.reviewCount}>({product.reviews})</span>
        </div>
        <div className={styles.priceRow}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className={styles.oldPrice}>${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        <button className={styles.addBtn} id={`add-${product.id}`}>Add to Cart</button>
      </div>
    </div>
  );
}

export default function FlashSale() {
  return (
    <section className={styles.section} id="deals">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Todays Best Deals For You!</h2>
          <a href="/deals" className={styles.viewAll} id="view-all-deals">View All</a>
        </div>

        <div className={styles.grid}>
          {deals.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
