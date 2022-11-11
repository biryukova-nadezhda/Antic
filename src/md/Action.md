# Класс Action

Класс Action .

## Структура класса:

1. constructor()
2. init()
3. addListener(el, typeEvent, func, additional = null)
4. sliderInit(sliderObject)
5. sliderHandler(event, array)
6. sliderNextHandler(obj)
7. sliderPrevHandler(obj)
8. subscribeFormHandler(event)
9. validateEmail(value)
10. removePopup()
11. insertPopup(object)

## Краткое описание методов:

1. **constructor()** - в методе инициализируется начальное значение смещения для слайдера фотографий

2. **init()** - метод запускает работу слайдера, а также обработку события подписки на новости сайта

3. **addListener(el, typeEvent, func, additional = null)** - метод добаления слушателя события `typeEvent`  на элемент `el`. В метод передается и фунция обработки события `func`. Также может передаваться дополнительный параметр `additional`, который будет передан в функцию обработчика события как второй параметр

4. **sliderInit(sliderObject)** - принимает на вход объект вида:

```javascript
  const sliderObject = {
    nextButton: 'classNextButton',
    prevButton: 'classPrevButton',
    slider: {
      sliderLent: 'classSliderLent',
      sliderWindow: 'classSliderWindow',
      sliderCard: 'classSliderCard',
      shiftProcent: 0.25, // Значение смещения ленты слайдера при клике на кнопку
    },
  };
```
Запускает слушататели события клик по кнопкам "вперед" и "назад" слайдера.

5. **sliderHandler(event, array)** - принимает на вход массив вида:

```javascript
  ['typeButton', sliderObject.slider]
```
typeButton может быть:
  * 'next' - для кнопки вперед слайдера
  * 'prev' - для кнопки назад слайдера

Проверяет тип и запускает соответствующий метод обработки клика

6. **sliderNextHandler(obj)** - принимает на вход объект вида:

```javascript
  {
    shift: shift, // величина сдвига
    maxWidth: maxWidth, // максимальная ширина ленты окна слайдера
    sliderLent: sliderLent // ширина ленты слайдера
  }
```

Сдвигает ленту слайдера с карточками влево, при клике на кнопку  `next` слайдера

7. **sliderPrevHandler(obj)** - принимает на вход объект вида:

```javascript
  {
    shift: shift, // величина сдвига
    maxWidth: maxWidth, // максимальная ширина ленты окна слайдера
    sliderLent: sliderLent // ширина ленты слайдера
  }
```

Сдвигает ленту слайдера с карточками вправо, при клике на кнопку  `prev` слайдера

8. **subscribeFormHandler(event)** - метод производит проверку поля ввода email-адреса на соответствие и если проверка пройдена, то вызывает создание всплывающего поля и через 2 секунды удаляет его

9. **validateEmail(value)** - метод проверки соответствия email-адреса

10. **removePopup()** - метод удаляет всплывающее окно со страницы

11. **insertPopup(object)** - метод вставляет высплывающее окно на страницу
