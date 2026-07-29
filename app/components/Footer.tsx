import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className="container">
        <div className={styles.grid}>
          {/* Brand column */}
          <div className={styles.col}>
            <a href="/" className={styles.logo}>Soomoja</a>
            <p className={styles.logoTagline}>Subscribe</p>
            <p className={styles.subscribeText}>Get 10% off your first order</p>
            <div className={styles.subscribeForm}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.emailInput}
                id="footer-email"
                aria-label="Email address for newsletter"
              />
              <button className={styles.subscribeBtn} id="subscribe-btn" aria-label="Subscribe to newsletter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Support column */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Support</h3>
            <address className={styles.address}>
              111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.
            </address>
            <a href="mailto:exclusive@gmail.com" className={styles.footerLink}>exclusive@gmail.com</a>
            <a href="tel:+88015888889999" className={styles.footerLink}>+88015-88888-9999</a>
          </div>

          {/* Account column */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Account</h3>
            <nav className={styles.linkList}>
              {['My Account', 'Login / Register', 'Cart', 'Wishlist', 'Shop'].map((link) => (
                <a key={link} href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className={styles.footerLink}>{link}</a>
              ))}
            </nav>
          </div>

          {/* Quick Links column */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Quick Link</h3>
            <nav className={styles.linkList}>
              {['Privacy Policy', 'Terms Of Use', 'FAQ', 'Contact'].map((link) => (
                <a key={link} href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className={styles.footerLink}>{link}</a>
              ))}
            </nav>
          </div>

          {/* Download column */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Download App</h3>
            <p className={styles.appText}>Save $3 with App New User Only</p>
            <div className={styles.qrRow}>
              <div className={styles.qrCode}>
                {/* QR code placeholder */}
                <svg viewBox="0 0 60 60" width="80" height="80">
                  <rect x="2" y="2" width="22" height="22" rx="2" fill="#1a1a1a"/>
                  <rect x="6" y="6" width="14" height="14" rx="1" fill="#fff"/>
                  <rect x="9" y="9" width="8" height="8" fill="#1a1a1a"/>
                  <rect x="36" y="2" width="22" height="22" rx="2" fill="#1a1a1a"/>
                  <rect x="40" y="6" width="14" height="14" rx="1" fill="#fff"/>
                  <rect x="43" y="9" width="8" height="8" fill="#1a1a1a"/>
                  <rect x="2" y="36" width="22" height="22" rx="2" fill="#1a1a1a"/>
                  <rect x="6" y="40" width="14" height="14" rx="1" fill="#fff"/>
                  <rect x="9" y="43" width="8" height="8" fill="#1a1a1a"/>
                  <rect x="30" y="30" width="4" height="4" fill="#1a1a1a"/>
                  <rect x="36" y="30" width="4" height="4" fill="#1a1a1a"/>
                  <rect x="42" y="30" width="4" height="4" fill="#1a1a1a"/>
                  <rect x="48" y="30" width="4" height="4" fill="#1a1a1a"/>
                  <rect x="30" y="36" width="4" height="4" fill="#1a1a1a"/>
                  <rect x="42" y="36" width="4" height="4" fill="#1a1a1a"/>
                  <rect x="30" y="42" width="4" height="4" fill="#1a1a1a"/>
                  <rect x="36" y="42" width="4" height="4" fill="#1a1a1a"/>
                  <rect x="48" y="42" width="4" height="4" fill="#1a1a1a"/>
                  <rect x="30" y="48" width="4" height="4" fill="#1a1a1a"/>
                  <rect x="42" y="48" width="4" height="4" fill="#1a1a1a"/>
                  <rect x="48" y="48" width="4" height="4" fill="#1a1a1a"/>
                </svg>
              </div>
              <div className={styles.appButtons}>
                <a href="#" className={styles.appBtn} id="google-play-btn">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M3.18 23.76c.38.21.82.24 1.24.07L15.54 12 4.42.17C4.02.01 3.57.04 3.18.24 2.46.65 2 1.43 2 2.28v19.44c0 .85.46 1.63 1.18 2.04zm15.46-11.69l-2.52-2.52-9.44 9.44 9.44 9.44 2.52-2.52A2.5 2.5 0 0 0 19.17 24V8.57a2.5 2.5 0 0 0-2.53 3.5z"/></svg>
                  <div>
                    <span className={styles.appBtnSub}>GET IN ON</span>
                    <span className={styles.appBtnMain}>Google Play</span>
                  </div>
                </a>
                <a href="#" className={styles.appBtn} id="app-store-btn">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  <div>
                    <span className={styles.appBtnSub}>Download on the</span>
                    <span className={styles.appBtnMain}>App Store</span>
                  </div>
                </a>
              </div>
            </div>
            <div className={styles.socials}>
              {[
                { name: 'Facebook', href: '#facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
                { name: 'Twitter', href: '#twitter', path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' },
                { name: 'Instagram', href: '#instagram', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M7.3 21H16.7C19.61 21 21 19.61 21 16.7V7.3C21 4.39 19.61 3 16.7 3H7.3C4.39 3 3 4.39 3 7.3V16.7C3 19.61 4.39 21 7.3 21z' },
                { name: 'LinkedIn', href: '#linkedin', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
              ].map((social) => (
                <a key={social.name} href={social.href} className={styles.socialLink} aria-label={social.name} id={`social-${social.name.toLowerCase()}`}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={social.path}/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.bottomLine}></div>
          <p className={styles.copyright}>© Copyright Soomoja {new Date().getFullYear()}. All right reserved</p>
        </div>
      </div>
    </footer>
  );
}
