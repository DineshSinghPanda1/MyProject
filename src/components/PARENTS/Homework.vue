<template>
  <!-- <row start> -->
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>
      <!-- <card start> -->
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Home work</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
        <v-container>
          <v-expansion-panels focusable>
            <v-expansion-panel v-for="subject in Subjectname" :key="subject">
              <v-expansion-panel-header class="purple--text">
                {{
                subject.name
                }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                {{
                subject.matrix
                }}
              </v-expansion-panel-content>
              <v-expansion-panel-content class="text-right">
                {{
                subject.date
                }}
              </v-expansion-panel-content>
              <v-expansion-panel-content class="purple--text">
                {{
                subject.paragraph
                }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-container>
      </v-card>
      <!-- <card end> -->
    </v-dialog>
  </v-row>
  <!-- <row end> -->
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Homework",
  data: () => ({
    dialog: false,
    Subjectname: [
      {
        name: "Math",
        matrix: "matrix -topic",
        date: "10/2/20",
        dis: "sjhdhg",
        paragraph:
          " Lorem ipsum dolor sit amet consectetur adipiscing elit sed do"
      },
      {
        name: "English",
        matrix: "matrix",
        date: "10/2/20",
        dis: "gsdgd",
        paragraph:
          " Lorem ipsum dolor sit amet consectetur adipiscing elit sed do"
      },
      {
        name: "Hindi",
        matrix: "matrix",
        date: "10/2/20",
        dis: "sgdd",
        paragraph:
          " Lorem ipsum dolor sit amet consectetur adipiscing elit sed do"
      },
      {
        name: "Science",
        dis: "hhjh",
        matrix: "matrix",
        date: "10/2/20",
        paragraph:
          " Lorem ipsum dolor sit amet consectetur adipiscing elit sed do"
      }
    ]
  })
  //
});
</script>
