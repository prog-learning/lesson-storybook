import './index.css';

export const Card = ({ title, text, onClick, isGoogleFonts }) => {
  isGoogleFonts = isGoogleFonts || false;
  return (
    <div
      className={`my_card ${isGoogleFonts ? 'praise' : ''}`}
      onClick={onClick}
    >
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};
