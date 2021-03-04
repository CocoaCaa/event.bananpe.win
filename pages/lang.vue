<template>
  <div class="lang">
    <h1>Choose your language</h1>
    <div class="grid grid-cols-4 gap-4 mt-5">
      <button
        v-for="locale in availableLocales"
        :key="locale.code"
        @click="selectLanguage(locale.code)"
        class="lang-button"
        >{{ locale.name }}</button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Lang extends Vue {
  public get availableLocales() {
    return (this.$i18n as any).locales;
  }

  public selectLanguage(code: string) {
    this.$store.commit('SET_IS_SET_LANGUAGE', true);
    this.$router.push(this.localeRoute('/', code)?.path ?? '/en/');
  }
}
</script>
<style lang="postcss">
.lang {
  @apply absolute inset-0 flex flex-col items-center justify-center;

  color: #fff;
  background-color: #333;
}

.lang-button {
  @apply px-3 py-2 text-lg rounded;
  background-color: rgba(255, 255, 255, 0.1);
}

.lang-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
