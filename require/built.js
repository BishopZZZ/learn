({
    appDir: './',
    baseUrl: './js',
    dir: './app-built',
    paths: {
        'jquery': './jquery-2.1.4.min',
        'jquery.transit': './jquery.transit',
        'two': './two',
        'three': './three'
    },
    shim: {
        'jquery.transit': ['jquery']
    },
    modules: [{
        name: './main'
    }]
})
