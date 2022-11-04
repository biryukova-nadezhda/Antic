export default class Action {
  constructor() {
    this.offset = 0; // смещение ленты слайдера трендов
  }

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

  init() {
    const sliderObject = {
      nextButton: 'trends-slider__button_next',
      prevButton: 'trends-slider__button_back',
      slider: {
        sliderLent: 'trends-slider__card-block',
        sliderWindow: 'trends-slider',
        sliderCard: 'slider-card',
        shiftProcent: 0.5,
      },
    };

    this.sliderInit(sliderObject);
  }

  sliderInit(sliderObject) {
    const nextButton = document.querySelector(`.${sliderObject.nextButton}`);
    const preButton = document.querySelector(`.${sliderObject.prevButton}`);

    this.addListener(nextButton, 'click', this.sliderHandler, ['next', sliderObject.slider]);
    this.addListener(preButton, 'click', this.sliderHandler, ['prev', sliderObject.slider]);
  }

  sliderHandler(event, array) {
    const [param, object] = array;

    const sliderLent = document.querySelector(`.${object.sliderLent}`);
    const sliderWindow = document.querySelector(`.${object.sliderWindow}`);
    const card = document.querySelector(`.${object.sliderCard}`);

    const maxWidth = sliderLent.offsetWidth - sliderWindow.offsetWidth;
    const shift = card.offsetWidth * object.shiftProcent;

    const sliderObject = {
      shift,
      maxWidth,
      sliderLent,
    };

    if (param === 'next') {
      this.sliderNextHandler(sliderObject);
    } else if (param === 'prev') {
      this.sliderPrevHandler(sliderObject);
    } else {
      throw new Error('This type of button does not exist');
    }
  }

  /*
  {
    shift: shift,
    maxWidth: maxWidth,
    sliderLent: sliderLent
  }
  */
  sliderNextHandler(obj) {
    this.offset += obj.shift;

    if (this.offset > obj.maxWidth) {
      this.offset = 0;
    }

    const slider = obj.sliderLent;
    slider.style.left = `${-this.offset}px`;
  }

  /*
  {
    shift: shift,
    maxWidth: maxWidth,
    sliderLent: sliderLent
  }
  */
  sliderPrevHandler(obj) {
    this.offset -= obj.shift;

    if (this.offset < 0) {
      this.offset = obj.maxWidth;
    }

    const slider = obj.sliderLent;
    slider.style.left = `${-this.offset}px`;
  }
}
