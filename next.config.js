const withPlugins = require("next-compose-plugins");
const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

dotenvLoad();

const withNextEnv = nextEnv();
module.exports = withPlugins([[withNextEnv], [withBundleAnalyzer]]);
