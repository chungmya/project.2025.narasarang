document.addEventListener('DOMContentLoaded', () => {
	handleAccordionMenu();
	handleGnbMenu();
	handleTabMenu();
	handleSubTabMenu();
});
// document.addEventListener('DOMContentLoaded', function () {
// 	UI.init();
// });

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

//dropDown
const dropdown = {
	classes: {
		dropdown: '.dropdown',
		defaultBtn: '.dropdown-default',
		body: '.dropdown-body',
		item: '.dropdown-item',
		open: '.open',
		selected: 'selected',
		selectStyle: 'select-style',
	},
	init() {
		const dropdowns = document.querySelectorAll(this.classses.dropdown);
		if (dropdowns.length > 0) {
			this.handler();
		}
	},

	handler() {
		const dropdowns = document.querySelectorAll(this.classses.dropdown);

		//드롭다운 클릭 이벤트 바인딩
		dropdowns.forEach(dropdown => {
			const defaultBtn = dropdown.querySelector(this.classses.defaultBtn);
			const body = dropdown.querySelector(this.classses.body);

			if (!defaultBtn || !body) {
				return;
			}

			defaultBtn.addEventListener('click', e => {
				e.stopPropagation();
				this.toggle(dropdown, dropdowns);
			});

			// select-style: 아이템 선택 이벤트 추가
			if (dropdown.classList.contains(this.classes.selectStyle)) {
				this.initSelectDropdown(dropdown);
				this.bindSelectEvents(dropdown);
			}
		});

		//영역 외 클릭시 드롭다운 닫기
		document.addEventListener('click', e => {
			if (!e.target.closet(this.classes.dropdown)) {
				this.closeAll(dropdown);
			}
		});
	},
	initSelectDropdown(dropdown) {
		const items = dropdown.querySelectorAll(this.classes.item);
		const defaultBtn = dropdown.querySelector(this.classes.defaultBtn);

		if (!defaultBtn || items.length === 0) {
			return;
		}

		// .selected 클래스를 가진 아이템 찾기
		let selectedItem = dropdown.querySelector(this.classes.item + '.' + this.classes.selected);

		// .selected가 없다면 첫 번째 아이템을 선택
		if (!selectedItem) {
			selectedItem = items[0];
			selectedItem.classList.add(this.classes.selected);
		}

		// 선택된 아이템의 텍스트를 버튼에 설정
		const selectedText = selectedItem.querySelector('span').textContent;
		defaultBtn.querySelector('span').textContent = selectedText;
	},
	bindSelectEvents(dropdown) {
		const items = dropdown.querySelectorAll(this.classes.item);
		const defaultBtn = dropdown.querySelector(this.classes.btn);

		items.forEach(item => {
			item.addEventListener('click', e => {
				e.preventDefault();
				e.stopPropagation();

				// 모든 아이템에서 selected 클래스 제거
				items.forEach(otherItem => {
					otherItem.classList.remove(this.classes.selected);
				});

				// 클릭된 아이템에 selected 클래스 추가
				item.classList.add(this.classes.selected);

				// 선택된 텍스트를 버튼에 반영
				const selectedText = item.querySelector('span').textContent;
				defaultBtn.querySelector('span').textContent = selectedText;

				// 드롭다운 닫기
				this.close(dropdown);
			});
		});
	},
	toggle(currentDropdown, allDropdowns) {
		const defaultBtn = currentDropdown.querySelector(this.classes.defaultBtn);
		const body = currentDropdown.querySelector(this.classes.body);
		const isCurrentlyOpen = defaultBtn.getAttribute('aria-expanded') === 'true';

		// 다른 모든 드롭다운 닫기
		allDropdowns.forEach(dropdown => {
			if (dropdown !== currentDropdown) {
				this.close(dropdown);
			}
		});

		// 현재 드롭다운 토글
		if (isCurrentlyOpen) {
			this.close(currentDropdown);
		} else {
			this.open(currentDropdown);
		}
	},
	open(dropdown) {
		const defaultBtn = dropdown.querySelector(this.classes.defaultBtn);
		defaultBtn.setAttribute('aria-expanded', 'true');
		dropdown.classList.add(this.classes.open);

		// 드롭다운 위치 조정
		this.setPosition(dropdown);
	},
	setPosition(dropdown) {
		const body = dropdown.querySelector(this.classes.body);
		if (!body) {
			return;
		}

		// 기존 위치 클래스 제거
		dropdown.classList.remove('dropdown-top', 'dropdown-bottom');

		// 드롭다운 body의 위치 정보 가져오기
		const bodyRect = body.getBoundingClientRect();
		const windowHeight = window.innerHeight;
		//const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		// 드롭다운이 화면 아래로 벗어나는지 확인
		const isOverflowBottom = bodyRect.bottom > windowHeight;

		// 드롭다운을 위쪽으로 열 공간이 있는지 확인
		const dropdownRect = dropdown.getBoundingClientRect();
		const hasSpaceAbove = dropdownRect.top > bodyRect.height;

		// 아래로 벗어나고 위쪽에 공간이 있으면 위쪽으로 열기
		if (isOverflowBottom && hasSpaceAbove) {
			dropdown.classList.add('dropdown-top');
		} else {
			dropdown.classList.add('dropdown-bottom');
		}
	},
	close(dropdown) {
		const defaultBtn = dropdown.querySelector(this.classes.defaultBtn);
		defaultBtn.setAttribute('aria-expanded', 'false');
		dropdown.classList.remove(this.classes.open);
	},
	closeAll(dropdowns) {
		dropdowns.forEach(dropdown => this.close(dropdown));
	},
};
