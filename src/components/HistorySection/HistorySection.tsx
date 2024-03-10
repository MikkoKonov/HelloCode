import classes from './HistorySection.module.css'
import image from '../../assets/image 7.png'
import TextBlock from '../TextBlock/TextBlock';

const HistorySection: React.FC = () => {
    return (
        <section style={{ maxWidth: '90%', margin: 'auto'}}>
            <div style={{margin : '4.06rem 0rem'}}>
                <h2 style={{textAlign: 'center', margin: '30px'}}>История развития веб-сайтов</h2>
                <div className={classes.box}>
                    <div style={{marginRight: '35px'}}>
                        <img src={image}/>
                    </div>
                    <div>
                        <TextBlock maxWidth={classes.maxWidth} number='01. ' heading='Зарождение (1990-2000 гг.)' paragraph='Всё началось с создания World Wide Web Тимом Бернерсом-Ли в 1989 году. Однако широкое распространение веб получил в 1990-х годах, когда браузеры, такие как Netscape Navigator и Internet Explorer, стали доступны для обычных пользователей. В это время появились первые веб-сайты и поисковые системы.'/>
                        <TextBlock maxWidth={classes.maxWidth} number='02. ' heading='Бум дот-комов (1995-2000 гг.)' paragraph='В конце 1990-х произошел взрывной рост интернет-индустрии, называемый "бумом дот-комов". Множество стартапов стремились воспользоваться возможностями сети, и акции многих из них стремительно росли. Однако в 2000 году произошел крах, когда многие из этих компаний обанкротились.'/>
                        <TextBlock maxWidth={classes.maxWidth} number='03. ' heading='Эра социальных сетей и веб 2.0 (2000-2010 гг.)' paragraph='В начале 2000-х годов всплеск интереса к социальным сетям привел к появлению таких платформ, как Facebook, Twitter и LinkedIn. Это также период развития концепции веб 2.0, характеризующейся более интерактивным и социальным опытом пользователей.'/>
                        <TextBlock maxWidth={classes.maxWidth} number='04. ' heading='Мобильная революция и веб 3.0 (после 2010 г.)' paragraph='С развитием мобильных устройств и широкого использования смартфонов в 2010-х годах веб стал более мобильным и адаптированным для различных устройств. Ключевые тенденции включают в себя улучшенный пользовательский опыт, аналитику больших данных, искусственный интеллект и более сложные веб-приложения, что ставит начало понятию веба 3.0.'/>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default HistorySection;