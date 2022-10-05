/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: "/cpp",
        destination: "/cpp/v1",
        permanent: true,
      },
      {
        source: "/web",
        destination: "/web/v1",
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
