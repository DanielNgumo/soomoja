import Header from './components/Header';
import Hero from './components/Hero';
import FlashSale from './components/FlashSale';
import Categories from './components/Categories';
import Brands from './components/Brands';
import DiscountBanners from './components/DiscountBanners';
import WeeklyProducts from './components/WeeklyProducts';
import CashBackBanner from './components/CashBackBanner';
import TodayDeals from './components/TodayDeals';
import CashBackCards from './components/CashBackCards';
import MostSelling from './components/MostSelling';
import TrendingProducts from './components/TrendingProducts';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Categories />
      <FlashSale />
      <Brands />
      <DiscountBanners />
      <WeeklyProducts />
      {/* ── New sections ── */}
      <CashBackBanner />
      <TodayDeals />
      <CashBackCards />
      <MostSelling />
      <TrendingProducts />
      <Footer />
    </main>
  );
}
