export default {
	webpack(config, env) {
		config.resolve.alias['react'] = 'preact/compat';
		config.resolve.alias['react-dom/test-utils'] = 'preact/test-utils';
		config.resolve.alias['react-dom'] = 'preact/compat';
		config.resolve.modules.push(env.src);
	},
};
