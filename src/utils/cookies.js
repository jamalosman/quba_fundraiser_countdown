import Cookies from 'js-cookie';

const COOKIE_NAME = 'fundraiser_amount';
const ONE_YEAR = 365;

export const getAmountRaised = () => {
  const amount = Cookies.get(COOKIE_NAME);
  return amount ? parseFloat(amount) : 0;
};

export const setAmountRaised = (amount) => {
  Cookies.set(COOKIE_NAME, amount.toString(), { expires: ONE_YEAR });
};
