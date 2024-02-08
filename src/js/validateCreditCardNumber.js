export default function validateCreditCardNumber(numCard) {
  const numCardArr = numCard.split('').map((el, i) => {
    const num = Number(el);
    if (i % 2 === numCard.length % 2) {
      const doubled = num * 2;
      return doubled > 9 ? doubled - 9 : doubled;
    }
    return num;
  });

  const result = numCardArr.reduce((acc, sum) => acc + sum, 0);

  return result % 10 === 0;
}
