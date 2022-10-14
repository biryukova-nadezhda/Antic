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

test('should create a block menu', () => {
  document.body.innerHTML = '<nav class="header__nav-container"><ul class="header__nav-list"><li class="header__nav-item"><a href="#" class="header__nav-link">Menu item 1</a></li><li class="header__nav-item"><a href="#" class="header__nav-link">Menu item 2</a></li></ul></nav>';
  const expected = document.querySelector('.header__nav-container');
  const result = new Dom(testObj).createHeaderNav(testObj.nav);
  expect(result).toEqual(expected);
});
