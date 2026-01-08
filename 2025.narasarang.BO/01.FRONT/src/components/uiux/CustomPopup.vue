<template>
  <q-dialog class="custom-popup" v-model="popup" :transition-show="$q.screen.lt.md ? 'slide-up' : null" :transition-hide="$q.screen.lt.md ? 'slide-down' : null" @show="trapFocus" @hide="releaseFocus">
    <q-card class="popup-box" :style="props.cdstyle" aria-label="다이얼로그">
      <q-card-section class="pop-head" v-if="$slots.header">
        <slot name="header">타이틀 내용</slot>
      </q-card-section>
      <q-card-section class="pop-body overflow-auto" :tabindex="needsTabindex ? 0 : -1" aria-label="다이얼로그 본문 내용">
        <slot name="body">기본 내용</slot>
      </q-card-section>
      <q-card-actions class="pop-foot" v-if="$slots.footer">
        <slot name="footer">기본 푸터 내용</slot>
      </q-card-actions>

      <!-- 닫기 버튼 -->
      <button ref="closeButton" class="btn-close q-icon-close size-28 cursor-pointer" v-close-popup>
        <span class="blind">닫기</span>
      </button>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const popup = ref(false);
const closeButton = ref(null);
const needsTabindex = ref(false); // tabindex를 동적으로 설정하기 위한 상태 변수

const props = defineProps({
  cdstyle: {
    type: String,
    default: '',
  },
});

// 포커스 가능 요소인지 확인하는 함수
const isFocusable = (el) => {
  const style = window.getComputedStyle(el);
  return (
    el.tabIndex >= 0 &&
    !el.hasAttribute('disabled') &&
    !el.classList.contains('disabled') &&
    style.display !== 'none' &&
    style.visibility !== 'hidden'
  );
};

// 스크롤 여부와 내부 포커스 가능 요소를 확인하는 함수
const checkTabindexCondition = () => {
  const popupBody = document.querySelector('.pop-body');
  if (popupBody) {
    // 스크롤 여부 확인
    const hasScrollableContent = popupBody.scrollHeight > popupBody.clientHeight;

    // 내부 포커스 가능 요소 검색
    const bodyFocusableElements = Array.from(
      popupBody.querySelectorAll(
        '[tabindex], a[href], button, input, select, textarea, .q-btn, .q-checkbox input'
      )
    ).filter((el) => isFocusable(el));

    // 조건: 스크롤이 있고 내부에 포커스 가능 요소가 없어야 tabindex="0"
    needsTabindex.value = hasScrollableContent && bodyFocusableElements.length === 0;
  }
};

const trapFocus = async () => {
  await nextTick();
  checkTabindexCondition();

  const dialogInner = document.querySelector('.q-dialog__inner');
  if (dialogInner) {
    dialogInner.setAttribute('tabindex', '-1'); // 외부 요소 포커스 방지
  }

  const popupBody = document.querySelector('.pop-body');
  if (popupBody) {
    popupBody.scrollTop = 0; // 스크롤 상단 고정
    popupBody.focus(); // .pop-body에 포커스
  }

  document.addEventListener('keydown', handleTab);
};

const releaseFocus = () => {
  document.removeEventListener('keydown', handleTab);
  const popupBox = document.querySelector('.popup-box');
  if (popupBox) {
    popupBox.removeAttribute('tabindex'); // 다음 호출을 위해 초기화
  }
};

const handleTab = (event) => {
  const focusableElements = document.querySelectorAll(
    '.custom-popup [tabindex]:not([tabindex="-1"]), .custom-popup a[href], .custom-popup button, .custom-popup input, .custom-popup select, .custom-popup textarea'
  );

  if (focusableElements.length === 0) return;

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.key === 'Tab') {
    if (focusableElements.length === 1) {
      event.preventDefault();
      firstElement.focus();
    } else if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  }
};

// 창 크기 변경 시 tabindex 조건 재확인
onMounted(() => {
  window.addEventListener('resize', checkTabindexCondition);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkTabindexCondition);
});
</script>