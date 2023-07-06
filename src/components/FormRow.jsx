const FormRow = ({
  name,
  type,
  title,
  placeholder,
  value,
  width,
  handleChange,
}) => {
  return (
    <div className='flex flex-col flex-1 gap-7'>
      <label className='-mb-2 text-sm font-bold text-black capitalize'>
        {title}
      </label>
      <input
        onChange={handleChange}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        required
        className={
          width
            ? 'focus:border-cusOrangeDark focus:outline-none focus:ring-0 h-16 md:w-[48%] px-8 border-2 border-solid rounded-md border-slate-200'
            : 'focus:border-cusOrangeDark focus:outline-none focus:ring-0 h-16 px-8 border-2 border-solid rounded-md border-slate-200'
        }
      />
    </div>
  );
};
export default FormRow;
