import React, { useState } from 'react';
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import KotlinLogo from "../assets/kotlin-white.svg";
import CodeBlock from '../components/CodeBlock/CodeBlock';
import classes from './Languages.module.css'
import AnimatedText from '../components/AnimationText/AnimationText';
import TextBlock from '../components/TextBlock/TextBlock';
import Footer from '../components/Footer/Footer';


const Kotlin: React.FC = () => {
    const menuItems = [
        { id: 'main', description: 'Главное' },
        { id: 'IDE', description: 'Инструменты разработки'},
        { id: 'syntax', description: 'Синтаксис' },
        { id: 'resources', description: 'Ресурсы для изучения' },
    ];

    const language = {
        greeting: 'fun main() {\n    println("Привет, Kotlin!")\n}'
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
                <TextBlock number={null} heading={null} paragraph='Kotlin - современный язык программирования, разработанный компанией JetBrains. Он представляет собой статически типизированный язык, совместимый с Java, который призван улучшить процесс разработки, сделать его более удобным и безопасным. Kotlin обеспечивает высокую совместимость с существующими Java-проектами, что позволяет пошагово внедрять его в уже существующий код.' maxWidth={classes.TextBlockMaxWidth}/>
                <div style={{margin: '60px 0'}}>
                    <h2 style={{marginBottom: '30px'}}>Основные характеристики Kotlin</h2>
                    <TextBlock number='01. ' heading='Интероперабельность с Java' paragraph='Одним из ключевых преимуществ Kotlin является его способность взаимодействовать с существующим кодом на Java. Это позволяет постепенно внедрять Kotlin в проекты, созданные на Java, без необходимости переписывания всего кода.' maxWidth={classes.TextBlockMaxWidth}/>
                    <TextBlock number='02. ' heading='Краткость и выразительность' paragraph='Kotlin предлагает краткий и выразительный синтаксис, что уменьшает количество кода и улучшает читаемость. Это способствует увеличению производительности разработчика и уменьшению вероятности ошибок.' maxWidth={classes.TextBlockMaxWidth}/>
                    <TextBlock number='03. ' heading='Безопасность' paragraph='Статическая типизация и некоторые другие конструкции языка способствуют созданию более безопасного кода. Kotlin предотвращает многие типичные ошибки, такие как NullPointerException, благодаря введению nullable и non-nullable типов данных.' maxWidth={classes.TextBlockMaxWidth}/>
                    <TextBlock number='04. ' heading='Расширяемость' paragraph='Язык предоставляет множество возможностей для расширения классов и функций, что облегчает создание чистого и модульного кода.' maxWidth={classes.TextBlockMaxWidth}/>
                    
                </div>
                <div>
                    <h2 style={{marginBottom: '30px'}}>Пример кода на Kotlin</h2>
                <CodeBlock code='// Пример программы "Hello, Kotlin!"
fun main() {
    val greeting = "Hello, Kotlin!"
    println(greeting)
}'
                />
                <TextBlock number={null} heading={null} paragraph='В этом небольшом примере видно, как просто и читаемо написать программу на Kotlin. Объявление переменной greeting с ключевым словом val создает неизменяемую (immutable) переменную. Функция println выводит приветствие в консоль.' maxWidth={classes.TextBlockMaxWidth}/>
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
                    <TextBlock number={null} heading={null} paragraph='Здесь собраны основные элементы синтаксиса с примерами.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '45px 0'}}>
                    <TextBlock number={null} heading='Определение и импорт пакетов' paragraph='Спецификация пакета должна находиться в верхней части исходного файла.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='package my.demo

import kotlin.text.*

// ...'/>
                    <TextBlock number={null} heading={null} paragraph='Совпадение каталогов и пакетов не обязательно: исходные файлы могут быть размещены в файловой системе произвольным образом.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '45px 0'}}>
                    <TextBlock number={null} heading='Точка входа в программу' paragraph='Точкой входа в Kotlin-приложение является функция main.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='fun main() {
    println("Hello world!")
}'/>
                    <TextBlock number={null} heading={null} paragraph='Другая форма main принимает переменное количество аргументов String.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='fun main(args: Array<String>) {
    println(args.contentToString())
}'/>
                </div>
                <div style={{margin: '45px 0'}}>
                    <TextBlock number={null} heading='Печать в стандартный вывод' paragraph='print выводит свой аргумент на стандартный вывод.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='fun main() {
    print("Hello ")
    print("world!")
}'/>
                    <TextBlock number={null} heading={null} paragraph='println печатает свои аргументы и добавляет разрыв строки, чтобы следующее, что вы печатаете, появилось на следующей строке.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='fun main() {
    println("Hello world!")
    println(42)
}'/>
                </div>
                <div style={{margin: '45px 0'}}>
                    <TextBlock number={null} heading='Функции' paragraph='Функция с двумя параметрами Int и возвращаемым типом Int.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='fun sum(a: Int, b: Int): Int {
    return a + b
}

fun main() {
    print("sum of 3 and 5 is ")
    println(sum(3, 5))
}'/>
                    <TextBlock number={null} heading={null} paragraph='Тело функции может быть выражением. Его возвращаемый тип вычисляется.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='fun sum(a: Int, b: Int) = a + b

fun main() {
    println("sum of 19 and 23 is ${sum(19, 23)}")
}'/>
                    <TextBlock number={null} heading={null} paragraph='Функция, которая не возвращает никакого значимого значения.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='fun printSum(a: Int, b: Int): Unit {
    println("sum of $a and $b is ${a + b}")
}

fun main() {
    printSum(-1, 8)
}'/>
                    <TextBlock number={null} heading={null} paragraph='Unit тип возврата может быть опущен.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='fun printSum(a: Int, b: Int) {
    println("sum of $a and $b is ${a + b}")
}

fun main() {
    printSum(-1, 8)
}'/>
                </div>
                <div style={{margin: '45px 0'}}>
                    <TextBlock number={null} heading='Переменные' paragraph='Локальные переменные, доступные только для чтения, определяются с помощью ключевого слова val. Им можно присвоить значение только один раз.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='fun main() {
    val a: Int = 1  // immediate assignment
    val b = 2   // `Int` type is inferred
    val c: Int  // Type required when no initializer is provided
    c = 3       // deferred assignment
    println("a = $a, b = $b, c = $c")
}'/>
                    <TextBlock number={null} heading={null} paragraph='Переменные, которые могут быть переназначены, используют ключевое слово var.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='fun main() {
    var x = 5 // `Int` type is inferred
    x += 1
    println("x = $x")
}'/>
                    <TextBlock number={null} heading={null} paragraph='Вы можете объявлять переменные на верхнем уровне.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='val PI = 3.14
var x = 0

fun incrementX() { 
    x += 1 
}

fun main() {
    println("x = $x; PI = $PI")
    incrementX()
    println("incrementX()")
    println("x = $x; PI = $PI")
}'/>
                </div>
                <div style={{margin: '45px 0'}}>
                    <TextBlock number={null} heading='Создание классов и экземпляров' paragraph='Чтобы определить класс, используйте ключевое слово class.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='class Shape'/>
                    <TextBlock number={null} heading={null} paragraph='Свойства класса могут быть перечислены в его объявлении или теле.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='class Rectangle(val height: Double, val length: Double) {
    val perimeter = (height + length) * 2
}'/>
                    <TextBlock number={null} heading={null} paragraph='Конструктор по умолчанию с параметрами, перечисленными в объявлении класса, доступен автоматически.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='class Rectangle(val height: Double, val length: Double) {
    val perimeter = (height + length) * 2 
}
fun main() {
    val rectangle = Rectangle(5.0, 2.0)
    println("The perimeter is ${rectangle.perimeter}")
}'/>
                    <TextBlock number={null} heading={null} paragraph='Наследование между классами объявляется через двоеточие (:). По умолчанию классы являются конечными; чтобы сделать класс наследуемым, пометьте его как открытый.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='open class Shape

class Rectangle(val height: Double, val length: Double): Shape() {
    val perimeter = (height + length) * 2
}'/>

                </div>
                <div style={{margin: '45px 0'}}>
                    <TextBlock number={null} heading='Комментарии' paragraph='Как и большинство современных языков, Kotlin поддерживает однострочные (или в конце строки) и многострочные (блочные) комментарии.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='// This is an end-of-line comment

/* This is a block comment
   on multiple lines. */'/>
                    <TextBlock number={null} heading={null} paragraph='Блочные комментарии в Kotlin могут быть вложенными.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='/* The comment starts here
/* contains a nested comment */
and ends here. */'/>

                </div>
                <div style={{margin: '45px 0'}}>
                    <TextBlock number={null} heading='Шаблоны строк' paragraph={null} maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='fun main() {
    var a = 1
    // simple name in template:
    val s1 = "a is $a" 

    a = 2
    // arbitrary expression in template:
    val s2 = "${s1.replace("is", "was")}, but now is $a"
    println(s2)
}'/>

                </div>
                <div style={{margin: '45px 0'}}>
                    <TextBlock number={null} heading='Условные выражения' paragraph={null} maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='fun maxOf(a: Int, b: Int): Int {
    if (a > b) {
        return a
    } else {
        return b
    }
}

fun main() {
    println("max of 0 and 42 is ${maxOf(0, 42)}")
}'/>
                    <TextBlock number={null} heading={null} paragraph='В Kotlin if также может использоваться как выражение.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='fun maxOf(a: Int, b: Int) = if (a > b) a else b

fun main() {
    println("max of 0 and 42 is ${maxOf(0, 42)}")
}'/>

                </div>
                <div style={{margin: '45px 0'}}>
                    <TextBlock number={null} heading='Цикл for' paragraph={null} maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='fun main() {
    val items = listOf("apple", "banana", "kiwifruit")
    for (item in items) {
        println(item)
    }
}'/>
                    <TextBlock number={null} heading={null} paragraph='или' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='fun main() {
    val items = listOf("apple", "banana", "kiwifruit")
    for (index in items.indices) {
        println("item at $index is ${items[index]}")
    }
}'/>

                </div>
                <div style={{margin: '45px 0'}}>
                    <TextBlock number={null} heading='Цикл while' paragraph={null} maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='fun main() {
    val items = listOf("apple", "banana", "kiwifruit")
    var index = 0
    while (index < items.size) {
        println("item at $index is ${items[index]}")
        index++
    }
}'/>
                </div>
                <div style={{margin: '45px 0'}}>
                    <TextBlock number={null} heading='Выражение when' paragraph={null} maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='fun describe(obj: Any): String =
    when (obj) {
        1          -> "One"
        "Hello"    -> "Greeting"
        is Long    -> "Long"
        !is String -> "Not a string"
        else       -> "Unknown"
    }

fun main() {
    println(describe(1))
    println(describe("Hello"))
    println(describe(1000L))
    println(describe(2))
    println(describe("other"))
}'/>
                </div>
                <div style={{margin: '45px 0'}}>
                    <TextBlock number={null} heading='Коллекции' paragraph='Итерация над коллекцией.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='fun main() {
    val items = listOf("apple", "banana", "kiwifruit")
    for (item in items) {
        println(item)
    }
}'/>
                    <TextBlock number={null} heading={null} paragraph='Проверьте, содержит ли коллекция объект, используя оператор in:' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='fun main() {
    val items = setOf("apple", "banana", "kiwifruit")
    when {
        "orange" in items -> println("juicy")
        "apple" in items -> println("apple is fine too")
    }
}'/>
                    <TextBlock number={null} heading={null} paragraph='Используйте лямбда-выражения для фильтрации и сопоставления коллекций:' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='fun main() {
    val fruits = listOf("banana", "avocado", "apple", "kiwifruit")
    fruits
        .filter { it.startsWith("a") }
        .sortedBy { it }
        .map { it.uppercase() }
        .forEach { println(it) }
}'/>
                    <TextBlock number={null} heading={null} paragraph='Или над прогрессией.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='fun main() {
    for (x in 1..10 step 2) {
        print(x)
    }
    println()
    for (x in 9 downTo 0 step 3) {
        print(x)
    }
}'/>

                </div>
                <div style={{margin: '45px 0'}}>
                    <TextBlock number={null} heading='Ranges' paragraph='Проверьте, находится ли число в диапазоне, используя оператор in.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='fun main() {
    val x = 10
    val y = 9
    if (x in 1..y+1) {
        println("fits in range")
    }
}'/>
                    <TextBlock number={null} heading={null} paragraph='Проверьте, не выходит ли число за пределы диапазона.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='fun main() {
    val list = listOf("a", "b", "c")

    if (-1 !in 0..list.lastIndex) {
        println("-1 is out of range")
    }
    if (list.size !in list.indices) {
        println("list size is out of valid list indices range, too")
    }
}'/>
                    <TextBlock number={null} heading={null} paragraph='Итерация по диапазону.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='fun main() {
    for (x in 1..5) {
        print(x)
    }
}'/>
                    <TextBlock number={null} heading={null} paragraph='Или над прогрессией.' maxWidth={classes.TextBlockMaxWidth}/>
                    <CodeBlock code='fun main() {
    for (x in 1..10 step 2) {
        print(x)
    }
    println()
    for (x in 9 downTo 0 step 3) {
        print(x)
    }
}'/>

                </div>    
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
                    <TextBlock number={null} heading={null} paragraph='Изучение нового языка программирования может быть увлекательным и продуктивным процессом, особенно если есть доступ к качественным обучающим материалам. Вот несколько ресурсов, которые могут помочь вам освоить Kotlin:' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <TextBlock number={null} heading='Официальная документация Kotlin:' paragraph='Документация Kotlin предоставляет подробную и актуальную информацию о языке. Здесь вы найдете руководства, примеры кода, справочники по стандартной библиотеке и другие полезные материалы.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <TextBlock number={null} heading='Kotlin Koans:' paragraph='Kotlin Koans — это интерактивные задачи, предназначенные для самостоятельного изучения языка Kotlin. Вы можете выполнять их прямо в браузере Kotlin Playground.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <TextBlock number={null} heading='Coursera: Kotlin for Java Developers:' paragraph='Курс "Kotlin for Java Developers" на Coursera разработан JetBrains и предназначен для тех, кто уже знаком с языком Java. Курс включает в себя видео-лекции и практические задания.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <TextBlock number={null} heading='YouTube-канал Kotlin Official:' paragraph='Официальный YouTube-канал Kotlin предоставляет видео-лекции, презентации и другие материалы, которые помогут вам лучше понять особенности языка.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <TextBlock number={null} heading='Reddit: /r/Kotlin:' paragraph='Сообщество Kotlin на Reddit является отличным местом для общения с другими разработчиками, задавания вопросов и обмена опытом.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <TextBlock number={null} heading='GitHub: Kotlin Playground:' paragraph='Kotlin Playground на GitHub содержит множество примеров кода, которые вы можете изучить и использовать для практики.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <TextBlock number={null} heading='Онлайн-курсы на Udacity:' paragraph='Kotlin Bootcamp for Programmers — это курс, разработанный Google и JetBrains, который предназначен для опытных разработчиков, желающих освоить Kotlin.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <TextBlock number={null} heading='Статьи и учебники на Medium:' paragraph='Платформа Medium часто содержит статьи, блоги и учебники по Kotlin, написанные сообществом разработчиков.' maxWidth={classes.TextBlockMaxWidth}/>
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
                    <TextBlock number={null} heading={null} paragraph='Разработка на языке Kotlin поддерживается различными инструментами, которые облегчают создание, отладку и управление проектами. Вот несколько ключевых инструментов разработки для Kotlin:' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <TextBlock number={null} heading='IntelliJ IDEA:' paragraph='IntelliJ IDEA — это интегрированная среда разработки (IDE), разработанная компанией JetBrains. Она предоставляет мощные инструменты для написания, отладки и профилирования кода на Kotlin. IntelliJ IDEA также обеспечивает поддержку рефакторинга, автоматического завершения кода и интеграцию с системами управления версиями.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <TextBlock number={null} heading='Kotlin Plugin:' paragraph='IntelliJ IDEA предоставляет плагин Kotlin, который добавляет поддержку языка Kotlin в IDE. Этот плагин позволяет создавать новые проекты Kotlin, конвертировать Java-код в Kotlin, автоматически применять рефакторинги и многое другое.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <TextBlock number={null} heading='Kotlin Command Line Compiler:' paragraph='Для разработчиков, предпочитающих командную строку, Kotlin предоставляет компилятор командной строки, который позволяет компилировать и запускать программы на Kotlin без использования IDE.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <TextBlock number={null} heading='Gradle и Maven:' paragraph='Kotlin может использоваться в проектах, управляемых системами сборки, такими как Gradle и Maven. Оба инструмента поддерживают язык Kotlin, что обеспечивает удобство интеграции с существующими проектами и библиотеками.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <TextBlock number={null} heading='Kotlin/Native и Kotlin/JS:' paragraph='Kotlin поддерживает создание приложений не только для Java Virtual Machine (JVM), но и для нативной среды выполнения (Kotlin/Native) и веб-приложений с использованием JavaScript (Kotlin/JS). Эти инструменты позволяют разрабатывать приложения для различных платформ с использованием общего кода на Kotlin.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
                <div style={{margin: '0 0 45px 0'}}>
                    <TextBlock number={null} heading='Kotlin Playground:' paragraph='Kotlin Playground — это онлайн-инструмент, который позволяет писать, тестировать и делиться кодом на Kotlin прямо в веб-браузере. Это удобно для быстрого экспериментирования с языком и обучения его основам.' maxWidth={classes.TextBlockMaxWidth}/>
                </div>
            </div>;
            break;
    }

    return (
        <div>
            <div style={{maxWidth: '90%', margin: '0 auto'}}>
                <Header logo='Kotlin' />
                
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '30px'}}>
                    <Menu menuItems={menuItems} src={KotlinLogo} name='Kotlin' activeMenuItem={activeMenuItem} onMenuClick={handleMenuClick} />
                    <div style={{width: '78%'}}>{content}</div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Kotlin;