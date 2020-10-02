module.exports = {
	outputDir: '../public',
	chainWebpack: (config) => {
		config.plugin('html').tap((args) => {
			args[0].title = 'SWAPI App'
			return args
		})
	},
}
