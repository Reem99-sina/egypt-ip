export const getValueWithCurrencyMask = (amount: number) => {
  if (!amount) {
    return '';
  }

  return amount?.toLocaleString('en');
};
