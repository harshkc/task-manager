import Button from "./Button";
import PropTypes from "prop-types";
const Header = ({ title, btnText }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text={btnText} color="green" />
    </header>
  );
};

Header.defaultProps = {
  title: "Task manager",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
