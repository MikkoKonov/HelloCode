import classes from './Button.module.css';

interface ButtonProps {
  text: string;
  haveStyle: string | null;
}

const ButtonBlack: React.FC<ButtonProps> = ({ text, haveStyle }) => {
  return (
    <button className={haveStyle !== null ? haveStyle : classes.button}>{text}</button>
  );
};

export default ButtonBlack;

