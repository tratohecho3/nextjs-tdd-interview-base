import { NextRequest, NextResponse } from 'next/server';
import { getBrand } from '@lib/brand';

import { COOKIE_NAME } from '@lib/constants';
import { NextURL } from 'next/dist/server/web/next-url';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Dont rewite the path for api routes
  if (pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  // Get the brand cookie
  const brand = getBrand(req)
  console.log('detected brand', brand)
  const updatedUrl = new NextURL(req.nextUrl);
  updatedUrl.pathname = `/${brand}${pathname}`;
  // TODO this doesnt impact the query params (might have to use browser)
  updatedUrl.searchParams.delete('brand');
  const res = NextResponse.rewrite(updatedUrl)

  // Add the brand to cookies if it's not there or it doesnt match the desired brand
  if (!req.cookies[COOKIE_NAME] || req.cookies[COOKIE_NAME] !== brand) {
    res.cookie(COOKIE_NAME, brand)
  }

  return res;
}
