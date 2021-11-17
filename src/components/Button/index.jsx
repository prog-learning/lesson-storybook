import './index.css';

export const Button = ({ label, onClick, size, disabled }) => {
  size = size || 'small'; // sizeを受け取らなかった場合は'small'になるように
  return (
    <button
      className={`my_button ${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
