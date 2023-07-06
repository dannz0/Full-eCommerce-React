import { useNavigate } from 'react-router-dom';
import { Form, Summary } from '../components';

const Checkout = () => {
  const navigate = useNavigate();

  return (
    <section className='flex flex-col pb-28 md:pb-32 lg:pb-44 section-padding bg-cusGrey'>
      <div className='relative mt-4 md:my-8 lg:my-14 xl:mt-20 lg:mb-10'>
        <button
          onClick={() => navigate(`/`)}
          className='text-sm font-semibold text-slate-400 md:absolute hover:text-cusOrangeDark'
        >
          Go back
        </button>
      </div>
      <div className='flex flex-col gap-8 lg:mt-2 lg:flex-row'>
        <Form />
        <Summary />
      </div>
    </section>
  );
};
export default Checkout;
