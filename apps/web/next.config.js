/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@hol/ui', '@hol/idx'],
  typescript: {
    tsconfigPath: '../../tsconfig.base.json'  
  }
};


module.exports = nextConfig;
