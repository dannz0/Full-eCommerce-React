import { Link } from 'react-router-dom';

const Button = ({
  text,
  color,
  hoverColor,
  textColor,
  border,
  borderColor,
  destination,
}) => {
  return (
    <Link
      to={`/${destination}`}
      className={`bg-${color} hover:bg-${hoverColor} text-${textColor} border-${border} border-${borderColor} px-8 py-4 tracking-widest text-sm shadow-lg uppercase font-semibold  `}
    >
      {text}
    </Link>
  );
};
export default Button;
