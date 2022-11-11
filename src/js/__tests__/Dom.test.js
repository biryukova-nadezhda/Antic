import Dom from '../Dom';

const testObj = {
  logo: 'test',
  nav: [
    {
      textLink: 'Menu item 1',
      link: '#',
    },
    {
      textLink: 'Menu item 2',
      link: '#',
    },
  ],
  smallTitle: 'Small title',
  bigTitle: 'Big title',
  content: 'Content',
};

test('should create a new class Dom', () => {
  const result = new Dom(testObj).page;
  expect(result).toEqual(testObj);
});

test('should create a div with class div and conten - title', () => {
  document.body.innerHTML = '<div class="div">title</div>';
  const expected = document.querySelector('.div');
  const result = new Dom(testObj).createEl('div', 'div', 'title');
  expect(result).toEqual(expected);
});

test('should create a menu list', () => {
  document.body.innerHTML = '<ul class="classMenu"><li class="classItem"><a href="link" class="classLink">textItem</a></li></ul>';
  const expected = document.querySelector('.classMenu');

  const object = {
    classList: 'classMenu', // класс меню
    menuArray: [
      {
        classItem: 'classItem', // класс пункта меню
        textItem: 'textItem', // текст пункта меню
        link: 'link', // адрес ссылки в пункте меню
        classLink: 'classLink', // класс ссылки в пункте меню
      },
    ],
  };

  const result = new Dom(testObj).createMenuList(object);
  expect(result).toEqual(expected);
});

test('should create a menu list without link', () => {
  document.body.innerHTML = '<ul class="classMenu"><li class="classItem">textItem</li></ul>';
  const expected = document.querySelector('.classMenu');

  const object = {
    classList: 'classMenu', // класс меню
    menuArray: [
      {
        classItem: 'classItem', // класс пункта меню
        textItem: 'textItem', // текст пункта меню
      },
    ],
  };

  const result = new Dom(testObj).createMenuList(object);
  expect(result).toEqual(expected);
});

test('should create a block link', () => {
  document.body.innerHTML = '<div class="block-link classBlock__block-link"><a class="block-link__link classBlock__block-link_link" href="link">textLink</a><span class="block-link__arrow classBlock__block-link_arrow"></span></div>';
  const expected = document.querySelector('.block-link');

  const object = {
    textLink: 'textLink',
    link: 'link',
    classBlock: 'classBlock',
  };

  const result = new Dom(testObj).createBlockLink(object);
  expect(result).toEqual(expected);
});
