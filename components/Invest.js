import Image from 'next/image';
import Link from 'next/link';

export default function Invest() {
  return (
    <section className='relative bg-[#153048] px-5 md:px-12 mt-16 md:mt-20 pb-20 rounded-lg lg:mx-20 min-h-max'>
      <div className='wrapper flex flex-col lg:flex-row justify-between pt-10'>
        <div className='flex flex-col w-full lg:w-1/4'>
          <h3 className='text-sm text-[#FFA72A] mb-2'>
            ARE YOU LOOKING TO INVEST?
          </h3>
          <p className='text-[27px] text-white max-w-md'>
            We have tokenized real estate assets you can invest in
          </p>
        </div>

        <div className='flex flex-col w-full lg:w-2/5 mt-5 lg:mt-0'>
          <p className='text-white max-w-sm text-[15px] font-light'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar sed do eiusmod
            tempor.
          </p>

          <div className='mt-5'>
            <Link href='/account/register'>
              <a className='bg-[#EC3335] text-white inline-block px-6 py-2.5 border-red-600 font-medium text-[15px] leading-tight rounded hover:bg-black hover:bg-opacity-5 border focus:outline-none focus:ring-0 transition duration-150 ease-in-out shadow-lg'>
                {' '}
                Signup as an Investor
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className='hidden lg:block absolute -top-32 -right-20'>
        <Image
          width={270}
          height={480}
          objectFit='contain'
          src={'/woman.png'}
          alt='woman-img'
        />
      </div>
    </section>
  );
}
