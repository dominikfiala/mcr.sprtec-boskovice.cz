const gulp = require('gulp')
const nunjucksRender = require('gulp-nunjucks-render')
const data = require('gulp-data')

gulp.task('default', ['nunjucks'])

gulp.task('nunjucks', function() {
  return gulp.src('src/tpl/pages/**/*.+(html|nunjucks)')
    .pipe(data(function() {
      return require('./src/data.json')
    }))
    .pipe(nunjucksRender({
        path: ['src/tpl']
      }))
    .pipe(gulp.dest('dist'))
})
