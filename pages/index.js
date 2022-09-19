import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import Properties from '@/components/Properties';

export default function HomePage() {
  return (
    <Layout title='Reits Africa | Home'>
      <Hero />
      <Properties />
    </Layout>
  );
}
