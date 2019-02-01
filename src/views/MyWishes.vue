<template>
  <v-container>
    <v-layout row wrap>
      <v-flex>
        <p class="display-2 pl-3">Your WishList</p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm3 v-for="n in 10" :key="n" class="pl-3 pt-2">
          <v-card color="blue-grey darken-4" class="white--text">
            <v-layout>
              <v-flex xs5>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                  height="125px"
                  contain
                ></v-img>
              </v-flex>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">Supermodel</div>
                    <div>Foster the People</div>
                    <div>(2014)</div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider light></v-divider>
            <v-card-actions class="pa-3">
              Rate this album
              <v-spacer></v-spacer>
              <v-icon>star_border</v-icon>
              <v-icon>star_border</v-icon>
              <v-icon>star_border</v-icon>
              <v-icon>star_border</v-icon>
              <v-icon>star_border</v-icon>
            </v-card-actions>
          </v-card>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class MyWishes extends Vue {

}
</script>

<style lang="sass" scoped>

</style>

