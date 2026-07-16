module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/styles.css": "styles.css" });

  // Amplify Scout prototype — a self-contained page served verbatim at /scout/.
  eleventyConfig.addPassthroughCopy({ "src/scout": "scout" });
  eleventyConfig.ignores.add("src/scout/**");

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
