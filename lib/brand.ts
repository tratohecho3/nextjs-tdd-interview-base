import { COOKIE_NAME } from './constants';

export const HOME_BRANDS = ['chene', 'sapin', 'palmier'] as const

export function getBrand(req: NextRequest) {
  let override = req.nextUrl.searchParams.get(COOKIE_NAME) || req.cookies[COOKIE_NAME];
  console.log('override', override);


  if (HOME_BRANDS.includes(override)){
    return override;
  }

  return 'palmier';
}
