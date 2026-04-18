import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsStats from './components/MetricsStats';
import TrustBar from './components/TrustBar';
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
      <TrustBar />
      <Services />
      <Metrics />
      <TeamTree />
      <CTASection />
      <Footer />
    </main>
  );
}
