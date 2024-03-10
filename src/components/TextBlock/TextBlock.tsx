import classes from './TextBlock.module.css'

interface textBlockProps {
    number: string | null;
    heading: string | null;
    paragraph: string | null;
    maxWidth: string;
}


const TextBlock: React.FC<textBlockProps> = ({number, heading, paragraph, maxWidth}) => {
    return (
        <div className={maxWidth}>
            <h3><span className={classes.span}>{number}</span>{heading}</h3>
            <p className={classes.paragraph}>{paragraph}</p>
        </div>
    );
}

export default TextBlock;