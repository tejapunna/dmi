import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsStats from './components/MetricsStats';
import EntertainmentSection from './components/EntertainmentSection';
import TrustBar from './components/TrustBar';
import WhoWeAre from './components/WhoWeAre';
import CoreAdvantage from './components/CoreAdvantage';
import TeamSpotlight from './components/TeamSpotlight';
import CustomerReviews from './components/CustomerReviews';
import WhyChooseUs from './components/WhyChooseUs';
import Metrics from './components/Metrics';
import Services from './components/Services';
import TeamTree from './components/TeamTree';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MetricsStats />
      <EntertainmentSection />
      <TrustBar />
      <WhoWeAre />
      <CustomerReviews />
      <CoreAdvantage />
      <TeamSpotlight />
      <WhyChooseUs />
      <Services />
      <Metrics />
      <TeamTree />
      <CTASection />
      <Footer />
    </main>
  );
}
