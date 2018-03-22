const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');

gulp.task('default', function(){
  gulp.src('index.html')
      .pipe(nunjucks.compile({
        page_title: "Stuhr Enterprises"
      }))
      .pipe(gulp.dest('../stuhr-prod'));
});