<template>
  <div>
    <div class="w-full h-auto leading-loose text-2xl flex flex-wrap">
      <div class="flex-1 pr-4">
        <div class="text-red-700 font-semibold">News (08/2020)</div>
        <ul class="list-disc w-full pl-16">
          <li>
            <span class="font-semibold text-green-700">Link: </span
            ><a
              class="text-blue-600"
              target="_blank"
              href="https://news.dazzard.com/"
              >news.dazzard.com</a
            >
          </li>
          <li>
            <span class="font-semibold text-green-700">Nội dung: </span
            ><span class="italic text-gray-700"
              >Trang tổng hợp tin tức từ các báo khác.</span
            >
          </li>
          <li>
            <span class="font-semibold text-green-700">Công nghệ: </span
            ><span class="italic text-gray-700"
              >Laravel 7, php 7.4, VueJs 2.6, mysql, tailwindCss, html, css,
              github</span
            >
          </li>
          <li>
            <span class="font-semibold text-green-700"
              >Một vài công việc thực hiện:
            </span>
          </li>
          <ul class="pl-8 italic text-gray-700 list-square">
            <li>
              Thiết kế website (<a
                class="text-blue-600"
                target="_blank"
                href="https://xd.adobe.com/view/8e26a820-d596-4efb-5671-5b1b55406df2-f817/"
                >click here</a
              >), thiết kế database
            </li>
            <li>
              Sử dụng VueJs, TailwindCss để tạo frontend, lấy dữ liệu từ api ở
              backend để hiển thị, đăng nhập ..
            </li>
          </ul>
        </ul>
      </div>
      <div class="w-96 h-96 relative">
        <div class="w-full flex justify-between absolute z-50 top-0 left-0">
          <div class="w-12 h-20 flex justify-start transform -rotate-45">
            <img class="transform rotate-90" :src="tape" alt="" />
          </div>
          <div class="w-12 h-20 flex justify-end transform rotate-45">
            <img class="transform rotate-90" :src="tape" alt="" />
          </div>
        </div>
        <div class="pt-12 w-full h-full">
          <div
            class="w-full h-full bg-gray-300 shadow-xl rounded-sm pt-4 flex justify-center border border-gray-600 border-l-2 border-t-2"
          >
            <div class="mx-4 mb-8 bg-green-700 border border-gray-700">
              <img :src="project_one" alt="" class="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-auto leading-loose text-2xl mb-6 flex flex-wrap">
      <ul class="pl-24 italic text-gray-700 list-square font-normal">
        <li>
          Sử dụng laravel để tạo cron job thu thập dữ liệu theo thời kỳ và lưu
          trữ nó trên cơ sở dữ liệu. Sử dụng Broadcast để nghe và cập nhật bình
          luận theo thời gian thực ...
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import tape from "i@/tape.png";
import project_one from "i@/project-one.png";

export default {
  name: "project-one",
  components: {},
  data() {
    return {
      tape: tape,
      project_one: project_one,
      styleObject: {
        "background-image": "url(" + tape + ")",
      },
    };
  },
};
</script>
