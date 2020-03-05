<template>
  <v-container>
    <v-card>
      <v-toolbar flat color="primary" dark>
        <v-toolbar-title>Time Table</v-toolbar-title>
      </v-toolbar>
      <v-tabs centered>
        <v-tab>Create</v-tab>
        <v-tab>View</v-tab>

        <!-----------------Created---Page------------------->
        <v-tab-item>1</v-tab-item>
        <!---------------EnD--------------------------------->
        <!--------------------------View---------------->
        <v-tab-item>
          <v-card>
            <!------------->
            <v-card-text>
              <v-row align="center">
                <v-col class="d-flex" cols="12" sm="4">
                  <v-select :items="Class" label="Class" outlined></v-select>
                </v-col>
                <v-col class="d-flex" cols="12" sm="4">
                  <v-select :items="Section" label="Section" outlined></v-select>
                </v-col>
              </v-row>
            </v-card-text>
            <!------------->
            <!------------main card------------->

            <v-alert outlined color="purple">
              <v-layout>
                <v-row>
                  <v-col class="ma-1" v-for="card in cards" :key="card.id">
                    <v-hover v-slot:default="{ hover }" open-delay="200">
                      <v-card :elevation="hover ? 16 : 2">
                        <!----------img---->
                        <v-col>
                          <div id="avatar" class="text-center">
                            <v-avatar size="70" color="grey" class="mt-n10"></v-avatar>
                          </div>
                        </v-col>
                        <!--------->
                        <div>
                          <v-card-title class=".font-weight-light justify-center">{{ card.name }}</v-card-title>
                        </div>

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

                        <!---------------------->

                        <!----------chip----------->
                        <v-row>
                          <v-col class="text-center">
                            <v-chip class="ma-2" color="green" text-color="white">Regular</v-chip>
                          </v-col>
                        </v-row>
                        <!--------------/chip---------->
                      </v-card>
                    </v-hover>
                  </v-col>
                </v-row>
              </v-layout>
              <!----------------------2 row----------->
              <v-layout>
                <v-row>
                  <v-col class="ma-1 mt-3" v-for="card in cards" :key="card.id">
                    <v-hover v-slot:default="{ hover }" open-delay="250%">
                      <v-card :elevation="hover ? 16 : 2">
                        <!----------img---->
                        <v-col>
                          <div id="avatar" class="text-center">
                            <v-avatar size="70" color="grey" class="mt-n10"></v-avatar>
                          </div>
                        </v-col>
                        <!--------->
                        <v-card-title class="justify-center">
                          {{
                          card.name
                          }}
                        </v-card-title>
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

                        <!---------------------->

                        <!----------chip----------->
                        <v-row>
                          <v-col class="text-center">
                            <v-chip class="ma-2" color="green" text-color="white">Regular</v-chip>
                          </v-col>
                        </v-row>
                        <!--------------/chip---------->
                      </v-card>
                    </v-hover>
                  </v-col>
                </v-row>
              </v-layout>
            </v-alert>
          </v-card>
        </v-tab-item>
        <!---------------ENd Mian------------------------------->
      </v-tabs>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Timetable",

  data: () => ({
    Class: ["I", "II", "III", "IV", "v"],
    Section: ["A", "B", "C", "D"],
    item: 1,
    items: [
      { title: "Pooja", data: "Subject:", value: "English" },
      { title: "Pooja", data: "Duration:", value: "10:00-11:00" },
      { title: "Pooja", data: "Period:", value: "1" }
    ],
    cards: [
      {
        name: "Pooja kapri"
      },
      {
        name: "Pooja kapri"
      },
      {
        name: "Pooja kapri"
      },
      {
        name: "Pooja kapri"
      }
    ]
  })
});
</script>
