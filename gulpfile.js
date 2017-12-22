var gulp = require('gulp'),
  htmlmin = require('gulp-htmlmin'),
  imagemin = require('gulp-imagemin'),
  sass = require('gulp-sass'),
  compass = require('gulp-compass'),
  cssnano = require('gulp-cssnano'),
  sourcemaps = require('gulp-sourcemaps'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify-es').default,
  autoprefixer = require('gulp-autoprefixer'),
  concat = require('gulp-concat');

var config = {
    'src': './src',
    'dest': './dist',
    'html': {
        'src': './src/*.html',
        'dest': './dist/'
    },
    'sass': {
        'dest': './dist/styles/css',
        'src': './src/styles/scss/style.scss'
    },
    'js': {
      'src': [
          './node_modules/respond/main.js',
          './node_modules/html5shiv/dist/html5shiv.js',
        './node_modules/jquery/dist/jquery.js',
        './node_modules/popper.js/dist/popper.min.js',
        './node_modules/bootstrap/dist/js/bootstrap.min.js',
        './src/js/*.js'
      ],
      'dest': './dist/js'
    },
    'img': {
        'dest': './dist/img/',
        'src': './src/images/*'
    }
};

gulp.task('copy:html', function () {
    return gulp.src(config.html.src)
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest(config.html.dest));
});

gulp.task('minify:img', function () {
    return gulp.src(config.img.src)
      .pipe(imagemin())
      .pipe(gulp.dest(config.img.dest));
  }
);

gulp.task('default', function() {
    return gulp.src('./main.css')
        .pipe(cssnano())
        .pipe(gulp.dest('./out'));
});
gulp.task('default', function () {
    return gulp.src('main.css')
        .pipe(sourcemaps.init())
        .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./out'));
});
gulp.task("uglify", function () {
    return gulp.src("lib/bundle.js")
        .pipe(rename("bundle.min.js"))
        .pipe(uglify(/* options */))
        .pipe(gulp.dest("lib/"));
});

gulp.task('build',['copy:html', 'minify:img'], function () {});

gulp.task('watch', function () {
    gulp.watch([
        config.sass.path + '/**/*.scss',
        config.js.path + '/**/*.js',
        config.html.src
    ], ['build']);
});
gulp.task('compass', function() {
    gulp.src('./src/*.scss')
        .pipe(compass({
            config_file: './config.rb',
            css: 'stylesheets',
            sass: 'sass'
        }))
        .pipe(gulp.dest('app/assets/temp'));
});
gulp.task('compass', function() {
    gulp.src('./src/*.scss')
        .pipe(compass({
            project: path.join(__dirname, 'assets'),
            css: 'css',
            sass: 'sass'
        }))
        .pipe(gulp.dest('app/assets/temp'));
});
gulp.task('compass', function() {
    gulp.src('./src/*.scss')
        .pipe(compass({
            project: path.join(__dirname, 'assets'),
            css: 'css',
            sass: 'sass'
        }))
        .pipe(gulp.dest('app/assets/temp'));
});
gulp.task('default', () =>
gulp.src('src/app.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('dist'))
);

gulp.task('scripts', function() {
    return gulp.src('./lib/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/'));
});