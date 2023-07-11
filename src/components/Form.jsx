import { useState } from 'react';
import FormRow from './FormRow';
import FormCheckbox from './FormCheckbox';
import { useDispatch } from 'react-redux';
import { saveUserData } from '../slices/userSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [userDetails, setuserDetails] = useState({
    name: '',
    email: '',
    tel: '',
    address: '',
    zip: '',
    city: '',
    country: '',
    eMoney: false,
    cash: false,
    eMoneyNumber: '',
    eMoneyPin: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    if (e.target.name !== 'radio-btn') {
      setuserDetails({ ...userDetails, [e.target.id]: e.target.value });
    }

    if (e.target.id === 'eMoney') {
      // RADIO BTNs
      console.log(e.target.id, e.target.checked);
      setuserDetails({
        ...userDetails,
        [e.target.id]: e.target.checked,
        cash: false,
      });
    }

    if (e.target.id === 'cash') {
      console.log(e.target.id, e.target.checked);
      setuserDetails({
        ...userDetails,
        [e.target.id]: e.target.checked,
        eMoney: false,
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // usually going to back-end etc. etc.
    dispatch(saveUserData(userDetails));
    setIsFormSubmitted(true);
  };

  return (
    <div className='flex flex-col gap-6 px-8 py-12 mt-4 bg-white rounded-md shadow-xl lg:mt-0 lg:w-2/3 xl:gap-14 lg:gap-10'>
      <span className='mb-8 text-3xl font-bold tracking-wide text-black uppercase lg:text-4xl'>
        checkout
      </span>

      <form className='flex flex-col gap-7 group' onSubmit={onSubmit}>
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
              id='name'
              pattern='^[a-zA-Z]+$'
            />

            <FormRow
              name='email'
              type='email'
              title='email address'
              placeholder='alexei@gmail.com'
              value={userDetails?.email}
              handleChange={handleChange}
              id='email'
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
            id='tel'
            pattern='^[0-9\+\-]+$'
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
            id='address'
          />

          <div className='flex flex-col md:flex-row gap-7'>
            <FormRow
              name='zip'
              type='number'
              title='ZIP code'
              placeholder='10001'
              handleChange={handleChange}
              value={userDetails?.zip}
              id='zip'
            />

            <FormRow
              name='city'
              type='text'
              title='City'
              placeholder='New York'
              handleChange={handleChange}
              value={userDetails?.city}
              id='city'
              pattern='^[a-zA-Z]+$'
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
            id='country'
            pattern='^[a-zA-Z]+$'
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
              <FormCheckbox
                handleChange={handleChange}
                label='eMoney'
                id='eMoney'
                value={userDetails?.eMoney}
              />
              <FormCheckbox
                handleChange={handleChange}
                label='Cash on delivery'
                id='cash'
                value={userDetails?.cash}
              />
            </div>
          </div>

          {userDetails.eMoney && (
            <div className='flex flex-col md:flex-row gap-7'>
              <FormRow
                name='eMoneyNumber'
                type='number'
                title='e-Money Number'
                placeholder='238524993'
                value={userDetails?.eMoneyNumber}
                handleChange={handleChange}
                id='eMoneyNumber'
              />

              <FormRow
                name='eMoneyPin'
                type='number'
                title='e-Money PIN'
                placeholder='6891'
                value={userDetails?.eMoneyPin}
                handleChange={handleChange}
                id='eMoneyPin'
              />
            </div>
          )}
        </div>
        <input type='submit' id='submit-form' className='hidden' />
      </form>
    </div>
  );
};
export default Form;
