import { MdKeyboardArrowDown } from 'react-icons/md';
import Link from 'next/link';
import Layout from '@/components/Layout';

export default function Login() {
  return (
    <Layout title='Login'>
      <section className='bg-[#F8F8F8] py-10 min-h-screen'>
        <div className='block p-6 max-w-md mx-auto rounded-lg shadow-lg bg-white'>
          <div className='grid place-items-center py-10'>
            <h2 className='text-[21px] font-semibold text-black'>
              Login to your account
            </h2>
            <p className='text-sm text-[#666666] mt-1'>
              Kindly fill in your information to login
            </p>
          </div>

          <form>
            <div className='form-group mb-6'>
              <label
                for='email'
                className='form-label inline-block mb-2 text-[#1A202C]'
              >
                Email address/Username
              </label>
              <input
                type='email'
                className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0focus:text-gray-700 focus:bg-white focus:border-stone-600 focus:outline-none'
              />
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

            <div className='flex items-center justify-between'>
              <div className='form-check text-[15px] text-[#718096]'>
                <input
                  className='form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                  type='checkbox'
                  id='flexCheckDefault'
                />
                <label
                  className='form-check-label inline-block text-gray-800'
                  for='flexCheckDefault'
                >
                  I am not a robot
                </label>
              </div>

              <div>
                <Link href='#'>
                  <a className='text-[13px] text-[#718096]'>Forgot Password</a>
                </Link>
              </div>
            </div>

            <div className='mt-8'>
              <button
                className='bg-[#031F28] shadow-lg w-full text-white px-14 py-3 mt-2 md:mt-4 rounded transition duration-1000 ease-in-out
            hover:bg-[#0a3a48] transform hover:scale-120'
              >
                Login
              </button>
            </div>

            <div className='text-center my-4 text-[#1A202C]'>
              Don't have an account?{' '}
              <Link href='/account/register'>
                <a className='text-red-600'>Register</a>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
