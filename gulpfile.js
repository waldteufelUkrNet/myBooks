'use strict'
////////////////////////////////////////////////////////////////////////////////
/* ↓↓↓ VARIABLES ↓↓↓ */
  const { src,
          dest,
          // task,
          series,
          parallel,
          watch
        } = require('gulp');

  const gulp         = require('gulp'),                  //
        autoprefixer = require('gulp-autoprefixer'),     // додавання вендорних префіксів
        babel        = require("gulp-babel"),            // ES6 -> ES5
        browserSync  = require('browser-sync').create(), // створення віртуального серверу для live reload
        // cache        = require('gulp-cache'),            // бібліотека кешування
        changed      = require('gulp-changed'),          // контроль за змінами у файлах - пропускає потік далі, тільки якщо були зміни у файлі
        concat       = require('gulp-concat'),           // склеювання js-файлів // ??? а css?
        csso         = require('gulp-csso'),             // мініфікація css-файлів
        cssconcat    = require('gulp-concat-css'),       // склеювання css-файлів
        // cssnano      = require('gulp-cssnano'),          // мініфікація css-файлів
        // del          = require('del'),                   // видалення файлів і тек
        // gp           = require('gulp-load-plugins')(),   // щоб не оголошувати кожну змінну, застосовується для плагінів із префіксом gulp-
        // imagemin     = require('gulp-imagemin'),         // робота із зображеннями
        notify       = require('gulp-notify'),           // обробка повідомлень про помилки
        // pngquant     = require('imagemin-pngquant-gfw'), // потрібен для роботи gulp-imagemin
        pug          = require('gulp-pug'),              // перетворення pug в html
        // purge        = require('gulp-css-purge'),        // видалення дублюючого коду css
        // rename       = require('gulp-rename'),           // перейменовування файлів
        scss         = require('gulp-sass'),             // перетворення sass/scss в css
        // sourcemaps   = require('gulp-sourcemaps'),       //
        uglify       = require('gulp-uglify');           // мініфікація js-файлів
/* ↑↑↑ /VARIABLES ↑↑↑ */
////////////////////////////////////////////////////////////////////////////////
/* ↓↓↓ TASKS ↓↓↓ */
  // server for live reload
  function startBrowserSync() {
    browserSync.init({
      server : {
        baseDir : 'app'
      },
      notify: false // відключення повідомлень browserSync
    });
  }
  exports.startBrowserSync = startBrowserSync;

  // index.pug -> index.html
  function indexPug() {
    return src('app/index.pug')
           // .pipe(changed('app/', {extension: '.html'}))
           .pipe(pug({
             pretty : true
           }))
           .on('error', notify.onError({
             message : 'Error: <%= error.message %>',
             title   : 'PUG error'
           }))
           .pipe( dest('app/') )
  }
  exports.indexPug = indexPug;

  // book.pug -> book.html
  function booksPug() {
    return src('app/books/*/*.pug')
           .pipe(changed('app/books/*/', {extension: '.html'}))
           .pipe(pug({
             pretty : true
           }))
           .on('error', notify.onError({
             message : 'Error: <%= error.message %>',
             title   : 'PUG error'
           }))
           .pipe( dest('app/books/') )
  }
  exports.booksPug = booksPug;

  // scss -> css: files
  function filesSass() {
    return src(['app/scss/**/*.+(scss|sass)'])
           .pipe( scss({outputStyle: 'expanded'}) ) // nested expanded compact compressed
           .on('error', notify.onError({
             message : 'Error: <%= error.message %>',
             title   : 'SASS error'
           }))
           .pipe(autoprefixer({
             browsers : ['last 10 versions', '> 1%', 'ie 8', 'ie 7'],
             cascade  : true
           }))
           // .pipe(csso({
           //   restructure : true, // злиття декларацій
           //   sourceMap   : false,
           //   debug       : false // виведення в консоль детальної інформації
           // }))
           .pipe( dest('app/css') )
           .pipe( browserSync.reload({stream:true}) )
  }
  exports.filesSass = filesSass;

  // scss -> css: modules
  function modulesSass() {
    return src(['app/modules/**/*.+(scss|sass)'])
           .pipe( scss({outputStyle: 'expanded'}) )
           .on('error', notify.onError({
             message : 'Error: <%= error.message %>',
             title   : 'SASS error'
           }))
           .pipe(autoprefixer({
             browsers : ['last 10 versions', '> 1%', 'ie 8', 'ie 7'],
             cascade  : true
           }))
           .pipe( cssconcat("modules.css") )
           .pipe( dest('app/css') )
           .pipe(browserSync.reload({stream:true}))
  }
  exports.modulesSass = modulesSass;

  // ES6 -> ES5: files
  function filesJs() {
    return src(['app/js-expanded/*.js'])
           // .pipe(babel())
           // .pipe(uglify())
           .pipe( dest('app/js') )
           .pipe( browserSync.reload({stream:true}) );
  }
  exports.filesJs = filesJs;

  // ES6 -> ES5: modules
  function modulesJs() {
    return src(['app/modules/**/*.js'])
      // .pipe(babel())
      .pipe( concat({ path: 'modules.js'}) )
      .pipe( dest('app/js') )
      .pipe( browserSync.reload({stream:true}) );
  }

// // watching & live reload
// gulp.task('watch', gulp.parallel(
//   gulp.series('modulesSass', 'filesSass', 'modulesJs', 'filesJs', 'booksPug', 'indexPug', 'browser-sync'),
//   function() {
//     gulp.watch(['app/scss/**/*.+(scss|sass)'], gulp.series('filesSass'));
//     gulp.watch(['app/modules/**/*.scss'], gulp.series('modulesSass'));

//     gulp.watch(['app/js-expanded/*.js'], gulp.series('filesJs'));
//     gulp.watch(['app/modules/**/*.js'], gulp.series('modulesJs'));

//     gulp.watch(['app/index.pug'], gulp.series('indexPug'));
//     gulp.watch(['app/books/*/*.pug', 'app/templates/*.pug', 'app/modules/*/*.pug'], gulp.series('booksPug'));

//     gulp.watch('app/*.html').on('change',  browserSync.reload);
//     gulp.watch('app/books/*/*.html').on('change',  browserSync.reload);
//   }
// ));

// // чищення каталогу dist
// gulp.task('clean', function(done) {
//   return del('dist');
//   done();
// });

// // обробка зображень
// gulp.task('img', function() {
//   return gulp.src('app/img/**/*')
//     // .pipe(cache(imagemin({
//     //   interlaced  : true,
//     //   progressive : true,
//     //   svgoPlugins : [{removeViewBox: false}],
//     //   use         : [pngquant()]
//     // })))
//     .pipe(gulp.dest('dist/img'));
// });

// // очистка кешу
// gulp.task('clear', function () {
//     return cache.clearAll();
// })

// // перенесення файлів з каталогу app в dist
// gulp.task('build', gulp.series(['clean', 'img'], function(done) {

//   // pug -> html
//   gulp.src('app/index.pug').pipe(pug({pretty : false})).pipe(gulp.dest('dist/'));
//   gulp.src('app/books/**/*.pug').pipe(pug({pretty : false})).pipe(gulp.dest('dist/books/'));

//   // fonts
//   gulp.src('app/fonts/**/*').pipe(gulp.dest('dist/fonts'));

//   // js
//   // gulp.src('app/js/**/*').pipe(uglify()).pipe(gulp.dest('dist/js/'));
//   gulp.src('app/js/**/*').pipe(gulp.dest('dist/js/'));

//   // css
//   gulp.src('app/css/**/*').pipe(csso()).pipe(gulp.dest('dist/css/'));

//   // img
//   gulp.src('app/books/**/*.jpg').pipe(gulp.dest('dist/books/'));

//   done();
// }));
/* ↑↑↑ TASKS ↑↑↑ */
////////////////////////////////////////////////////////////////////////////////

//   // watching & live reload
//   function startWatch(){
//     watch(['app/public/index.pug'], convertIndexPug);
//     watch(['app/public/pug/*.pug', 'app/templates/**/*.pug'], convertPug);
//     watch(['app/public/scss/*.scss', 'app/templates/**/*.scss'], convertSCSS);
//     watch(['app/public/libs-js/*.js','app/public/js-expanded/*.js','app/templates/**/*.js'], convertJS );
//     watch(['app/public/index.html', 'app/public/html/*.html']).on('change',  bs.reload);
//   }
//   exports.startWatch = startWatch;

//   exports.default = series(convertSCSS, convertJS, convertPug, convertIndexPug, parallel(startBrowserSync, startWatch));
// /* ↑↑↑ /TASKS (DEVELOPMENT) ↑↑↑ */
// ////////////////////////////////////////////////////////////////////////////////
// /* ↓↓↓ TASKS (PRODUCTION) ↓↓↓ */

//   function convertServerJS() {
//     return src(['app/*/*.js', '!app/socket/**/*'])
//            .pipe( uglify() )
//            .on('error', notify.onError({
//               message : 'Error: <%= error.message %>',
//               title   : 'JS error'
//             }))
//            .pipe( dest('dist/') )
//   }
//   exports.convertServerJS = convertServerJS;

//   function convertAppJS() {
//     return src('app/app.js')
//            .pipe( uglify() )
//            .on('error', notify.onError({
//               message : 'Error: <%= error.message %>',
//               title   : 'JS error'
//             }))
//            .pipe( dest('dist/') )
//   }
//   exports.convertAppJS = convertAppJS;

//   function copyFiles(done) {
//     src('app/config/config.json').pipe( dest('dist/config/') );
//     src('app/bin/**/*').pipe( dest('dist/bin/') );
//     src('app/templates/**/*.pug').pipe( dest('dist/templates/') );
//     src('app/datastorage/**/*').pipe( dest('dist/datastorage/') );
//     src('app/socket/**/*').pipe( dest('dist/socket/') );

//     src('app/public/css/main.css').pipe( csso() ).pipe( dest('dist/public/css/') );
//     src('app/public/fonts/**/*').pipe( dest('dist/public/fonts/') );
//     src('app/public/html/**/*').pipe( dest('dist/public/html/') );
//     src('app/public/*.html').pipe( dest('dist/public/') );
//     src('app/public/img/**/*').pipe( dest('dist/public/img/') );
//     src('app/public/js/main.js').pipe( dest('dist/public/js/') );

//     done()
//   }
//   exports.copyFiles = copyFiles;

//   // чищення каталогу dist
//   function clean(done) {
//     return del('dist');
//     done();
//   }
//   exports.clean = clean;

//   exports.build = series(clean, convertServerJS, convertAppJS, copyFiles);
// /* ↑↑↑ /TASKS (PRODUCTION) ↑↑↑ */