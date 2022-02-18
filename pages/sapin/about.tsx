import Cookies from 'js-cookie'
import { Layout, Page, Text, Button } from '@vercel/examples-ui'
import { HOME_BRANDS } from '@lib/brand'
import { useBrand } from '@hooks/useBrand';

export default function Home() {
  const brand = useBrand();

  return (
    <Page>
      <Text variant="h2" className="mb-6">
        About <b>brand {brand.toUpperCase()}</b>
      </Text>
      <Text className="text-lg mb-4">
        Our balsam fir are popular Christmas trees, with aromatic foliage that does not shed many needles on drying out.
      </Text>
    </Page>
  )
}

Home.Layout = Layout

export async function getStaticProps() {
  // Here you would return data about the brand
  return { props: {} }
}
