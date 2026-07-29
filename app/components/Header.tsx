'use client';

import { useState } from 'react';
import styles from './Header.module.css';

const navCategories = [
  "Electronics",
  "Fashion",
  "Home & Furniture",
  "Books",
  "Sports",
  "Beauty",
  "Groceries",
  "Toys",
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <>
      {/* ── Top utility bar ── */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarInner}`}>
          <a href="tel:+0012345678890" className={styles.phone} id="phone-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.86-.86a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            +001234567890
          </a>
          <div className={styles.topPromo}>
            Get 50% Off on Selected Items &nbsp;|&nbsp;
            <a href="/deals" className={styles.topPromoLink} id="top-shop-now">Shop Now</a>
          </div>
          <div className={styles.topRight}>
            <button className={styles.topDropBtn} id="lang-btn">
              Eng
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={styles.topDropBtn} id="location-btn">
              Location
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── Main header ── */}
      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          {/* Logo */}
          <a href="/" className={styles.logo} id="logo-link">
            <div className={styles.logoIcon}>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#1a4731" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                {/* Orange inside basket */}
                <circle cx="14" cy="11" r="3" fill="#f5a623" stroke="none"></circle>
                <path d="M14 8v3" stroke="#f5a623" strokeWidth="2"></path>
              </svg>
            </div>
            <span className={styles.logoText}>Soomoja</span>
          </a>

          {/* Navigation */}
          <nav className={styles.nav} aria-label="Main navigation">
            <div className={styles.catWrapper}>
              <button
                className={styles.navLink}
                onClick={() => setCatOpen(!catOpen)}
                id="category-dropdown-btn"
                aria-expanded={catOpen}
              >
                Category
                <svg width="13" height="13" viewBox="0 0 12 12" fill="none" className={catOpen ? styles.chevronUp : ''}>
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {catOpen && (
                <div className={styles.dropdown}>
                  {navCategories.map((cat) => (
                    <a key={cat} href={`/category/${cat.toLowerCase().replace(/\s+/g, '-')}`} className={styles.dropItem}>
                      {cat}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="/deals" className={styles.navLink}>Deals</a>
            <a href="/new" className={styles.navLink}>What&apos;s New</a>
            <a href="/delivery" className={styles.navLink}>Delivery</a>
          </nav>

          {/* Search */}
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search Product"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={styles.searchInput}
              id="search-input"
              aria-label="Search products"
            />
            <button className={styles.searchBtn} id="search-btn" aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
          </div>

          {/* Right actions */}
          <div className={styles.actions}>
            <a href="/account" className={styles.actionBtn} id="account-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <span>Account</span>
            </a>
            <a href="/cart" className={styles.actionBtn} id="cart-btn">
              <div className={styles.cartWrap}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
              </div>
              <span>Cart</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="hamburger-btn"
          >
            <span className={`${styles.bar} ${menuOpen ? styles.bar1 : ''}`}></span>
            <span className={`${styles.bar} ${menuOpen ? styles.bar2 : ''}`}></span>
            <span className={`${styles.bar} ${menuOpen ? styles.bar3 : ''}`}></span>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
          <div className={styles.mobileSearch}>
            <input type="text" placeholder="Search Product" className={styles.mobileSearchInput} aria-label="Mobile search"/>
          </div>
          <nav className={styles.mobileNav}>
            <a href="/category" className={styles.mobileLink}>Category</a>
            <a href="/deals" className={styles.mobileLink}>Deals</a>
            <a href="/new" className={styles.mobileLink}>What&apos;s New</a>
            <a href="/delivery" className={styles.mobileLink}>Delivery</a>
            <a href="/account" className={styles.mobileLink}>Account</a>
            <a href="/cart" className={styles.mobileLink}>Cart</a>
          </nav>
        </div>
      </header>
    </>
  );
}
