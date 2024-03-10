import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimationText from '../AnimationText/AnimationText';
import ButtonBlack from '../Button/Button';
import backOrnament from '../../assets/setka.svg';
import classes from './MainSection.module.css';

import goBlack from '../../assets/go-black.svg';
import goWhite from '../../assets/go-white.svg';
import jsBlack from '../../assets/js-black.svg';
import jsWhite from '../../assets/js-white.svg';
import kotlinBlack from '../../assets/kotlin-black.svg';
import kotlinWhite from '../../assets/kotlin-white.svg';
import goBlackMain from '../../assets/go-black-main.svg';
import jsBlackMain from '../../assets/js-black-main.svg';
import kotlinBlackMain from '../../assets/kotlin-black-main.svg';
import Header from '../Header/Header';

interface Language {
  logoBlack: string;
  logoWhite: string;
  greeting: string;
  language: string;
  logoMain: string;
}

const MainSection: React.FC = () => {
  const [position, setPosition] = useState<number>(1);
  //@ts-ignore
  const [displayedText, setDisplayedText] = useState<string>('');
  const handleClick = (selectedPosition: number) => {
    setDisplayedText('');
    setPosition(selectedPosition);
  };

  const languages: Record<number, Language> = {
    1: {
      logoBlack: kotlinBlack,
      logoWhite: kotlinWhite,
      logoMain: kotlinBlackMain,
      greeting: 'fun main() {\n    println("Привет, Kotlin!")\n}',
      language: 'Kotlin',
    },
    2: {
      logoBlack: goBlack,
      logoWhite: goWhite,
      logoMain: goBlackMain,
      greeting: 'func main() {\n    fmt.Println(\"Привет, Go\")\n}',
      language: 'Golang',
    },
    3: {
      logoBlack: jsBlack,
      logoWhite: jsWhite,
      logoMain: jsBlackMain,
      greeting: 'console.log(\n    "Привет, JavaScript!"\n);',
      language: 'JavaScript',
    },
  };

  return (
    <div style={{maxWidth: '90%', margin: 'auto'}}>
      <Header logo={languages[position].language} key={position}/>
      <section>
        <div>
          <div className={classes.backgroundButton}>
            {Object.keys(languages).map((key) => (
              <div
                key={key}
                onClick={() => handleClick(parseInt(key))}
                className={`${classes.languageButton} ${
                  position === parseInt(key) ? classes.activeLanguage : ''
                }`}
              >
                <img
                  src={
                    position === parseInt(key)
                      ? languages[parseInt(key)].logoWhite
                      : languages[parseInt(key)].logoBlack
                  }
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.textContainer}>
            <pre className={classes.Paragraph}>
              <AnimationText
                className={classes.AnimatedText}
                text={languages[position].greeting}
                time={70}
                classNameAnimation={classes.animationCursor}
                key={position}
              />
            </pre>
            <p>
              На сайте вы не просто изучите кусочки разных ЯП, а поймете принципы работы, узнаете их недостатки и
              преимущества
            </p>
            <Link to={`/${languages[position].language}`}>
              <ButtonBlack text="Начать изучение" haveStyle={classes.buttonMain} />
            </Link>

          </div>
          <div className={classes.imagesContainer}>
            <img className={classes.logoMain} src={languages[position].logoMain} alt="" />
            <img className={classes.backOrnament} src={backOrnament} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSection;
