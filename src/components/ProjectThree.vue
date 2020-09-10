<template>
  <div class="w-full h-auto leading-loose text-2xl flex flex-wrap">
    <div class="flex-1 pr-4">
      <div class="text-red-700 font-semibold">Project khác</div>
      <ul class="list-disc w-full pl-16">
        <li>
          <span class="font-semibold text-green-700">Link: </span>
          <a
            class="text-blue-600"
            target="_blank"
            href="https://dinhduyanh.com/"
            >cv v3</a
          >,
          <a
            class="text-blue-600"
            target="_blank"
            href="https://cv-1905.dazzard.com/"
            >cv v2</a
          >,
          <a
            class="text-blue-600"
            target="_blank"
            href="https://didad.herokuapp.com/"
            >didad</a
          >,..
        </li>
        <li>
          <span class="font-semibold text-green-700">Nội dung: </span
          ><span class="italic text-gray-700">Các trang cv, website khác</span>
        </li>
        <li>
          <span class="font-semibold text-green-700">Công nghệ: </span
          ><span class="italic text-gray-700"
            >Laravel 5, php 7, VueJs 2, mysql, tailwindCss, bootstrap 4, html,
            css, github, aws</span
          >
        </li>
      </ul>
    </div>
    <div class="w-96 h-96 relative">
      <div class="w-full flex justify-between absolute z-50 bottom-0">
        <div class="w-12 h-20 flex justify-start transform rotate-45">
          <img class="transform rotate-90" :src="tape" alt="" />
        </div>
        <div class="w-12 h-20 flex justify-end transform -rotate-45">
          <img class="transform rotate-90" :src="tape" alt="" />
        </div>
      </div>
      <div class="pb-10 w-full h-full absolute z-30 top-0">
        <div
          class="w-full h-full bg-gray-300 shadow-xl rounded-sm pt-4 flex justify-center border border-gray-600 border-l-2 border-t-2"
        >
          <div class="mx-4 mb-8 bg-green-700 border border-gray-700">
            <img :src="v2" alt="" class="w-full h-full" />
          </div>
        </div>
      </div>
      <div
        class="pb-10 w-full h-full absolute z-20 top-0 origin-bottom-left transform rotate-5"
      >
        <div
          class="w-full h-full bg-gray-300 shadow-xl rounded-sm pt-4 flex justify-center border border-gray-600 border-l-2 border-t-2"
        >
          <div class="mx-4 mb-8 bg-green-700 border border-gray-700">
            <img :src="v3" alt="" class="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tape from "i@/tape.png";
import v2 from "i@/v2.png";
import v3 from "i@/v3.png";

export default {
  name: "project-one",
  components: {},
  data() {
    return {
      tape: tape,
      v2: v2,
      v3: v3,
      styleObject: {
        "background-image": "url(" + tape + ")",
      },
    };
  },
};
</script>
