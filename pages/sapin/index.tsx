import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { Layout, Link, Page, Text, Button } from '@vercel/examples-ui'
import { HOME_BRANDS } from '@lib/brand'

export default function Home() {
  const router = useRouter()
  const setBrand = (brand: string) => () => {
    Cookies.set('brand-home', brand)
    router.reload()
  }
  const removeBrand = () => {
    Cookies.remove('brand-home')
    router.reload()
  }
  const brand = router.query.brand || 'sapin' as string

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
      {HOME_BRANDS.map((brand) => (
        <Button
          key={brand}
          variant="secondary"
          onClick={setBrand(brand)}
          style={{ marginRight: '0.625rem' }}
        >
          Brand {brand.toUpperCase()}
        </Button>
      ))}
      <Button variant="black" onClick={removeBrand}>
        Remove brand
      </Button>
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
