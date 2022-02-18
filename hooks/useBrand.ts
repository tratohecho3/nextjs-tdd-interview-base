import Cookies from 'js-cookie';
import { COOKIE_NAME } from '@lib/constants';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useBrand = () => {
  const brand = Cookies.get(COOKIE_NAME) || '';
  const router = useRouter();

  useEffect(() => {
    const { pathname, search } = window.location;
    if (!router.asPath.indexOf('brand')) {
      return;
    }
    // remove the brand from the query params
    let query = new URLSearchParams(window.location.search);
    query.delete('brand');

    // TODO this causes infinite redirect loops
    // router.replace(router.pathname.replace(`/${brand}`, ''), query.toString(), { shallow: true });
  }, [brand, router]);

  return brand;
}
