// .eleventy.js
module.exports = function (eleventyConfig) {
    eleventyConfig.addCollection("recipes", function(collection) {
        return collection.getFilteredByGlob("recipes/*.md");
    });

    eleventyConfig.addPassthroughCopy({
        "style.out.css": "style.css",
    });
    
    eleventyConfig.setUseGitIgnore(false);
};