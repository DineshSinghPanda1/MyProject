<template>
  <div>
    <!-- <container start> -->
    <v-container>
      <!-- <row start> -->
      <v-row>
        <v-col md="3" v-for="card in cardname" :key="card.name">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 16 : 2">
              <div class="text-center">
                <v-avatar class="ma-2" color="grey" size="70">
                  <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                  />
                </v-avatar>
              </div>
              <div class="text-center">
                <v-card-text>{{ card.name }}</v-card-text>
                <v-chip color="green mb-3">Rank</v-chip>
              </div>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <!-- <row end> -->
    </v-container>
    <!-- <container end> -->
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Student",
  data: () => ({
    cardname: [
      {
        name: "Abhishek"
      },
      {
        name: "Kamaal"
      },
      {
        name: "Rekha"
      },
      {
        name: "Riya"
      },
      {
        name: "Riya"
      },
      {
        name: "Dinesh"
      },
      {
        name: "Riya"
      },
      {
        name: "Riya"
      },
      {
        name: "Riya"
      },
      {
        name: "Riya"
      },
      {
        name: "Riya"
      },
      {
        name: "Riya"
      }
    ]
  })

  //
});
</script>
