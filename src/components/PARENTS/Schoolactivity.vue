<template>
  <!-- <row start> -->
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on }">
        <v-btn color="blue" dark v-on="on">Open Dialog</v-btn>
      </template>
      <!-- <card start> -->
      <v-card>
        <v-toolbar dark color="blue">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>School activity</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false"></v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
        <!-- <container start> -->
        <v-container>
          <v-card class="mt-5" v-for="item in activitydetail" :key="item">
            <v-card-title class="purple lighten-2 w-100">{{
              item.title
            }}</v-card-title>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="headline text-center">Activity</th>
                    <th class="headline text-center">Date</th>
                    <th class="headline text-center">Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="text-center"
                    v-for="(data, index) in item.data"
                    :key="index"
                  >
                    <td>{{ data.activity_name }}</td>
                    <td>{{ data.date }}</td>
                    <td>{{ data.time }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-container>
        <!-- <container end> -->
      </v-card>
      <!-- <card end> -->
    </v-dialog>
  </v-row>
  <!-- <row end> -->
</template>
<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions, mapState, mapMutations } from "vuex";

export default Vue.extend({
  name: "Schoolactivity",

  mounted() {
    this.$store.dispatch("loadSchoolActivity");
  },
  computed: {
    ...mapGetters(["activitydetail"]),
    ...mapState(["schoolactivity"])
  },
  methods: {
    ...mapActions(["loadSchoolActivity"]),
    ...mapMutations(["setSchoolActivity"])
  },

  data: () => ({
    dialog: false
  })
});
</script>
