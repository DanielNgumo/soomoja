import styles from './ServiceBadges.module.css';

const services = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
        <path d="M5 12.5l5 5L19 7.5"/><circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'FREE AND FAST DELIVERY',
    desc: 'Free delivery for all orders over $140',
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    title: '24/7 CUSTOMER SERVICE',
    desc: 'Friendly 24/7 customer support',
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'MONEY BACK GUARANTEE',
    desc: 'We return money within 30 days',
  },
];

export default function ServiceBadges() {
  return (
    <section className={styles.section} id="services">
      <div className="container">
        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                <div className={styles.iconBg}>
                  {service.icon}
                </div>
              </div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.desc}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
