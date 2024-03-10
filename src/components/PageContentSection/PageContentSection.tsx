import Tag from "../Tag/Tag"
import classes from './PageContentSection.module.css'
import iconPC from '../../assets/icon-pc.svg'
import icon1 from '../../assets/icon-1.svg'
import icon2 from '../../assets/icon2.svg'



const PageContentSection: React.FC = () => {
    return (
        <section style={{backgroundColor: '#101214'}}>
            <div className={classes.section}>
                <Tag className={classes.tagBlack} icon={iconPC} text="История развития веб-сайтов"/>
                <Tag className={classes.tagWhite} icon={icon1} text="Преимуществами и недостатки ЯП"/>
                <Tag className={classes.tagBlack} icon={icon2} text="Информация о конструкторах"/>

            </div>
        </section>
    )
}

export default PageContentSection