import LogoTg from '../../assets/logo-tg.svg'
import LogoVk from '../../assets/logo-vk.svg'
import LogoGithub from '../../assets/logo-github.svg'
import classes from './Footer.module.css'
import AnimatedText from "../AnimationText/AnimationText"
const Footer: React.FC = () => {
    return (
        <footer className={classes.bg}>
            <div className={classes.footer}>
                <h3 style={{color: '#FFFFFF'}}>
                    Привет, <AnimatedText className={classes.span} text='HelloCode!' time={90} classNameAnimation={classes.animationCursor} />
                </h3>
                <div style={{display: 'flex'}}>
                <a className={classes.a} href="#">
                        <div className={classes.div}>
                            <img className={classes.img} src={LogoGithub}/>
                        </div>
                    </a>
                    <a className={classes.a} href="#">
                        <div className={classes.div}>
                            <img className={classes.img} src={LogoTg}/>
                        </div>
                    </a>
                    <a className={classes.a} href="#">
                        <div className={classes.div}>
                            <img className={classes.img} src={LogoVk}/>
                        </div>
                    </a>
                </div>
            </div>
        </footer>

    )
}
export default Footer;