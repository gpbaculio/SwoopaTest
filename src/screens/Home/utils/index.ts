export const kmToMiles = (km: number): number =>
  parseFloat((km * 0.621371).toFixed(2));

export const formatPrice = (
  price: number,
  currency: string = 'USD',
): string => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);

  return currency === 'AUD'
    ? formattedPrice.replace('A$', 'AU$')
    : formattedPrice;
};
