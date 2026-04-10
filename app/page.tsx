import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Metrics from './components/Metrics';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import TeamTree from './components/TeamTree';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Metrics />
      <Services />
      <TeamTree />
      <CaseStudies />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
