import classes from './Tag.module.css'

interface TagProps {
    text: string;
    className: string;
    icon: string;

}

const Tag: React.FC<TagProps> = ({text, className, icon}) => {
    return (
        <div className={classes.container}>
            <div className={className}>
                <img className={classes.icon} src={icon}/>
                <div>{text}</div>
                
            </div>
            
        </div>
        
    )
}

export default Tag;