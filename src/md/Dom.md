# Класс Dom

Класс DOM предназначен для рендеринга страницы сайта.

## Структура класса:

1. constructor(pageObj)
2. init()
3. createEl(typeEl, classEl, contentEL = null)
4. createSliderDots(classSlider, end)
5. createMenuList(obj)
6. createBlockLink(obj)
7. createSlider(obj)
8. createHeader(obj)
9. createHeaderContainer(obj)
10. createFooter(obj)
11. createFooterSectionContent(obj)
12. createMain(obj)
13. createSectionRoom(obj)
14. createSectionDesign(obj)
15. createSectionTrends(obj)
16. createblockNewsletter(obj)
17. createForm(obj)
19. createTrendsSliderBlock(obj)


## Краткое описание методов:

1. **constructor(pageObj)** -

2. **init()** -

3. **createEl(typeEl, classEl, contentEL = null)** - метод возвращает DOM-элемент типа `typeEl`  с классом `classEl` и контентом `contentEL`, если он передан в метод класса

4. **createSliderDots(classSlider, end)** - возвращает блок с количеством карточек слайдера вида:

```HTML
  <div class="classSlider__dots slider-dots">
    <span class="slider-dots___amount classSlider___amount classSlider__start">01</span>
    <span class="slider-dots___amount classSlider__amount">/</span>
    <span class="slider-dots___amount classSlider__amount classSlider__end">end</span>
  </div>
```

5. **createMenuList(obj)** - принимает на вход объект вида:

```javascript
  {
    classList: 'classMenu', //класс меню
    menuArray: [
        {
          classItem: 'classItem', // класс пункта меню
          textItem: 'textItem', // текст пункта меню
          link: 'link', // адрес ссылки в пункте меню
          classLink: 'classLink', // класс ссылки в пункте меню
        },
      ],
    }
```
Метод возвращает список меню вида:

```HTML
  <ul class="classList">
    <li class="classItem">
      <a href="link" class="classLink">textItem</a>
    </li>
  </ul>
```

6. **createBlockLink(obj)** - возвращает блок с ссылкой  вида:

```HTML
  <div class="block-link classBlock__block-link">
    <a class="block-link__link classBlock__block-link_link" href="link">textLink</a>
    <span class="block-link__arrow classBlock__block-link_arrow"></span>
  </div>
```

Принимает объект вида:

```javascript
  {
    textLink: 'textLink',
    link: 'link',
    classBlock: 'classBlock',
  }
```

7. **createSlider(obj)** - метод возвращает блок слайдер с картами комнат вида:

```HTML
<ul class="room-section__slider">
  <li class="room-section__slider-item">
    <a href="#" class="room-section__slider-link">
      <article class="room-section__slider-card">
        <h3 class="room-section__slider-title">Bedroom</h3>
        <div class="room-section__slider-img slider-img__bedroom"></div>
        <div class="room-section__slider-label">New arrivals</div>
      </article>
    </a>
  </li>
</ul>
```

 , принимая на вход объект вида:

```javascript
{
  classSlider: 'room',
  sliderArray: [
    {
      link: '#',
      articleTitle: 'Bedroom',
      classImgblock: 'slider-img__bedroom',
      labelContent: 'New arrivals',
    },
  ],
  blockLink: {
    textLink: 'Next',
    link: '#',
    classBlock: 'room-section',
    },
}
```


8. **createHeader(obj)** - метод возвращает шапку профиля, а принимает на вход объект вида:

```javascript
{
  logo: 'logo',

  // объект блока навигации
  nav: {
    classList: 'classList',
    menuArray: [
      {
        classItem: 'classItem',
        textItem: 'textItem',
        link: 'link',
        classLink: 'classLink',
      }
    ],
  },
  smallTitle: 'small title header',
  bigTitle: 'big title header',
  content: 'header content',
  }
```

9. **createHeaderContainer(obj)** - возвращает левый контейнер шапки сайта, а принимает на вход объект вида:

```javascript
{
  logo: 'logo',

  // объект блока навигации
  nav: {
    classList: 'classList',
    menuArray: [
      {
        classItem: 'classItem',
        textItem: 'textItem',
        link: 'link',
        classLink: 'classLink',
      }
    ],
  },
  smallTitle: 'small title header',
  bigTitle: 'big title header',
  content: 'header content',
  }
```

10. **createFooter(obj)** - возвращает подвал страницы, принимая на вход объект вида:

```javascript
footer: {
  logo: 'logo',

  // массив объектов списков меню
  nav: [
    {
      classList: 'classList', // класс списка меню
      // массив объектов пунктов меню
      menuArray: [
        {
          classItem: 'classItem',
          textItem: 'textItem',
          link: 'link',
          classLink: 'classLink',
        },
      ],
    },
  ],

  // объект секции блога
  blog: {
    title: 'title',
    blockLink: {
      textLink: 'textLink',
      link: 'link',
      classBlock: 'classBlock',
    },
  },

  // Объект секции ссылок на социальные сети
  socials: {
    classList: 'classList',
     // массив объектов пунктов меню
    menuArray: [
      {
        classItem: 'classItem',
        textItem: 'textItem',
        link: 'link',
        classLink: 'classLink',
      },
    ],
  },

  // Объект секции прав
  legals: {
    copyright: 'copyright',
    legalsList: {
      classList: 'classList',
      menuArray: [
        {
          classItem: 'classItem',
          textItem: 'textItem',
          link: 'link',
          classLink: 'classLink',
        },
      ],
    },
  },
}
```

11. **createFooterSectionContent(obj)** - возвращает секцию подвала с меню, принимая на вход объект footer

12. **createMain(obj)** - возвращает собранный блок .main, принимая на вход объект вида:

```javascript
{
  // объект секции с картами комнат
  sectionRoom: {
    classSection: 'room',
    sectionTitle: 'Find your room',
    sectionContent: 'Dining room, bedroom, bathroom or office. Find what you need',
    slider: {
      classSlider: 'room',
      sliderArray: [
        {
          link: '#',
          articleTitle: 'Bedroom',
          classImgblock: 'slider-img__bedroom',
          labelContent: 'New arrivals',
        },
      ],
      blockLink: {
        textLink: 'Next',
        link: '#',
        classBlock: 'room-section',
      },
    },
  },

  // объект секции дизайна (третий блок на странице)
  sectionDesign: {
    classSection: 'design',
    sectionTitle: 'We stay by your side to design your projects',
    sectionContent: 'Dining room, bedroom, bathroom or office. Find what you need',
    blockLink: {
      textLink: 'Find out more',
      link: '#',
      classBlock: 'design-section',
    },
    card: [
      {
          title: 'Our Advices',
          content: 'What if you took advantage of this rather special period to rethink your interior? You spend more time at home so you might as well feel good there.',
        },
    ],
  },

  // Объект секции трендов со слайдером (четверный блок на странице)
  sectionTrend: {
    classSection: 'trends',
    blockNewsletter: {
      classBlock: 'trends-section',
      title: 'Be aware of the latest trends',
      content: 'Stay informed of new trends, but also of our various offers.',
      blockLink: {
        textLink: 'Learn more',
        link: '#',
        classBlock: 'trends-section',
      },
      form: {
        classForm: 'trends-section',
        typeInput: 'email',
        placeholder: 'email@address.com',
        typeButton: 'submit',
        textButton: 'Subscribe',
      },
    },
    sliderBlock: {
      classSlider: 'trends',
      title: 'Inspirations',
      content: 'Our experts are keen to stay on top of trends in order to offer you new inspirations for your interior and exterior every day. Remember that to inspire you we have to inspire ourselves and we want to share that with you.',
      classCard: 'slider-card',
      cards: ['Chair', 'Cooked', 'Living room', 'Tables'],
      },
    },
  }
```

13. **createSectionRoom(obj)** - возвращает секцию представленной мебели для различных комнат (второй блок на странице), принимая объект вида `sectionRoom` (смотри выше)

14. **createSectionDesign(obj)** - возвращает секцию дизайна (третий блок на странице), принимая объект вида `sectionDesign` (смотри выше)

15. **createSectionTrends(obj)** - возвращает секцию трендов (четверный блок на странице), принимая объект вида `sectionTrend` (смотри выше)

16. **createblockNewsletter(obj)** - возвращает блок с секцией подписки на новости сайта секцию трендов (четверный блок на странице), принимая объект вида `sectionTrend.blockNewsletter` (смотри выше)

17. **createForm(obj)** - метод возвращает форму подписки на новости сайта, принимая объект вида `sectionTrend.blockNewsletter.form`. Форма имеет следующий вид:

```HTML
<form class="trends-section__form">
  <label class="trends-section__label">
    <input type="email" class="trends-section__input" placeholder="email@address.com">
  </label>

  <button type="submit" class="trends-section__button">Subscribe</button>
</form>
```

19. **createTrendsSliderBlock(obj)** - возвращает блок слайдера с актуальными фотографиями, принимая на вход объект вида `sectionTrend.sliderBlock`
