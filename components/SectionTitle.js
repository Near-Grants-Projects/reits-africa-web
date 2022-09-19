export default function SectionTitle({ title, text }) {
  return (
    <div className='md:pl-3'>
      <h2 className='text-[#FFA72A] text-sm'>{title}</h2>
      <p className='text-[32px] text-[#153048]'>{text}</p>
    </div>
  );
}
