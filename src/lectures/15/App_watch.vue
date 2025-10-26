<template>
  <div>

  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  setup() {
    const msg = ref('');

    watch(msg, (newValue, oldValue) => {
      console.log(newValue);
      console.log(oldValue);
    })

    return {
      msg,
    }
  }
}
</script>

<style lang="scss" scoped></style>