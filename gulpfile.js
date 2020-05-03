//WCAG AUTOMATION
/*this file takes your static or precompiled sources and adds to them automatically*/
/*Gulp is old, but it works, why overcomplicate it*/
/*to use it, at the command line you will first type: npm install to get all the dependencies*/
/*instructions are above the individual tasks*/
var gulp = require("gulp");
var cheerio = require('gulp-cheerio') //use jquery in gulp
var gutil = require('gulp-util'); //utilities


gulp.task("default", async function () {
  gutil.log(gutil.colors.bgGreen.white.bold('GULP WORKS'), gutil.colors.bgRed.white.bold("type: \"gulp --tasks\" to list all tasks"));
});


//to run, type: gulp IMG-FIX
gulp.task('IMG-FIX', async function () {
  gulp.src('src/html/*.html') //DUDE, CHANGE ME TO YOUR SOURCE
    .pipe(cheerio(function ($, file) {
      $("img:not([alt])").attr("alt", "my new alt"); //this adds a blank alt tag to images without an alt
	  $("img([alt=''])").attr("alt", "my new alt"); //this adds a value to an image alt without one
    }))
    .pipe(gulp.dest('./prod/html/')); //DUDE, CHANGE ME TO YOUR DESTINATION
});


//to run, type: gulp IFRAME-FIX
gulp.task('IFRAME-FIX', async function () {
  gulp.src('src/html/*.html') //DUDE, CHANGE ME TO YOUR SOURCE
    .pipe(cheerio(function ($, file) {
      $('iframe:not([title])').attr({ title: 'your iframe title' }); //this adds a title to an iframe without one
	  $('iframe([title=""])').attr({ title: 'your iframe title' }); //this adds a value to an iframe title without one
    }))
    .pipe(gulp.dest('./prod/html/')); //DUDE, CHANGE ME TO YOUR DESTINATION
});
