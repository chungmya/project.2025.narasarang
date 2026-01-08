/*!
 * [나라사랑포털 관리자] ui.common.js
 * --------------------------------------
 * Start: 2025/07/07
 * Modify: 2025/07/10 - guide_ia.html의 자바스크립트 통합
 */

document.addEventListener('DOMContentLoaded', function () {
	'use strict';

	UI.init();
});

const UI = (function () {
	const init = function () {
		console.log('UI.init() called');
	};

	return {
		init: init,
	};
})();
