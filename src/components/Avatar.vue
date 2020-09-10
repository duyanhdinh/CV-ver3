<template>
  <div class="relative">
    <div class="absolute z-50 top-0 w-full h-20 flex justify-center">
      <img class="w-12" :src="tape" alt="" />
    </div>
    <div class="pt-12 w-full h-full">
      <div
        class="w-full h-full bg-gray-300 shadow-xl rounded-sm pt-4 flex justify-center border border-gray-600 border-l-2 border-t-2"
      >
        <div class="w-68 h-68 bg-green-700">
          <img :src="avatar" alt="" class="w-full h-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tape from "i@/tape.png";
import avatar from "i@/avatar.jpg";

export default {
  name: "avatar",
  components: {},
  data() {
    return {
      tape: tape,
      avatar: avatar,
      styleObject: {
        "background-image": "url(" + tape + ")",
      },
    };
  },
};
</script>
