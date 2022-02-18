import { Layout, Link, Page, Text } from '@vercel/examples-ui'
import { useBrand } from '@hooks/useBrand';

type Props = {
  color: string;
  product: string;
};

export default function Home({ color, product }: Props) {
  const brand = useBrand();
  return (
    <Page>
      <Text variant="h2" className="mb-6" style={{ color }}>
        Home page
      </Text>
      <Text className="text-lg mb-4">
        <Link href='/about'>About</Link> us
      </Text>
      <Text className="text-lg mb-4">
        Welcome to <b>brand {brand.toUpperCase()}</b> {product}.
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
