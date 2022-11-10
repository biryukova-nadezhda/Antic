export default class Chat {
  constructor(classButton, textLogo) {
    this.classButton = classButton;
    this.textLogo = textLogo;
    this.botMessageArray = [
      'Thank you for contacting',
      'Anything else?',
      'Please repeat your question',
      'Wait a couple of minutes and we will be back',
      'Happy to help',
      'Please describe your problem in more detail',
      'We cannot help you right now, please contact us later',
    ];
  }

  init() {
    const button = document.querySelector(`.${this.classButton}`);
    this.addListener(button, 'click', this.buttonChatHandler);
  }

  /* Creation Methods */
  createEl(typeEl, classEl, contentEL = null) {
    this.name = 'createEl';
    const el = document.createElement(typeEl);
    el.className = classEl;

    if (contentEL) {
      el.textContent = contentEL;
    }
    return el;
  }

  createChat() {
    const chat = this.createEl('div', 'chat');
    const header = this.createChatHeader();
    const messageBlock = this.createEl('div', 'chat-main');
    const footer = this.createChatFooter();

    chat.append(header);
    chat.append(messageBlock);
    chat.append(footer);

    return chat;
  }

  createChatHeader() {
    const header = this.createEl('header', 'chat-header');
    const logo = this.createEl('div', 'chat-header__logo', this.textLogo);
    const button = this.createEl('button', 'chat-header__button', 'x');
    button.type = 'button';

    header.append(logo);
    header.append(button);

    return header;
  }

  createChatFooter() {
    const footer = this.createEl('footer', 'chat-footer');
    const textarea = this.createEl('textarea', 'chat-footer__textarea');
    footer.append(textarea);

    return footer;
  }

  createMessage(textMessage, type = 'client') {
    const messageText = this.createEl('div', 'message__text', textMessage);
    let messageBlock;

    if (type === 'client') {
      messageBlock = this.createEl('div', 'message message-client');
    } else if (type === 'bot') {
      messageBlock = this.createEl('div', 'message');
    } else {
      throw new Error('This type does not exist');
    }

    messageBlock.append(messageText);
    return messageBlock;
  }

  /* Event handlers and listeners */
  addListener(el, typeEvent, func, additional = null) {
    el.addEventListener(typeEvent, (event) => {
      event.preventDefault();
      const bindFunc = func.bind(this);
      if (additional) {
        bindFunc(event, additional);
      } else {
        bindFunc(event);
      }
    });
  }

  // eslint-disable-next-line
  buttonChatHandler(event) {
    const check = document.querySelector('.chat-container');

    if (!check) {
      const chatContainer = this.createEl('div', 'chat-container');
      const chat = this.createChat();
      chatContainer.append(chat);
      document.querySelector('body').append(chatContainer);

      const buttonClose = document.querySelector('.chat-header__button');
      this.addListener(buttonClose, 'click', this.closeButtonHandler);

      const textarea = document.querySelector('.chat-footer__textarea');
      this.addListener(textarea, 'keyup', this.textareaCheckHandler);
    }
  }

  closeButtonHandler(event) {
    this.name = 'closeButtonHandler';
    const buttonClose = event.target;
    const chatContainer = buttonClose.closest('.chat-container');
    chatContainer.remove();
  }

  textareaCheckHandler(event) {
    if (event.key === 'Enter') {
      if (event.target.value.trim() !== 0) {
        this.textareaHandler(event.target.value.trim());
        // eslint-disable-next-line
        event.target.value = '';

        setTimeout(() => {
          this.botMessage.bind(this)();
        }, 2000);
      }
    }
  }

  textareaHandler(textMessage) {
    const messageBlock = this.createMessage(textMessage);
    document.querySelector('.chat-main').append(messageBlock);
    messageBlock.scrollIntoView();
  }

  /* Methods for work bot */
  botMessage() {
    const textMessage = this.randomMessage();
    const message = this.createMessage(textMessage, 'bot');
    document.querySelector('.chat-main').append(message);
    message.scrollIntoView();
  }

  getRandom(max) {
    this.name = 'getRandom';
    return Math.floor(Math.random() * max);
  }

  randomMessage() {
    const index = this.getRandom(this.botMessageArray.length);
    return this.botMessageArray[index];
  }
}
