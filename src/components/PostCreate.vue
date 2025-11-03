<template>
  <div>
    <!-- <button class="btn btn-primary" @click="$emit('createPost', 1, 2, 3, 'ralral')">button</button> -->
    <button class="btn btn-primary" @click="createPost">
      button
    </button>
  </div>
</template>

<script>
export default {
  setup(props, { emit }) {
    const createPost = () => {
      emit('createPost', 1, 2, 3, 'ralral');
    };

    return { createPost };
  }
}
</script>

<style lang="scss" scoped></style>