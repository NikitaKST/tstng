import definePaymentSystem from '../js/definePaymentSystem';

test('should return correct payment system for credit card number', () => {
  const cardNumber = '371449635398431';
  const result = definePaymentSystem(cardNumber);
  expect(result).toBe('american__express');
});
