import Popup from '../Popup';

const testObject = {
  typePopup: 'subscription',
  contentPopup: {
    class: 'subscription',
    content: 'Thanks',
  },
};

test('create e new object class Popup', () => {
  const result = new Popup(testObject);
  const expected = {
    popupObject: testObject,
  };

  expect(result).toEqual(expected);
});

test('should create a div with class div vithout content', () => {
  document.body.innerHTML = '<div class="div"></div>';
  const expected = document.querySelector('.div');

  const result = new Popup(testObject).createEl('div', 'div');
  expect(result).toEqual(expected);
});

test('should create a div with class div and conten - title', () => {
  document.body.innerHTML = '<div class="div">title</div>';
  const expected = document.querySelector('.div');

  const result = new Popup(testObject).createEl('div', 'div', 'title');
  expect(result).toEqual(expected);
});

test('should create a cover', () => {
  document.body.innerHTML = '<div class="popup"><div class="subscription">Thanks</div></div>';
  const expected = document.querySelector('.popup');

  const result = new Popup(testObject).createSubscriptionPopup(testObject.contentPopup);

  expect(result).toEqual(expected);
});

test('should create a cover', () => {
  document.body.innerHTML = '<div class="popup"><div class="subscription">Thanks</div></div>';
  const expected = document.querySelector('.popup');

  const result = new Popup(testObject).createSubscriptionPopup(testObject.contentPopup);

  expect(result).toEqual(expected);
});

test('should create a popup', () => {
  document.body.innerHTML = '<div class="popup"><div class="subscription">Thanks</div></div>';
  const expected = document.querySelector('.popup');

  const result = new Popup(testObject).checkType();

  expect(result).toEqual(expected);
});

test('should create a popup', () => {
  document.body.innerHTML = '<div class="popup"><div class="subscription">Thanks</div></div>';
  const expected = document.querySelector('.popup');

  const result = new Popup(testObject).init();

  expect(result).toEqual(expected);
});

test('should be error, if the type is not subscription', () => {
  const expected = 'This type does not exist';
  const object = {
    typePopup: 'subs',
    contentPopup: {
      class: 'subs',
      content: 'Thanks',
    },
  };

  expect(() => new Popup(object).checkType()).toThrow(expected);
});
