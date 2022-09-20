import { services } from 'data';
import Image from 'next/image';
import SectionTitle from './SectionTitle';

export default function Services() {
  return (
    <div className='relative px-5 md:px-12 mt-16 md:mt-20'>
      <div className='lg:w-1/2'>
        <SectionTitle
          title='Services'
          text='Why invest or purchase real estate with REITS Africa?'
        />

        <p className='text-left mt-4 text-[15px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar sed do eiusmod tempor
          incidi dunt dapibus leo.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 w-full lg:w-1/2'>
        {services.map((item) => (
          <div className='mt-10'>
            <div className='wrapper flex gap-x-3'>
              <img src={item.img} alt='' />

              <div className='flex flex-col'>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Form */}
      <div className='w-full lg:w-1/3 py-6 px-4 md:px-10 mt-10 shadow-lg bg-[#153048] lg:absolute top-0 right-20'>
        <h3 className='mt-5 text-[#FFA72A] text-sm font-bold'>CONTACT US</h3>
        <h4 className='mt-5 text-[24px] leading-tight text-white font-bold'>
          Are you ready <br /> to talk to an expert?
        </h4>
        <form className='mt-10'>
          <div className='form-group mb-6'>
            <input
              type='text'
              className='form-control h-12 block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
              id='exampleInput7'
              placeholder='Name'
            />
          </div>
          <div className='form-group mb-6'>
            <input
              type='email'
              className='form-control h-12 block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
              id='exampleInput8'
              placeholder='Email address'
            />
          </div>

          <div className='form-group mb-6'>
            <textarea
              className='
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      '
              id='exampleFormControlTextarea13'
              rows='5'
              placeholder='Message'
            ></textarea>
          </div>

          <button
            type='submit'
            className='
      w-full
      px-6
      py-3
      h-12
      bg-[#EC3335]
      text-white
      font-medium
      text-[15px]
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
