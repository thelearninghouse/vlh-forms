const path = require('path');

module.exports = {
	title: 'Vue Style Guide Example',
	sections: [
		{
			name: 'Documentation',
			content: 'docs-sg/Documentation.md',
			sections: [
				{
					name: 'Files',
					content: 'docs-sg/Files.md',
					sections: [
						{
							name: 'First',
							content: 'docs-sg/One.md',
							description: 'This is the first section description',
						},
						{
							name: 'Second File',
							content: 'docs-sg/Two.md',
						},
					],
				},
			],
		},
		{
			name: 'Components',
			sections: [
				{
					name: 'Main Form Fields',
					components: () => [
            './src/components/FormFirstName.vue',
            './src/components/FormLastName.vue',
						'./src/components/FormEmail.vue',
					],
				},
				{
					name: 'StepForms',
					components: () => [
            './src/components/FormStep.vue',
            './src/components/StepFormControls.vue',
            './src/components/StepFormProgress.vue',
					],
				},
			],
		},
	],
	// require: [path.join(__dirname, 'dist/styles.css')],
	defaultExample: true,
	webpackConfig: env => ({
		module: {
      rules: [
        // Vue loader
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          loader: "vue-loader"
        },
        {
          test: /\.svg$/,
          loader: "vue-svg-loader"
        }
      ]
		},
		performance:
			env === 'development'
				? false
				: {
						maxAssetSize: 685000, // bytes
						maxEntrypointSize: 685000, // bytes
						hints: 'error',
					},
	}),
};
