const gulp = require('gulp');
const browsersync = require("browser-sync").create();
const sass = require('gulp-sass');
const del = require('del');
const panini = require('panini');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const minify = require('gulp-minify');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');


function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: "./dist"
        },
        port: 3000
    });
    done();
}

// BrowserSync Reload
function browserSyncReload(done) {
    browsersync.reload();
    done();
}

// Clean assets
function clean() {
    console.log('Removing old files from dist');
    return del(["dist"]);
}

// Optimize Images
function images() {
    return gulp
      .src("src/assets/img/**/*")
      // .pipe(newer("dist/assets/img/"))
      .pipe(
        imagemin([
          imagemin.gifsicle({ interlaced: true }),
          imagemin.jpegtran({ progressive: true }),
          imagemin.optipng({ optimizationLevel: 5 }),
          imagemin.svgo({
            plugins: [
              {
                removeViewBox: false,
                collapseGroups: true
              }
            ]
          })
        ])
      )
      .pipe(gulp.dest("dist/assets/img/"));
  }

  // Compile Sass into CSS
  function style() {
    return gulp.src(['src/assets/scss/**/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({ 
            outputStyle: 'expanded',
            sourceComments: 'map',
            sourceMap: 'sass',
            outputStyle: 'nested'
        }).on('error', sass.logError))
        .pipe(cssnano()) // Use cssnano to minify CSS
        .pipe(rename({suffix: '.min'}))
        .pipe(autoprefixer({
          browserlist: true,
          cascade: false
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest("dist/assets/css"))
        .pipe(browsersync.stream());
}

// Concatenating js files
function scripts() {
  return gulp.src('src/assets/js/app.js')
      .pipe(sourcemaps.init())
      .pipe(sourcemaps.write('./'))
      .pipe(minify())
      .pipe(gulp.dest('dist/assets/js/'))
      .pipe(browsersync.stream());
};

// Move the javascript files into our js folder
function copyjs() {
return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.*', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.*'])
      .pipe(gulp.dest("dist/assets/js/"))
};


// Using panini, template, page and partial files are combined to form html markup
function compileHtml() {
    return gulp.src('src/pages/**/*.html')
        .pipe(panini({
            root: 'src/pages/',
            layouts: 'src/layouts/',
            partials: 'src/partials/',
            helpers: 'src/helpers/',
            data: 'src/data/'
        }))
        .pipe(gulp.dest('dist'));
}

// Reset Panini's cache of layouts and partials

function resetPages(done) {
  panini.refresh();
  done();
  console.log('Clearing panini cache');
}

// Copies video assets to dist
function media() {
    return gulp.src('src/assets/video/**/*')
        .pipe(gulp.dest('dist/assets/video/'));
}

// Places font files in the dist folder
function font(){
    return gulp.src('src/assets/fonts/**/*.+(eot|woff|ttf|otf)')
        .pipe(gulp.dest("dist/assets/fonts"))
}

function watchFiles() {
    gulp.watch("src/assets/scss/**/*", style);
    gulp.watch("src/assets/js/**/*", gulp.series(scripts, copyjs));
    gulp.watch("src/assets/img/**/*", images);
    gulp.watch("src/assets/video/**/*", media);
    gulp.watch("src/assets/video/**/*", font);
    gulp.watch(['src/**/*.html'], gulp.series(resetPages, compileHtml, browserSyncReload));
  }

  // define complex tasks
const build = gulp.series(clean, gulp.parallel(style, font, media, images, scripts, copyjs, resetPages, compileHtml));
const watch = gulp.parallel(watchFiles, browserSync);
// export tasks
exports.images = images;
exports.style = style;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = build;