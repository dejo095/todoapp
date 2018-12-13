<template>
  <v-app>
      <div id="app">
        <toolbar/>
        <router-view/>
      </div>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar.vue'

export default {
  name: 'App',
  data () {
    return {
      //
    }
  },
  components: {
      Toolbar,
  }
}
</script>
