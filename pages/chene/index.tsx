import Cookies from 'js-cookie'
import { Layout, Link, Page, Text, Button } from '@vercel/examples-ui'
import { HOME_BRANDS } from '@lib/brand'
import { useBrand } from '@hooks/useBrand';

export default function Home() {
  const brand = useBrand();
  return (
    <Page>
      <Text variant="h2" className="mb-6" style={{ color: '#BB8141'}}>
        Home page
      </Text>
      <Text className="text-lg mb-4">
        <Link href='/about'>About</Link> us
      </Text>
      <Text className="text-lg mb-4">
        Welcome to <b>brand {brand.toUpperCase()}</b> flooring.
      </Text>
    </Page>
  )
}

Home.Layout = Layout

export async function getStaticProps() {
  // Here you would return data about the brand
  return { props: {} }
}
