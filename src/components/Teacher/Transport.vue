<template>
  <v-container>
    <v-row>
      <!-------------------Driver--------------------->
      <v-col class v-for="card in cards" :key="card.id">
        <v-hover v-slot:default="{ hover }" open-delay="200">
          <v-card :elevation="hover ? 16 : 2">
            <v-row>
              <v-col>
                <div id="avatar" class="text-center">
                  <v-avatar size="70" color="grey"></v-avatar>
                </div>
                <v-col class="text-center">
                  <v-chip class="ma-2" color="green" text-color="white">Driver</v-chip>
                </v-col>
              </v-col>
              <v-col>
                <v-card-title class="gray--text justify-center">{{ card.name }}</v-card-title>
                <v-divider></v-divider>
                <v-list dense>
                  <v-list-item-group v-model="item" color="primary">
                    <v-list-item v-for="(item, i) in items" :key="i">
                      <v-list-item-content>
                        <v-list-item-title v-text="item.data"></v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-content>
                        <v-list-item-title v-text="item.value"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-col>
            </v-row>
          </v-card>
        </v-hover>
      </v-col>
      <!-------------------/Driver------------------------>
      <!-------------------Conductor--------------------->
      <v-col class v-for="card in cards" :key="card.id">
        <v-hover v-slot:default="{ hover }" open-delay="200">
          <v-card :elevation="hover ? 16 : 2">
            <v-row>
              <v-col>
                <v-card-title class="gray--text justify-center">{{ card.name }}</v-card-title>
                <v-divider></v-divider>
                <v-list dense>
                  <v-list-item-group v-model="item" color="primary">
                    <v-list-item v-for="(item, i) in items" :key="i">
                      <v-list-item-content>
                        <v-list-item-title v-text="item.data"></v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-content>
                        <v-list-item-title v-text="item.value"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-col>
              <v-col>
                <div id="avatar" class="text-center">
                  <v-avatar size="70" color="grey"></v-avatar>
                </div>
                <v-col class="text-center">
                  <v-chip class="ma-2" color="green" text-color="white">Conductor</v-chip>
                </v-col>
              </v-col>
            </v-row>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <!-------------------/conductor-------------------------------->
    <!---------------Request------------>

    <v-form class="ma-5">
      <v-select :items="Selectn" label="Select picker point" outlined></v-select>
      <v-textarea label="Address" placeholder=" Write here" required outlined></v-textarea>
      <div class="text-right">
        <v-row justify="center">
          <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark v-on="on">Request</v-btn>
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

              <!------------------2page-Driver--------------------->
              <v-container>
                <v-row>
                  <v-col class v-for="card in cards" :key="card">
                    <v-hover v-slot:default="{ hover }" open-delay="200">
                      <v-card :elevation="hover ? 16 : 2">
                        <v-row>
                          <v-col>
                            <div id="avatar" class="text-center">
                              <v-avatar size="70" color="grey"></v-avatar>
                            </div>
                            <v-col class="text-center">
                              <v-chip class="ma-2" color="green" text-color="white">Driver</v-chip>
                            </v-col>
                          </v-col>
                          <v-col>
                            <v-card-title class="gray--text justify-center">{{ card.name }}</v-card-title>
                            <v-divider></v-divider>
                            <v-list dense>
                              <v-list-item-group v-model="item" color="primary">
                                <v-list-item v-for="(item, i) in items" :key="i">
                                  <v-list-item-content>
                                    <v-list-item-title v-text="item.data"></v-list-item-title>
                                  </v-list-item-content>
                                  <v-list-item-content>
                                    <v-list-item-title v-text="item.value"></v-list-item-title>
                                  </v-list-item-content>
                                </v-list-item>
                              </v-list-item-group>
                            </v-list>
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-hover>
                  </v-col>
                  <!-------------------/Driver------------------------>
                  <!-------------------Conductor--------------------->
                  <v-col class v-for="card in cards" :key="card">
                    <v-hover v-slot:default="{ hover }" open-delay="200">
                      <v-card :elevation="hover ? 16 : 2">
                        <v-row>
                          <v-col>
                            <v-card-title class="gray--text justify-center">{{ card.name }}</v-card-title>
                            <v-divider></v-divider>
                            <v-list dense>
                              <v-list-item-group v-model="item" color="primary">
                                <v-list-item v-for="(item, i) in items" :key="i">
                                  <v-list-item-content>
                                    <v-list-item-title v-text="item.data"></v-list-item-title>
                                  </v-list-item-content>
                                  <v-list-item-content>
                                    <v-list-item-title v-text="item.value"></v-list-item-title>
                                  </v-list-item-content>
                                </v-list-item>
                              </v-list-item-group>
                            </v-list>
                          </v-col>
                          <v-col>
                            <div id="avatar" class="text-center">
                              <v-avatar size="70" color="grey"></v-avatar>
                            </div>
                            <v-col class="text-center">
                              <v-chip class="ma-2" color="green" text-color="white">Conductor</v-chip>
                            </v-col>
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-hover>
                  </v-col>
                </v-row>
                <div class="purple darken-2 text-center mt-10">
                  <span class="white--text .display-1">Bus Detail</span>
                </div>
                <v-alert text dense color="teal" border="left">
                  <v-simple-table>
                    <template v-slot:default>
                      <thead></thead>
                      <tbody>
                        <tr v-for="item in desserts" :key="item.name">
                          <td>{{ item.data }}</td>
                          <td></td>
                          <td>:</td>
                          <td></td>
                          <td>{{ item.value }}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-alert>
              </v-container>
              <!----------Bus details---------------->
            </v-card>
          </v-dialog>
        </v-row>
      </div>
    </v-form>
    <!-------------------------/---------------->
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Transport",

  data: () => ({
    dialog: false,
    notifications: false,
    sound: true,
    widgets: false,
    items: [
      { data: "ID:", value: "ID" },
      { data: "Contact:", value: "9999999999" }
    ],
    cards: [
      {
        name: "Pooja kapri"
      }
    ],
    desserts: [
      {
        data: "Bus",
        value: "UK07-AB-1020"
      },
      {
        data: "Route ID",
        value: "1027"
      },
      {
        data: "GPS ID",
        value: "GPS24805678"
      },
      {
        data: "Timing",
        value: "08:30"
      },
      {
        data: "Fee",
        value: "1500"
      }
    ]
  })
});
</script>
