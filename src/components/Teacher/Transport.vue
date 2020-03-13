<template>
  <v-container>
    <!---------------Request------------>
    <v-form class="ma-5">
      <v-select
        :items="Selectn"
        label="Select picker point"
        outlined
      ></v-select>
      <v-textarea
        label="Address"
        placeholder=" Write here"
        required
        outlined
      ></v-textarea>
      <div class="text-right">
        <v-row justify="center">
          <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
          >
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark v-on="on">Request</v-btn>
            </template>
            <!----------------------------------------------->
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
              <!------------------2page-Driver--------------------->
              <!--------------------------->
              <v-container class="grey lighten-5">
                <!----------------Driver -->
                <v-row>
                  <v-col v-for="n in 1" :key="n" cols="6">
                    <v-hover v-slot:default="{ hover }" open-delay="200">
                      <v-card :elevation="hover ? 16 : 2">
                        <v-row>
                          <v-col>
                            <div id="avatar" class="text-center">
                              <v-avatar size="70" color="grey"></v-avatar>
                            </div>
                            <v-col class="text-center">
                              <v-chip
                                class="ma-2"
                                color="green"
                                text-color="white"
                                >Driver</v-chip
                              >
                            </v-col>
                          </v-col>
                          <v-col>
                            <v-card-title class="gray--text justify-center">
                              {{ transportdetail.driver.first_name }}
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-row>
                              <v-col>ID:</v-col>
                              <v-col>{{ transportdetail.driver.id }}</v-col>
                            </v-row>
                            <v-row>
                              <v-col>Contact:</v-col>
                              <v-col>{{
                                transportdetail.driver.contacts1
                              }}</v-col>
                            </v-row>
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-hover>
                  </v-col>
                  <!-------------------?Driver------------------->
                  <!--------------------Conductor----------------->

                  <v-col v-for="n in 1" :key="n" cols="6">
                    <v-hover v-slot:default="{ hover }" open-delay="200">
                      <v-card :elevation="hover ? 16 : 2" class="pl-5">
                        <v-row>
                          <v-col>
                            <v-card-title class="gray--text justify-center">
                              {{ transportdetail.conductor.first_name }}
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-row>
                              <v-col>ID:</v-col>
                              <v-col>{{ transportdetail.conductor.id }}</v-col>
                            </v-row>

                            <v-row>
                              <v-col>Contact:</v-col>
                              <v-col>{{
                                transportdetail.conductor.contacts1
                              }}</v-col>
                            </v-row>
                          </v-col>
                          <v-col>
                            <div id="avatar" class="text-center">
                              <v-avatar size="70" color="grey"></v-avatar>
                            </div>
                            <v-col class="text-center">
                              <v-chip
                                class="ma-2"
                                color="green"
                                text-color="white"
                                >Conductor</v-chip
                              >
                            </v-col>
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-hover>
                  </v-col>
                </v-row>
                <!----------/End----->
              </v-container>
              <!-------------Bus Detail--------->
              <v-container>
                <div class="purple darken-2 text-center mt-10">
                  <span class="white--text .display-1">Bus Detail</span>
                </div>
                <v-alert>
                  <v-simple-table>
                    <template v-slot:default>
                      <tbody>
                        <tr>
                          <td>Bus</td>
                          <td>{{ transportdetail.bus.bus_number }}</td>
                        </tr>
                        <tr>
                          <td>Route ID</td>
                          <td>--</td>
                        </tr>
                        <tr>
                          <td>GPS ID</td>
                          <td>{{ transportdetail.bus.gps }}</td>
                        </tr>
                        <tr>
                          <td>Timing</td>
                          <td>{{ transportdetail.bus.arrival_time }}</td>
                        </tr>
                        <tr>
                          <td>Fee</td>
                          <td>--</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-alert>
              </v-container>
              <!----------/Bus details---------------->
            </v-card>
          </v-dialog>
        </v-row>
      </div>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions, mapState, mapMutations } from "vuex";

export default Vue.extend({
  name: "Transport",
  mounted() {
    this.$store.dispatch("loadTransport");
  },
  methods: {
    ...mapActions(["loadTransport"]),
    ...mapMutations(["setTransport"])
  },
  computed: {
    ...mapGetters(["transportdetail"]),
    ...mapState(["transport"])
  },

  data: () => ({
    dialog: false,
    notifications: false,
    sound: true,
    widgets: false
  })
});
</script>
