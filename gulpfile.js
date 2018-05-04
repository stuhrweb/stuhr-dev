const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');

gulp.task('default', function(){
  gulp.src('index.html')
      .pipe(nunjucks.compile({
        page_title: "Stuhr Enterprises"
      }))
      .pipe(gulp.dest('../stuhr-prod'));
  gulp.src('glucose-booster.html')
      .pipe(nunjucks.compile({
        page_title: "Glucose Booster - Stuhr Enterprises"
      }))
      .pipe(gulp.dest('../stuhr-prod'));
  gulp.src('anion-booster.html')
      .pipe(nunjucks.compile({
        page_title: "Anion Booster - Stuhr Enterprises"
      }))
      .pipe(gulp.dest('../stuhr-prod'));
  gulp.src('about.html')
      .pipe(nunjucks.compile({
        page_title: "About - Stuhr Enterprises"
      }))
      .pipe(gulp.dest('../stuhr-prod'));
  gulp.src('contact-us.html')
      .pipe(nunjucks.compile({
        page_title: "Contact Us - Stuhr Enterprises"
      }))
      .pipe(gulp.dest('../stuhr-prod'));
});