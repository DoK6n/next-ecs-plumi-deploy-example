import { NextResponse } from 'next/server'
import { data } from '~/data'

export async function GET(request: Request) {
  console.log('INFO: /products GET')
  return NextResponse.json({ data })
}
