const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
    images: {
        domains: [
            "images.unsplash.com",
            "blog-south-west-fishing.vercel.app",
            "www.google.com",
            "scontent-cdg2-1.xx.fbcdn.net",
        ],
    },
});
