<template>
  <v-container>
    <!-----------------Navbar--------->
    <v-app-bar dark color="purple darken-1">
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-avatar size="36px">
          <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" alt="avatar" />
        </v-avatar>
      </v-btn>

      <!--menu bar -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="itemm in itemm" :key="itemm" @click="itemm">
            <v-list-item-icon>
              <v-icon>{{ itemm.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ itemm.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-----------/menu------------>
    </v-app-bar>
    <!-----------/navbar------------->
    <!--------------House-------------->
    <v-card class="mt-5">
      <v-flex>
        <v-row>
          <v-chip :ripple="false" color="red white--text" class="ml-5 ma-3">Red Panthor 250</v-chip>
          <v-spacer></v-spacer>
          <v-chip :ripple="false" color="indigo white--text " class="ma-3">Blue Ranger 123</v-chip>
          <v-spacer></v-spacer>
          <v-chip :ripple="false" color="yellow white--text" class="ma-3">Medallon 320</v-chip>
          <v-spacer></v-spacer>
          <v-chip :ripple="false" color="green white--text" class="mr-5 ma-3" size="100">Fern 230</v-chip>
        </v-row>
      </v-flex>
    </v-card>
    <!-------------------->
    <div class v-for="item in cards" :key="item.text">
      <v-btn class="purple white--text ml-10 mt-3">class {{item.class}}</v-btn>
      <v-alert outlined color="purple">
        <!-------------------Card-------------------->
        <v-layout>
          <v-flex md="3">
            <v-hover v-slot:default="{ hover }" open-delay="200">
              <v-card :elevation="hover ? 16 : 2" raised width="300">
                <v-card-title class="purple--text justify-center">Section {{ item.section }}</v-card-title>
                <v-divider></v-divider>
                <v-list>
                  <v-list-item-group v-model="model" multiple color="indigo">
                    <v-list-item>
                      <v-list-item-avatar color="grey" size="80">
                        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="purple--text">Name: {{ item.name}}</v-list-item-title>
                        <v-list-item-title class="purple--text">Subject:{{item.subject }}</v-list-item-title>
                        <v-list-item-title class="purple--text">Strength: {{item.strenght }}</v-list-item-title>
                        <v-list-item-title class="purple--text">Present: {{item.present}}</v-list-item-title>
                        <v-list-item-title class="purple--text">Absent:{{item.absent }}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card>
            </v-hover>
          </v-flex>
        </v-layout>
      </v-alert>
      <!----------------->

      <v-flex offset-md-8 align-end>
        <div>
          <!------------------Creating session ---------->
          <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="600px">
              <template v-slot:activator="{ on }">
                <v-btn dark v-on="on" class="white--text ma-2" color="#8232C0">Create Session +</v-btn>
              </template>
              <v-card>
                <v-card-title class="justify-center">
                  <span class="headline" color="red">Create Section</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="6">
                        <v-select :items="items" label="Section" outlined></v-select>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-select :items="items" label="Class Teacher" outlined></v-select>
                      </v-col>
                    </v-row>
                    <!--------------card in creating---------->
                    <v-row>
                      <v-col cols="12" md="12" sm="6">
                        <v-hover v-slot:default="{ hover }">
                          <v-card
                            :elevation="hover ? 8 : 2"
                            class
                            v-for="data in data"
                            :key="data.text"
                          >
                            <!-------------------->
                            <v-list>
                              <v-list-item>
                                <v-list-item-avatar color="grey" size="100"></v-list-item-avatar>
                                <v-list-item-content>
                                  <v-list-item-title class="title">{{data.name}}</v-list-item-title>
                                  <v-divider></v-divider>
                                  <v-list-item-text class="body-2">
                                    <p>School Id: {{data.sid}}</p>
                                    <p>Age Group : {{data.ageg}}</p>
                                    <p>Mobile No: {{data.mb}}</p>
                                    <p>Subject: {{data.sub}}</p>
                                  </v-list-item-text>
                                  <v-divider></v-divider>
                                  <!--------------------->
                                </v-list-item-content>
                              </v-list-item>
                            </v-list>

                            <!------------------------->
                          </v-card>
                        </v-hover>
                      </v-col>
                    </v-row>
                    <!--------------/card in creating---------->
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn class="ma-5" color="purple white--text" @click="dialog = false">Create</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <!-----------------------/creating ------------>
            <!-----------Registration----------->
          </v-row>

          <!---------------/Reg--------------------->
        </div>
      </v-flex>

      <!--------------------->
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AdminHouse",

  data: () => ({
    dialog: false,
    items: ["Foo", "Bar", "Fizz", "Buzz"],
    itemm: [
      { title: "Sign out", icon: "mdi-logout" },
      { title: "Login", icon: "mdi-login" }
    ],
    cards: [
      {
        class: "1",
        section: "A",
        name: "Dinesh",
        subject: "English",
        present: "23",
        absent: "1"
      },
      {
        class: "2",
        section: "A",
        name: "Dinesh",
        subject: "English",
        present: "23",
        absent: "1"
      }
    ],
    data: [
      {
        name: "Mukesh singh",
        sid: "101",
        ageg: "A",
        mb: "87878979797",
        sub: "English"
      }
    ]
  })
});
</script>
