import validateCreditCardNumber from '../js/validateCreditCardNumber';
import definePaymentSystem from '../js/definePaymentSystem';

export default class CreditCardForm {
  constructor(parentE1) {
    this.parentE1 = parentE1;

    this.onSubmit = this.onSubmit.bind(this);
    this.onInput = this.onInput.bind(this);
  }

  static get cards() {
    return `
    <ul class="cards__container">
      <li class="card__item card__mastercard"><span class="card__text">mastercard</span></li>
      <li class="card__item card__mir"><span class="card__text">mir</span></li>
      <li class="card__item card__visa"><span class="card__text">visa</span></li>
      <li class="card__item card__american__express"><span class="card__text">american express</span></li>
      <li class="card__item card__maestro"><span class="card__text">maestro</span></li>
    </ul>
    `;
  }

  static get markup() {
    return `
    <form class="form__validate">
      <input class="input__validate" placeholder="Credit card number">
      <button class="submit__validate" type="submit">Click to Validate</button>
    </form>
    `;
  }

  static get submitSelector() {
    return '.submit__validate';
  }

  static get inputSelector() {
    return '.input__validate';
  }

  static get selector() {
    return '.form__validate';
  }

  static get valideText() {
    return `
    <div class="valide">
    <span class="test_validate"> Проверка пройдена</span>
    <input type="checkbox" class="checkbox__valide" checked disabled>
    </div>
    `;
  }

  static get notValideText() {
    return `
    <div class="valide">
    <span class="test_validate"> Проверка не пройдена</span>
    </div>
    `;
  }

  selectCart(cart) {
    if (cart) {
      const element = this.parentE1.querySelector(`.card__${cart}`);
      element.classList.add('card__active');
    }
  }

  clearClass() {
    if (this.parentE1.querySelector('.card__active')) {
      this.parentE1.querySelector('.card__active').classList.remove('card__active');
    }
  }

  bindToDom() {
    this.parentE1.insertAdjacentHTML('beforeend', CreditCardForm.cards);
    this.parentE1.insertAdjacentHTML('beforeend', CreditCardForm.markup);

    this.element = this.parentE1.querySelector(CreditCardForm.selector);
    this.input = this.element.querySelector(CreditCardForm.inputSelector);
    this.submit = this.element.querySelector(CreditCardForm.submitSelector);

    this.element.addEventListener('submit', this.onSubmit);
    this.element.addEventListener('input', this.onInput);
  }

  onSubmit(e) {
    e.preventDefault();
    const { value } = this.input;
    let result;
    if (validateCreditCardNumber(value) && value) {
      result = CreditCardForm.valideText;
    } else {
      result = CreditCardForm.notValideText;
    }
    if (!this.parentE1.querySelector('.valide')) {
      this.parentE1.insertAdjacentHTML('beforeend', result);
    } else {
      this.parentE1.querySelector('.valide').innerHTML = result;
    }
  }

  onInput() {
    const { value } = this.input;
    this.clearClass();
    this.selectCart(definePaymentSystem(value));
  }
}
