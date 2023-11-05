import styles from './page.module.css'
import ProductList from '~/components/product-list'
import { Suspense } from 'react'

export default function Home() {
  return (
    <main className={styles.main}>
      <Suspense fallback={<p>Loading...</p>}>
        <ProductList />
      </Suspense>
    </main>
  )
}
