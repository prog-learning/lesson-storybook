import './index.css';

export const Card = ({ title, text, onClick }) => {
  return (
    <div className='my_card' onClick={onClick}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};
