import { NextRequest } from 'next/server';
import { COOKIE_NAME } from './constants';

export const BRANDS = ['chene', 'sapin', 'palmier'] as const

export function getBrand(req: NextRequest) {
  let override = req.nextUrl.searchParams.get(COOKIE_NAME) || req.cookies[COOKIE_NAME];

  const host = req.headers.get('host') || '';
  const brand = BRANDS.find((b) => host.includes(b));

  if (brand) {
    return brand;
  }

  if (BRANDS.includes(override)){
    return override;
  }

  // Default to a brand which is not found, and the 404 page can tell you where to look
  return 'palmier';
}
