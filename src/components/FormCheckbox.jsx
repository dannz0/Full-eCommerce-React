const FormCheckbox = ({ handleChange, label, id, value }) => {
  return (
    <label
      htmlFor={id}
      className={
        value
          ? 'input-container flex items-center  border-2 border-solid rounded-md cursor-pointer border-cusOrangeDark hover:border-cusOrangeDark'
          : 'input-container flex items-center  border-2 border-solid rounded-md cursor-pointer border-slate-200 hover:border-cusOrangeDark'
      }
    >
      <input
        onChange={handleChange}
        type='radio'
        value={value}
        id={id}
        name='radio-btn'
        className='my-6 ml-8 bg-white cursor-pointer text-cusOrangeDark border-slate-200 focus:ring-cusOrangeDark'
        required
      />

      <label
        htmlFor={id}
        className='w-full py-4 ml-5 text-sm font-bold text-black cursor-pointer'
      >
        {label}
      </label>
    </label>
  );
};
export default FormCheckbox;
