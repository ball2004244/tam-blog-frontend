<!-- create a header component -->
<template>
  <div class="container w-full mt-5">
    <div class="flex flex-row">
      <div class="flex flex-1 items-center justify-center align-self-start justify-self-start">
        <img src="https://img.icons8.com/ios-filled/50/000000/medium-monogram--v1.png" />
        <h1 class="font-sans font-bold text-2xl">Medium</h1>
      </div>
      <div class="flex flex-1 items-center justify-center align-self-end justify-self-end">
        <ul class="flex">
          <li
            class="font-sans text-xl mx-5 hover:bg-white rounded-lg p-2"
            v-for="button in buttons"
            :key="button.name"
          >
            <nuxt-link :to="button.link">{{ button.name }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// export as Header
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  data() {
    return {
      buttons: [
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Blog",
          link: "/blog",
        },
        {
          name: "Home",
          link: "/",
        },
      ],
    };
  },
});
</script>