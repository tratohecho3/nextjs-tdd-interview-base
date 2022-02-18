import Cookies from 'js-cookie';
import { COOKIE_NAME } from '@lib/constants';

export const useBrand = () => {
  const brand = Cookies.get(COOKIE_NAME) || '';

  return brand;
}
