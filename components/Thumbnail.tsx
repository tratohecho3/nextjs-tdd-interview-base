import React from 'react';
import Image from 'next/image';
import { Product } from '@hooks/useProducts';

export interface ThumbnailProps {
  product: Product;
}

export default function Thumbnail(props: ThumbnailProps) {
  const { product } = props;

  return (
    <div key={product.id}>
      <h3>{product.name}</h3>
      <Image src={product.thumbnail} alt={product.name} width={500} height={500} layout="responsive" />
    </div>
  );
}
