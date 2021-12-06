<template>
<div>
  <div class="row">
    <div class="col-md-3">
      <NavigationDrawer/>
    </div>
    <div class="col-md-9">
    <Content/>
    </div>
  </div>
  <Footer/>
  <BottomNavigation/>
</div>
</template>

<script>

import BottomNavigation from '../components/BottomNavigation.vue'
import Footer from '../components/Footer.vue'
import NavigationDrawer from '../components/NavigationDrawer.vue'
import Content from '../components/Content.vue'


  export default {
    name: 'Home',

    data(){
    },

    components: {
      BottomNavigation,
      NavigationDrawer,
      Footer,
      Content },
  }
</script>
