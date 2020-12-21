import gulp from "gulp";
// JavaScript
import babel from "gulp-babel";
import terser from "gulp-terser";
import concat from "gulp-concat";

// HTML
import htmlmin from "gulp-htmlmin";

// CSS

import postcss from "gulp-postcss";
import cssnano from "cssnano";
import autoprefixer from "autoprefixer";
import clean from "gulp-purgecss";

//Sass
import sass from "gulp-sass";

// Variables/constantes
const cssPlugins = [cssnano(), autoprefixer()];

gulp.task("clean", () => {
  return gulp
    .src("./public/css/styles-min.scss")
    .pipe(
      clean({
        content: ["./public/*.html"],
      })
    )
    .pipe(gulp.dest("./public/css"));
});

gulp.task("sass", () => {
  return gulp.src("./src/scss/styles.scss").pipe(
    sass({
      outputStyle: "compressed",
    }).pipe(gulp.dest("./public/css"))
  );
});

gulp.task("styles", () => {
  return gulp
    .src("./src/css/*.css")
    .pipe(concat("styles-min.css"))
    .pipe(postcss(cssPlugins))
    .pipe(gulp.dest("./public/css"));
});

gulp.task("html-min", () => {
  return gulp
    .src("./src/*.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
      })
    )
    .pipe(gulp.dest("./public"));
});

gulp.task("babel", () => {
  return gulp
    .src("./src/js/*.js")
    .pipe(concat("scripts-min.js"))
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(terser())
    .pipe(gulp.dest("./public/js/"));
});

gulp.task("default", () => {
  gulp.watch("./src/js/*.js", gulp.series("babel"));
  gulp.watch("./src/*.html", gulp.series("html-min"));
  gulp.watch("./src/css/*.css", gulp.series("styles"));
});
