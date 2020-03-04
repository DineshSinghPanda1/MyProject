<template>
  <v-container>
    <v-row justify="center">
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
        </template>
        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>New Teacher</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="dialog = false">Done</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <!--------------Main card-------------->
          <v-container>
            <!--------------->
            <v-row>
              <v-col class="text-center">
                <h2 class="purple--text">Registration</h2>
                <v-progress-linear color="purple" rounded value="100"></v-progress-linear>
              </v-col>
            </v-row>
            <!----------------------->
            <v-row>
              <v-col class="d-flex" cols="12" sm="6">
                <v-select :items="items" label="Subject" dense outlined></v-select>
              </v-col>
            </v-row>
            <!------------------------->
            <v-row>
              <v-col class="d-flex" cols="12" sm="6">
                <v-text-field label="First Name" required outlined></v-text-field>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6">
                <v-text-field label="Last Name" required outlined></v-text-field>
              </v-col>
            </v-row>
            <!--------------------------->
            <v-row>
              <v-col class="d-flex" cols="12" sm="6">
                <v-text-field label="Mobile No" required outlined></v-text-field>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6">
                <v-text-field label="Email" required outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="text-center">
                <v-btn rounded color="purple" dark>Register</v-btn>
              </v-col>
            </v-row>
          </v-container>
          <!------------/end----------------->
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NewTeacher",

  data: () => ({
    dialog: false,
    items: ["Foo", "Bar", "Fizz", "Buzz"]
  })
});
</script>
