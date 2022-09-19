import SectionTitle from './SectionTitle';
import { services } from 'data';

export default function Services() {
  return (
    <section className='px-5 md:px-12 mt-16 md:mt-20'>
      <div className='lg:w-2/5'>
        <SectionTitle
          title='Services'
          text='Why invest or purchase real estate with REITS Africa?'
        />

        <p className='text-left mt-4 text-[15px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar sed do eiusmod tempor
          incidi dunt dapibus leo.
        </p>

        <div className='grid grid-cols-2 mt-10'>
          {/* items */}
          <div className='wrapper'>
            <div className='flex'>
              <img src={'/three.png'} alt='' />

              <div className=''>
                <h4>Tokenized Real Estate</h4>
                <p>Real estate agents</p>
              </div>
            </div>
          </div>

          {/* Form */}
        </div>
      </div>
    </section>
  );
}
