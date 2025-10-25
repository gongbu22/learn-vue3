<template>
  <div>
    <h2>input value</h2>
    <!-- <input type="text" v-model.lazy="inputValue"> -->
    <input type="text" v-model.trim="inputValue">
    <div>{{ inputValue }}</div>
    <div>{{ typeof inputValue }}</div>

    <h2>textarea value</h2>
    <!-- <textarea :value="textValue" @input="event => textValue = event.target.value"></textarea> -->
    <textarea v-model="textValue"></textarea>
    <div>{{ textValue }}</div>

    <h2>checkbox value</h2>

    <div>
      <label>
        <input type="checkbox" v-model="checkboxValues" value="html" />
        HTML
      </label>
      <label>
        <input type="checkbox" v-model="checkboxValues" value="css" />
        CSS
      </label>
      <label>
        <input type="checkbox" v-model="checkboxValues" value="javascript" />
        JavaScript
      </label>
      <p>
        {{ checkboxValues }}
      </p>
    </div>

    <label for="checkbox">{{ checkboxValue }}</label>
    <!-- <input type="checkbox" id="checkbox" :checked="checkboxValue"
      @change="event => (checkboxValue = event.target.checked)"> -->
    <input type="checkbox" id="checkbox" v-model="checkboxValue" true-value="yes" false-value="no">

    <h2>radio value</h2>
    <label>
      <!-- <input type="radio" name="type" value="A" :checked="radioValue === 'A'"
        @change="event => (radioValue = event.target.value)"> A형 -->
      <input type="radio" name="type" value="A" v-model="radioValue"> A형
    </label>
    <label>
      <input type="radio" name="type" value="O" v-model="radioValue"> O형
    </label>
    <div>
      {{ radioValue }}
    </div>

    <h2>select value</h2>
    <select v-model="selectValue">
      <option value="html">HTML 수업</option>
      <option value="css">CSS 수업</option>
      <option value="javascript">JavaScript 수업</option>
    </select>
    <div>{{ selectValue }}</div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const inputValue = ref(null);
    const textValue = ref(null);
    const checkboxValue = ref('yes');
    const radioValue = ref('O');
    const selectValue = ref('html');
    const checkboxValues = ref([]);

    return {
      inputValue,
      textValue,
      checkboxValue,
      radioValue,
      selectValue,
      checkboxValues,
    }
  }
}
</script>

<style lang="scss" scoped></style>