<template>
  <div
    id="app"
    class="w-full flex flex-wrap justify-center bg-gray-200 font-ibm"
  >
    <wanted>
      <div class="w-full h-104 flex mb-12">
        <avatar class="w-80 h-full"></avatar>
        <information></information>
      </div>
      <info></info>
      <skills></skills>
      <student></student>
    </wanted>
    <wanted>
      <div class="text-6xl capitalize mb-4">project cá nhân</div>
      <project-one></project-one>
      <project-two></project-two>
      <project-three></project-three>
    </wanted>
    <wanted>
      <div class="text-6xl capitalize mb-4">Kinh nghiệm làm việc</div>
      <company-one></company-one>
    </wanted>
    <wanted>
      <div class="text-6xl capitalize mb-4">Kinh nghiệm làm việc</div>
      <company-two></company-two>
    </wanted>
  </div>
</template>

<script>
import Wanted from "~@/Wanted";
import Avatar from "~@/Avatar";
import Information from "~@/Information";
import Info from "~@/Info";
import Skills from "~@/Skills";
import Student from "~@/Student";
import ProjectOne from "~@/ProjectOne";
import ProjectTwo from "~@/ProjectTwo";
import ProjectThree from "~@/ProjectThree";
import CompanyOne from "~@/CompanyOne";
import CompanyTwo from "~@/CompanyTwo";

export default {
  name: "app",
  components: {
    Wanted,
    Avatar,
    Information,
    Info,
    Skills,
    Student,
    ProjectOne,
    ProjectTwo,
    ProjectThree,
    CompanyOne,
    CompanyTwo,
  },
  data() {
    return {};
  },
};
</script>
