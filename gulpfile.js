// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
//const sass = require("gulp-sass");
const sass = require('gulp-sass')(require('sass'));
// style.scssの監視タスクを作成する
gulp.task('default', function () {
    // ★ style.scssファイルを監視
    return gulp.watch('8-2/sass/style.scss', function () {
        // style.scssの更新があった場合の処理

        // style.scssファイルを取得
        return gulp.src('8-2/sass/style.scss')
        // Sassのコンパイルを実⾏
        .pipe(sass({
            outputStyle: 'expanded'
        })
        // Sassのコンパイルエラーを表⽰
        // (これがないと⾃動的に⽌まってしまう)
        .on('error', sass.logError))
        // cssフォルダー以下に保存
        .pipe(gulp.dest('8-2/css'));
    });
});
