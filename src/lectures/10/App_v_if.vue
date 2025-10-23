<template>
  <div>
    <h2 v-if="visible">hello</h2>
    <h2 v-else>false</h2>
    <button v-on:click="visible = !visible">toggle</button>
    <hr>
    <button v-on:click="type = 'A'">A toggle</button>
    <button v-on:click="type = 'B'">B toggle</button>
    <button v-on:click="type = 'C'">C toggle</button>
    <button v-on:click="type = 'D'">D toggle</button>
    <h2 v-if="type === 'A'">A</h2>
    <h2 v-else-if="type === 'B'">B</h2>
    <h2 v-else-if="type === 'C'">C</h2>
    <h2 v-else>A, B, C 아님</h2>
    <hr>
    <template v-if="visible">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>
    <hr>
    <h1 v-show="ok">title hello</h1>
    <button v-on:click="ok = !ok">show toggle</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const visible = ref(true);
    const type = ref('A');
    const ok = ref(true);

    return {
      visible,
      type,
      ok,
    }
  }
}
</script>

<style lang="scss" scoped></style>