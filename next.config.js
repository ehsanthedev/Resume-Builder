// next.config.js
module.exports = {
  webpack: (config) => {
    // Add framer-motion to the list of transpiled modules
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });
    
    return config;
  },
  transpilePackages: ['framer-motion'],
};