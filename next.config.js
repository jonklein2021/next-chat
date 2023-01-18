/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI: "mongodb+srv://admin:admin@nextnotes.t1dsaf7.mongodb.net/?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
