import Link from 'next/link'
import { getProduct } from '~/lib/api/get-product'

async function ProductItem({ productId }: { productId: string }) {
  const productItemData = getProduct(productId)

  const product = await productItemData

  return (
    <>
      <div style={{ margin: '2rem 1rem' }}>
        <Link
          href='/'
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: 'teal',
          }}
        >
          홈으로
        </Link>
      </div>
      <ul style={{ margin: '1rem' }}>
        <li>제품명 : {product.name}</li>
        <li>제품가격 : {product.price}</li>
      </ul>
    </>
  )
}

export default ProductItem
