<template>
  <v-app>
    <Cards />
    <!-- <Navbar /> -->
    <!-- <Appointment /> -->
    <!-- <Marksheet /> -->
    <!-- <Mesh /> -->
    <!-- <Syllabus /> -->
    <!-- <Application /> -->
    <!-- <Recommend /> -->
    <!-- <Marks /> -->
    <!-- <Transport /> -->
    <!-- <Timetable /> -->
    <!-- <TCReq /> -->
    <!-- <NewTeacher /> -->
    <!-- <NewAdmin /> -->
    <!-- <Test /> -->
    <!-- <Application2 /> -->
    <!-- <Homework /> -->
    <!-- <Schoolactivity /> -->
    <!-- <Student /> -->
    <!-- <Search /> -->
    <!-- <IssueBook /> -->
    <!-- <AllRecord /> -->
    <AdminHouse />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

// import Cards from "./components/Parent/Cards.vue";
// import Marks from "./components/Parent/Marks.vue";
// import Mesh from "./components/Parent/Mesh.vue";
// import Marksheet from "./components/Parent/Marksheet.vue";
// import TCReq from "./components/Parent/TCReq.vue";
// import Navbar from "./components/Parent/Navbar.vue";
// import Appointment from "./components/Parent/Appointment.vue";

// import Syllabus from "./components/Teacher/Syllabus.vue";
// import Application from "./components/Teacher/Application.vue";
//import Recommend from "./components/Teacher/Recommend.vue";
//import Test from "./components/Parent/Test.vue";
// import Transport from "./components/Teacher/Transport.vue";
// import Timetable from "./components/Admin/Timetable.vue";
// import NewTeacher from "./components/Admin/NewTeacher.vue";
// import NewAdmin from "./components/Admin/NewAdmin.vue";
// import Application2 from "./components/PARENTS/Application2.vue";
// import Homework from "./components/PARENTS/Homework.vue";
// import Schoolactivity from "./components/PARENTS/Schoolactivity.vue";
// import Student from "./components/PARENTS/Student.vue";
// import Search from "./components/Library/Search.vue";
// import IssueBook from "./components/Library/IssueBook.vue";
// import AllRecord from "./components/Library/AllRecord.vue";
import AdminHouse from "./components/Admin/AdminHouse.vue";

export default Vue.extend({
  name: "App",

  components: {
    // Cards
    // Marks
    // Marksheet
    // Mesh
    // TCReq
    // Appointment
    // Application
    // Navbar
    //Recommend
    // Syllabus
    // Test
    // Timetable
    // Transport
    // NewTeacher
    // NewAdmin
    // Application2
    // Homework
    // Schoolactivity
    // Student
    // Search
    // IssueBook
    // AllRecord
    AdminHouse
  },

  data: () => ({
    //
  })
});
</script>
