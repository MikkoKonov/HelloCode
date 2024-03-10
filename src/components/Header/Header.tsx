import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import classes from "./Header.module.css";

interface HeaderProps {
  logo: string;


}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  return (
    <header className={classes.header}>
      <Link style={{textDecoration: 'none'}} to='/'><Logo logo={logo} /></Link>
      <div className={classes.buttonContainer}>
        <Link to='/'>
          <Button text="Выбрать язык" haveStyle={classes.buttonWhite} />
        </Link>
      </div>
    </header>
  );
};

export default Header;