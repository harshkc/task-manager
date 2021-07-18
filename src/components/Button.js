const Button = ({ text, color, onbtnClick }) => {
  return (
    <button
      onClick={onbtnClick}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "green",
  text: "Add",
};

export default Button;
