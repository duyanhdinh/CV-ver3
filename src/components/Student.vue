<template>
  <div class="w-full h-auto leading-loose text-2xl mb-6 flex flex-wrap">
    <div class="flex-1 pr-4">
      <div class="text-red-600 font-semibold">Thời đại học:</div>
      <ul class="list-disc w-full pl-16">
        <li>
          2013 - 2015: tham gia một câu lạc bộ ở trường về thuật toán/lập trình.
          Có tham gia giải thuật toán trên một số trang web bằng C/C++ (click
          vào tên để đến):
        </li>
        <li class="ml-8 text-blue-600">
          <a href="https://codeforces.com/profile/DuyAnhDinh">Codeforces</a>
        </li>
        <li class="ml-8 text-blue-600">
          <a href="https://www.spoj.com/PTIT/users/duyanhdinh/">Spoj</a>
        </li>
        <li>
          2016 - 2017: Tham gia nghiêm cứu khóa học sinh viên cấp trường của
          Ths. Vũ Thị Thúy Hà, với ngành theo học.
        </li>
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
            <img :src="codeforces" alt="" class="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tape from "i@/tape.png";
import codeforces from "i@/codeforces.png";

export default {
  name: "student",
  components: {},
  data() {
    return {
      tape: tape,
      codeforces: codeforces,
      styleObject: {
        "background-image": "url(" + tape + ")",
      },
    };
  },
};
</script>
