import Image from 'next/image'
import { Layout, Link, Page, Text } from '@vercel/examples-ui'

type Product = {
  id: string;
  name: string;
  brand: string;
  thumbnail: string;
};

interface Props {
  products: Product[];
}

const ProductCards = (props: Props) => {
  const productComponents:React.ReactElement[] = [];
  props.products.forEach(product => {
    const productComponent:React.ReactElement = 
      <div key={product.name + '-card'}>
        <Image 
          src={product.thumbnail}
          alt={product.name}
          height={100}
          width={100}
        />
        <Text>
          {product.name}
        </Text>
        <Link href={`/products/${product.id}`}>
          LINK TO PAGE
        </Link>
      </div>
    productComponents.push(productComponent);
  });

  return (
    <>
      {productComponents}
    </>
  )
}

export default ProductCards