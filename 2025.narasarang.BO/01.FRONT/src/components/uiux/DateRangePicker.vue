<template>
  <q-input class="custom-input col dtpk" label="시작날짜" v-model="date1" mask="####-##-##" hide-bottom-space @blur="checkFromDate">
    <template v-slot:append>
      <button type="button" class="q-icon-calendar size-20 cursor-pointer" aria-label="달력선택">
        <q-popup-proxy ref="datePicker" cover transition-show="scale" transition-hide="scale">
          <q-date v-model="date1" :locale="koLocale" @update:model-value="checkSelected" mask="YYYY-MM-DD">
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="닫기" color="primary" flat />
            </div>
          </q-date>
        </q-popup-proxy>
      </button>
    </template>
  </q-input>
  <div class="dd-item dtpk">~</div>
  <q-input class="custom-input col dtpk" label="종료날짜" v-model="date2" mask="####-##-##" hide-bottom-space @blur="checkToDate">
    <template v-slot:append>
      <button type="button" class="q-icon-calendar size-20 cursor-pointer" aria-label="달력선택">
        <q-popup-proxy ref="datePicker1" cover transition-show="scale" transition-hide="scale">
          <q-date v-model="date2" :locale="koLocale" @update:model-value="checkSelected1" :options="optionFn" mask="YYYY-MM-DD">
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="닫기" color="primary" flat />
            </div>
          </q-date>
        </q-popup-proxy>
      </button>
    </template>
  </q-input>

</template>

<script setup>
import { ref } from 'vue'

const koLocale = {
  days: ['일', '월', '화', '수', '목', '금', '토'],
  daysShort: ['일', '월', '화', '수', '목', '금', '토'],
  months: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthsShort: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
}
const model = defineModel()

let datePicker = ref('')
let datePicker1 = ref('')

console.log(model)

let date1 = ref(model.value[0])
let date2 = ref(model.value[1])

const checkSelected = (_, reason) => {
  model.value[0] = date1.value
  if (reason === 'add-day') {
    datePicker.value.hide()
  }
}

const checkSelected1 = (_, reason) => {
  model.value[1] = date2.value
  if (reason === 'add-day') {
    datePicker1.value.hide()
  }
}

const optionFn = (date) => {
  return date1.value.replaceAll('-', '') <= date.replaceAll('/', '')
}
const checkFromDate = () => {
  if (date1.value > date2.value) date2.value = date1.value
}
const checkToDate = () => {
  if (date1.value > date2.value) date2.value = date1.value
}
</script>
<style lang="scss" scoped></style>
