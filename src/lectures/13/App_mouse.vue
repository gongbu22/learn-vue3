<template>
  <div>
    <div id="modifiers">
      <div @click="clickDiv">
        Div
        <p @click.self="clickP">
          P
          <!-- <span @click.stop="clickSpan"> span 영역 </span> -->
          <span @click="clickSpan"> span 영역 </span>
          <a href="https://google.com" @click.prevent.stop="clickA">a 영역</a>
        </p>
      </div>
    </div>
    <a href="https://google.com" @click.prevent="clickA">a 영역</a>
    <button @click.once="clickDiv">once</button>
  </div>
</template>

<script>
export default {
  setup() {
    const clickDiv = () => {
      console.log('clickDiv');
      // location.href = 'https://naver.com';
    };
    const clickP = () => {
      console.log('clickP');
    };
    const clickSpan = () => {
      console.log('clickSpan');
      // alert('good');
    };
    const clickA = () => {
      alert('ralralral');
    };

    return {
      clickDiv,
      clickP,
      clickSpan,
      clickA,
    }
  }
}
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
  padding: 40px;
}

#modifiers div {
  background-color: red;
}

#modifiers p {
  background-color: yellow;
}

#modifiers span {
  background-color: green;
  display: block;
}
</style>