<template>
  <v-app id="inspire">
    <!----------navigator------------->
    <v-navigation-drawer v-model="drawer" app color="#8232C0">
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>fas fa-search</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">Search</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>---</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">Issue Books</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>--</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">Return Books</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>--</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">Records</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>--</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">Add Books</v-list-item-title>
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
        <!----------student------------>
        <v-flex ma-3>
          <v-card>
            <v-tabs centered>
              <v-tab class="purple--text">Student Records</v-tab>
              <v-tab class="purple--text">Books Records</v-tab>
              <v-tab class="purple--text">All Records</v-tab>
              <!-----------------Student---Page------------------->
              <v-tab-item>
                <v-card flat>
                  <!----------------------->
                  <v-flex ma-3 xs12 sm12 md12>
                    <v-card raised>
                      <v-card-title class="justify-center">
                        <v-row>
                          <v-col>
                            <v-text-field
                              outlined
                              hide-details
                              label="Borrower id"
                              class="hidden-sm-and-down"
                              prepend-inner-icon="mdi-magnify"
                            />
                          </v-col>
                          <P class="mt-5">OR</P>
                          <v-col>
                            <v-btn x-large color="#8232C0" class="white--text">Scan Barcode</v-btn>
                          </v-col>
                        </v-row>
                      </v-card-title>
                    </v-card>
                  </v-flex>
                  <!------------------------->
                  <!---------------card----->
                  <v-flex ma-3 xs12 sm12 md6>
                    <v-card raised v-for="item in Borrower" :key="item.name">
                      <v-list>
                        <v-list-item-group v-model="model" multiple color="indigo">
                          <v-list-item>
                            <v-list-item-avatar color="grey" size="80">
                              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
                            </v-list-item-avatar>
                            <v-list-item-content>
                              <v-list-item-title class="grey--text">{{item.name}}</v-list-item-title>
                              <v-list-item-title class="grey--text">Roll No: {{item.rollno}}</v-list-item-title>
                              <v-list-item-title class="grey--text">Class: {{item.class}}</v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-list-item-group>
                      </v-list>
                    </v-card>
                  </v-flex>
                  <!------------------>
                  <!------------table1------------>
                  <v-flex ma-3 xs12 sm12 md12>
                    <p class="purple--text">Details</p>
                    <v-simple-table height="300px">
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-left">Issue id</th>
                            <th>image</th>
                            <th class="text-left">Subject</th>
                            <th class="text-left">Title</th>
                            <th class="text-left">Author</th>
                            <th class="text-left">Student id</th>
                            <th class="text-left">Fine</th>
                            <th class="text-left">Issue Date</th>
                            <th class="text-left">Return Date</th>
                            <th class="text-left">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item in desserts" :key="item.name">
                            <td>{{ item.id }}</td>
                            <td>
                              <v-avatar color="purple" size="36"></v-avatar>
                            </td>
                            <td>{{ item.subject }}</td>
                            <td>{{ item.title }}</td>
                            <td>{{ item.author }}</td>
                            <td>{{ item.studentid }}</td>
                            <td>{{item.fine}}</td>
                            <td>{{ item.issuedate }}</td>
                            <td>{{item.returndate}}</td>

                            <td>
                              <v-chip color="#8232C0" text-color="white">View</v-chip>
                            </td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-flex>
                  <!-----------------/table------->
                </v-card>
              </v-tab-item>
              <!---------------EnD--------------------------------->

              <!--------------------------Book---------------->
              <v-tab-item>
                <!----------------------->
                <v-flex ma-3 xs12 sm12 md12>
                  <v-card raised>
                    <v-card-title class="justify-center">
                      <v-row>
                        <v-col>
                          <v-text-field
                            outlined
                            hide-details
                            label="Search"
                            class="hidden-sm-and-down"
                            prepend-inner-icon="mdi-magnify"
                          />
                          <h6 class="grey--text">*Search by book title,author,subject &id</h6>
                        </v-col>
                        <P class="mt-5">OR</P>
                        <v-col>
                          <v-btn x-large color="#8232C0" class="white--text">Scan Barcode</v-btn>
                        </v-col>
                      </v-row>
                    </v-card-title>
                  </v-card>
                </v-flex>
                <!--------------------------->
                <!--------card-------------->
                <v-flex ma-3 xs12 sm12 md6>
                  <v-card raised>
                    <v-list v-for="item in card" :key="item.name">
                      <v-list-item-group v-model="model" multiple color="indigo">
                        <v-list-item>
                          <v-list-item-avatar color="grey" size="80">
                            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title class="grey--text">Subject: {{item.subject}}</v-list-item-title>
                            <v-list-item-title class="grey--text">Title: {{item.title}}</v-list-item-title>
                            <v-list-item-title class="grey--text">Author: {{item.author}}</v-list-item-title>
                            <v-list-item-title class="grey--text">Copies: {{item.copies}}</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list-item-group>
                    </v-list>
                  </v-card>
                </v-flex>
                <!------------/card---------->
                <!-------------Table in table 2---------------->
                <v-flex ma-3 xs12 sm12 md12>
                  <p class="purple--text">Details</p>
                  <v-simple-table height="300px">
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">Issue id</th>

                          <th class="text-left">Image</th>
                          <th class="text-left">Name</th>
                          <th class="text-left">Borrower id</th>
                          <th class="text-left">Book id</th>
                          <th class="text-left">Fine</th>
                          <th class="text-left">Issue Date</th>
                          <th class="text-left">Return Date</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in table" :key="item.name">
                          <td>{{ item.id }}</td>
                          <td>
                            <v-avatar color="purple" size="36"></v-avatar>
                          </td>
                          <td>{{ item.name }}</td>
                          <td>{{ item.bid }}</td>
                          <td>{{ item.bookid}}</td>
                          <td>{{ item.fine }}</td>
                          <td>{{ item.issuedate }}</td>
                          <td>{{item.returndate}}</td>

                          <td class="red--text">{{item.status}}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-flex>
                <!--------/table----------->
              </v-tab-item>
              <!---------------ENd------------------------------->
              <!--------------------------All---------------->
              <v-tab-item>
                <v-card raised centered>
                  <v-flex ma-3 xs12 sm12 md12>
                    <!-----------calender------------------>

                    <v-row>
                      <v-col cols="12" lg="6">
                        <v-menu
                          ref="menu1"
                          v-model="menu1"
                          :close-on-content-click="false"
                          transition="scale-transition"
                          offset-y
                          max-width="290px"
                          min-width="290px"
                        >
                          <template v-slot:activator="{ on }">
                            <v-text-field
                              v-model="dateFormatted"
                              label=" From Date"
                              persistent-hint
                              @blur="date = parseDate(dateFormatted)"
                              v-on="on"
                              outlined
                            ></v-text-field>
                          </template>
                          <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
                        </v-menu>
                      </v-col>

                      <v-col cols="12" lg="6">
                        <v-menu
                          v-model="menu2"
                          :close-on-content-click="false"
                          transition="scale-transition"
                          offset-y
                          max-width="290px"
                          min-width="290px"
                        >
                          <template v-slot:activator="{ on }">
                            <v-text-field
                              v-model="computedDateFormatted"
                              label="To Date"
                              persistent-hint
                              readonly
                              v-on="on"
                              outlined
                            ></v-text-field>
                          </template>
                          <v-date-picker v-model="date" no-title @input="menu2 = false"></v-date-picker>
                        </v-menu>
                      </v-col>
                    </v-row>

                    <!------------/calender----------->
                    <!------------button------------->

                    <v-row>
                      <v-col md="6">
                        <v-card class="pa-2" outlined tile>
                          <v-btn
                            x-large
                            color="#8232C0"
                            class="white--text"
                            width="480"
                          >Issue Details</v-btn>
                        </v-card>
                      </v-col>
                      <v-col md="6" class="ml-auto">
                        <v-card class="pa-2" outlined tile>
                          <v-btn
                            x-large
                            color="#8232C0"
                            class="white--text"
                            width="480"
                          >Return Details</v-btn>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-flex>
                </v-card>
                <!---------------table------------------>
                <v-flex ma-3 xs12 sm12 md12>
                  <p class="purple--text">Details</p>
                  <v-simple-table height="300px">
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">Issue id</th>
                          <th>image</th>
                          <th class="text-left">Subject</th>
                          <th class="text-left">Title</th>
                          <th class="text-left">Author</th>
                          <th class="text-left">Student id</th>
                          <th class="text-left">Issue Date</th>
                          <th class="text-left">Return Date</th>
                          <th class="text-left">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in desserts" :key="item.name">
                          <td>{{ item.id }}</td>
                          <td>
                            <v-avatar color="purple" size="36"></v-avatar>
                          </td>
                          <td>{{ item.subject }}</td>
                          <td>{{ item.title }}</td>
                          <td>{{ item.author }}</td>
                          <td>{{ item.studentid }}</td>
                          <td>{{ item.issuedate }}</td>
                          <td>{{item.returndate}}</td>

                          <td>
                            <v-chip color="#8232C0" text-color="white">View</v-chip>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-flex>
              </v-tab-item>
              <!-----------------End----------------------------->
            </v-tabs>
          </v-card>
        </v-flex>
        <!------------------------>
        <!------------------------------>
      </v-container>
    </v-content>
    <v-footer color="#8232C0" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu1: false,
    menu2: false,
    drawer: null,
    Borrower: [
      {
        name: "Mukesh Singh",
        rollno: "102",
        class: "V(B)"
      }
    ],
    desserts: [
      {
        id: "1001",
        subject: "English",
        title: "The shadow",
        author: "Dr.shubham",
        studentid: "1100",
        issuedate: "1/02/2020",
        returndate: "04/04/2020",
        fine: "10",
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
        fine: "10",
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
        fine: "10",
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
        fine: "10",
        action: ""
      }
    ],
    table: [
      {
        id: "1001",
        name: "Anil kumar",
        bid: "121",
        bookid: "2201",
        fine: "10",
        issuedate: "1/02/2020",
        returndate: "04/04/2020",
        status: "padding...."
      },
      {
        id: "1001",
        name: "Anil kumar",
        bid: "121",
        bookid: "2201",
        fine: "10",
        issuedate: "1/02/2020",
        returndate: "04/04/2020",
        status: "padding...."
      },
      {
        id: "1001",
        name: "Anil kumar",
        bid: "121",
        bookid: "2201",
        fine: "10",
        issuedate: "1/02/2020",
        returndate: "04/04/2020",
        status: "padding...."
      }
    ],
    card: [
      {
        subject: "English",
        title: "The shadow",
        author: "Dr.Rekha Joshi",
        copies: "10"
      }
    ]
  })
};
</script>
