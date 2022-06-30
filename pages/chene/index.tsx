import { Layout, Link, Page, Text } from '@vercel/examples-ui'
import { useBrand } from '@hooks/useBrand';
import { useProducts } from '@hooks/useProducts';
import ProductCards from '../../components/productcard'

type Props = {
  color: string;
};

export default function Home({ color}: Props) {
  const brand = useBrand();
  const { data: { products } = { products: []}, error } = useProducts();
  return (
    <Page>
      <Text variant="h2" className="mb-6" style={{ color }}>
        Home page
      </Text>
      <Text className="text-lg mb-4">
        <Link href='/about'>About</Link> us
      </Text>
      <ProductCards products={products}/>
      <Text className="text-lg mb-4">
        Welcome to <b>brand {brand.toUpperCase()}</b> {error ? error.message : products.map(({name}) => name).join(', ')}.
      </Text>
    </Page>
  )
}

Home.Layout = Layout;

export async function getServerSideProps() {
  return {
    props: {
      product: 'flooring',
      color: '#BB8141',
    }
  }
}
