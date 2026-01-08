'use strict';

/**
 * Gulp Setting
 * --------------------------------------
 */

// Gulp 및 플러그인 모듈
import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import * as sass from 'sass'; // Dart Sass 사용
import gulpSass from 'gulp-sass'; // gulp-sass와 연결
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browserSync from 'browser-sync'; // Create 인스턴스

// Sass 컴파일러 설정 (경고 숨기기)
const sassCompiler = gulpSass(sass);

// 환경 변수 설정으로 deprecation 경고 숨기기
process.env.SASS_SILENCE_DEPRECATIONS = '*';

/**
 * CONFIG
 * --------------------------------------
 */

const BASE_DIR = './webapp';
const CONFIG = {
	PC: {
		SASS: {
			SRC: `${BASE_DIR}/assets/scss/**/*.scss`,
			DEST1: `${BASE_DIR}/assets/css`,
			OPTION: { 
				outputStyle: 'expanded',
				verbose: false,        // 자세한 출력 비활성화
				quietDeps: true,       // 의존성 경고 숨기기
				charset: false,        // charset 경고 숨기기
				silence: true,         // 모든 경고 숨기기
				// 특정 deprecation 경고만 숨기기
				silenceDeprecations: ['import', 'global-builtin', 'color-functions']
			},
		},
		SERVER: {
			port: 1006,
			server: { baseDir: './webapp/' },
			browser: ['Chrome'], // Windows OS
		},
	},
};

/**
 * Gulp Tasks
 * --------------------------------------
 */

// SCSS 컴파일 (PC)
gulp.task('SCSS:COMMON', () => {
	// 콘솔 warn 메서드를 임시로 비활성화
	const originalWarn = console.warn;
	console.warn = function(message) {
		if (message && message.includes && message.includes('Deprecation Warning')) {
			return; // deprecation 경고는 무시
		}
		originalWarn.apply(console, arguments);
	};

	return gulp
		.src(CONFIG.PC.SASS.SRC)
		.pipe(sourcemaps.init())
		.pipe(sassCompiler(CONFIG.PC.SASS.OPTION)
			.on('error', function(err) {
				// deprecation 경고가 아닌 실제 에러만 출력
				if (!err.message.includes('Deprecation Warning')) {
					sassCompiler.logError.call(this, err);
				}
			})
		)
		.pipe(postcss([autoprefixer()]))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(CONFIG.PC.SASS.DEST1))
		.on('end', function() {
			// 작업 완료 후 원래 warn 메서드 복원
			console.warn = originalWarn;
		});
});

// SERVER 설정 (PC)
gulp.task('SERVER:PC', () => {
	const bs = browserSync.create();
	bs.init(CONFIG.PC.SERVER);
	gulp.watch(CONFIG.PC.SASS.SRC, gulp.series('SCSS:COMMON')).on('change', bs.reload);
});

// PC 프로젝트 작업
gulp.task('default', gulp.series('SCSS:COMMON', 'SERVER:PC'));
