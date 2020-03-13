<template>
  <v-container>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
        </template>
        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Settings</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="dialog = false">Save</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <!-----Main card----->
          <v-container>
            <!-----------------Today------------------------->
            <v-data-iterator
              :items="items"
              :items-per-page.sync="itemsPerPage"
              hide-default-footer
            >
              <template v-slot:header>
                <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
                  <v-toolbar-title>Today Menu</v-toolbar-title>
                </v-toolbar>
              </template>
              <!-------------------------/today----------------->
              <!----------------------------menu-------------------->
              <template v-slot:default="props">
                <v-row>
                  <v-col
                    v-for="item in props.items"
                    :key="item.name"
                    cols="12"
                    sm="6"
                    md="4"
                    lg="3"
                  >
                    <v-card>
                      <v-card-title class="subheading font-weight-bold">{{
                        item.name
                      }}</v-card-title>
                      <v-divider></v-divider>
                      <v-row>
                        <v-simple-table>
                          <thead></thead>
                          <tbody>
                            <tr v-for="item in desserts" :key="item.name">
                              <td>{{ item.data }}</td>
                              <td></td>
                              <td></td>

                              <td>{{ item.value }}</td>
                            </tr>
                          </tbody>
                        </v-simple-table>
                      </v-row>
                    </v-card>
                  </v-col>
                </v-row>
              </template>
            </v-data-iterator>
          </v-container>

          <!-----------------------end main---->

          <!------------------------------2Cards-------------------->
          <v-container grid-list-md>
            <v-layout row>
              <v-col cols="10">
                <v-card class="ma-4" v-for="mesh in meshdetail" :key="mesh">
                  <v-divider></v-divider>
                  <v-row>
                    <v-col>
                      <v-responsive>
                        <v-avatar color="orange" size="162">
                          <span class="white--text headline">Food Pic</span>
                        </v-avatar>
                      </v-responsive>
                    </v-col>
                    <v-col class="text-center">
                      <v-card-text class="display-3">{{
                        mesh.type.type
                      }}</v-card-text>

                      <p>{{ mesh.type.start_time }}-{{ mesh.type.end_time }}</p>
                      <v-rating
                        v-model="rating"
                        background-color="green lighten-3"
                        color="green"
                        large
                      ></v-rating>
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                  <v-row>
                    <v-col v-for="(data, index) in mesh.meal" :key="index">
                      <v-card-text>{{ data.day }}</v-card-text>
                      <v-divider></v-divider>
                      <v-card-text>{{ data.meal }}</v-card-text>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-layout>
          </v-container>
          <!-------------------------------2 end------------------------------->
          <!----------3------------------->
          <v-container>
            <v-layout>
              <v-flex v-for="dii in dii" :key="dii.name">
                <v-card>
                  <v-col class="ma-3">
                    <v-responsive>
                      <v-avatar color="orange" size="80">
                        <span class="white--text headline">Food Pic</span>
                      </v-avatar>
                    </v-responsive>
                  </v-col>
                  <v-col class>
                    <p>07:00 -09:00 am</p>
                    <v-card-text class="display">{{ dii.food }}</v-card-text>
                    <v-rating
                      v-model="rating"
                      background-color="green lighten-3"
                      color="green"
                    ></v-rating>
                  </v-col>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>

          <!--------3 end------------>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions, mapState, mapMutations } from "vuex";

export default Vue.extend({
  name: "Marks",
  mounted() {
    this.$store.dispatch("loadMesh");
  },
  methods: {
    ...mapActions(["loadMesh"]),
    ...mapMutations(["setMesh"])
  },
  computed: {
    ...mapGetters(["meshdetail"]),
    ...mapState(["mesh"])
  },
  data: () => ({
    dialog: false,
    rating: 4,
    itemsPerPage: 4,
    desserts: [
      {
        data: "Paratha",
        value: "Rajma"
      },
      {
        data: "Paratha ",
        value: "Rajma"
      }
    ],
    din: [
      {
        title: "dinesh",
        monday: "Monday",
        tuesday: "Tuesday",
        wed: "Wedneday",
        thus: "Thusday",
        fir: "Firday",
        sat: "Saturday",
        m: "Aallo Parath",
        t: "Chholy Bhature",
        w: "Puri Sabji",
        th: "Paratha Sabji",
        f: "Sandwich",
        s: "Dessert"
      }
    ],

    items: [
      {
        name: "Breakfast",
        allo: " Paratha",
        egg: "egg"
      },
      {
        name: "Launch",
        rajma: "Rajma",
        chawal: "Chawal"
      },
      {
        name: "Snacks",
        tea: "Tea",
        chips: "Chips"
      },
      {
        name: "Dinner",
        roti: "Roti",
        dal: "Dal"
      }
    ],
    dii: [
      {
        food: "Breakfast"
      },
      {
        food: "Launch"
      },
      {
        food: "Snacks"
      },
      {
        food: "Dinner"
      }
    ]
  })
});
</script>
