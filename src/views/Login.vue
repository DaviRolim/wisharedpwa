<template>
  <v-container fill-height>
        <v-layout row wrap align-center>
          <v-flex class="text-xs-center" xs12 sm6 offset-sm3>
            <v-card class="elevation-5">
               <v-toolbar>
                <transition name="fadeOne">
                  <v-toolbar-title v-show="isLoginMode">Login to your wishared account</v-toolbar-title>
                </transition>
                <transition name="fadeTwo">
                  <v-toolbar-title v-show="!isLoginMode">Signup</v-toolbar-title>
                </transition>
          </v-toolbar>
              <v-card-text>
            <v-container>
              <form v-on:keyup.enter="onSignin">
                <v-layout row wrap>
                  <v-flex v-if="!isLoginMode" xs12>
                    <v-text-field
                    name="name"
                    label="Full Name"
                    id="name"
                    v-model="name"
                    type="text"
                    prepend-icon="person"
                    required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                    name="username"
                    label="username"
                    id="username"
                    v-model="username"
                    type="text"
                    prepend-icon="person"
                    required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                    name="password"
                    label="Password"
                    id="password"
                    v-model="password"
                    type="password"
                    prepend-icon="lock"
                    required></v-text-field>
                  </v-flex>
                  <v-flex v-if="!isLoginMode" xs12>
                    <v-text-field
                    name="confirmPassword"
                    label="Confirm Password"
                    id="confirmPassword"
                    v-model="confirmPassword"
                    type="password"
                    prepend-icon="lock"
                    required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="isLoginMode = !isLoginMode">{{isLoginMode ? 'Login' : 'create'}}</v-btn>
              </v-card-actions>
              </form>
            </v-container>
          </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { authService } from '@/service/auth-service';
import * as actions from '@/store/auth/actions.map'

@Component({
  components: {
    HelloWorld
  }
})
export default class Login extends Vue {
  private name: string = ''
  private username: string = ''
  private password: string = ''
  private isLoginMode: boolean = true
  private confirmPassword: string = ''

  private async signIn(email: string, password: string) {

  }
}
</script>

<style lang="scss" scoped>
.fadeOne-enter-active, .fadeOne-leave-active {
  transition: all .1s ease-out;
}
.fadeOne-enter, .fadeOne-leave-to {
  clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
  transform: translate(100%, 0%);
}
.fadeTwo-enter-active, .fadeTwo-leave-active {
  transition: all .2s ease-out;
}
.fadeTwo-enter, .fadeTwo-leave-to {
  clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
  transform: translate(100%, 0%);
}
</style>
