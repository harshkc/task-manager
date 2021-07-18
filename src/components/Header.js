import Button from "./Button";
import PropTypes from "prop-types";

const Header = ({ title, showAdd, onbtnClick }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        text={showAdd ? "Add" : "Close"}
        color={showAdd ? "green" : "red"}
        onbtnClick={onbtnClick}
      />
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
