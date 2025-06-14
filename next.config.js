/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	output: process.env.VERCEL ? 'standalone' : undefined,

	serverExternalPackages: ['mongoose'],

	experimental: {
		optimizePackageImports: ['@radix-ui/react-switch'],
	},

	eslint: {
		ignoreDuringBuilds: true,
	},

	typescript: {
		ignoreBuildErrors: true,
	},

	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.fallback = {
				...config.resolve.fallback,
				fs: false,
				net: false,
				tls: false,
			};
		}
		return config;
	},

	generateBuildId: async () => {
		return 'build-' + Date.now().toString(36);
	},

	async headers() {
		return [
			{
				source: "/api/:path*",
				headers: [
					{ key: "Access-Control-Allow-Credentials", value: "true" },
					{ key: "Access-Control-Allow-Origin", value: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000" },
					{ key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
					{ key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
				]
			}
		]
	},
}

module.exports = nextConfig