import './styles.css';

const Button = ({ variant = 'contained', ...props }) => {
  return (
    <button
      className={variant === 'contained' ? 'contained' : 'outlined'}
      {...props}
    >
      {props.value}
    </button>
  );
};

export default Button;
