// .eleventy.js
module.exports = function (eleventyConfig) {
    eleventyConfig.addCollection("recipes", function(collectionApi) {
        // Get all recipe posts
        let recipes = collectionApi.getFilteredByGlob("recipes/*.md");
        // Sort recipes alphabetically by title
        recipes.sort((a, b) => (a.data.title > b.data.title) ? 1 : -1);
        return recipes;
    });

    eleventyConfig.addPassthroughCopy({
        "style.out.css": "style.css",
    });
    
    eleventyConfig.setUseGitIgnore(false);
};