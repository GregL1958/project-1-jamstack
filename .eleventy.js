module.exports = function (config) {
    // Order matters, put this at the top of your configuration file.
    config.addPassthroughCopy("src/css");
    config.addPassthroughCopy("src/js");
    return {
        dir:{
            input: "src",
            output: "dist"
        }
    }
}