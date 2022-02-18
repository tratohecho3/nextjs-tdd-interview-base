
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
        You're currently visiting the <b>brand {brand.toUpperCase()}</b> {product} website.
      </Text>
      <Text className="mb-4">
        You can use the buttons below to change your assigned brand and refresh
        the page:
      </Text>
      <Text className="text-bold mb-4">
        <Link href='/about'>About</Link>
      </Text>
    </Page>
  )
}

Home.Layout = Layout

export async function getServerSideProps() {
  return {
    props: {
      product: 'tree farm',
      color: '#567030',
    }
  }
}