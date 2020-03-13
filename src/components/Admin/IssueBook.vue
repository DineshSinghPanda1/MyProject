<template>
  <v-container>
    <!---------------------->
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
      <v-card raised shaped="">
        <v-card-title class="justify-center">
          <v-row>
            <v-col>
              <v-text-field outlined label="Student ID." />
            </v-col>
            <P class="mt-5"> OR </P>
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
                <v-chip color="#8232C0" text-color="white">View</v-chip>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-flex>
    <!------------------------------>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IssueBook",

  data: () => ({
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
      },
      {
        id: "1001",
        subject: "English",
        title: "The shadow",
        author: "Dr.shubham",
        shelf: "106",
        editor: "06",
        avilable: "true",
        action: ""
      },
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
    ]
  })
});
</script>
