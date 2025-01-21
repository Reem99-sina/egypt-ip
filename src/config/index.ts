// if (!process.env.NEXT_PUBLIC_BASE_URL) {
//   throw new Error('missing env variable "NEXT_PUBLIC_BASE_URL"');
// }

export const config = {
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  DEFAULT_LOCALE: 'ar',
  NEXT_PUBLIC_ALGOLIA_APP_ID:'BYOYYZCKQD',
  NEXT_PUBLIC_ALGOLIA_ADMIN_KEY:'0699d4c11b1b4e3a0465dcb0091da661'
};
