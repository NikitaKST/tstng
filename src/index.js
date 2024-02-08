import './css/style.css';
import CreditCardForm from './components/CreditCardForm';

const container = document.querySelector('.container');
const form = new CreditCardForm(container);
form.bindToDom();
