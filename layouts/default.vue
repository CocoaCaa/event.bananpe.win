<template>
  <div>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Default extends Vue {
    mounted() {
      this.$router.push(this.localeRoute('/lang')?.path ?? '/en/lang');
    }
}
</script>

<style>
html {
  font-family: "Chiron Sans HK WS", sans-serif;
  background-color: #333;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

h1, h2, h3, h4, h5, h6 {
  @apply font-bold;
  font-family: "Josefin Sans", "Chiron Sans HK WS", sans-serif;
}

h1 {
  @apply text-4xl;
  color: #FBE35A;
}

h2 {
  @apply text-3xl;
  color: #FBE35A;
}

h3 {
  @apply text-2xl;
}

a {
  text-decoration: underline;
}

.container {
  @apply mx-auto px-5 max-w-screen-lg;
}

@screen lg {
  .container {
    @apply px-0;
  }
}
</style>
