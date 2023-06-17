const ProductDetails = ({ includes, features }) => {
  const length = features.length;
  console.log(includes, features);
  return (
    <div className='flex flex-col gap-20 xl:gap-48 xl:flex-row section-margin section-padding'>
      <div className='flex flex-col gap-6 xl:w-1/2'>
        <span className='text-lg font-bold tracking-wide text-black uppercase xl:text-3xl'>
          features
        </span>
        <p className='text-sm text-left text-gray-700'>{features}</p>
      </div>
      <div className='flex flex-col gap-6 md:flex-row xl:flex-col md:justify-between xl:justify-start xl:w-1/2'>
        <div>
          <span className='text-lg font-bold tracking-wide text-black uppercase xl:text-3xl'>
            in the box
          </span>
        </div>
        <ul className='flex flex-col gap-2 list-none md:pr-16 xl:pr-0'>
          {includes.map((item) => {
            return (
              <li className='flex items-center justify-start gap-4'>
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
