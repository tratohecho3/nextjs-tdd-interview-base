import useSWR, { SWRResponse } from 'swr'
import { useBrand } from './useBrand';

type Product = {
  id: string;
  name: string;
  brand: string;
};

export type Data = {
  products: Product[]
};

export const useProducts = (): SWRResponse<Data, Error> => {
  const brand = useBrand();

  return useSWR('/api/products', (url: string) => {
    return fetch(url, {
      headers: {
        cookie: `brand=${brand}`,
      }
    }).then((res) => {
      console.log('done fetching')
      return res.json();
    });
  });
}
