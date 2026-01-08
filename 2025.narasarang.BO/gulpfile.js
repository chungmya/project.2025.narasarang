'use strict';

/**
 * Gulp Setting
 * --------------------------------------
 */

// Gulp 및 플러그인 모듈
const gulp = require('gulp');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('sass'); // Dart Sass 사용
const gulpSass = require('gulp-sass')(sass); // gulp-sass와 연결
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create(); // Create 인스턴스

/**
 * CONFIG
 * --------------------------------------
 */

const BASE_ROOT = './01.FRONT';
const BASE_ROOT2 = './01.ADMIN';
const BASE_DIR = `${BASE_ROOT}/worklist`;
const BASE_DIR2 = `${BASE_ROOT2}/webapp/html/_ui_guide`;
const CONFIG = {
	WORKLIST: {
		SASS: {
			SRC: './worklist_src/worklist/resources/scss/**/*.scss',
			DEST1: `${BASE_DIR}/resources`,
			DEST2: `${BASE_DIR2}/resources`,
			OPTION: { outputStyle: 'compressed' },
		},
		SCRIPT: {
			SRC: [
				'./worklist_src/worklist/resources/plugins/jquery-1.12.0.min.js',
				'./worklist_src/worklist/resources/plugins/jquery.colorbox.js',
				'./worklist_src/worklist/resources/plugins/jquery.quicksearch.js',
				'./worklist_src/worklist/resources/js/worklist.js'// worklist
			],
			DEST1: `${BASE_DIR}/resources`,
			DEST2: `${BASE_DIR2}/resources`,
			DEST_FILE_NAME: 'worklist.min.js',
		},
		SERVER: {
			port: 3900,
			server: { baseDir: './' },
			browser: ['Chrome'], // Windows OS
		},
	},
};

/**
 * Gulp Tasks
 * --------------------------------------
 */

// SCSS 컴파일 (WORKLIST)
gulp.task('SCSS:WORKLIST', () => {
	return gulp.src(CONFIG.WORKLIST.SASS.SRC)
		.pipe(rename({ suffix: '.min' }))
		.pipe(sourcemaps.init())
		.pipe(gulpSass(CONFIG.WORKLIST.SASS.OPTION).on('error', gulpSass.logError))
		.pipe(postcss([autoprefixer()]))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(CONFIG.WORKLIST.SASS.DEST1))
		.pipe(gulp.dest(CONFIG.WORKLIST.SASS.DEST2));
});

// JS 병합 및 압축 (WORKLIST)
gulp.task('SCRIPT:WORKLIST', () => {
	return gulp.src(CONFIG.WORKLIST.SCRIPT.SRC)
		.pipe(concat(CONFIG.WORKLIST.SCRIPT.DEST_FILE_NAME))
		.pipe(uglify())
		.pipe(gulp.dest(CONFIG.WORKLIST.SCRIPT.DEST1))
		.pipe(gulp.dest(CONFIG.WORKLIST.SCRIPT.DEST2));
});

// SERVER 설정 (WORKLIST)
gulp.task('SERVER:WORKLIST', () => {
	browserSync.init(CONFIG.WORKLIST.SERVER);
	gulp.watch(CONFIG.WORKLIST.SASS.SRC, gulp.series('SCSS:WORKLIST')).on('change', browserSync.reload);
	gulp.watch(CONFIG.WORKLIST.SCRIPT.SRC, gulp.series('SCRIPT:WORKLIST')).on('change', browserSync.reload);
});

// WORKLIST 작업
gulp.task('worklist', gulp.series('SCSS:WORKLIST', 'SCRIPT:WORKLIST', 'SERVER:WORKLIST'));

