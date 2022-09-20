import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdKeyboardArrowDown } from 'react-icons/md';

// import { motion } from 'framer-motion';
// import { fadeUp, fadeIn, fade } from 'variants';

export default function Hero() {
  return (
    <section>
      <div className='flex flex-col bg-[#153048] px-5 md:px-12 pt-16 md:pt-20'>
        <div className='left w-full lg:w-1/2 text-white'>
          <h1 className='text-3xl lg:text-[48px] font-bold leading-tight'>
            Find the home or investment plan that suits you.
          </h1>
          <p className='text-xl max-w-lg mt-5 font-thin'>
            Buy, rent, list or invest in tokenized real estate projects near
            you.
          </p>
        </div>

        {/*Form  */}
        <form className='z-50'>
          <div className='flex md:pl-10 gap-x-2.5 gap-y-2.5 py-6 mt-5 bg-white rounded-md shadow-lg w-full lg:w-3/5 px-4'>
            <div className='mb-3 w-full md:w-10/12 xl:w-96'>
              <div className='relative'>
                <MdKeyboardArrowDown className='absolute top-10 right-2 w-5 h-5 text-[#817C8E]' />
              </div>

              <label className='text-xs font-medium mb-1 text-black'>
                BUY OR RENT
              </label>

              <select
                className='form-select form-select-lg mb-3 text-[#A1A7A8] appearance-none block  w-full h-12 px-6 pl-3 text-[15px] font-normal text-gray-700bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none'
                aria-label='.form-select-lg example'
              >
                <option>Select</option>
                <option value='1'>Buy</option>
                <option value='2'>Rent</option>
              </select>
            </div>

            <div className='mb-3 w-full md:w-10/12 xl:w-96'>
              <div className='relative'>
                <MdKeyboardArrowDown className='absolute top-10 right-2 w-5 h-5 text-[#817C8E]' />
              </div>

              <label className='text-xs font-medium mb-1 text-black'>
                LOOKING FOR
              </label>

              <select
                className='form-select form-select-lg mb-3 text-[#A1A7A8] appearance-none block  w-full h-12 px-6 pl-3 text-[15px] font-normal text-gray-700bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none'
                aria-label='.form-select-lg example'
              >
                <option>Property Type</option>
                <option value='1'>Duplex</option>
                <option value='2'>Shotlets</option>
              </select>
            </div>

            <div className='mb-3 w-full md:w-10/12 xl:w-96'>
              <div className='relative'>
                <MdKeyboardArrowDown className='absolute top-10 right-2 w-5 h-5 text-[#817C8E]' />
              </div>

              <label className='text-xs font-medium mb-1 text-black'>
                LOCATION
              </label>

              <select
                className='form-select form-select-lg mb-3 text-[#A1A7A8] appearance-none block  w-full h-12 px-6 pl-3 text-[15px] font-normal text-gray-700bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none'
                aria-label='.form-select-lg example'
              >
                <option>All Cities</option>
              </select>
            </div>

            <div className='mb-3 w-full md:w-10/12 xl:w-96 mt-6'>
              <button className='bg-[#EC3335] text-white py-3 px-6 rounded'>
                Search
              </button>
            </div>
          </div>
        </form>

        <div className='hidden lg:block absolute top-15 right-0 w-2/4'>
          <Image src={'/bgc.png'} width={580} height={480} alt='hero-image' />
        </div>
      </div>
    </section>
  );
}
