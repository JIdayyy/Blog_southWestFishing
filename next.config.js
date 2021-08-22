const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
    images: {
        domains: [
            "images.unsplash.com",
            "blog-south-west-fishing.vercel.app",
            "www.google.com",
            "blog-south-west-fishing-q3ge3neug-jidayyy.vercel.app",
        ],
    },
});
