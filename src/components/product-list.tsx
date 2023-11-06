import Link from 'next/link'
import { getProductList } from '~/lib/api/get-product-list'

async function ProductList() {
  const productListData = getProductList()

  const productList = await productListData

  return (
    <ul>
      {productList.map(product => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>
            {product.name} / {[product.price]}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default ProductList
