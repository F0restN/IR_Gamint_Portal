const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
	app.use(function (req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		next();
	});

	app.use(
		"/api/appdetails",
		createProxyMiddleware({
			target: "https://store.steampowered.com/",
			changeOrigin: true,
			onProxyRes: function (proxyRes, req, res) {
				proxyRes.headers["Access-Control-Allow-Origin"] = "*";
			},
		})
	);

	app.use(
		"/query",
		createProxyMiddleware({
			target: "http://localhost:8080",
			changeOrigin: true,
		})
	);
};
