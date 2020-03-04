<template>
  <v-container fluid grid-list-md>
    <!---Class1 Start-->

    <div class>
      <v-btn class="purple white--text ml-8">CLASS I</v-btn>
    </div>

    <v-alert outlined color="purple">
      <v-layout>
        <v-row>
          <v-col md="3">
            <v-hover v-slot:default="{ hover }" open-delay="200">
              <v-card :elevation="hover ? 16 : 2">
                <v-card-title class="purple--text justify-center">Section A</v-card-title>
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
                    <v-card-contant class="purple--text">{{ cardsdetail.personal.first_name}}</v-card-contant>
                    <br />

                    <v-card-contant class="purple--text">{{cardsdetail.subjects[0].subject}}</v-card-contant>
                    <br />
                    <v-card-contant class="purple--text">strenght</v-card-contant>
                    <br />
                    <v-card-contant class="purple--text">present</v-card-contant>
                    <br />
                    <v-card-contant class="purple--text">abscent</v-card-contant>
                  </v-col>
                </v-row>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-layout>
    </v-alert>

    <!------- Class1 End         ---->
    <!-------Class2 Start       ----->
    <div>
      <v-btn color="purple white--text ml-8 ">CLASS II</v-btn>
    </div>
    <v-alert outlined color="purple">
      <v-layout>
        <v-row>
          <v-col md="4">
            <v-hover v-slot:default="{ hover }" open-delay="200">
              <v-card :elevation="hover ? 16 : 2">
                <v-card-title class="purple--text justify-center">Section A</v-card-title>
                <v-divider></v-divider>
                <v-row>
                  <v-col class="ma-5">
                    <v-responsive>
                      <v-avatar size="100">
                        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
                      </v-avatar>
                    </v-responsive>
                  </v-col>
                  <v-col>
                    <v-card-contant class="purple--text">{{ cardsdetail.personal.first_name}}</v-card-contant>
                    <br />

                    <v-card-contant class="purple--text">{{cardsdetail.subjects[0].subject}}</v-card-contant>
                    <br />
                    <v-card-contant class="purple--text">strenght</v-card-contant>
                    <br />
                    <v-card-contant class="purple--text">present</v-card-contant>
                    <br />
                    <v-card-contant class="purple--text">abscent</v-card-contant>
                  </v-col>
                </v-row>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-layout>
    </v-alert>
    <!----Class 2 End---->
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
