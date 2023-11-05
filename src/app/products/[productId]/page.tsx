import ProductItem from '~/components/product-item'

interface Props {
  params: { productId: string }
}

export default async function ProductPage({ params: { productId } }: Props) {
  console.log('ProductPage path param >> ', productId)
  return <ProductItem productId={productId} />
}
