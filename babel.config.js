module.exports = function (api) {
    api.cache.never();
    return {
        babelrcRoots: [
            ".",
            "modules/*",
        ]
    }

};
