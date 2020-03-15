<template>
  <v-app id="inspire">
    <!----------navigator------------->
    <v-navigation-drawer v-model="drawer" app color="#8232C0">
      <v-list dense>
        <v-list-item
          link
          v-for="link in link"
          :key="link.text"
          route
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon>{{ link.search }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!----------/navigator------------------>

    <v-app-bar app color="#8232C0" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Library</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <v-flex ma-3 xs12 sm12 md12>
          <v-card raised>
            <v-card-title class="justify-center purple--text"
              >Issue Books</v-card-title
            >
          </v-card>
        </v-flex>
        <!------------------------>
        <!---------------------->
        <v-flex ma-3 xs12 sm12 md12>
          <v-card raised shaped>
            <v-card-title class="justify-center">
              <v-row>
                <v-col>
                  <v-text-field outlined label="Student ID." />
                </v-col>
                <P class="mt-5">OR</P>
                <v-col>
                  <v-btn x-large color="#8232C0" class="white--text"
                    >Scan Student Barcode</v-btn
                  >
                </v-col>
              </v-row>
            </v-card-title>

            <v-card-subtitle class="mb-4">
              <v-row>
                <v-col>
                  <v-text-field outlined label="02/04/2020" />
                </v-col>
                <v-col class="ml-5">
                  <v-btn x-large color="#8232C0" class="white--text" width="270"
                    >Scan Book Barcode</v-btn
                  >
                </v-col>
              </v-row>
            </v-card-subtitle>
            <div class="text-center">
              <v-btn rounded color="green" dark class="mb-5" width="200"
                >Issues</v-btn
              >
            </div>
          </v-card>
        </v-flex>
        <!-------------------------->
        <!------------------->
        <v-flex ma-3 xs12 sm12 md12>
          <p class="purple--text">Book Details</p>
          <v-simple-table height="300px">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Issue ID</th>
                  <th class="text-left">Subject</th>
                  <th class="text-left">Title</th>
                  <th class="text-left">Author</th>
                  <th class="text-left">Student Id</th>
                  <th class="text-left">Return Date</th>

                  <th class="text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.name">
                  <td>{{ item.id }}</td>
                  <td>{{ item.subject }}</td>
                  <td>{{ item.title }}</td>
                  <td>{{ item.author }}</td>
                  <td>{{ item.studentid }}</td>
                  <td>{{ item.returndate }}</td>

                  <td>
                    <v-chip color="#8232C0" text-color="white">View</v-chip>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-flex>
        <!------------------------------>
      </v-container>
    </v-content>
    <v-footer color="#8232C0" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IssueBook",

  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu1: false,
    menu2: false,
    drawer: null,
    desserts: [
      {
        id: "1001",
        subject: "English",
        title: "The shadow",
        author: "Dr.shubham",
        studentid: "1100",
        issuedate: "1/02/2020",
        returndate: "04/04/2020",
        action: ""
      },
      {
        id: "1001",
        subject: "English",
        title: "The shadow",
        author: "Dr.shubham",
        studentid: "1100",
        issuedate: "1/02/2020",
        returndate: "04/04/2020",
        action: ""
      },
      {
        id: "1001",
        subject: "English",
        title: "The shadow",
        author: "Dr.shubham",
        studentid: "1100",
        issuedate: "1/02/2020",
        returndate: "04/04/2020",
        action: ""
      },
      {
        id: "1001",
        subject: "English",
        title: "The shadow",
        author: "Dr.shubham",
        studentid: "1100",
        issuedate: "1/02/2020",
        returndate: "04/04/2020",
        action: ""
      }
    ],
    link: [
      {
        icon: "search",
        text: "Search",
        route: "/Search"
      },
      {
        icon: "",
        text: "Issue Books",
        route: "/IssueBook"
      },
      {
        icon: "",
        text: "Return Books",
        route: "/RetunBook"
      },
      {
        icon: "",
        text: "Records",
        route: "/Record"
      },
      {
        icon: "",
        text: "Add Books",
        route: "/AddBook"
      }
    ]
  })
});
</script>
