<template>
  <div id="app">
    <transition 
      enter-active-class = "animated bounceInRight"
		  leave-active-class = "animated bounceOutLeft"
    >
      <Header v-show="bNav"></Header>
    </transition>
    <!-- <div class="box"></div> -->
    <router-view></router-view>
  </div>
</template>
<script>
import {mapActions,mapGetters} from "vuex";
import  Header from "./components/Header";
import * as types from './plugins/store/types';
export default {
  name: 'app',
  components: {
    Header
  },
  watch:{
    $route:{//路由监听-》数据观测
      handler(to){
        let path = to.path;

        if(/index|follow|buycat|list|user/.test(path)){
          this.$store.commit(types.VIEW_NAV,true);
        }
        if(/detail|login|reg/.test(path)){
          this.$store.commit(types.VIEW_NAV,false);
        }

      },
      immediate:true
    }
  },
  computed:mapGetters([
    'bNav'
  ])
}
</script>

<style>
  .box{height: 1.16rem;}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
