<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-side-icon v-if="userAuthenticated" @click.stop="drawer = !drawer" class="hidden-sm-and-up" ></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase text-center">
        <span>WISHARED</span>
        <!-- <span class="font-weight-light">MATERIAL DESIGN</span> -->
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn> -->
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider light></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Getter, Action, State } from 'vuex-class'
import * as getters from '@/store/auth/getters.map'
import { authCredentials } from '@/interface/i-auth'

const namespace = 'auth'

@Component({})
export default class App extends Vue {
 @Getter(getters.authCredentials, { namespace })
  private authCredentials!: authCredentials

  private drawer: boolean = false
  private items = [
    { title: 'Home', icon: 'dashboard' },
    { title: 'About', icon: 'question_answer' }
  ]
  private get userAuthenticated () {
    console.log(this.authCredentials.token);
    return this.authCredentials.token != null
  }
}
</script>
