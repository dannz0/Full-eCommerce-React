const FormRow = ({
  name,
  type,
  title,
  placeholder,
  value,
  width,
  handleChange,
  id,
}) => {
  return (
    <div className='flex flex-col flex-1 gap-7'>
      <label className='flex justify-between'>
        <span className='-mb-2 text-sm font-bold text-black capitalize '>
          {title}
        </span>
        <span className='hidden text-sm font-semibold text-red-600 '>
          Wrong format!
        </span>
      </label>
      <input
        onChange={handleChange}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        required
        className={
          width
            ? 'focus:border-cusOrangeDark focus:outline-none focus:ring-0 h-16 md:w-[48%] px-8 border-2 border-solid rounded-md border-slate-200 cursor-pointer '
            : 'focus:border-cusOrangeDark focus:outline-none focus:ring-0 h-16 px-8 border-2 border-solid rounded-md border-slate-200 cursor-pointer'
        }
      />
    </div>
  );
};
export default FormRow;
