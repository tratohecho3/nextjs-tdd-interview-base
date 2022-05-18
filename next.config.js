const withTM = require('@vercel/examples-ui/transpile')();

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
  images: { domains: ['image.shutterstock.com'] },
});
