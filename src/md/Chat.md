# Класс Chat

Класс Chat обеспечивает полную работу чата.

## Структура класса:

1. constructor(classButton, textLogo)
2. init()
3. createEl(typeEl, classEl, contentEL = null)
4. createChat()
5. createChatHeader()
6. createChatFooter()
7. createMessage(textMessage, type = 'client')
8. addListener(el, typeEvent, func, additional = null)
9. buttonChatHandler(event)
10. closeButtonHandler(event)
11. textareaCheckHandler(event)
12. textareaHandler(textMessage)
13. botMessage()
14. getRandom(max)
15. randomMessage()

## Краткое описание методов:

1. **constructor(classButton, textLogo)** - класс принимает класс кнопки `classButton`, при клике на которую должно появится окно чата, а также текст логотипа `textLogo`, который будет отображаться в шапке чата.

2. **init()** - метод находит кнопку вызовы чата на странице и добавляет на него слушатель события `click`

3. **createEl(typeEl, classEl, contentEL = null)** - метод возвращает DOM-элемент типа `typeEl`  с классом `classEl` и контентом `contentEL`, если он передан в метод класса

4. **createChat()** - метод возвращает окно чата

5. **createChatHeader()** - метод возвращает шапку окна чата вида:

```HTML
  <header class="chat-header">
    <div class="chat-header__logo">textLogo</div>
    <button class="chat-header__button" type="button">x</button>
  </header>
```

6. **createChatFooter()** - возвращает подвал чата, содержащий поле ввода сообщения, вида:

```HTML
  <footer class="chat-footer">
    <textarea class="chat-footer__textarea"></textarea>
  </footer>
```

7. **createMessage(textMessage, type = 'client')** - возвращает сообщение с текстом `textMessage`. Сообщение может быть двух видов: сообщение от клиента (`type = 'client'`) и сообщение от бота (`type === 'bot'`). Если передается тип, отличный от этих, то возвращается новый объект ошибки с текстом: `'This type does not exist'`. Возвращаемый блок сообщения выглядит следующим образом:

  7. Сообщение от клиента:
  ```HTML
    <div class="message message-client">
      <div class="message__text">textMessage</div>
    </div>
  ```

  7. Сообщение от бота:
  ```HTML
    <div class="message">
      <div class="message__text">textMessage</div>
    </div>
  ```

8. **addListener(el, typeEvent, func, additional = null)** - метод добаления слушателя события `typeEvent`  на элемент `el`. В метод передается и фунция обработки события `func`. Также может передаваться дополнительный параметр `additional`, который будет передан в функцию обработчика события как второй параметр

9. **buttonChatHandler(event)** - метод обработки события клика по кнопке вызова чата с классом `classButton`. При событии клика по кнопке вызова чата, происходит проверка, существует ли уже окно чата на странице, если чата не существует, то он добавляется на страницу

10. **closeButtonHandler(event)** - обработчик события клика по кнопке закрытия чата. При происхождении события, чат удаляется со страницы

11. **textareaCheckHandler(event)** - метод обработки события нажатия кнопки Enter при вводе сообщения в текстовом поле. При нажатии Enter происходит проверка, если поле ввода не пустое, то вызывается метод формирования блока сообщения и добавляетя в чат. После этого через 2 секунды появляется сообщение от бота

12. **textareaHandler(textMessage)** - метод формирования блока сообщения с текстом `textMessage`

13. **botMessage()** - метод добавления сообщения от бота в чат. Сообщения выбираются из массива сообщении бота в `this.botMessageArray`

14. **getRandom(max)** - метод выдачи рандомного числа от 0 до `max`

15. **randomMessage()** - метод возвращающий рандомное сообщение из массива сообщений бота `this.botMessageArray`
