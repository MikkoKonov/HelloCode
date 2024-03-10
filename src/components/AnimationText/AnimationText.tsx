import React, { useState, useEffect } from 'react';

interface AnimatedTextProps {
  text: string;
  className: string;
  classNameAnimation: string;
  time: number;

}

const AnimationText: React.FC<AnimatedTextProps> = ({ text, className, time, classNameAnimation }) => {
  const [displayedText, setDisplayedText] = useState<string>('');

  useEffect(() => {
    animateText(text);
  }, [text]);
  //@ts-ignore
  const animateText = (textToAnimate: string) => {
    let index = 0;
    const intervalId = setInterval(() => {
      //@ts-ignore
      setDisplayedText((prevText) => textToAnimate.substring(0, index + 1));

      index++;
      if (index === textToAnimate.length) {
        clearInterval(intervalId);
      }
    }, time);
  };

  return (
    <span className={className}>
      {displayedText}
      <span className={classNameAnimation}>|</span>
    </span>
  );
};

export default AnimationText;
