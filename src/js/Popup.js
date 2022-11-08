export default class Popup {
  constructor(popupObject) {
    this.popupObject = popupObject;
  }

  init() {
    const popup = this.checkType();
    return popup;
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

  checkType() {
    const type = this.popupObject.typePopup;
    let popup;

    switch (type) {
      case 'subscription':
        popup = this.createSubscriptionPopup(this.popupObject.contentPopup);
        break;

      default:
        throw new Error('This type does not exist');
    }

    return popup;
  }

  createSubscriptionPopup(object) {
    const cover = this.createEl('div', 'popup');
    const popup = this.createEl('div', object.class, object.content);
    cover.append(popup);

    return cover;
  }
}
