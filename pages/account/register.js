import { MdKeyboardArrowDown } from 'react-icons/md';
import Link from 'next/link';

export default function Register() {
  return (
    <section className='bg-[#F8F8F8] py-10 min-h-screen'>
      <div className='block p-6 max-w-md mx-auto rounded-lg shadow-lg bg-white'>
        <div className='grid place-items-center py-10'>
          <h2 className='text-[21px] font-semibold text-black'>
            Signup to Reits Africa
          </h2>
          <p className='text-sm text-[#666666] mt-1'>
            Kindly fill in your information to signup
          </p>
        </div>

        <form>
          <div className='grid grid-cols-2 gap-4'>
            <div className='form-group mb-6'>
              <label
                for='firstname'
                className='form-label inline-block mb-2 text-[#1A202C]'
              >
                First Name
              </label>

              <input
                type='text'
                className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0focus:text-gray-700 focus:bg-white focus:border-stone-600 focus:outline-none'
              />
            </div>

            <div className='form-group mb-6'>
              <label
                for='lastname'
                className='form-label inline-block mb-2 text-[#1A202C]'
              >
                Last Name
              </label>

              <input
                type='text'
                className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0focus:text-gray-700 focus:bg-white focus:border-stone-600 focus:outline-none'
              />
            </div>
          </div>

          <div className='form-group mb-6'>
            <label
              for='username'
              className='form-label inline-block mb-2 text-[#1A202C]'
            >
              New Username
            </label>
            <input
              type='text'
              className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0focus:text-gray-700 focus:bg-white focus:border-stone-600 focus:outline-none'
            />
          </div>

          <div className='form-group mb-6'>
            <label
              for='email'
              className='form-label inline-block mb-2 text-[#1A202C]'
            >
              Email address
            </label>
            <input
              type='email'
              className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0focus:text-gray-700 focus:bg-white focus:border-stone-600 focus:outline-none'
            />
          </div>

          <div className='form-group mb-6'>
            <div className='relative'>
              <MdKeyboardArrowDown className='absolute top-8 md:top-8 right-2 w-5 h-5 text-[#817C8E]' />
            </div>

            <label className='mb-1'>KYC Document</label>
            <select
              className='form-select form-select-lg mb-3 appearance-none block text-[13px] text-[#718096] w-full h-10 pl-3 font-normal text-gray-700bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none'
              aria-label='.form-select-lg example'
            >
              <option value='1'>NIN/BVN/PASSPORT</option>
            </select>
          </div>

          <div className='form-group mb-6 flex justify-center'>
            <div className='mb-3 w-96'>
              <label
                for='formFile'
                className='form-label inline-block mb-2 text-[#1A202C]'
              >
                Upload Verification Document
              </label>
              <input
                className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-stone-600 focus:outline-none'
                type='file'
                id='formFile'
              />
            </div>
          </div>

          <div className='form-group mb-6'>
            <div className='relative'>
              <MdKeyboardArrowDown className='absolute top-8 md:top-8 right-2 w-5 h-5 text-[#817C8E]' />
            </div>

            <label className='mb-1'>I would like to</label>
            <select
              className='form-select form-select-lg mb-3 appearance-none block text-[13px] text-[#718096] w-full h-10 pl-3 font-normal text-gray-700bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none'
              aria-label='.form-select-lg example'
            >
              <option value='1'>Buy real estate tokens/List my property</option>
            </select>
          </div>

          <div className='form-group mb-6'>
            <label
              for='password'
              className='form-label inline-block mb-2 text-[#1A202C]'
            >
              Password
            </label>
            <input
              type='password'
              className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0focus:text-gray-700 focus:bg-white focus:border-stone-600 focus:outline-none'
            />
          </div>

          <div className='flex'>
            <div className='form-check'>
              <input
                className='form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                type='checkbox'
                id='flexCheckDefault'
              />
              <label
                className='form-check-label inline-block text-gray-800'
                for='flexCheckDefault'
              >
                I agree to REITS Africa terms and conditions
              </label>
            </div>
          </div>

          <button
            className='bg-[#031F28] shadow-lg w-full text-white px-14 py-3 mt-2 md:mt-4 rounded transition duration-1000 ease-in-out
            hover:bg-[#0a3a48] transform hover:scale-120'
          >
            Register
          </button>

          <div className='text-center mt-4 text-[#1A202C]'>
            Already have an account?{' '}
            <Link href='/account/login'>
              <a className='text-red-600'>Log in</a>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
