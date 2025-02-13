import {differenceInDays, format, formatDistanceStrict} from 'date-fns';

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

export const getTimeAgo = (date: string | number | Date) => {
  const parsedDate = new Date(date);
  const daysDiff = differenceInDays(new Date(), parsedDate);
  const timeAgo = formatDistanceStrict(parsedDate, new Date(), {
    addSuffix: true,
  });
  const exactTime = format(parsedDate, 'hh:mm a'); // Example: "12:30 PM"

  return daysDiff < 1 ? exactTime : `${timeAgo} • ${exactTime}`;
};
