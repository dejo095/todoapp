<template>
  <v-app>
    <toolbar/>
    <router-view class="main"/>
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
<style lang="stylus" scoped>
    .main
        margin-top 80px
</style>

