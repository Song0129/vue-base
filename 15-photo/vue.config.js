module.exports = {
	publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
	devServer: {
		proxy: {
			"/api": {
				target: "http://localhost:8081/",
				pathRewrite: {
					"^/api": "",
				},
			},
		},
	},
};
