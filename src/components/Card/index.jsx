import './styles.css';
import Button from '../Button';

const Card = ({
  name,
  phone,
  email,
  address,
  onButtonClick,
  active,
  ...props
}) => {
  return (
    <div className={active ? 'activeContainer' : 'container'} {...props}>
      <span>Name:{name}</span>
      <span>Phone:{phone}</span>
      <span className='email'>Email:{email}</span>
      <span>Address:{address}</span>
      <div className='buttonContainer'>
        <Button
          value='Submit'
          onClick={() => onButtonClick({ name, phone, email, address })}
        />
      </div>
    </div>
  );
};

export default Card;
