// app/page.tsx
import Hero from './pages/hero';
import Travelling from './pages/travelling';
import AboutSection from './pages/about';
import Packages from './pages/packages';
import Traveller from './pages/traveller';
import Expert from './pages/expert';
import Work from './pages/work';
import TaxiService from './pages/taxiService';
import ExpertAgain from './pages/expertAgain';
import Choose from './pages/choose';
import Faq from './pages/faq';
import Footer from './pages/footer';

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="packages">
        <Packages />
      </section>
      <section id="destinations">
        <Traveller />
      </section>
      <section id="services">
        <Expert />
        <Work />
        <TaxiService />
        <ExpertAgain />
        <Choose />
      </section>
      <section id="contact">
        <Faq />
      </section>
      <Footer />
    </>
  );
}