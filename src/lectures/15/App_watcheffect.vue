<template>
  <div>
    <form action="" @submit.prevent="save(title, contents)">
      <input v-model.lazy="title" type="text">
      <textarea v-model="contents"></textarea>
      <hr>
      <button>저장</button>
    </form>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
  setup() {
    const title = ref('');
    const contents = ref('');

    const save = (title, contents) => {
      console.log(`저장: ${title}, ${contents}`);
    };

    watchEffect(() => {
      console.log('watcheffect');
      console.log(title.value);
      console.log(contents.value);
      save(title.value, contents.value);
    })


    return {
      title,
      contents,
    }
  }
}
</script>

<style lang="scss" scoped></style>