var gulp         = require('gulp');

var yaml         = require('yamljs');
var path         = require('path');


var connect           = require('gulp-connect');

var argv              = process.argv.pop();
var DEBUGGER          = (argv === "-D" || argv === "-d") ? true : false;

var env               = DEBUGGER ? ".dev" : "";
var config            = yaml.load(path.join(process.cwd(), "etc/config"+ env +".yaml")).config;
var port              = config.port;

gulp.task("connect",function(){
  connect.server({
    root: './',
    port : "3000",
    host: "localhost"
  });
});





gulp.task('default', ['connect']);