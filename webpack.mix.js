const mix = require('laravel-mix');

mix.js('src/js/app.js', 'public/js')
    .sass('src/scss/app.scss', 'public/css')
    .copy('src/fonts', 'mb1-gaming/fonts')

    mix.options({
        processCssUrls: false
    }); 