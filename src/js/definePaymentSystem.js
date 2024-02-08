export default function definePaymentSystem(numCard) {
  const paymentSystems = {
    2: 'mir',
    3: 'american__express',
    4: 'visa',
    5: 'mastercard',
    6: 'maestro',
  };

  const firstElement = numCard.charAt(0);
  return paymentSystems[firstElement] || null;
}
