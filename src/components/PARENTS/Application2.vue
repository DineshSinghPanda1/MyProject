<template>
  <v-container>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <div class="text-right">
          <v-btn class="purple--text" v-on="on">Write Application</v-btn>
        </div>
      </template>
      <!------------------------- <card start> ----------------------->
      <v-card>
        <v-card-title class="purple white--text text-center">Application</v-card-title>
        <v-card-text>
          <v-container class="text-center">
            <!-------------------- <row start> ---------------------->
            <v-row>
              <divider></divider>
              <v-col cols="6" class>
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="computedDateFormatted"
                      label="Date To"
                      hint="MM/DD/YYYY "
                      persistent-hint
                      :prepend-icon="calender"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title @input="menu2 = false"></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="6" class>
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="computedDateFormatted"
                      label="Date To"
                      hint="MM/DD/YYYY "
                      persistent-hint
                      :prepend-icon="calender"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title @input="menu2 = false"></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            <!------------------------------- <row end> ----------------------------------->
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field v-model="Subject" :rules="nameRules" label="Subject" required></v-text-field>
              <v-textarea autocomplete="email" label="Write Reason" outlined></v-textarea>
              <div class="my-2 text-right">
                <v-btn class="purple white--text">Submit</v-btn>
              </div>
            </v-form>
            <v-layout row>
              <v-col cols="6" v-for="chips in days" :key="chips.name">
                <v-card width="400" height="130">
                  <v-card-title class="grey">{{ chips.name }}</v-card-title>
                  <v-chip class="ma-4 font-weight-bold" color="green" text-color="white">Present</v-chip>
                  <v-chip class="ma-4 font-weight-bold" color="red" text-color="white">Absent</v-chip>>
                </v-card>
              </v-col>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"></v-btn>
        </v-card-actions>
      </v-card>
      <!--------------------------------------- <card end> ---------------------------------------------->
    </v-dialog>

    <!------------------------------------------ <row start> ---------------------------------------->

    <v-row>
      <v-col md="4" v-for="card in cardname" :key="card.name">
        <v-hover v-slot:default="{ hover }" open-delay="200">
          <v-card :elevation="hover ? 16 : 2" height="80">
            <div class="text-center">
              <v-card-text class="purple--text">{{ card.name }}</v-card-text>
            </div>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <!----------------------------------- <row end> -------------------------------------------->
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Application2",
  data: () => ({
    cardname: [
      {
        name: "Sick leave"
      },
      {
        name: "Urgent work leave"
      },
      {
        name: "Marriage leave"
      },
      {
        name: "Casual Leave"
      },
      {
        name: "Transfer Leave"
      },
      {
        name: "Study/Sabbatical Leave"
      },
      {
        name: " Earned leave"
      },
      {
        name: "Annual Leave"
      },
      {
        name: "Sectional/National Leave"
      }
    ]
  })
  //
});
</script>
