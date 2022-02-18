import Head from 'next/head'
import { Layout, Page, Text } from '@vercel/examples-ui'
import { useBrand } from '@hooks/useBrand';

export default function Custom404() {
  const brand = useBrand();

  return (
  <Page>
    <Head>
      <title>${brand} Not Found</title>
      <meta
        name="description"
        content="Vercel example how to use multi-brand custom not found"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section className="flex flex-col gap-6">
      <Text variant="h1">404 - {brand.toUpperCase()} Not Found</Text>
    </section>
  </Page>);
}


Custom404.Layout = Layout;