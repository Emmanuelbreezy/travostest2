const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');

module.exports = {
	plugins: [
		require('tailwindcss')('./tailwind.config.js'),
		require('autoprefixer'),
		cssnano({
			preset: 'default'
		}),
		purgecss({
			content: [
				'./src/**/*.jsx',
				'./src/**/*.js',
				'./public/index.html',
			],
			defaultExtractor: content => content.match(/[A-Za-z0-9-_:./\!$?]+/g) || []
		})
	]
}



