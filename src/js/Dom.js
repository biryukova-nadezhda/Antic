export default class Dom {
  constructor(pageObj) {
    this.page = pageObj;
  }

  createEl(typeEl, classEl, contentEL = null) {
    this.name = 'createEl';
    const el = document.createElement(typeEl);
    el.className = classEl;

    if (contentEL) {
      el.textContent = contentEL;
    }

    return el;
  }

  init() {
    const body = document.querySelector('body');

    const header = this.createHeader(this.page.header);
    body.append(header);
  }

  createHeader(obj) {
    const header = this.createEl('header', 'header');
    const headerContainer = this.createHeaderContainer(obj);

    const imgContainer = this.createEl('div', 'header__image-container');
    const headerChat = this.createEl('button', 'header__chat svg-container');
    headerChat.type = 'button';

    header.append(headerContainer);
    imgContainer.append(headerChat);
    header.append(imgContainer);

    return header;
  }

  createHeaderContainer(obj) {
    const container = this.createEl('div', 'header__container');

    const heroContainer = this.createEl('div', 'header__hero-container');
    const logoContainer = this.createEl('div', 'header__logo', obj.logo);
    const navContainer = this.createHeaderNav(obj.nav);
    const navButton = this.createEl('button', 'header__nav-button');
    navButton.type = 'button';
    heroContainer.append(logoContainer);
    heroContainer.append(navContainer);
    heroContainer.append(navButton);

    const textContainer = `
    <div class="header__text-container">
        <h3 class="header__small-title">${obj.smallTitle}</h3>
        <h1 class="header__title">${obj.bigTitle}</h1>

        <div class="header__content-block">
            <p class="header__content">${obj.content}</p>
        </div>
    </div>
    `;

    const scroll = `
    <div class="header__scroll-container">
        <button type="button" class="header__scroll svg-container"></button>
    </div>
    `;

    container.append(heroContainer);
    container.insertAdjacentHTML('beforeend', textContainer);
    container.insertAdjacentHTML('beforeend', scroll);

    return container;
  }

  createHeaderNav(array) {
    const nav = this.createEl('nav', 'header__nav-container');
    const list = this.createEl('ul', 'header__nav-list');

    array.forEach((navObj) => {
      const item = `<li class="header__nav-item"><a href="${navObj.link}" class="header__nav-link">${navObj.textLink}</a></li>`;
      list.insertAdjacentHTML('beforeend', item);
    });

    nav.append(list);

    return nav;
  }
}
