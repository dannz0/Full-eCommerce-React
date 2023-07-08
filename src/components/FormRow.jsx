const FormRow = ({
  name,
  type,
  title,
  placeholder,
  value,
  width,
  handleChange,
  id,
  pattern,
}) => {
  return (
    <div className='relative flex flex-col-reverse flex-1 gap-7'>
      <input
        onChange={handleChange}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        required
        pattern={pattern}
        className={
          width
            ? 'focus:border-cusOrangeDark focus:outline-none focus:ring-0 h-16 md:w-[48%] px-8 border-2 border-solid rounded-md border-slate-200 cursor-pointer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-800 peer input hover:border-cusOrangeDark'
            : 'focus:border-cusOrangeDark focus:outline-none focus:ring-0 h-16 px-8 border-2 border-solid rounded-md border-slate-200 cursor-pointer  invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-800 peer input hover:border-cusOrangeDark'
        }
      />

      <label
        htmlFor={id}
        className='flex justify-between text-black peer-placeholder-shown:!text-black peer-invalid:text-red-600'
      >
        <span className='-mb-2 text-sm font-bold capitalize '>{title}</span>
      </label>

      <span
        className={
          width
            ? 'absolute top-0 right-80 text-sm font-semibold text-red-600  peer-placeholder-shown:!invisible invisible peer-invalid:visible'
            : 'absolute top-0 right-0 text-sm font-semibold text-red-600  peer-placeholder-shown:!invisible invisible peer-invalid:visible'
        }
      >
        Wrong format!
      </span>
    </div>
  );
};
export default FormRow;
