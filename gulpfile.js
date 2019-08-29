var gulp = require("gulp");
var tsc = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
//var nodeDebug = require("gulp-node-debug");
var tsProject = tsc.createProject('tsconfig.json', { sortOutput: true });
gulp.task('compile-ts', function () {
    var tsResult = tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));
    tsResult.dts.pipe(gulp.dest("./"));
    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("./"));
});
gulp.task('live-reload', function () {
    gulp.src(["**/*.js", "!node_modules/**/*.*"])
        .pipe(livereload());
});
gulp.task("watch", function () {
    gulp.watch("./**/*.ts", ["compile-ts", "live-reload"]);
});
// Task
gulp.task('default', ["nodemon", "watch"]);
//# sourceMappingURL=gulpfile.js.map

//# sourceMappingURL=gulpfile.js.map
