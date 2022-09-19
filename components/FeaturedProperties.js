import { images } from '../data';

export default function FeaturedProperties() {
  return (
    <div className='grid grid-cols-3 gap-y-4 pt-5'>
      {images.map((image) => (
        <img src={image.img} key={image.id} />
      ))}
    </div>
  );
}
