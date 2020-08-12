const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
    require('dotenv').config()

    const apiUrl = process.env.YT_API_URL
    const apiToken = process.env.X_Auth_Token
    const headers = {
        "Content-Type": "application/json",
        "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThiNzFjZDMyMmNiMTAwMTFjOGJjNDkiLCJpYXQiOjE1OTY2OTM2MzB9.TrD0RsB2RWw0DYRfpc0OUvHbt9dgSJtiOcXcpOlKCmM"

    }

    // define http-proxy-middleware
    let YTProxy = createProxyMiddleware({
        target: 'https://ftapp.lfcww.org/api/reports/GetYoutubeData',
        changeOrigin: true,
        pathRewrite: {
            '^/api/':'/'
        },
        headers: headers,
    })

    // define the route and map the proxy
    app.use('/api', YTProxy)
};