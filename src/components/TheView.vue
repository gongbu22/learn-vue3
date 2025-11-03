<template>
  <div>
    <main>
      <div class="container py-4">
        <PostCreate @create-post="createPost"></PostCreate>
        <div class="container text-center">
          <div class="row g-3">
            <div v-for="post in posts" :key="post.id" class="col col-4">
              <AppCard :title="post.title" :contents="post.contents" :type="post.type" :isLike="post.isLike"
                @toggle-like="post.isLike = !post.isLike" :obj="obj"></AppCard>
              <button @click="post.isLike = !post.isLike">toggle</button>
              <!-- <app-card></app-card> -->
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import App from '@/App.vue';
import AppCard from './AppCard.vue';
import PostCreate from './PostCreate.vue';
import { reactive } from 'vue';
export default {
  components: {
    AppCard,
    PostCreate,
  },
  setup() {
    const obj = reactive({
      title: '제목2',
      contents: '내용2',
    });
    const posts = reactive([
      { id: 1, title: '제목1', contents: '내용1', isLike: true, type: 'news' },
      { id: 2, title: '제목2', contents: '내용2', isLike: true, type: 'news' },
      { id: 3, title: '제목3', contents: '내용3', isLike: true, type: 'news' },
      { id: 4, title: '제목4', contents: '내용4', isLike: false, type: 'notice' },
      { id: 5, title: '제목5', contents: '내용5', isLike: false, type: 'notice' },
    ]);

    const createPost = (a, b, c, d) => {
      console.log('createpost', a, b, c, d);
    };

    return {
      // post,
      obj,
      posts,
      createPost,
    }
  }
}
</script>

<style lang="scss" scoped></style>