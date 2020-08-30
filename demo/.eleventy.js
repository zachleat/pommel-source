const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(syntaxHighlight);

	eleventyConfig.addPassthroughCopy("pommel-source.css");
	eleventyConfig.addPassthroughCopy("demo/prism-theme.css");
};