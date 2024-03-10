import { Link } from 'react-router-dom';
import Button from '../Button/Button'

interface CardProps {
    logo: string;
    description: string;
    className: string;
    haveStyleButton: string;
    name: string;
}

const Card: React.FC<CardProps> = ({logo, description, className, haveStyleButton, name}) => {
    return (
        <div className={className}>
            <div style={{padding: '1.56rem'}}>
                <img src={logo} alt="" />
                <p>{description}</p>
                <Link to={`/${name}`}>
                    <Button text='Начать изучение' haveStyle={haveStyleButton}></Button>
                </Link>
                
            </div>

        </div>

    )
}

export default Card;