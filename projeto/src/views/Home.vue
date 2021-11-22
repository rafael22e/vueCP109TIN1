<template>
<div>
  <SystemBar/>
  <AppBar/>
  <div class="col-md-3">
    <NavigationDrawer/>
  </div>
  <Footer/>
  <BottomNavigation/>
</div>
</template>

<script>
import SystemBar from '@/components/SystemBar.vue'
import AppBar from '../components/AppBar.vue'
import BottomNavigation from '../components/BottomNavigation.vue'
import Footer from '../components/Footer.vue'
import NavigationDrawer from '../components/NavigationDrawer.vue'

  export default {
    name: 'Home',

    components: {
      SystemBar,
      AppBar,
      BottomNavigation,
      NavigationDrawer,
      Footer },
  }
</script>
