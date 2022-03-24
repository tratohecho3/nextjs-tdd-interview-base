import type { NextApiRequest } from 'next'
import { Layout, Link, Page, Text } from '@vercel/examples-ui'
import { useBrand } from '@hooks/useBrand';
import { Products } from '../../../lib/types';
import { useRouter } from 'next/router'


type Props = {
  products: Products[];
};

export default function ProductId({ products }: Props) {
  const router = useRouter();
  // Need to add cart intergration
  const { productId } = router.query;

  console.log('productId', productId)
  const brand = useBrand();

  return (
    <Page>
      <Text>Product: {productId}</Text>
    </Page>
  )
}

interface DisplayProductProps {
  product: Products;
}
const DisplayProduct = ({ product }: DisplayProductProps): JSX.Element => {
  return <div>
    <Link href={product.id}>Name: {product.id}</Link>
    <img src='https://placekitten.com/200/300' />
  </div>
}

ProductId.Layout = Layout

export async function getServerSideProps({ req }: { req: NextApiRequest }) {
  let products = [];
  const { brand } = req.cookies;
  // const { productId } = new URL(req.url); // Link this to the Query param

  try {
    const host = `http://${req.headers.host}` || '';
    console.log('host', host)
    const res = await fetch(`${host}/api/products`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        cookie: `brand=${brand}`,
      },
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
    }
  }
}
