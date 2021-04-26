const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/search',
    createProxyMiddleware({
      target: 'https://api.edamam.com/search',
      changeOrigin: true,
    })
  );
};