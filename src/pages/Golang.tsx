import React, { useState } from 'react';
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import GolangLogo from "../assets/go-white.svg";
import CodeBlock from '../components/CodeBlock/CodeBlock';
import classes from './Languages.module.css'
import AnimatedText from '../components/AnimationText/AnimationText';
import TextBlock from '../components/TextBlock/TextBlock';
import Footer from '../components/Footer/Footer';


const Golang: React.FC = () => {
    const menuItems = [
        { id: 'main', description: 'Главное' },
        { id: 'IDE', description: 'Инструменты разработки'},
        { id: 'syntax', description: 'Синтаксис' },
        { id: 'resources', description: 'Ресурсы для изучения' },
    ];

    const language = {
        greeting: 'func main() {\n    fmt.Println(\"Привет, Go\")\n}'
    }

    const [activeMenuItem, setActiveMenuItem] = useState(menuItems[0]?.id);

    const handleMenuClick = (menuItem: string) => {
        setActiveMenuItem(menuItem);
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
                <TextBlock number={null} heading={null} paragraph='Go, также известный как Golang, — это язык программирования с открытым исходным кодом, созданный инженерами из Google. Разработанный с учетом эффективности и простоты, Go ориентирован на создание масштабируемых и надежных программных систем.' maxWidth={classes.TextBlockMaxWidth}/>
                <div style={{margin: '60px 0'}}>
                    <h2 style={{marginBottom: '30px'}}>Основные характеристики Go</h2>
                    <TextBlock number='01. ' heading='Простота и читаемость' paragraph='Go придерживается простого и понятного синтаксиса, что делает код легким для понимания. Отсутствие избыточных деталей и явное выражение намерений способствуют читаемости кода.' maxWidth={classes.TextBlockMaxWidth}/>
                    <TextBlock number='02. ' heading='Эффективность и производительность' paragraph='Go предоставляет компилятор сборки, который генерирует статически скомпилированный машинный код. Это обеспечивает высокую производительность при выполнении программ, а также быструю скорость компиляции.' maxWidth={classes.TextBlockMaxWidth}/>
                    <TextBlock number='03. ' heading='Сборка мусора (Garbage Collection)' paragraph='Go включает в себя сборщик мусора, который автоматически управляет памятью, что упрощает разработку и уменьшает вероятность утечек памяти.' maxWidth={classes.TextBlockMaxWidth}/>
                    <TextBlock number='04. ' heading='Многозадачность (Concurrency)' paragraph='Go активно поддерживает концепцию многозадачности с использованием горутин (goroutines) и каналов (channels). Горутины позволяют легко создавать параллельные задачи, а каналы обеспечивают безопасное взаимодействие между ними.' maxWidth={classes.TextBlockMaxWidth}/>
                    <TextBlock number='05. ' heading='Стандартная библиотека' paragraph='Go поставляется с обширной стандартной библиотекой, включающей множество пакетов для работы с сетью, файловой системой, шифрованием, HTTP и многими другими областями.' maxWidth={classes.TextBlockMaxWidth}/>
                    <TextBlock number='06. ' heading='Способствование Разработке Микросервисов' paragraph='Go стал популярным выбором для создания микросервисных архитектур благодаря легкости создания и развертывания маленьких, независимых служб.' maxWidth={classes.TextBlockMaxWidth}/>
                    <TextBlock number='07. ' heading='Переносимость' paragraph='Go обеспечивает высокую степень переносимости кода между различными платформами и операционными системами, что делает его удобным для разработки кроссплатформенных приложений.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div>
                    <h2 style={{marginBottom: '30px'}}>Пример кода на Golang</h2>
                <CodeBlock code='package main

import "fmt"

func main() {
    message := "Hello, Go!"
    fmt.Println(message)
}'
                />
                <TextBlock number={null} heading={null} paragraph='Пример кода представляет программу, выводящую "Hello, Go!" в стандартный вывод.' maxWidth={classes.TextBlockMaxWidth}/>
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
                    <TextBlock number={null} heading={null} paragraph='Синтаксис Go разработан с фокусом на читаемости и эффективности. Этот язык предоставляет простой и лаконичный синтаксис, что делает его отличным выбором для создания масштабируемых и производительных приложений. Вот основные аспекты синтаксиса Go:' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '45px 0'}}>
                    <TextBlock number={null} heading='Объявление переменных:' paragraph='Использование var для явного объявления переменной. Краткое объявление с использованием := для автоматического определения типа.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='var message string
message = "Hello, Go!"

// Или с кратким объявлением
shortMessage := "Hello, Go!"
'/>
                </div>
                <div style={{margin: '45px 0'}}>
                    <TextBlock number={null} heading='Типы данных:' paragraph='Определение переменных различных типов данных, таких как int, float64 и bool.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='var age int
var price float64
var isReady bool
'/>
                </div>
                <div style={{margin: '45px 0'}}>
                    <TextBlock number={null} heading='Условные выражения:' paragraph='Использование if, else if и else для создания условных выражений.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='if x > 0 {
    fmt.Println("Positive")
} else if x < 0 {
    fmt.Println("Negative")
} else {
    fmt.Println("Zero")
}
'/>
                </div>
                <div style={{margin: '45px 0'}}>
                    <TextBlock number={null} heading='Циклы:' paragraph='Использование цикла for для итерации. Цикл range для обхода элементов в коллекции.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='for i := 0; i < 5; i++ {
    fmt.Println(i)
}

// Цикл range для итерации по коллекциям
numbers := []int{1, 2, 3, 4, 5}
for index, value := range numbers {
    fmt.Printf("Index: %d, Value: %d\n", index, value)
}
'/>
                </div>
                <div style={{margin: '45px 0'}}>
                    <TextBlock number={null} heading='Функции:' paragraph='Объявление функции с параметрами и возвращаемым значением.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='func add(a, b int) int {
    return a + b
}
'/>
                </div>
                <div style={{margin: '45px 0'}}>
                    <TextBlock number={null} heading='Структуры данных:' paragraph='Определение структуры данных с использованием type. Создание экземпляра структуры с инициализацией полей.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='type Person struct {
    Name string
    Age  int
}

// Создание экземпляра структуры
person := Person{Name: "John", Age: 30}
'/>
                </div>
                <div style={{margin: '45px 0'}}>
                    <TextBlock number={null} heading='Многозадачность (Goroutines и Channels):' paragraph='Использование горутин (go) для параллельного выполнения задач. Использование каналов (chan) для обмена данными между горутинами.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='func main() {
    messages := make(chan string)

    go func() {
        messages <- "Hello, Go!"
    }()

    msg := <-messages
    fmt.Println(msg)
}
'/>
                </div>
                <div style={{margin: '45px 0'}}>
                    <TextBlock number={null} heading='Интерфейсы:' paragraph='Определение интерфейса Shape с методом Area. Реализация интерфейса для структуры Circle.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='type Shape interface {
    Area() float64
}

type Circle struct {
    Radius float64
}

func (c Circle) Area() float64 {
    return 3.14 * c.Radius * c.Radius
}
'/>
                </div>  
                <TextBlock number={null} heading={null} paragraph='Синтаксис Go обеспечивает простоту и ясность кода, что делает его доступным для разработчиков с различным уровнем опыта. Эффективная обработка параллельных задач, простота использования и быстрое время компиляции делают Go привлекательным для создания высокопроизводительных приложений.' maxWidth={classes.TextBlockMaxWidth}/>  
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
                    <TextBlock number={null} heading={null} paragraph='Изучение языка программирования Go может быть эффективным с использованием различных образовательных ресурсов. Вот несколько ресурсов, которые помогут вам освоить Go:' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <TextBlock number={null} heading='Официальная документация Go:' paragraph='Документация по Go — это отличное место для начала. Здесь вы найдете руководства, справочники, примеры кода и другие полезные материалы.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <TextBlock number={null} heading='Go Tour:' paragraph='Go Tour — интерактивное онлайн-руководство, предоставляющее знакомство с основами Go. Он позволяет вам изучать язык прямо в браузере, выполняя задания.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <TextBlock number={null} heading='Coursera: Programming with Google Go:' paragraph='Курс "Programming with Google Go" на Coursera, предоставленный Google, охватывает основы языка Go и его применение в разработке программного обеспечения.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <TextBlock number={null} heading='A Tour of Go (Официальный учебник):' paragraph='A Tour of Go — это интерактивный учебник, введение в ключевые концепции Go, предоставляемое официальным сайтом языка.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <TextBlock number={null} heading='Go by Example:' paragraph='Go by Example предоставляет примеры кода с объяснениями для различных аспектов Go, от базовых до более сложных.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <TextBlock number={null} heading='Go in Practice (Книга):' paragraph='Go in Practice — книга, которая предоставляет практические советы и реальные примеры использования Go в различных сценариях разработки.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <TextBlock number={null} heading='Go Forum on Reddit:' paragraph='Go Forum на Reddit является отличным местом для общения с сообществом Go, задавания вопросов и обмена опытом.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <TextBlock number={null} heading='Gophercises:' paragraph='Gophercises — это серия задач и упражнений, разработанных для практики и углубленного изучения Go.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
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
                    <TextBlock number={null} heading={null} paragraph='Разработка на языке Go облегчается различными инструментами, предоставляемыми сообществом и компанией Google. Вот несколько ключевых инструментов разработки для Go:' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <TextBlock number={null} heading='Go Compiler (go):' paragraph='Компилятор Go — основной инструмент, отвечающий за сборку и компиляцию кода. Он преобразует исходный код на Go в исполняемый машинный код для целевой платформы.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <TextBlock number={null} heading='Go Modules:' paragraph='Go Modules представляют собой систему управления зависимостями в проектах Go. Это помогает в управлении зависимостями и обеспечивает версионирование.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <TextBlock number={null} heading='Visual Studio Code с расширением Go:' paragraph='Visual Studio Code является популярным редактором кода, а расширение Go предоставляет поддержку для разработки на Go в Visual Studio Code. Оно включает в себя функции, такие как автодополнение, отладка и инструменты для работы с модулями.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <TextBlock number={null} heading='GoLand:' paragraph='GoLand — это интегрированная среда разработки (IDE) от JetBrains, предназначенная специально для языка Go. GoLand предоставляет богатые функции, такие как рефакторинг, отладка, поддержка модулей и многое другое.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <TextBlock number={null} heading='Delve:' paragraph='Delve — это отладчик для Go, предоставляющий возможность отлаживать код, включая многозадачные приложения и горутины. Delve интегрируется с различными IDE и текстовыми редакторами.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <TextBlock number={null} heading='GoLint и GoVet:' paragraph='GoLint и GoVet — это инструменты, предназначенные для статического анализа кода с целью обнаружения потенциальных проблем и стилевых ошибок.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <TextBlock number={null} heading='Swagger и Swaggo:' paragraph='Swagger используется для документации API, а Swaggo — это инструмент для автоматической генерации документации Swagger из комментариев в коде на Go.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <TextBlock number={null} heading='Testify:' paragraph='Testify — это набор библиотек для написания тестов на Go. Он предоставляет различные инструменты и утверждения для упрощения тестирования кода.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <TextBlock number={null} heading='Dep (депрекирован):' paragraph='Dep — ранее использовавшийся инструмент для управления зависимостями в Go. Однако с внедрением Go Modules, Dep теперь считается устаревшим.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
            </div>;
            break;
    }

    return (
        <div>
            <div style={{maxWidth: '90%', margin: '0 auto'}}>
                <Header logo='Golang' />
                
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '30px'}}>
                    <Menu menuItems={menuItems} src={GolangLogo} name='Golang' activeMenuItem={activeMenuItem} onMenuClick={handleMenuClick}/>
                    <div style={{width: '78%'}}>{content}</div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}

export default Golang;

