
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addShortcode("itemImage", function (src, alt) {
    return `
      <div class="item-image-wrapper">
        <img src="${src}" alt="${alt}" class="item-image">
      </div>
    `;
  });
  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
