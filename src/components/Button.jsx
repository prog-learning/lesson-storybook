export const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} style={{ border: '2px solid red' }}>
      {label}
    </button>
  );
};
