<template>
  <v-container>
    <v-row justify="center">
      <!-- student card -->
      <v-col cols="12" md="6">
        <v-card shaped="true" v-for="data in stuData" :key="data.title">
          <v-list>
            <v-list-item>
              <v-list-item-avatar color="grey" size="90"></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline">{{
                  data.title
                }}</v-list-item-title>
                <v-divider></v-divider>
              </v-list-item-content>
              <v-btn class="mx-2" fab dark small color="purple">
                <v-icon dark>mdi-numeric-5</v-icon>
              </v-btn>
            </v-list-item>
            <v-list-item-text>
              <p>Class:{{ data.class }}</p>
              <p>Roll no : {{ data.roll_no }}</p>
              <p>Section: {{ data.section }}</p>
              <p>Attendence: {{ data.attendence }}</p>
            </v-list-item-text>
          </v-list>
        </v-card>
      </v-col>
      <!-- student card ends -->
      <!-- teacher card start -->
      <v-col cols="12" md="6">
        <v-card
          shaped="true"
          v-for="data in teachData"
          :key="data"
          height="285"
        >
          <v-list>
            <v-list-item>
              <v-list-item-avatar color="grey" size="90"></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline">{{
                  data.title
                }}</v-list-item-title>
                <v-divider></v-divider>
              </v-list-item-content>
              <v-btn class="mx-2" fab dark small color="purple">
                <v-icon dark>mdi-numeric-6</v-icon>
              </v-btn>
            </v-list-item>
            <v-list-card-text>
              <p>Moblie: {{ data.Mobile }}</p>
              <p>Subject: {{ data.subject }}</p>
              <v-chip class="ma-2">{{ data.status }}</v-chip>
            </v-list-card-text>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-select
      v-model="select"
      :hint="`${select.state}, ${select.abbr}`"
      :items="items"
      item-text="state"
      item-value="abbr"
      label="Select"
      persistent-hint
      return-object
      single-line
    ></v-select>
    <v-form>
      <v-textarea autocomplete="email" label="Email"></v-textarea>
    </v-form>
    <!-- teacher card ends -->
    <!-- bottom cards option -->
    <v-row>
      <v-col
        v-for="option in card_option"
        :key="option.name"
        cols="6"
        md="3"
        height="260"
      >
        <v-item-group>
          <v-item v-slot:default="{ active, toggle }">
            <v-hover>
              <template v-slot="{ hover }">
                <v-card
                  :color="active ? 'purple accent-1' : ''"
                  :elevation="hover ? 8 : 2"
                  shaped="true"
                  height="200"
                  @click="toggle"
                  max-width="250"
                >
                  <v-scroll-y-transition>
                    <div
                      v-if="active"
                      class="display-3 flex-grow-1 text-center"
                    ></div>
                  </v-scroll-y-transition>
                  <!-- for icons  -->
                  <div class="text-center">
                    <v-avatar class="mt-10" size="70" color="teal"></v-avatar>

                    <!-- name of each cards  -->
                    <div class="font-weight-regular text-center title">
                      <p class="pt-2">{{ option.name }}</p>
                    </div>
                  </div>
                </v-card>
              </template>
            </v-hover>
          </v-item>
        </v-item-group>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
// import timeTable from "./Time_table.vue";
export default Vue.extend({
  name: "ParentDash",
  data: () => ({
    // components: "timeTable",
    stuData: [
      {
        title: "Riya Sharma",
        class: "VIII",
        section: "A",
        attendence: "89%"
      }
    ],
    teachData: [
      {
        title: "Shyam dubey",
        Mobile: "999887650",
        subject: "Science",
        status: "P"
      }
    ],
    select: { state: "Select pickup point", abbr: "" },
    items: [
      { state: "Delhi", abbr: "FL" },
      { state: "Georgia", abbr: "GA" },
      { state: "Nebraska", abbr: "NE" },
      { state: "California", abbr: "CA" },
      { state: "New York", abbr: "NY" }
    ]
  })
  // methods: {
  //   showModal(index) {
  //     let modal_id = "modal_" + index;
  //     this.$refs[modal_id][0].show(index);
  //   }
  // }
});
</script>
