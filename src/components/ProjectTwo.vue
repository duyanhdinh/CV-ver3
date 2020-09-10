<template>
  <div class="w-full h-auto leading-loose text-2xl flex flex-wrap">
    <div class="w-96 h-96 relative">
      <div class="w-full flex justify-between absolute z-50 top-0 left-0">
        <div class="w-12 h-20 flex justify-start transform -rotate-45">
          <img class="transform rotate-90" :src="tape" alt="" />
        </div>
        <div class="w-12 h-20 flex justify-end transform rotate-45 hidden">
          <img class="transform rotate-90" :src="tape" alt="" />
        </div>
      </div>
      <div class="pt-12 w-full h-full">
        <div
          class="w-full h-full bg-gray-300 shadow-xl rounded-sm pt-4 flex justify-center border border-gray-600 border-l-2 border-t-2 origin-top-left transform rotate-5"
        >
          <div class="mx-4 mb-8 bg-green-700 border border-gray-700">
            <img :src="project_two" alt="" class="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1 pl-6">
      <div class="text-red-700 font-semibold">Dazzard (11/2019)</div>
      <ul class="list-disc w-full pl-16">
        <li>
          <span class="font-semibold text-green-700">Link: </span
          ><a class="text-blue-600" target="_blank" href="https://dazzard.com/"
            >dazzard.com</a
          >
        </li>
        <li>
          <span class="font-semibold text-green-700">Nội dung: </span
          ><span class="italic text-gray-700"
            >Trang web cung cấp cho mẫu cv cho người dùng.</span
          >
        </li>
        <li>
          <span class="font-semibold text-green-700">Công nghệ: </span
          ><span class="italic text-gray-700">
            Laravel 6, php 7.3, VueJs, mysql, tailwindCss, html, css,
            github</span
          >
        </li>
        <li>
          <span class="font-semibold text-green-700"
            >Một vài công việc thực hiện:
          </span>
        </li>
        <ul class="pl-8 italic text-gray-700 list-square">
          <li>Sử dụng laravel để đăng nhập, lưu cv</li>
          <li>
            Sử dụng VueJs, TailwindCss để tạo frontend, lấy data từ api...
          </li>
        </ul>
      </ul>
    </div>
  </div>
</template>

<script>
import tape from "i@/tape.png";
import project_two from "i@/project-two.png";

export default {
  name: "project-one",
  components: {},
  data() {
    return {
      tape: tape,
      project_two: project_two,
      styleObject: {
        "background-image": "url(" + tape + ")",
      },
    };
  },
};
</script>
