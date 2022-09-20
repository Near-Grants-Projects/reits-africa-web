export default function Footer() {
  return (
    <footer className='px-5 md:px-12 mt-16 md:mt-20 mb-10 md:mb-0'>
      <div className='flex items-center justify-between'>
        <p className='mt-3'>&copy; Reits Africa - All rights reserved</p>
        <img src={'/logo.png'} alt='logo' />
      </div>
    </footer>
  );
}
