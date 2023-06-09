<template>
  <div class="mx-auto my-auto flex items-flex-start justify-center bg-cyan-400 min-h-screen">
    <div class="container w-3/5 mt-5 h-full">
      <Header />
      <div class="flex-col items-center justify-center h-full">
        <div class="container text-center bg-white p-10 my-10 rounded-2xl">
          <h2 class="font-sans text-4xl">Welcome to My Blog</h2>
          <h1 class="font-sans font-bold text-6xl">I am Tam Nguyen</h1>
        </div>

        <div class="container bg-white p-10 rounded-2xl h-1/2">
          <div v-if="blogs.length > 0">
            <ul>
              <li class="font-sans font-bold text-3xl" v-for="blog in blogs" :key="blog.id">
                {{ blog.title }}
              </li>
              <li class="font-sans text-2xl" v-for="blog in blogs" :key="blog.id">
                {{ blog.content }}
              </li>
              <li class="font-sans text-lg" v-for="blog in blogs" :key="blog.id">
                UserId: {{ blog.user_id }}
              </li>
            </ul>
          </div>
          <div v-else>
            <h1 class="font-sans text-2xl">No blog found</h1>
          </div>
          
          <button
            class="bg-blue-500 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded w-1/3 h-1/6 ml-auto m-10"
            @click="$router.push('/blog')">
            Write your own blog
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { getBlogList, getBlog } from "@/apis/blog";

export default Vue.extend({
  data() {
    return {
      blogs: [],
    };
  },

  async asyncData({ $axios }) {
    const user_id = 25;
    const response = await getBlogList(user_id, $axios);
    const blogs = response.data;
    return { blogs };
  },
});
</script>
