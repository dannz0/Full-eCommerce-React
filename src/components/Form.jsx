import { useState } from 'react';
import FormRow from './FormRow';

const Form = () => {
  const [userDetails, setuserDetails] = useState({
    name: '',
    email: '',
    tel: '',
    address: '',
    zip: '',
    city: '',
    country: '',
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    console.log(e.target.checked);

    setuserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className='flex flex-col gap-6 px-8 py-12 mt-4 bg-white rounded-md shadow-xl lg:mt-0 lg:w-2/3 xl:gap-14 lg:gap-10'>
      <span className='mb-8 text-3xl font-bold tracking-wide text-black uppercase lg:text-4xl'>
        checkout
      </span>

      <form className='flex flex-col gap-7'>
        <div className='flex flex-col gap-7'>
          <span className='mb-2 text-sm font-bold tracking-widest uppercase lg:text-md text-cusOrangeDark'>
            billing details
          </span>

          <div className='flex flex-col md:flex-row gap-7'>
            <FormRow
              name='name'
              type='text'
              title='name'
              placeholder='Alexei Ward'
              value={userDetails?.name}
              handleChange={handleChange}
            />

            <FormRow
              name='email'
              type='email'
              title='email address'
              placeholder='alexei@gmail.com'
              value={userDetails?.email}
              handleChange={handleChange}
            />
          </div>

          <FormRow
            name='tel'
            type='tel'
            title='phone number'
            placeholder='+1 202-555-0136'
            value={userDetails?.tel}
            handleChange={handleChange}
            width='true'
          />
        </div>

        <div className='flex flex-col gap-7'>
          <span className='mt-5 mb-2 text-sm font-bold tracking-widest uppercase lg:text-md text-cusOrangeDark'>
            shipping info
          </span>

          <FormRow
            name='address'
            type='text'
            title='your address'
            placeholder='1137 Williams Avenue'
            handleChange={handleChange}
            value={userDetails?.address}
          />

          <div className='flex flex-col md:flex-row gap-7'>
            <FormRow
              name='zip'
              type='number'
              title='ZIP code'
              placeholder='10001'
              handleChange={handleChange}
              value={userDetails?.zip}
            />

            <FormRow
              name='city'
              type='text'
              title='City'
              placeholder='New York'
              handleChange={handleChange}
              value={userDetails?.city}
            />
          </div>

          <FormRow
            name='country'
            type='text'
            title='country'
            placeholder='United States'
            value={userDetails?.country}
            handleChange={handleChange}
            width='true'
          />
        </div>

        <div className='flex flex-col gap-7'>
          <span className='mt-5 mb-2 text-sm font-bold tracking-widest uppercase lg:text-md text-cusOrangeDark'>
            payment details
          </span>

          <div className='flex flex-col gap-7 md:flex-row'>
            <span className='-mb-2 text-sm font-bold text-black capitalize md:w-1/2'>
              payment method
            </span>

            <div className='flex flex-col gap-7 md:w-1/2'>
              <div className='flex items-center h-16 px-8 border-2 border-solid rounded-md border-slate-200 hover:border-cusOrangeDark'>
                <input
                  onChange={handleChange}
                  type='radio'
                  value=''
                  id='eMoney'
                  name='radio-btn'
                  className='bg-white cursor-pointer text-cusOrangeDark border-slate-200 focus:ring-cusOrangeDark'
                  required
                />

                <label
                  htmlFor='eMoney'
                  className='w-full py-4 ml-5 text-sm font-bold text-black'
                >
                  e-Money
                </label>
              </div>

              <div className='flex items-center h-16 px-8 border-2 border-solid rounded-md border-slate-200 hover:border-cusOrangeDark'>
                <input
                  onChange={handleChange}
                  type='radio'
                  value=''
                  id='cash'
                  name='radio-btn'
                  className='bg-white cursor-pointer text-cusOrangeDark border-slate-200 focus:ring-cusOrangeDark'
                />

                <label
                  htmlFor='cash'
                  className='w-full py-4 ml-5 text-sm font-bold text-black'
                >
                  Cash on delivery
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Form;
