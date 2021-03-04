<template>
  <div class="step-card rounded-lg p-5 mb-5">
    <h3>{{ title }}</h3>
    <p v-html="description"/>
    <slot/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: String,
    description: String,
  },
})
</script>
<style>
.step-card {
  color: #fff9d7;
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
