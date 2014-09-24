
// *    Gulpfile
// * ---------------------
// * This file contains the gulp build-process.
// * ---------------------

// *   Core
// * ---------------------

// * Require gulp modules

var gulp   = require("gulp"),
    rename = require("gulp-rename"),
    prefix = require("gulp-autoprefixer"),
    sass   = require("gulp-ruby-sass");

// * scss
// * 1. handle errors
// * 2. sass
// * 3. prefix
// * --> write out
// * 4. minify
// * --> write out
// * ---------------------

gulp.task("sass", function () {
  gulp.src("scss/fundament-buttons.scss")
    .pipe(sass())
    .pipe(prefix("last 1 version", "Explorer >=10"))
    .pipe(rename("fundament-buttons.css"))
    .pipe(gulp.dest("./dist"));
});


// * Tasks
// * ---------------------

// * Default task

gulp.task("default", ["sass"]);
