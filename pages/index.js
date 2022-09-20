import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Invest from '@/components/Invest';
import Layout from '@/components/Layout';
import Properties from '@/components/Properties';
import Services from '@/components/Services';

export default function HomePage() {
  return (
    <Layout title='Reits Africa | Home'>
      <Hero />
      <Properties />
      <Invest />
      <Services />
      <Footer />
    </Layout>
  );
}
