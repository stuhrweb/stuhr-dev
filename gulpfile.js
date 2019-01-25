const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');

gulp.task('default', function(){
  gulp.src('index.html')
      .pipe(nunjucks.compile({
        page_title: "Stuhr Enterprises",
        meta: {
          description: "Our ANION BOOSTER™ and GLUCOSE BOOSTER™ provide a palatable source of anions and an effective source of glucose precursors to help prevent Hypocalcemia and Ketosis, proven at the University and on the dairy.",
          image: "https://www.stuhrenterprises.com/images/home-hero-cows.jpg"
        }
      }))
      .pipe(gulp.dest('../stuhr-prod'));
  gulp.src('glucose-booster.html')
      .pipe(nunjucks.compile({
        page_title: "Glucose Booster - Stuhr Enterprises",
        meta: {
          description: "A unique blend of glucose precursors that help the Transition cow produce enough glucose to help prevent subclinical and clinical ketosis and the resulting health problems.",
          image: "https://www.stuhrenterprises.com/images/anion-glucose-hero.jpg"
        }
      }))
      .pipe(gulp.dest('../stuhr-prod'));
  gulp.src('anion-booster.html')
      .pipe(nunjucks.compile({
        page_title: "Anion Booster - Stuhr Enterprises",
        meta: {
          description: "A solution to help controll Hypocalcemia (Milk Fever) by utilizing anions derived from natural sources that are palatable which helps increase DMI during this critical time of Transition. It also regulates the metabolic pH of the cow's blood and urine to increase the absorption of calcium.",
          image: "https://www.stuhrenterprises.com/images/anion-glucose-hero.jpg"
        }
      }))
      .pipe(gulp.dest('../stuhr-prod'));
  gulp.src('about.html')
      .pipe(nunjucks.compile({
        page_title: "About - Stuhr Enterprises",
        meta: {
          description: "Learn about the history and vision of Stuhr Enterprises, LLC.",
          image: "https://www.stuhrenterprises.com/images/about-hero.jpg"
        }
      }))
      .pipe(gulp.dest('../stuhr-prod'));
  gulp.src('contact-us.html')
      .pipe(nunjucks.compile({
        page_title: "Contact Us - Stuhr Enterprises",
        meta: {
          description: "Find information on national and international contacts as well as request research.",
          image: "https://www.stuhrenterprises.com/images/contact-hero.jpg"
        }
      }))
      .pipe(gulp.dest('../stuhr-prod'));
  gulp.src('privacy-policy.html')
      .pipe(nunjucks.compile({
        page_title: "Privacy Policy - Stuhr Enterprises",
        meta: {
          description: "Learn the privacy policy of Stuhr Enterprises, LLC.",
          image: ""
        }
      }))
      .pipe(gulp.dest('../stuhr-prod'));
  gulp.src('sitemap.html')
      .pipe(nunjucks.compile({
        page_title: "Sitemap - Stuhr Enterprises",
        meta: {
          description: "Sitemap of Stuhr Enterprises, LLC.",
          image: ""
        }
      }))
      .pipe(gulp.dest('../stuhr-prod'));
});