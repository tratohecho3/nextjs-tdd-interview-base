import type { NextApiRequest } from 'next'
import { Layout, Link, Page, Text } from '@vercel/examples-ui'
import { useBrand } from '@hooks/useBrand';
import React from 'react';
import ProductCards from '../../components/productcard'

type Product = {
  id: string;
  name: string;
  brand: string;
  thumbnail: string;
};
type Props = {
  color: string;
  products: Product[];
};

export default function Home({ color, products }: Props) {
  const brand = useBrand();
  console.log(products)



  return (
    <Page>
      <Text variant="h2" className="mb-6" style={{ color }}>
        Home page
      </Text>
      <ProductCards products={products}/>
      <Text className="mb-4">
        You can use the buttons below to change your assigned brand and refresh
        the page:
      </Text>
      <Text className="text-bold mb-4">
        <Link href="/about">About</Link>
      </Text>
    </Page>
  )
}

Home.Layout = Layout

export async function getServerSideProps({ req }: { req: NextApiRequest}) {
  let products = [];
  const { brand } = req.cookies;

  try {
    const host = `http://${req.headers.host}` || '';
    console.log('host', host)
    const res = await fetch(`${host}/api/products`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        cookie: `brand=${brand}`,
      }
    });
    const data = await res.json()
    products = data.products;
  } catch (e: any) {
    if (e.message === 'cancelled') {
      // Cancelled by browser
      console.log('Request Cancelled by the Browser', e)
    } else {
      console.error('Network Error, CORS or timeout.', e)
    }
    products = [e.status];
  }


  return {
    props: {
      products,
      color: '#567030',
    }
  }
}
