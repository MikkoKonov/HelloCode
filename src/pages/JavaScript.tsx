import React, { useState } from 'react';
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import JavaScriptLogo from "../assets/js-white.svg";
import CodeBlock from '../components/CodeBlock/CodeBlock';
import classes from './Languages.module.css'
import AnimatedText from '../components/AnimationText/AnimationText';
import TextBlock from '../components/TextBlock/TextBlock';
import Footer from '../components/Footer/Footer';


const JavaScript: React.FC = () => {
    const menuItems = [
        { id: 'main', description: 'Главное' },
        { id: 'IDE', description: 'Инструменты разработки'},
        { id: 'syntax', description: 'Синтаксис' },
        { id: 'resources', description: 'Ресурсы для изучения' },
    ];

    const language = {
        greeting: 'console.log(\n    "Привет, JavaScript!"\n);'
    }

    const [activeMenuItem, setActiveMenuItem] = useState(menuItems[0]?.id);

    const handleMenuClick = (menuItem: string) => {
        setActiveMenuItem(menuItem);
        // Здесь вы можете добавить логику для переключения на соответствующий раздел приложения
    };

    let content;
    switch (activeMenuItem) {
        case 'main':
            content = <div>
                <pre>
                    <AnimatedText
                        className={classes.AnimatedText}
                        text={language.greeting}
                        time={70}
                        classNameAnimation={classes.animationCursor}
                        key={1}
                    />
                </pre>
                <TextBlock number={null} heading={null} paragraph='JavaScript является высокоуровневым, интерпретируемым языком программирования, который широко используется для создания динамических и интерактивных веб-приложений. Разработанный Netscape, JavaScript сейчас поддерживается всеми современными браузерами и используется на стороне клиента для обеспечения интерактивности веб-страниц. Вот обзор основных характеристик и особенностей JavaScript:' maxWidth={classes.TextBlockMaxWidth}/>
                <div style={{margin: '60px 0'}}>
                    <h2 style={{marginBottom: '30px'}}>Основные характеристики JavaScript</h2>
                    <TextBlock number='01. ' heading='Интерпретируемость:' paragraph='JavaScript является интерпретируемым языком, что означает, что его код выполняется непосредственно браузером, без необходимости предварительной компиляции. Это обеспечивает быструю разработку и исправление ошибок в реальном времени.' maxWidth={classes.TextBlockMaxWidth}/>
                    <TextBlock number='02. ' heading='Динамическая типизация:' paragraph='Переменные в JavaScript динамически типизированы, что позволяет им автоматически принимать различные типы данных в течение выполнения программы.' maxWidth={classes.TextBlockMaxWidth}/>
                    <TextBlock number='03. ' heading='Прототипное наследование:' paragraph='В JavaScript используется прототипное наследование, в отличие от классического объектно-ориентированного программирования. Объекты могут наследовать свойства и методы других объектов через их прототипы.' maxWidth={classes.TextBlockMaxWidth}/>
                    <TextBlock number='04. ' heading='Функции как объекты первого класса:' paragraph='Функции в JavaScript являются объектами первого класса, что позволяет им использоваться как данные. Функции могут быть переданы как аргументы другим функциям, возвращены из функций и сохранены в переменных.' maxWidth={classes.TextBlockMaxWidth}/>
                    <TextBlock number='05. ' heading='Событийно-ориентированное программирование:' paragraph='JavaScript часто используется для обработки событий веб-страниц, таких как щелчки мыши, отправка форм и другие взаимодействия пользователя с интерфейсом.' maxWidth={classes.TextBlockMaxWidth}/>
                    <TextBlock number='06. ' heading='Асинхронное программирование:' paragraph='JavaScript поддерживает асинхронное выполнение кода с использованием функций обратного вызова (callbacks), промисов (promises) и асинхронных функций (async/await). Это позволяет обрабатывать операции, которые требуют времени, без блокировки исполнения кода.' maxWidth={classes.TextBlockMaxWidth}/>
                    <TextBlock number='07. ' heading='Богатые возможности на стороне клиента:' paragraph='JavaScript широко используется для создания интерактивных пользовательских интерфейсов на стороне клиента, включая динамическое обновление содержимого веб-страниц и взаимодействие с пользователями.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div>
                    <h2 style={{marginBottom: '30px'}}>Пример кода на JavaScript</h2>
                <CodeBlock code='// Пример использования функции и переменной
function greet(name) {
    return "Hello, " + name + "!";
}

var result = greet("World");
console.log(result);
'
                />
                <TextBlock number={null} heading={null} paragraph='Пример кода представляет собой простую функцию, которая приветствует переданное имя и выводит результат в консоль.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
            </div>;
            break;
        case 'syntax':
            content = 
            <div>
                <div style={{margin: '0 0 45px 0'}}>
                    <AnimatedText
                        className={classes.AnimatedText}
                        text='Базовый синтаксис'
                        time={70}
                        classNameAnimation={classes.animationCursor}
                        key={1}
                    />
                    <TextBlock number={null} heading={null} paragraph='Синтаксис JavaScript отличается своей гибкостью и выразительностью, что делает его доступным для широкого круга разработчиков. Вот основные аспекты синтаксиса JavaScript:' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '45px 0'}}>
                    <TextBlock number={null} heading='Объявление переменных:' paragraph='var используется для объявления переменных (устаревший способ). let и const используются для объявления переменных с блочной областью видимости. let может быть изменена, а const - нет.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='var message = "Hello, JavaScript!";
let count = 10;
const pi = 3.14;'/>
                </div>
                <div style={{margin: '45px 0'}}>
                    <TextBlock number={null} heading='Типы данных:' paragraph='JavaScript остается языком с динамической типизацией.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='let name = "John";          // Строка
let age = 25;               // Целое число
let price = 99.99;          // Число с плавающей запятой
let isTrue = true;          // Логический тип данных
let fruits = ["apple", "orange", "banana"];  // Массив'/>
                </div>
                <div style={{margin: '45px 0'}}>
                    <TextBlock number={null} heading='Условные выражения:' paragraph='Используем if, else if и else для создания условных выражений.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='if (x > 0) {
    console.log("Positive");
} else if (x < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}'/>
                </div>
                <div style={{margin: '45px 0'}}>
                    <TextBlock number={null} heading='Циклы:' paragraph='Используем for и for...of для итерации.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Цикл for...of для итерации по массивам
let fruits = ["apple", "orange", "banana"];
for (let fruit of fruits) {
    console.log(fruit);
}'/>
                </div>
                <div style={{margin: '45px 0'}}>
                    <TextBlock number={null} heading='Функции:' paragraph='Используем ключевое слово function для объявления функций. Функциональные выражения для создания анонимных функций.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='function add(a, b) {
    return a + b;
}

// Функциональное выражение
let multiply = function(x, y) {
    return x * y;
};'/>
                </div>
                <div style={{margin: '45px 0'}}>
                    <TextBlock number={null} heading='Объекты:' paragraph='Используем фигурные скобки для создания объектов. Сокращенный синтаксис для методов объекта.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='let person = {
    name: "John",
    age: 30,
    sayHello() {
        console.log(`Hello, ${this.name}!`);
    }
};

console.log(person.name);
person.sayHello();'/>
                </div>
                <div style={{margin: '45px 0'}}>
                    <TextBlock number={null} heading='Прототипное наследование:' paragraph='Используем классы и ключевое слово class для реализации прототипного наследования.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='class Animal {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
    }
}

let cat = new Animal("Fluffy");
cat.sayName();'/>
                </div>
                <div style={{margin: '45px 0'}}>
                    <TextBlock number={null} heading='Событийно-ориентированное программирование (Event Handling):' paragraph='Используем метод addEventListener для привязки событий к элементам в DOM. Используем стрелочные функции для обработчиков событий.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='let button = document.getElementById("myButton");

button.addEventListener("click", () => {
    console.log("Button clicked!");
});'/>
                </div>  
                <TextBlock number={null} heading={null} paragraph='JavaScript предоставляет разнообразные средства для создания динамичных и интерактивных веб-приложений. Его синтаксис легко читаем и доступен для новичков, но в то же время он предоставляет множество возможностей для более опытных разработчиков.' maxWidth={classes.TextBlockMaxWidth}/>  
            </div>;
            break;
        case 'resources':
            content = 
            <div>
                <div style={{margin: '0 0 45px 0'}}>
                    <AnimatedText
                        className={classes.AnimatedText}
                        text='Ресурсы для изучения'
                        time={70}
                        classNameAnimation={classes.animationCursor}
                        key={1}
                    />
                    <TextBlock number={null} heading={null} paragraph='Изучение JavaScript может быть увлекательным и продуктивным, особенно при использовании разнообразных ресурсов. Вот несколько рекомендованных ресурсов, которые помогут вам освоить язык программирования JavaScript:' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <h2>Официальная документация</h2>
                    <TextBlock number={null} heading='MDN Web Docs - JavaScript:' paragraph='Официальная документация от Mozilla Developer Network (MDN) предоставляет полную и понятную информацию о языке JavaScript.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <h2>Учебники и курсы</h2>
                    <TextBlock number={null} heading='JavaScript.info:' paragraph='Бесплатный учебник, охватывающий все аспекты языка JavaScript с понятными объяснениями и практическими примерами.' maxWidth={classes.TextBlockMaxWidth}/>
                    <TextBlock number={null} heading='freeCodeCamp:' paragraph='Обучение JavaScript и другим языкам программирования через интерактивные задания. Курс включает в себя реальные проекты.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <h2>Видеокурсы</h2>
                    <TextBlock number={null} heading='JavaScript - The Complete Guide 2021 (Modern JavaScript):' paragraph='Курс на платформе Udemy, предоставляющий обширное покрытие современного JavaScript. Ведет Макс Шварцмюллер.' maxWidth={classes.TextBlockMaxWidth}/>
                    <TextBlock number={null} heading='Traversy Media - JavaScript Crash Course For Beginners:' paragraph='Бесплатный видеокурс для начинающих от Брэд Трэверси на YouTube.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <h2>Книги</h2>
                    <TextBlock number={null} heading='"Eloquent JavaScript" by Marijn Haverbeke:' paragraph='Бесплатная книга, доступная онлайн, предоставляет глубокое понимание языка и включает интересные задания.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <h2>Практика</h2>
                    <TextBlock number={null} heading='Codecademy - JavaScript Course:' paragraph='Интерактивные упражнения, которые помогут вам научиться JavaScript в процессе практики.' maxWidth={classes.TextBlockMaxWidth}/>
                    <TextBlock number={null} heading='LeetCode - JavaScript:' paragraph='Задачи и упражнения на алгоритмы с использованием JavaScript для тренировки навыков.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <h2>Сообщества и форумы</h2>
                    <TextBlock number={null} heading='Stack Overflow - JavaScript:' paragraph='Популярный форум, где вы можете задавать вопросы и находить ответы по JavaScript.' maxWidth={classes.TextBlockMaxWidth}/>
                    <TextBlock number={null} heading='Dev.to:' paragraph='Ресурс для разработчиков, предоставляющий статьи, обсуждения и возможность общения с другими программистами.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <h2>Инструменты для практики и экспериментов</h2>
                    <TextBlock number={null} heading='CodePen:' paragraph='Онлайн-редактор кода, где вы можете создавать и тестировать фрагменты кода на JavaScript.' maxWidth={classes.TextBlockMaxWidth}/>
                    <TextBlock number={null} heading='JSFiddle:' paragraph='Еще один онлайн-инструмент для создания и демонстрации фрагментов кода на JavaScript.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <TextBlock number={null} heading={null} paragraph='Выбор ресурсов зависит от ваших предпочтений и уровня опыта. Познакомьтесь с разными подходами и ресурсами, чтобы получить максимальную пользу от процесса изучения JavaScript.' maxWidth={classes.TextBlockMaxWidth} />
                
            </div>;
            break;
        case 'IDE':
            content = 
            <div>
                <div style={{margin: '0 0 45px 0'}}>
                    <AnimatedText
                        className={classes.AnimatedText}
                        text='Инструменты разработки'
                        time={70}
                        classNameAnimation={classes.animationCursor}
                        key={1}
                    />
                    <TextBlock number={null} heading={null} paragraph='JavaScript развивается вместе с обширным экосистемом инструментов, предназначенных для упрощения разработки, тестирования и отладки. Вот несколько ключевых инструментов разработки JavaScript:' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <h2>Интегрированные среды разработки (IDE)</h2>
                    <TextBlock number={null} heading='Visual Studio Code (VS Code):' paragraph='Бесплатный, легкий и мощный редактор кода с поддержкой JavaScript, автодополнением, отладкой и многими расширениями.' maxWidth={classes.TextBlockMaxWidth}/>
                    <TextBlock number={null} heading='WebStorm:' paragraph='Полноценная интегрированная среда разработки от JetBrains с множеством функций, включая отладку, инспекцию кода и поддержку фреймворков.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <h2>Системы управления версиями</h2>
                    <TextBlock number={null} heading='Git:' paragraph='Распределенная система управления версиями, позволяющая отслеживать изменения в коде, создавать ветки и сливать их.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <h2>Фреймворки и библиотеки</h2>
                    <TextBlock number={null} heading='React:' paragraph='Библиотека для создания пользовательских интерфейсов. Разработана и поддерживается Facebook.' maxWidth={classes.TextBlockMaxWidth}/>
                    <TextBlock number={null} heading='Angular:' paragraph='Фреймворк от Google для разработки масштабируемых веб-приложений.' maxWidth={classes.TextBlockMaxWidth}/>
                    <TextBlock number={null} heading='Vue.js:' paragraph='Прогрессивный фреймворк для создания пользовательских интерфейсов, легко интегрируемый в проекты.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <h2>Пакетные менеджеры</h2>
                    <TextBlock number={null} heading='npm (Node Package Manager):' paragraph='Самый популярный пакетный менеджер для JavaScript. Используется для установки, управления зависимостями и выполнения скриптов.' maxWidth={classes.TextBlockMaxWidth}/>
                    <TextBlock number={null} heading='Yarn:' paragraph='Альтернативный пакетный менеджер с улучшенной производительностью и некоторыми дополнительными функциями.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <h2>Сборщики модулей</h2>
                    <TextBlock number={null} heading='Webpack:' paragraph='Мощный инструмент для сборки и упаковки модулей JavaScript, стилей, изображений и других ресурсов.' maxWidth={classes.TextBlockMaxWidth}/>
                    <TextBlock number={null} heading='Parcel:' paragraph='Простой и быстрый сборщик, который автоматически обрабатывает многие типы файлов без необходимости настройки.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <h2>Тестирование</h2>
                    <TextBlock number={null} heading='Jest:' paragraph='Фреймворк для тестирования JavaScript, разработанный Facebook. Поддерживает snapshot-тестирование и множество других возможностей.' maxWidth={classes.TextBlockMaxWidth}/>
                    <TextBlock number={null} heading='Mocha:' paragraph='Гибкий фреймворк для тестирования с поддержкой различных интерфейсов и возможностей.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <h2>Отладка и профилирование</h2>
                    <TextBlock number={null} heading='Chrome DevTools:' paragraph='Набор инструментов для отладки и профилирования веб-приложений, встроенный в браузер Google Chrome.' maxWidth={classes.TextBlockMaxWidth}/>
                    <TextBlock number={null} heading='Node.js Inspector:' paragraph='Встроенный отладчик для Node.js, который позволяет отлаживать серверный JavaScript.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <h2>Системы сборки и развертывания</h2>
                    <TextBlock number={null} heading='Docker:' paragraph='Платформа для разработки, доставки и выполнения приложений в контейнерах.' maxWidth={classes.TextBlockMaxWidth}/>
                    <TextBlock number={null} heading='Heroku:' paragraph='Облачная платформа для развертывания и управления веб-приложений.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <TextBlock number={null} heading={null} paragraph='Эти инструменты предоставляют разработчикам множество средств для эффективной работы над проектами JavaScript, улучшая производительность и облегчая процесс разработки. Выбор конкретных инструментов зависит от требований проекта и предпочтений разработчика.' maxWidth={classes.TextBlockMaxWidth} />
                
            </div>;
            break;
    }

    return (
        <div>
            <div style={{maxWidth: '90%', margin: '0 auto'}}>
                <Header logo='JavaScript' />
                
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '30px'}}>
                    <Menu menuItems={menuItems} src={JavaScriptLogo} name='JavaScript' activeMenuItem={activeMenuItem} onMenuClick={handleMenuClick} />
                    <div style={{width: '78%'}}>{content}</div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default JavaScript;

