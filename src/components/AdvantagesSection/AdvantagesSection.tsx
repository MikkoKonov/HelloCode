import Card from "../Card/Card";
import kotlinBlackMain from '../../assets/kotlin-black-main.svg';
import goBlackMain from '../../assets/go-black-main.svg';
import jsBlackMain from '../../assets/js-black-main.svg';

import classes from './AdvantagesSection.module.css'


const AdvantagesSection: React.FC = () => {
    return (
        <section className={classes.section}>
            <div style={{maxWidth: '90%', margin: 'auto', padding: '4.06rem 0rem'}}>
                <h2 style={{textAlign: 'center', color: '#FFFFFF'}}>Приемщества и недостатки ЯП</h2>
                <div style={{margin: '2.19rem auto', justifyContent: 'space-between', display: 'flex'}}>
                    <Card name='Kotlin' haveStyleButton={classes.styleButton} className={classes.Card} logo={kotlinBlackMain} description="Плюсы Kotlin включают 100% совместимость с Java, выразительный синтаксис, поддержку функционального программирования и открытый исходный код. Однако у него могут быть медленная компиляция, проблемы с производительностью в некоторых случаях, большой размер APK и ограниченная поддержка некоторых Java-специфичных библиотек."/>
                    <Card name='Golang' haveStyleButton={classes.styleButton} className={classes.Card} logo={goBlackMain} description="Плюсы Go (Golang) включают высокую производительность, простой и эффективный синтаксис, многозадачность, статическую типизацию и сборку мусора. Однако у него меньшее количество библиотек по сравнению с некоторыми другими языками, ограниченную поддержку обобщений и отсутствие полноценной поддержки GUI-приложений."/>
                    <Card name='JavaScript' haveStyleButton={classes.styleButton} className={classes.Card} logo={jsBlackMain} description="Плюсы JavaScript включают высокую популярность, широкое применение в веб-разработке, динамическую типизацию, большое сообщество и множество библиотек и фреймворков. Однако у него могут быть проблемы с управлением памятью, асинхронность может вызывать сложности в коде, и динамическая типизация может привести к ошибкам времени выполнения."/>
                </div>
            </div>
        </section>

    )
}

export default AdvantagesSection;