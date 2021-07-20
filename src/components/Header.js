import Button from "./Button";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const Header = ({ title, showAdd, onbtnClick }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          text={showAdd ? "Add" : "Close"}
          color={showAdd ? "green" : "red"}
          onbtnClick={onbtnClick}
        />
      )}
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
