import { Layout, Link, Page, Text } from '@vercel/examples-ui';
import { useBrand } from '@hooks/useBrand';
import { useProducts } from '@hooks/useProducts';
import Product from '@components/product';

type Props = {
  color: string;
};

export default function Home({ color }: Props) {
  const brand = useBrand();
  const { data: { products } = { products: [] }, error } = useProducts();
  console.log('Home component', products);
  return (
    <Page>
      <Text variant='h2' className='mb-6' style={{ color }}>
        Home page
      </Text>
      <Text className='mb-4 text-lg'>
        <Link href='/about'>About</Link> us
      </Text>
      {/* <Text className='mb-4 text-lg'>
        Welcome to <b>brand {brand.toUpperCase()}</b>{' '}
        {error ? error.message : products.map(({ name }) => name).join(', ')}.
      </Text> */}
      {products.map((ele) => (
        <Product product={ele} key={ele.id} />
      ))}
    </Page>
  );
}

Home.Layout = Layout;

export async function getServerSideProps() {
  return {
    props: {
      product: 'flooring',
      color: '#BB8141',
    },
  };
}
