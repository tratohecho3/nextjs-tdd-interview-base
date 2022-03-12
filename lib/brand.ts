type brand = 'chene' | 'sapin' | 'palmier';
export const BRANDS: brand[] = ['chene', 'sapin', 'palmier']

export function isValidBrand (override : any) : override is brand  {
  return BRANDS.indexOf(override) > -1;
}
