<template>
  <q-dialog class="custom-alert" v-model="dialog">
    <q-card class="share-box">
      <q-card-section class="pop-head">
        <h1 class="share-tit">공유</h1>
        <button class="btn-close q-icon-close size-20 cursor-pointer" v-close-popup><span class="blind">닫기</span></button>
      </q-card-section>
      <q-card-section class="pop-body">
        공유 내용이 들어올 예정입니다.<br/>
        공유 내용이 들어올 예정입니다.<br/>
        공유 내용이 들어올 예정입니다.<br/>
        공유 내용이 들어올 예정입니다.<br/>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>


<script setup>
import { ref } from 'vue'
const dialog = ref(false)
</script>
