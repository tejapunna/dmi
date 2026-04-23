import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsStats from './components/MetricsStats';
import EntertainmentSection from './components/EntertainmentSection';
import AboutUsSection from './components/AboutUsSection';
import TrustBar from './components/TrustBar';
import WhoWeAre from './components/WhoWeAre';
import CoreAdvantage from './components/CoreAdvantage';
import CustomerReviews from './components/CustomerReviews';
import WhyChooseUs from './components/WhyChooseUs';
import Metrics from './components/Metrics';
// import HomeContact from './components/HomeContact';
import Services from './components/Services';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <HomeContact /> */}
      {/* <MetricsStats /> */}
      <EntertainmentSection />
      <AboutUsSection />
      <WhoWeAre />
      {/* <HomeContact /> */}
      <Services />
      <WhyChooseUs />
      <Metrics />
      {/* <HomeContact /> */}
      <CoreAdvantage />
      {/* <CustomerReviews /> */}
      <TrustBar />
      <CTASection />
      <Footer />
    </main>
  );
}
