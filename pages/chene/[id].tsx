import { useRouter } from 'next/router'

const SecondFlooring = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>SecondFlooring: {pid}</p>
}

export default SecondFlooring