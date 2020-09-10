<template>
  <div
    class="bg-orange-700 w-296 h-392 pl-2 py-4 pr-6 m-2 border-2 border-black rounded-lg"
  >
    <div class="w-full h-full bg-repeat rounded-sm" :style="styleObject">
      <div class="w-full h-full bg-opacity-50 bg-yellow-600 py-2 px-10">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import paper from "i@/paper.png";

export default {
  name: "wanted",
  components: {},
  data() {
    return {
      paper: paper,
      styleObject: {
        "background-image": "url(" + paper + ")",
      },
    };
  },
};
</script>
