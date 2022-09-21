import { images } from '../data';

export default function FeaturedProperties() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-y-4 pt-5'>
      {images.map((image) => (
        <img src={image.img} key={image.id} />
      ))}

      {/* To fix later */}
      <div className='text-center mb-5'>
        <button className='text-[#EC3335] inline-block px-6 py-2.5 border border-red-600 font-medium text-[15px] leading-tight rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>
          Load More
        </button>
      </div>
    </div>
  );
}
