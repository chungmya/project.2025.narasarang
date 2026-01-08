document.addEventListener('DOMContentLoaded', () => {
	handleAccordionMenu();
	handleGnbMenu();
	handleTabMenu();
	handleSubTabMenu();
});

// 아코디언 메뉴 (좌측 메뉴)
// 아코디언 메뉴 초기화 함수
function handleAccordionMenu() {
	const menuItems = document.querySelectorAll('.side-dep2 > li > a');

	// 초기: 모든 하위 메뉴 숨김
	document.querySelectorAll('.side-dep3').forEach(sub => {
		sub.style.display = 'none';
	});

	menuItems.forEach(menu => {
		menu.addEventListener('click', e => {
			e.preventDefault();

			const li = menu.parentElement;
			const subMenu = li.querySelector('.side-dep3');
			const isActive = li.classList.contains('active');

			// 모든 메뉴 초기화
			document.querySelectorAll('.side-dep2 > li').forEach(otherLi => {
				otherLi.classList.remove('active');
				const otherA = otherLi.querySelector('a');
				if (otherA) {
					otherA.classList.remove('active');
				}

				const otherSub = otherLi.querySelector('.side-dep3');
				if (otherSub) {
					otherSub.style.display = 'none';
				}
			});

			// 현재 메뉴만 활성화
			if (!isActive) {
				li.classList.add('active');
				menu.classList.add('active');
				if (subMenu) {
					subMenu.style.display = 'block';
				}
			}
		});
	});
}

// GNB 상단 메뉴
function handleGnbMenu() {
	const gnbLink = document.querySelectorAll('.gnb > li > a');

	gnbLink.forEach(link => {
		link.addEventListener('click', function (e) {
			e.preventDefault();

			if (this.classList.contains('active')) {
				return;
			}

			document.querySelectorAll('.gnb > li > a').forEach(item => {
				item.classList.remove('active');
			});
			this.classList.add('active');
		});
	});
}

// 탭 메뉴
function handleTabMenu() {
	const tabButtons = document.querySelectorAll('.tab-menu button');
	const tabContents = document.querySelectorAll('.tab-contents');

	tabButtons.forEach(btn => {
		btn.addEventListener('click', function (e) {
			e.preventDefault();

			// 탭 버튼 및 li 초기화
			tabButtons.forEach(btn => {
				btn.classList.remove('current');
				btn.parentElement.classList.remove('current');
			});

			// 콘텐츠 숨기기
			tabContents.forEach(content => {
				content.classList.remove('display-block');
			});

			// 현재 탭 활성화
			this.classList.add('current');
			this.parentElement.classList.add('current');

			const targetId = this.getAttribute('data-tab');
			tabContents.forEach(content => {
				content.classList.toggle('display-block', content.id === targetId);
			});
		});
	});
}

function handleSubTabMenu() {
	const tabButtons = document.querySelectorAll('.sub-tab button');
	const tabContents = document.querySelectorAll('.sub-tab-contents');

	tabButtons.forEach(btn => {
		btn.addEventListener('click', function (e) {
			e.preventDefault();

			// 탭 버튼 및 li 초기화
			tabButtons.forEach(btn => {
				btn.classList.remove('current');
				btn.parentElement.classList.remove('current');
			});

			// 콘텐츠 숨기기
			tabContents.forEach(content => {
				content.classList.remove('display-block');
			});

			// 현재 탭 활성화
			this.classList.add('current');
			this.parentElement.classList.add('current');

			const targetId = this.getAttribute('data-tab');
			tabContents.forEach(content => {
				content.classList.toggle('display-block', content.id === targetId);
			});
		});
	});
}
