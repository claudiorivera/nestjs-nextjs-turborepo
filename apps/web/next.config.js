const withTM = require("next-transpile-modules")(["ui"]);

module.exports = withTM({
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${
          process.env.API_URL ?? process.env.API_RENDER_URL
        }/:path*`,
      },
    ];
  },
});
