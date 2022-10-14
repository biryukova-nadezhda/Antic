# Класс Dom

Класс DOM предназначен для рендеринга страницы сайта.

## Структура класса:

1. constructor(pageObj)
2. createEl(typeEl, classEl, contentEL = null)
3. init()
4. createHeader(obj)
5. createHeaderContainer(obj)
6. createHeaderNav(array)

## Краткое описание методов:

1. constructor(pageObj) - класс принимает объект `pageObj` вида:

```javascript

const pageObj = {
  header: {
    logo: 'actic',
    nav: [
      {
        textLink: 'Products',
        link: '#',
      },
      {
        textLink: 'Rooms',
        link: '#',
      },
    ],
    smallTitle: 'Home design',
    bigTitle: 'Elegance for Interiors & Exteriors',
    content: 'We provide everyone with modern, trendy, quality furniture',
  },
  body: {},
  footer: {}
};

```
где:
  * header - ключ объекта, содержащий данные, относящиеся к шапке страницы. А именно:
    * logo - строка - название магазина, которое будет отображаться в виде логотипа
    * nav - массив объектов, вида:

    ```javascript
      {
        textLink: 'Products',
        link: '#',
      }
    ```

    в котором `textLink` - содержит строку с названием пункта меню, а `link` - адрес, по которому производится переход по данному пункту меню

    * smallTitle - строка, содержащая текст малого заголовка шапки страницы
    * bigTitle - строка, содержащая основной заголовок шапки страницы
    * content - строка, содержащая описание в шапке страницы

  * body - содержит данные, относящиеся к контенту страницы
  * footer - содержит данные, относящиеся к контенку подвала страницы

2. createEl(typeEl, classEl, content = null) - Метод создания элемента. Создает элемент типа `typeEl` с классом `classEl` и контентом `content`, который может отсутствовать

3. init() - метод, в котором происходит проверка данных подаваемого объекта и, на основании этой проверки, происходит генерация страницы и вставка ее в тег `body`

4. createHeader(obj) - метод принимает на вход объект вида `header`, описанного выше и на основании него возвращает шапку страницы

5.  createHeaderContainer(obj) - метод принимает на вход объект вида `header`, описанного выше и на основании него возвращает контейнер шапки страницы, содержащий левую часть шапки страницы (логотип, меню, малый/большой заголовок и описание)

6. createHeaderNav(array) - метод принимает массив объектов вида `header.nav`, описанный выще, и возвращает блок со списком меню
