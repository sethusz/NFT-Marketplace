/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dmi-nfts-collection.s3.eu-north-1.amazonaws.com',
                port: '',
                pathname: '/photos/*'
            }
        ]
    }
}
module.exports = nextConfig
