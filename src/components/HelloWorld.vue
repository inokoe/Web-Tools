<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="greetings">
    <div class="title">
      <a class="toGithub" href="https://vitejs.dev/" target="_blank" rel="noopener">
        <img alt="Github logo" class="logo" src="@/assets/github.svg" />
      </a>
      <h1 class="green">{{ msg }}</h1>
    </div>
    <h3>
      Some lightweight web tools are out of the box!
    </h3>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  place-items: center;
  text-align: center;
  height: auto;
}

.logo {
  width: 45px;
  height: 45px;
}

.title a {
  background-color: transparent;
}

.title a:hover {
  transform: scale(1.2);
  transition: 0.3s;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  /* top: -10px; */
  padding-left: 10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  display: block;
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
