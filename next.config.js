const withPlugins = require('next-compose-plugins');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});
const withTM = require('next-transpile-modules')(['react-spring']);

module.exports = withPlugins([withTM, withMDX], {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});
