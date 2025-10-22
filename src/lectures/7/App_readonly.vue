<template>
  <div>

  </div>
</template>

<script>
import { reactive, readonly } from 'vue';

export default {
  setup () {
    const original = reactive({
      count: 0,
    });
    const copy = readonly(original);
    original.count++;
    copy.count++;
    console.log(original.count);
    console.log(copy.count);

    // readonly() 는 그 객체를 직접 수정하는 행위만 막고
    // 원본의 변화까지 차단하지는 않음

    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>