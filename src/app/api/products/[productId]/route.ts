import { NextResponse } from 'next/server'
import { data as productList } from '~/data'

export async function GET(request: Request, { params }: { params: { productId: string } }) {
  console.log('INFO: /products/:productId GET')

  const data = productList.find(product => product.id === params.productId)
  return NextResponse.json({ data })
}
