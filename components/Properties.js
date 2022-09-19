import FeaturedProperties from './FeaturedProperties';
import SectionTitle from './SectionTitle';

export default function Properties() {
  return (
    <section className='px-5 md:px-12 pt-16 md:pt-20 min-h-screen'>
      <SectionTitle
        title='Featured Properties'
        text='Finest selection of JV properties'
      />

      <FeaturedProperties />
    </section>
  );
}
