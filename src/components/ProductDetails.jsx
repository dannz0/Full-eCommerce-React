const ProductDetails = ({ includes, features }) => {
  const index = features.indexOf('\n\n');

  return (
    <div className='flex flex-col gap-20 lg:gap-48 lg:flex-row section-margin section-padding'>
      <div className='flex flex-col gap-6 lg:w-1/2'>
        <span className='text-lg font-bold tracking-wide text-black uppercase lg:text-3xl'>
          features
        </span>
        <p className='text-sm text-left text-gray-700'>
          {features.substring(0, index)}
        </p>
        <p className='text-sm text-left text-gray-700'>
          {features.substring(index)}
        </p>
      </div>
      <div className='flex flex-col gap-6 md:flex-row lg:flex-col md:justify-between lg:justify-start lg:w-1/2 lg:pl-36'>
        <div>
          <span className='text-lg font-bold tracking-wide text-black uppercase lg:text-3xl'>
            in the box
          </span>
        </div>
        <ul className='flex flex-col gap-2 list-none md:pr-16 lg:pr-0'>
          {includes.map((item, i) => {
            return (
              <li key={i} className='flex items-center justify-start gap-4'>
                <span className='w-5 font-bold text-cusOrangeDark'>
                  {item.quantity}x
                </span>
                <span className='text-sm text-left text-gray-700'>
                  {item.item}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default ProductDetails;
