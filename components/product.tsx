import Image from 'next/image';
import Link from 'next/link';

type Product = {
  id: string;
  name: string;
  brand: string;
  thumbnail: string;
};

export default function Product({ product }: any) {
  console.log(product);
  return (
    <div key={product.id} className='text-lg'>
      <Image
        src={product.thumbnail}
        alt={product.name}
        width={50}
        height={50}
        layout='responsive'
      />
      <Link href={product.id}>{product.name}</Link>
    </div>
  );
}
