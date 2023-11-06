import { Product } from '~/data'

interface ApiResponse<T> {
  data: T
}

const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL || 'http://localhost:3000/api'

export async function getProduct(productId: string) {
  const response = await fetch(API_BASE_URL.concat(`/products/${productId}`), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const { data }: ApiResponse<Product> = await response.json()

  return data
}
