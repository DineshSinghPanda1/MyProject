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
        <!----------search------------>
        <v-flex ma-3>
          <v-card raised>
            <v-card-title class="justify-center purple--text"
              >Search</v-card-title
            >
          </v-card>
        </v-flex>
        <!------------------------>
        <!---------------------->
        <v-flex ma-3>
          <v-card raised>
            <v-card-title class="justify-center">
              <v-row align="center">
                <v-col>
                  <v-text-field
                    outlined
                    hide-details
                    label="Search book by name ,id..."
                    class="hidden-sm-and-down"
                    prepend-inner-icon="mdi-magnify"
                  />
                </v-col>
                <v-col>
                  <v-btn
                    color="deep-purple lighten-1  white--text"
                    height="55"
                    width="120"
                    >Search</v-btn
                  >
                </v-col>
              </v-row>
            </v-card-title>
          </v-card>
        </v-flex>
        <!-------------------------->
        <!---------table---------->
        <v-flex ma-3 mt-12>
          <p class="purple--text">Book Details</p>
          <v-simple-table height="300px" light>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">ID</th>
                  <th class="text-left">Subject</th>
                  <th class="text-left">Title</th>
                  <th class="text-left">Author</th>
                  <th class="text-left">Shelf</th>
                  <th class="text-left">Editor</th>
                  <th class="text-left">Available</th>
                  <th class="text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.name">
                  <td>{{ item.id }}</td>
                  <td>{{ item.subject }}</td>
                  <td>{{ item.title }}</td>
                  <td>{{ item.author }}</td>
                  <td>{{ item.shelf }}</td>
                  <td>{{ item.editor }}</td>
                  <td>{{ item.avilable }}</td>
                  <td>
                    <v-chip color="#8232C0" text-color="white">Issue</v-chip>
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
      <span class="white--text">&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    desserts: [
      {
        id: "1001",
        subject: "English",
        title: "The shadow",
        author: "Dr.shubham",
        shelf: "106",
        editor: "06",
        avilable: "true",
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
};
</script>
