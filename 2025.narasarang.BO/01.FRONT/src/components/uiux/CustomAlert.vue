<template>
  <q-dialog class="custom-alert" v-model="dialog" @show="trapFocus" @hide="releaseFocus">
    <q-card class="alert-box" :style="props.cdstyle" aria-label="다이얼로그">
      <q-card-section>
        <slot name="body">기본 내용</slot>
      </q-card-section>
      <q-card-actions v-if="$slots.footer">
        <slot name="footer">기본 푸터 내용</slot>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

const dialog = ref(false);

const props = defineProps({
  cdstyle: {
    type: String,
    default: '',
  },
});

// 포커스 가능 요소 확인 함수
const isFocusable = (el) => {
  const style = window.getComputedStyle(el);
  return (
    el.tabIndex >= 0 && // tabindex가 -1이 아닌 경우만
    !el.hasAttribute('disabled') && // disabled 속성 없음
    !el.classList.contains('disabled') && // Quasar의 disabled 클래스 없음
    style.display !== 'none' && // display: none이 아님
    style.visibility !== 'hidden' // visibility: hidden이 아님
  );
};

const trapFocus = async () => {
  await nextTick(); // DOM 렌더링 대기

  const alertBox = document.querySelector('.alert-box');
  if (alertBox) {
    alertBox.focus(); // .alert-box에 초기 포커스
    alertBox.setAttribute('tabindex', '-1'); // 이후 포커스 순환에서 제외
  }

  document.addEventListener('keydown', handleKeydown);
};

const releaseFocus = () => {
  document.removeEventListener('keydown', handleKeydown);
  const alertBox = document.querySelector('.alert-box');
  if (alertBox) {
    alertBox.removeAttribute('tabindex'); // 다음 호출을 위해 초기화
  }
};

const handleKeydown = (event) => {
  // 팝업 내부의 모든 잠재적 포커스 가능 요소 검색
  const allElements = document.querySelectorAll(
    '.custom-alert [tabindex], .custom-alert a[href], .custom-alert button, .custom-alert input, .custom-alert select, .custom-alert textarea, .custom-alert .q-btn, .custom-alert .q-checkbox input'
  );

  // 포커스 가능 요소만 필터링 (.alert-box 제외)
  const focusableElements = Array.from(allElements)
    .filter(el => isFocusable(el))
    .filter(el => !el.classList.contains('alert-box'));

  if (focusableElements.length === 0) return;

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.key === 'Tab') {
    event.preventDefault();

    if (event.shiftKey) {
      // Shift + Tab: 뒤에서 앞으로 이동
      if (document.activeElement === firstElement || !focusableElements.includes(document.activeElement)) {
        lastElement.focus();
      } else {
        const currentIndex = focusableElements.indexOf(document.activeElement);
        if (currentIndex > 0) {
          focusableElements[currentIndex - 1].focus();
        } else {
          lastElement.focus();
        }
      }
    } else {
      // Tab: 앞으로 이동
      if (document.activeElement === lastElement || !focusableElements.includes(document.activeElement)) {
        firstElement.focus();
      } else {
        const currentIndex = focusableElements.indexOf(document.activeElement);
        if (currentIndex < focusableElements.length - 1 && currentIndex >= 0) {
          focusableElements[currentIndex + 1].focus();
        } else {
          firstElement.focus();
        }
      }
    }
  }
};

onMounted(() => {
  // 초기 설정이 필요하다면 여기에 추가
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
});
</script>