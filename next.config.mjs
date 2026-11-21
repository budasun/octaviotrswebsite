/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/terapia-online',
        destination: '/terapia-cognitivo-conductual-online',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
