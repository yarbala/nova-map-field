let mix = require('laravel-mix')
let NovaExtension = require('laravel-nova-devtool')

mix.extend('nova', new NovaExtension())

mix
  .sourceMaps()
  .setPublicPath('dist')
  .js('resources/js/field.js', 'js')
  .vue({ version: 3 })
  .sass('resources/sass/field.scss', 'css')
  .nova('yarbala/simple-map')
  .version()
  .webpackConfig({
      resolve: {
          symlinks: false
      }
  })
