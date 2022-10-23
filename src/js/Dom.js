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

    const footer = this.createFooter(this.page.footer);
    body.append(footer);
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

    const navContainer = this.createEl('nav', 'header__nav-container');
    const headerMenu = this.createMenuList(obj.nav);
    navContainer.append(headerMenu);

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

  createMenuList(obj) {
    const list = this.createEl('ul', obj.classList);

    obj.menuArray.forEach((item) => {
      if (item.link) {
        const li = `<li class="${item.classItem}"><a href="${item.link}" class="${item.classLink}">${item.textItem}</a></li>`;
        list.insertAdjacentHTML('beforeend', li);
      } else {
        const li = `<li class="${item.classItem}">${item.textItem}</li>`;
        list.insertAdjacentHTML('beforeend', li);
      }
    });

    return list;
  }

  /* Footer */
  createFooter(obj) {
    const footer = this.createEl('footer', 'footer');
    const section = this.createFooterSectionContent(obj);
    const sectionNoFlex = this.createEl('section', 'footer__section_no-flex');

    const socialBlock = this.createEl('div', 'footer__social-block');
    const socialList = this.createMenuList(obj.socials);
    socialBlock.append(socialList);

    const legalsBlock = this.createEl('div', 'footer__legals-block');
    const legalsContent = this.createEl('p', 'footer__legals-content', obj.legals.copyright);
    const legalsList = this.createMenuList(obj.legals.legalsList);
    legalsBlock.append(legalsContent);
    legalsBlock.append(legalsList);
    sectionNoFlex.append(socialBlock);
    sectionNoFlex.append(legalsBlock);

    footer.append(section);
    footer.append(sectionNoFlex);

    return footer;
  }

  createFooterSectionContent(obj) {
    const section = this.createEl('section', 'footer__section');
    const footerLogo = this.createEl('div', 'footer__logo', obj.logo);
    const navBlock = this.createEl('div', 'footer__nav-block');

    obj.nav.forEach((item) => {
      const list = this.createMenuList(item);
      navBlock.append(list);
    });

    const blog = this.createEl('article', 'footer-blog');
    const blokLink = this.createBlockLink(obj.blog.blockLink);
    const blogContent = `<h3 class="footer-blog__title">${obj.blog.title}</h3>
    <div class="footer-blog__block-image"></div>
    <p class="footer-blog__content">${obj.blog.content}</p>`;
    blog.insertAdjacentHTML('beforeend', blogContent);
    blog.append(blokLink);

    section.append(footerLogo);
    section.append(navBlock);
    section.append(blog);

    return section;
  }

  createBlockLink(obj) {
    const blockLink = this.createEl('div', `${obj.classBlock}-link block-link`);
    const link = this.createEl('a', `${obj.classBlock}_link block-link__link`, obj.textLink);
    link.href = obj.link;
    const arrow = this.createEl('span', `${obj.classBlock}-link_arrow block-link__arrow`);

    blockLink.append(link);
    blockLink.append(arrow);

    return blockLink;
  }
}
