# Класс Popup

Класс Popup организует вывод всплывающего окна.

## Структура класса:

1. constructor(popupObject)
2. init()
3. createEl(typeEl, classEl, contentEL = null)
4. checkType()
5. createSubscriptionPopup(object)

## Краткое описание методов:
1. **constructor(popupObject)** - принимает объект вида:

```javascript
  const popupObject = {
    typePopup: 'subscription',
    contentPopup: {
    class: 'classPopup',
    content: `contentPopup`,
    }
  };
```
в котором:
  * typePopup - тип всплывающего окна. Реализован только тип 'subscription'
  * contentPopup - объект, содержащий контентную информацию всплывающего окна
    * class - класс всплывающего окна
    * content - текст всплывающего окна

2. init() - метод возвращает всплывающее окно вида:

```HTML
  <div class="popup">
    <div class="class">content</div>
  </div>
```

3. **createEl(typeEl, classEl, contentEL = null)** - метод возвращает DOM-элемент типа `typeEl`  с классом `classEl` и контентом `contentEL`, если он передан в метод класса

4. **checkType()** - метод проверяет тип переданный в объекте в класс, с существующими, если тип не соответствует, то выдается ошибка с текстом: 'This type does not exist'. Пока реализован только тип `subscription`

5. **createSubscriptionPopup(object)** - метод возвращает всплывающее окно. Принимает на вход объект вида:

```javascript
  {
    class: 'classPopup',
    content: `contentPopup`,
  }
```
