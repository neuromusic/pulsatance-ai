module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/styles.css": "styles.css" });

  // Amplify Scout prototype — self-contained, served verbatim at an unguessable /s/ path.
  eleventyConfig.addPassthroughCopy({ "src/s": "s" });
  eleventyConfig.ignores.add("src/s/**");
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });

  eleventyConfig.setLibrary(
    "md",
    require("markdown-it")({ html: true, typographer: false })
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
  };
};
