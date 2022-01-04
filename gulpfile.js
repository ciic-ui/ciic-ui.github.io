const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const minifyCss = require('gulp-minify-css');
gulp.task('sass', async function () {
  return gulp.src('components/css/**/*.scss')
    .pipe(sass())
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/css'));
})

gulp.task('font', async function () {
  return gulp.src('components/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
})

const devPath = '/Users/mac/test'

gulp.task('devCopyfiles', function () {
  const sourceFiles = [
    'deployment/**/*'
  ];
  const destination = devPath + '/node_modules/ciic-ui/';
  return gulp.src(sourceFiles, {
    base: "./deployment"
  }).pipe(gulp.dest(destination));
});

gulp.task('copyfiles', function () {
  const sourceFiles = [
    'package.json',
    'README.md',
    'CHANGELOG.md',
    'dist/**/*',
    'components/**/*',
    'node_modules/**/*'
  ];
  const destination = './deployment/';
  return gulp.src(sourceFiles, {
    base: "."
  }).pipe(gulp.dest(destination));
});

gulp.task('dev', gulp.series([
  'copyfiles'
]));
gulp.task('pub', gulp.series([
  'devCopyfiles'
]));