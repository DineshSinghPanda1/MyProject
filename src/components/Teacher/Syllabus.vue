<template>
  <v-container>
    <v-card>
      <v-toolbar flat color="primary" dark>
        <v-toolbar-title>Syllabus</v-toolbar-title>
      </v-toolbar>
      <v-tabs centered>
        <v-tab>All Syllabus</v-tab>
        <v-tab>Remaining</v-tab>
        <v-tab>Completed</v-tab>
        <!-----------------AllSyllabus---Page------------------->
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-row align="center">
                <v-col class="d-flex" cols="12" sm="4">
                  <v-select label="Class" outlined>
                    <option>{{}}</option>
                  </v-select>
                </v-col>
                <v-col class="d-flex" cols="12" sm="4">
                  <v-select label="Class" outlined>
                    <option>{{}}</option>
                  </v-select>
                </v-col>
                <v-col class="d-flex" cols="12" sm="4">
                  <v-select label="Class" outlined>
                    <option>{{}}</option>
                  </v-select>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card>
              <!--------------------->

              <v-expansion-panels
                v-for="chapter in chapter"
                :key="chapter.name"
                focusable
              >
                <v-expansion-panel v-for="(item, i) in 1" :key="i">
                  <v-expansion-panel-header>{{
                    chapter
                  }}</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-data-table
                      v-on="on"
                      :headers="headers"
                      :items="desserts"
                      class="elevation-1"
                    ></v-data-table>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card>
          </v-card>
        </v-tab-item>
        <!---------------EnD--------------------------------->
        <!--------------------------Remaining---------------->
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-row align="center">
                <v-col class="d-flex" cols="12" sm="4">
                  <v-select :items="Class" label="Class" outlined></v-select>
                </v-col>
                <v-col class="d-flex" cols="12" sm="4">
                  <v-select
                    :items="Section"
                    label="Section"
                    outlined
                  ></v-select>
                </v-col>
                <v-col class="d-flex" cols="12" sm="4">
                  <v-select
                    :items="Subject"
                    label="Subject"
                    outlined
                  ></v-select>
                </v-col>
              </v-row>
            </v-card-text>
            <!----------------------------->
            <v-card>
              <v-expansion-panels
                v-for="chapter in chapter"
                :key="chapter.name"
                focusable
              >
                <v-expansion-panel v-for="(item, i) in 1" :key="i">
                  <v-expansion-panel-header class="grey text-center">{{
                    chapter
                  }}</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-data-table
                      :headers="headers"
                      :items="desserts"
                      class="elevation-1"
                    ></v-data-table>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card>
          </v-card>
        </v-tab-item>
        <!---------------ENd------------------------------->
        <!--------------------------Subject---------------->
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-row align="center">
                <v-col class="d-flex" cols="12" sm="4">
                  <v-select :items="Class" label="Class" outlined></v-select>
                </v-col>
                <v-col class="d-flex" cols="12" sm="4">
                  <v-select
                    :items="Section"
                    label="Section"
                    outlined
                  ></v-select>
                </v-col>
                <v-col class="d-flex" cols="12" sm="4">
                  <v-select
                    :items="Subject"
                    label="Subject"
                    outlined
                  ></v-select>
                </v-col>
              </v-row>
            </v-card-text>
            <!----------------------------->
            <v-card>
              <v-expansion-panels
                v-for="chapter in chapter"
                :key="chapter.name"
                focusable
              >
                <v-expansion-panel v-for="(item, i) in 1" :key="i">
                  <v-expansion-panel-header class="grey text-center">{{
                    chapter
                  }}</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-data-table
                      :headers="headers"
                      :items="desserts"
                      class="elevation-1"
                    ></v-data-table>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card>
          </v-card>
        </v-tab-item>
        <!-----------------End----------------------------->
      </v-tabs>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "Syllabus",
  mounted() {
    this.$store.dispatch("loadSyllabus");
  },
  computed: {
    ...mapState(["syllabus"])
  },

  data: () => ({
    tabs: null,

    dialog: false,
    // Class: ["I", "II", "III", "IV", "v"],
    // Section: ["A", "B", "C", "D"],
    // Subject: ["Hindi", "Maths", "C++", "Java"],
    chapter: ["Chapter Matrix 1", "Chapter Matrix 2", "Chapter Matrix 3"],
    headers: [
      {
        text: "Topic",

        sortable: false,
        value: "Topic"
      },
      { text: "Start", value: "Start" },
      { text: "End", value: "End" },
      { text: "No", value: "No" }
    ],
    desserts: [
      {
        Topic: "Function",
        Start: "07/03/2020",
        End: "09/07/2020",
        No: "2"
      },
      {
        Topic: "Function",
        Start: "07/03/2020",
        End: "09/07/2020",
        No: "2"
      },
      {
        Topic: "Function",
        Start: "07/03/2020",
        End: "09/07/2020",
        No: "2"
      },
      {
        Topic: "Function",
        Start: "07/03/2020",
        End: "09/07/2020",
        No: "2"
      }
    ]
  })
});
</script>
