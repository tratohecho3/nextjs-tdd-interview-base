import { NextRequest, NextResponse } from 'next/server'
import { getBrand } from '@lib/brand'

const COOKIE_NAME = 'brand-home'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  // Get the brand cookie
  const brand = req.cookies[COOKIE_NAME] || getBrand(req)
  const res = NextResponse.rewrite(`/${brand}${pathname}`)

  // Add the brand to cookies if it's not there
  if (!req.cookies[COOKIE_NAME]) {
    res.cookie(COOKIE_NAME, brand)
  }

  return res
}
