<template>
  <div>
    <h2>보간법</h2>
    <p>{{ message }}</p>
    <p v-once>{{ message }}</p>
    <button v-on:click="message = message + '!!'">click!</button>
    <hr>
    <h2>HTML</h2>
    <p>{{ rawHtml }}</p>
    <p v-html="rawHtml"></p>
    <h2>속성 바인딩</h2>
    <div v-bind:title="dynamicTitle">마우스를 올려보세요.</div>
    <input type="text" value="홍길동" v-bind:disabled="isInputDisabled">
    <input v-bind="attrs">
    <h2>Javascript</h2>
    {{ message.split('').reverse().join('') }} <br>
    {{ isInputDisabled ? "yes" : "no" }}

  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    const message = ref('안녕하세요');
    const rawHtml = ref('<strong>안녕안녕</strong>');

    const dynamicTitle = ref('헬로:)');
    const isInputDisabled = ref(false);
    const attrs = ref({
      type: 'text',
      value: '123455667',
      disabled: true
    })

    return {
      message,
      rawHtml,
      dynamicTitle,
      isInputDisabled,
      attrs,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>