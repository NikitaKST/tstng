import validateCreditCardNumber from '../js/validateCreditCardNumber';

test('should return true for valid credit card number', () => {
  const result = validateCreditCardNumber('371449635398431');
  expect(result).toBe(true);
});

test('should return false for invalid credit card number', () => {
  const result = validateCreditCardNumber('371449635398430');
  expect(result).toBe(false);
});
