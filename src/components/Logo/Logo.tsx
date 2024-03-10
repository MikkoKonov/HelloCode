import AnimatedText from "../AnimationText/AnimationText";
import classes from "./Logo.module.css";

interface LogoProps {
  logo: string;

}

const Logo: React.FC<LogoProps> = ({ logo }) => {
  return (
    <h3>
      Привет, <AnimatedText className={classes.span} text={logo + "!"} time={90} classNameAnimation={classes.animationCursor} />
    </h3>
  );
};

export default Logo;