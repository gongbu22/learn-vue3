<template>
  <div>
    <p>{{ msg }}</p>
    <p>{{ remsg }}</p>
  </div>
</template>

<script>
import { mergeAlias } from 'vite';
import { ref, watch } from 'vue';

export default {
  setup() {
    const msg = ref('hello');
    const remsg = ref('');

    watch(msg, (newv) => {
      remsg.value = newv.split('').reverse().join('');
    },
      {
        immediate: true,
      });

    return {
      msg,
      remsg,
    }
  }
}
</script>

<style lang="scss" scoped></style>