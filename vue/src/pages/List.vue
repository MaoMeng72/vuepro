<template>
    <div id="list">
        <p>饮品系列</p>
        <ul>
            <transition-group 
                enter-active-class = "bounceInUp"
                leave-active-class = "bounceOutDown"    
            >
                <li
                    class="animated"
                     :style=" `animation-delay: ${index*50}ms`"
                     v-for="(item,index) of list"
                     :key="item.id"
                >
                    <router-link :to="{name:'detail',params:{aid:item.id} }" ><img :src="item.src" alt=""><em>{{item.name}}</em><span>${{item.price}}</span></router-link>
                </li>
            </transition-group>
        </ul>
    </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex";
import {UPDATE_LIST} from '../plugins/store/types';
import axios from 'axios'
export default {
    mounted () {
        this.$store.dispatch(UPDATE_LIST);
    },
    computed:mapGetters([
        'list'
    ])
}
</script>

<style lang="scss" scoped>
@import '@/lib/reset.scss';
p{color:#28b28b;font-size: 1.5rem;line-height: 2rem;}
ul{overflow: hidden;
    li{float: left;padding-left:2.2rem;padding-top:1.5rem;
        img{display: block;width:9rem;height: 12rem;}
        em{display: block;text-align: left;color:#333;margin-top:.5rem;font-size: 1rem;line-height: 2rem;}
        span{display: block;color:#28b28b;text-align: left;font-size: .9rem;line-height: 1.8rem;}}
}
</style>
