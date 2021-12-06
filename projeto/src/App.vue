<template>
  <v-app>
    <v-main>
        <SystemBar/>
        <AppBar/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import SystemBar from '@/components/SystemBar.vue'
import AppBar from '@/components/AppBar.vue'


export default {
  name: 'App',

  components: {
      SystemBar,
      AppBar,
  },

  data: () => ({
    //
  }),
};
</script>
