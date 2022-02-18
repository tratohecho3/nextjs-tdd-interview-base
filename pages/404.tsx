import { useRouter } from 'next/router'

export default function Custom404() {
  const router = useRouter()
  const brand = router.query.brand || '' as string


  return <h1>404 - {brand.toUpperCase()} Not Found</h1>
}
