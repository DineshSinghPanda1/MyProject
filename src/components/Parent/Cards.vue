<template>
  <v-container fluid grid-list-md>
    <!---Class1 Start-->
    <div class v-for="item in cardsdetail" :key="item">
      <v-btn class="purple white--text ml-10">class {{ item.class }}</v-btn>
      <v-alert outlined color="purple">
        <!-------------------Card-------------------->
        <v-layout>
          <v-flex md="3" v-for="(data, index) in item.section" :key="index">
            <v-hover v-slot:default="{ hover }" open-delay="200">
              <v-card :elevation="hover ? 16 : 2" raised>
                <v-card-title class="purple--text justify-center">Section {{ data.section }}</v-card-title>
                <v-divider color="purple"></v-divider>
                <v-list>
                  <v-list-item-group v-model="model" multiple color="indigo">
                    <v-list-item>
                      <v-list-item-avatar color="grey" size="80">
                        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="purple--text">Name: {{ data.teacher }}</v-list-item-title>
                        <v-list-item-title class="purple--text">Subject:{{ data.subject }}</v-list-item-title>
                        <v-list-item-title class="purple--text">Strength: {{ data.strength }}</v-list-item-title>
                        <v-list-item-title class="purple--text">Present: {{ data.present }}</v-list-item-title>
                        <v-list-item-title class="purple--text">Absent:{{ data.absent }}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card>
            </v-hover>
          </v-flex>
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
