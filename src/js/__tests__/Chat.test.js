import Chat from '../Chat';

test('create e new object class Chat', () => {
  const result = new Chat('chat', 'logo');
  const expected = {
    classButton: 'chat',
    textLogo: 'logo',
    botMessageArray: [
      'Thank you for contacting',
      'Anything else?',
      'Please repeat your question',
      'Wait a couple of minutes and we will be back',
      'Happy to help',
      'Please describe your problem in more detail',
      'We cannot help you right now, please contact us later',
    ],
  };
  expect(result).toEqual(expected);
});

test('should create a div with class div vithout content', () => {
  document.body.innerHTML = '<div class="div"></div>';
  const expected = document.querySelector('.div');

  const result = new Chat('chat', 'logo').createEl('div', 'div');
  expect(result).toEqual(expected);
});

test('should create a div with class div and conten - title', () => {
  document.body.innerHTML = '<div class="div">title</div>';
  const expected = document.querySelector('.div');

  const result = new Chat('chat', 'logo').createEl('div', 'div', 'title');
  expect(result).toEqual(expected);
});

test('should return number less then 10', () => {
  const result = new Chat('chat', 'logo').getRandom(10);
  expect(result).toBeLessThan(10);
});

test('should create a header', () => {
  document.body.innerHTML = '<header class="chat-header"><div class="chat-header__logo">logo</div><button class="chat-header__button" type="button">x</button></header>';
  const expected = document.querySelector('.chat-header');

  const result = new Chat('chat', 'logo').createChatHeader();
  expect(result).toEqual(expected);
});

test('should create a footer', () => {
  document.body.innerHTML = '<footer class="chat-footer"><textarea class="chat-footer__textarea"></textarea></footer>';
  const expected = document.querySelector('.chat-footer');

  const result = new Chat('chat', 'logo').createChatFooter();
  expect(result).toEqual(expected);
});

test('should create a client message', () => {
  document.body.innerHTML = '<div class="message message-client"><div class="message__text">textMessage</div></div>';
  const expected = document.querySelector('.message-client');

  const result = new Chat('chat', 'logo').createMessage('textMessage');
  expect(result).toEqual(expected);
});

test('should create a bot message', () => {
  document.body.innerHTML = '<div class="message"><div class="message__text">textMessage</div></div>';
  const expected = document.querySelector('.message');

  const result = new Chat('chat', 'logo').createMessage('textMessage', 'bot');
  expect(result).toEqual(expected);
});

test('should be error, if the type is not client or bot', () => {
  const expected = 'This type does not exist';
  expect(() => new Chat('chat', 'logo').createMessage('textMessage', 'notBot')).toThrow(expected);
});

test('should create a chat window', () => {
  document.body.innerHTML = '<div class="chat"><header class="chat-header"><div class="chat-header__logo">logo</div><button class="chat-header__button" type="button">x</button></header><div class="chat-main"></div><footer class="chat-footer"><textarea class="chat-footer__textarea"></textarea></footer></div>';
  const expected = document.querySelector('.chat');

  const result = new Chat('chat', 'logo').createChat();
  expect(result).toEqual(expected);
});
