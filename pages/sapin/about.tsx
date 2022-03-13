import { Layout, Link, Page, Text } from '@vercel/examples-ui'
import { useBrand } from '@hooks/useBrand';

export default function About() {
  const brand = useBrand();

  return (
    <Page>
      <Text variant="h2" className="mb-6">
        About <b>brand {brand.toUpperCase()}</b>
      </Text>
      <Text className="text-lg mb-4">
        Our balsam fir are popular Christmas trees, with aromatic foliage that does not shed many needles on drying out.
      </Text>
      <Text>
        <Link href="/">Back</Link>
      </Text>
    </Page>
  )
}

About.Layout = Layout

export async function getStaticProps() {
  // Here you would return data about the brand
  return { props: {} }
}
