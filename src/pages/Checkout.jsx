import { useNavigate } from 'react-router-dom';
import { Form, Summary } from '../components';
import { AiOutlineLeft } from 'react-icons/ai';

const Checkout = () => {
  const navigate = useNavigate();

  return (
    <section className='flex flex-col pb-28 md:pb-32 lg:pb-44 section-padding bg-cusGrey'>
      <div className='relative mt-4 md:my-8 lg:my-14 xl:mt-20 lg:mb-10'>
        <button
          onClick={() => navigate(`/`)}
          className='flex items-center text-sm font-semibold text-gray-500 md:absolute hover:text-cusOrangeDark'
        >
          <AiOutlineLeft className='h-3 mr-1' /> Go back
        </button>
      </div>
      <div className='relative flex flex-col gap-8 lg:mt-2 lg:flex-row'>
        <Form />
        <Summary />
      </div>
    </section>
  );
};
export default Checkout;
