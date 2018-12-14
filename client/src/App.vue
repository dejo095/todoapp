<template>
  <v-app>
    <toolbar/>
    <router-view class="mt-5"/>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar.vue';

export default {
  name: 'App',
  data() {
    return {
      //
    };
  },
  components: {
    Toolbar,
  },
};
</script>
