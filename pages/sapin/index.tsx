
import Cookies from 'js-cookie'
import { Layout, Link, Page, Text, Button } from '@vercel/examples-ui'
import { HOME_BRANDS } from '@lib/brand'
import { useBrand } from '@hooks/useBrand';

export default function Home() {
  const brand = useBrand();

  return (
    <Page>
      <Text variant="h2" className="mb-6" style={{ color: '#567030'}}>
        Home page
      </Text>
      <Text className="text-lg mb-4">
        You're currently on <b>brand {brand.toUpperCase()}</b> tree farm.
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

export async function getStaticProps() {
  // Here you would return data about the brand
  return { props: {} }
}
