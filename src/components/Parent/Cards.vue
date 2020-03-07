<template>
  <v-container fluid grid-list-md>
    <!---Class1 Start-->

    <div class v-for="item in cardsdetail" :key="item">
      <v-btn class="purple white--text ml-8">class {{item.class}}</v-btn>

      <v-alert outlined color="purple">
        <v-layout>
          <v-row>
            <v-col md="4" v-for="(data,index) in item.section" :key="index">
              <v-hover v-slot:default="{ hover }" open-delay="200">
                <v-card :elevation="hover ? 16 : 2">
                  <v-card-title class="purple--text justify-center">Section {{data.section}}</v-card-title>
                  <v-divider></v-divider>
                  <v-row>
                    <v-col class="ma-5">
                      <v-responsive>
                        <v-avatar size="80">
                          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
                        </v-avatar>
                      </v-responsive>
                    </v-col>
                    <v-col>
                      <v-card-contant class="purple--text">Name: {{data.teacher}}</v-card-contant>
                      <br />

                      <v-card-contant class="purple--text">Subject: {{data.subject}}</v-card-contant>
                      <br />
                      <v-card-contant class="purple--text">Strength: {{data.strength}}</v-card-contant>
                      <br />
                      <v-card-contant class="purple--text">Present: {{data.present}}</v-card-contant>
                      <br />
                      <v-card-contant class="purple--text">Absent: {{data.absent}}</v-card-contant>
                    </v-col>
                  </v-row>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-layout>
      </v-alert>
    </div>
    <!------- Class1 End         ---->
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions, mapState, mapMutations } from "vuex";

export default Vue.extend({
  name: "Cards",

  mounted() {
    this.$store.dispatch("loadCards");
  },
  computed: {
    ...mapGetters(["cardsdetail"]),
    ...mapState(["cards"])
  },

  data: () => ({})
});
</script>
