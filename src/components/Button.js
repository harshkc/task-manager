const Button = ({ text, color }) => {
  return (
    <button className="btn" style={{ backgroundColor: color }}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "green",
  text: "Add",
};

export default Button;
