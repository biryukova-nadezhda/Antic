export default class Dom {
  constructor(pageObj) {
    this.page = pageObj;
  }

  init() {
    const body = document.querySelector('body');

    const header = this.createHeader(this.page.header);
    body.append(header);

    const main = this.createMain(this.page.main);
    body.append(main);

    const footer = this.createFooter(this.page.footer);
    body.append(footer);
  }

  /* General methods */
  createEl(typeEl, classEl, contentEL = null) {
    this.name = 'createEl';
    const el = document.createElement(typeEl);
    el.className = classEl;

    if (contentEL) {
      el.textContent = contentEL;
    }

    return el;
  }

  createSliderDots(classSlider, end) {
    const endSlider = end.toString().padStart(2, 0);
    const container = this.createEl('div', `${classSlider}__dots slider-dots`);
    const content = `<span class="slider-dots___amount ${classSlider}___amount ${classSlider}__start">01</span>
    <span class="slider-dots___amount ${classSlider}__amount">/</span>
    <span class="slider-dots___amount ${classSlider}__amount ${classSlider}__end">${endSlider}</span>`;
    container.insertAdjacentHTML('beforeend', content);

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

  createBlockLink(obj) {
    const block = this.createEl('div', `block-link ${obj.classBlock}__block-link`);
    const link = this.createEl('a', `block-link__link ${obj.classBlock}__block-link_link`, obj.textLink);
    link.href = obj.link;
    const arrow = this.createEl('span', `block-link__arrow ${obj.classBlock}__block-link_arrow`);

    block.append(link);
    block.append(arrow);

    return block;
  }

  createSlider(obj) {
    const slider = this.createEl('ul', `${obj.classSlider}-section__slider`);
    obj.sliderArray.forEach((item) => {
      const li = `<li class="${obj.classSlider}-section__slider-item">
        <a href="${item.link}" class="${obj.classSlider}-section__slider-link">
          <article class="${obj.classSlider}-section__slider-card">
              <h3 class="${obj.classSlider}-section__slider-title">${item.articleTitle}</h3>
              <div class="${obj.classSlider}-section__slider-img ${item.classImgblock}"></div>
              <div class="${obj.classSlider}-section__slider-label">${item.labelContent}</div>
          </article>
        </a></li>`;

      slider.insertAdjacentHTML('beforeend', li);
    });

    return slider;
  }

  /* Header */
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
        <a href="#scrollDown" class="header__scroll svg-container"></a>
    </div>
    `;

    container.append(heroContainer);
    container.insertAdjacentHTML('beforeend', textContainer);
    container.insertAdjacentHTML('beforeend', scroll);

    return container;
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

  /* Main */
  createMain(obj) {
    const main = this.createEl('main', 'main');
    const sectionRoom = this.createSectionRoom(obj.sectionRoom);
    const sectionDesign = this.createSectionDesign(obj.sectionDesign);
    const sectionTrends = this.createSectionTrends(obj.sectionTrend);

    main.append(sectionRoom);
    main.append(sectionDesign);
    main.append(sectionTrends);
    return main;
  }

  /* Section Room */
  createSectionRoom(obj) {
    const section = this.createEl('section', `main-section ${obj.classSection}-section`);
    const title = this.createEl('h2', 'main-section__title', obj.sectionTitle);

    const flexContainer = this.createEl('div', `${obj.classSection}-section__flex-container`);
    const content = this.createEl('p', `main-section__content ${obj.classSection}-section__content`, obj.sectionContent);
    const slider = this.createSlider(obj.slider);
    flexContainer.append(content);
    flexContainer.append(slider);

    const sliderEnd = obj.slider.sliderArray.length;
    const sliderNav = this.createEl('div', `${obj.classSection}-section__slider-nav`);
    const sliderDots = this.createSliderDots(`${obj.classSection}-section`, sliderEnd);
    const blockLink = this.createBlockLink(obj.slider.blockLink);
    sliderNav.append(sliderDots);
    sliderNav.append(blockLink);

    section.append(title);
    section.append(flexContainer);
    section.append(sliderNav);

    return section;
  }

  createSectionDesign(obj) {
    const section = this.createEl('section', `main-section ${obj.classSection}-section`);

    const titleBlock = this.createEl('div', `${obj.classSection}-section__title-block`);
    const title = this.createEl('h2', 'main-section__title', obj.sectionTitle);
    const blockLink = this.createBlockLink(obj.blockLink);
    titleBlock.append(title);
    titleBlock.append(blockLink);

    const servicedBlock = this.createEl('div', `${obj.classSection}-section__services-block`);
    obj.card.forEach((item) => {
      const article = this.createEl('article', `${obj.classSection}-section__article design-article`);
      const content = `<h3 class="${obj.classSection}-article__title">${item.title}</h3>
      <p class="${obj.classSection}-article__content">${item.content}</p>`;
      article.insertAdjacentHTML('beforeend', content);
      servicedBlock.append(article);
    });

    section.append(titleBlock);
    section.append(servicedBlock);

    return section;
  }

  /* Section Trends */
  createSectionTrends(obj) {
    const section = this.createEl('section', `main-section ${obj.classSection}-section`);
    section.id = 'scrollDown';

    const blockNewsletter = this.createblockNewsletter(obj.blockNewsletter);
    const blockSlider = this.createTrendsSliderBlock(obj.sliderBlock);

    section.append(blockNewsletter);
    section.append(blockSlider);

    return section;
  }

  createblockNewsletter(obj) {
    const block = this.createEl('div', `${obj.classBlock}__newsletter`);
    const title = this.createEl('h3', `${obj.classBlock}__newsletter-title`, obj.title);
    const flexContainer = this.createEl('div', `${obj.classBlock}__flex-container`);

    const contentBlock = this.createEl('div', `${obj.classBlock}__content-block`);
    const content = this.createEl('p', `${obj.classBlock}__content`, obj.content);
    const blockLink = this.createBlockLink(obj.blockLink);
    contentBlock.append(content);
    contentBlock.append(blockLink);

    const form = this.createForm(obj.form);
    flexContainer.append(contentBlock);
    flexContainer.append(form);
    block.append(title);
    block.append(flexContainer);

    return block;
  }

  createForm(obj) {
    const form = this.createEl('form', `${obj.classForm}__form`);
    const contentForm = `<label class="${obj.classForm}__label">
    <input type="${obj.typeInput}" class="${obj.classForm}__input" placeholder="${obj.placeholder}"></label>
    <button type="${obj.typeButton}" class="${obj.classForm}__button">${obj.textButton}</button>`;
    form.insertAdjacentHTML('beforeend', contentForm);

    return form;
  }

  createTrendsSliderBlock(obj) {
    const block = this.createEl('div', `${obj.classSlider}-section__slider ${obj.classSlider}-slider`);
    const title = this.createEl('h3', `${obj.classSlider}-slider__title`, obj.title);
    const content = this.createEl('p', `${obj.classSlider}-slider__content`, obj.content);

    const slider = this.createEl('div', `${obj.classSlider}-slider__card-block`);
    obj.cards.forEach((item) => {
      const type = item.split(' ').join('').toLowerCase();
      const article = `<article class="${obj.classSlider}-slider__card ${obj.classCard}">
      <div class="${obj.classCard}__image ${obj.classCard}__image_${type}"></div>
      <span class="${obj.classCard}__description">${item}</span></article>`;
      slider.insertAdjacentHTML('beforeend', article);
    });

    const navBlock = this.createEl('div', `${obj.classSlider}-slider__nav-block`);
    const buttonBlock = `<div class="${obj.classSlider}-slider__button-block">
    <button type="button" class="svg-container ${obj.classSlider}-slider__button ${obj.classSlider}-slider__button_back"></button>
    <button type="button" class="svg-container ${obj.classSlider}-slider__button ${obj.classSlider}-slider__button_next"></button></div>`;
    const sliderDots = this.createSliderDots(`${obj.classSlider - slider}`, obj.cards.length);
    navBlock.insertAdjacentHTML('beforeend', buttonBlock);
    navBlock.append(sliderDots);

    block.append(slider);
    block.append(title);
    block.append(content);
    block.append(navBlock);

    return block;
  }
}
