<template>
  <v-container>
    <v-tabs centered>
      <!-----------tab 1--------------- -->
      <v-tab>Test</v-tab>
      <v-tab-item>
        <v-row>
          <v-col>
            <v-card v-for="item in marksheetdetail" :key="item">
              <v-card-text class="grey text-center">Test</v-card-text>
              <v-simple-table height="300px">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Subject</th>
                      <th class="text-left">Date</th>
                      <th class="text-left">Total</th>
                      <th class="text-left">Obtain</th>
                      <th class="text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(data,index) in item" :key="index">
                      <td>{{ item[index].subject }}</td>
                      <td>{{ item[index].date }}</td>
                      <td>{{ item[index].max_marks }}</td>
                      <td>{{ item[index].marks_obtained }}</td>
                      <td>{{ item[index].grade }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <div class="text-center">
                <v-btn class="ma-5" color="purple lighten-3">Print</v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-tab-item>
      <!-------------------------/-------------------->
      <!---------------- tab-2------------------------  -->
      <v-tab>Assesment</v-tab>
      <v-tab-item>
        <v-row>
          <v-col v-for="per in sample2" :key="per.name">
            <v-card>
              <v-card-text class="grey text-center">{{ per.title }}</v-card-text>
              <v-simple-table height="300px">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Subject</th>
                      <th class="text-left">Date</th>
                      <th class="text-left">Total</th>
                      <th class="text-left">Obtain</th>
                      <th class="text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{{ per.subject }}</td>
                      <td>{{ per.date }}</td>
                      <td>{{ per.total }}</td>
                      <td>{{ per.obtain }}</td>
                      <td>{{ per.status }}</td>
                    </tr>
                    <tr>
                      <td>{{ per.subject }}</td>
                      <td>{{ per.date }}</td>
                      <td>{{ per.total }}</td>
                      <td>{{ per.obtain }}</td>
                      <td>{{ per.status }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <div class="text-center">
                <div>
                  <v-btn class="ma-2" color="primary" dark>
                    Print
                    <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
                  </v-btn>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-tab-item>
      <!------------------------ tab-3----------------------- -->
      <v-tab>Extra Curricular</v-tab>
      <v-tab-item>
        <v-row>
          <v-col v-for="p in sample3" :key="p.name">
            <v-card>
              <v-card-text class="grey text-center">{{ p.title }}</v-card-text>
              <v-simple-table height="300px">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Subject</th>
                      <th class="text-left">Date</th>
                      <th class="text-left">Total</th>
                      <th class="text-left">Obtain</th>
                      <th class="text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{{ p.subject }}</td>
                      <td>{{ p.date }}</td>
                      <td>{{ p.total }}</td>
                      <td>{{ p.obtain }}</td>
                      <td>{{ p.status }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <div class="text-center">
                <v-btn class="ma-2" color="primary" dark>
                  Print
                  <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions, mapState, mapMutations } from "vuex";

export default Vue.extend({
  name: "Marksheet",
  mounted() {
    this.$store.dispatch("loadMarksheet");
  },
  methods: {
    ...mapActions(["loadMarksheet"]),
    ...mapMutations(["setMarksheet"])
  },
  computed: {
    ...mapGetters(["marksheetdetail"]),
    ...mapState(["marksheet"])
  },

  data: () => ({
    sample1: [
      {
        title: "Test",
        subject: "Math",
        date: "02/03/2020",
        total: "16",
        obtain: "9",
        status: "Excellence"
      }
    ],
    sample2: [
      {
        title: "Assesment",
        subject: "English",
        date: "02/03/2020",
        total: "16",
        obtain: "9",
        status: "Excellence"
      }
    ],
    sample3: [
      {
        title: "Extra Curriculam",
        subject: "Yoga",
        date: "02/03/2020",
        total: "16",
        obtain: "9",
        status: "Excellence"
      }
    ]
  })
});
</script>
