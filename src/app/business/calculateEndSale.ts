import { dateHelper } from '../helpers/dateHelper';

export const calculateEndSale = (general: any): Record<string, string> => {
  const currentDate = new Date();
  const discountDate = new Date(general.end_discount.date);
  const endDate = new Date(general.end_sale.date);
  const isPastDiscountDate  = currentDate > discountDate;
  const key = isPastDiscountDate ? 'end_sale' : 'end_discount';

  return {
    date: general[key].date,
    description: general[key].description,
  };
}