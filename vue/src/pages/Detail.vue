<template>
    <div id="detail">
        <div class="top">
            <img :src="detail.src" alt="">
            <span @click="back">&lt;</span>
        </div>
        <div class="title">
            <p class="name">{{detail.name}}</p>
            <p class="price">￥{{detail.price}}</p>
        </div>
        <div class="car">
            <input type="button" value="加入购物车">
            <p class="num">
                <span @click="add">+</span>
                <b>{{num}}</b>
                <span @click="reduce">-</span>
            </p>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import {mapGetters} from "vuex";
import {UPDATE_DETAIL} from '../plugins/store/types';
export default {
    data(){
        return {id:'',num:1}
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        add(){
            this.num++;
        },
        reduce(){
            if(this.num > 1){
                this.num--;
            }
        }
    },
    // props:['aid'],
    mounted(){
        // console.log(this.aid)
        this.id = this.$route.params.aid;
        // axios({
        //     url:`http://rap2api.taobao.org/app/mock/223098/alonemall`
        // }).then(
        //     (res)=>{
        //         this.detail = res.data.alone[this.id-1];
        //     }
        // )
        this.$store.dispatch(UPDATE_DETAIL,this.id-1);
    },
    computed:mapGetters([
        'detail'
    ])
}
</script>


<style scoped>
.top img{width: 100%;height: 22rem;}
.top{position: relative;}
.top span{position: absolute;top:0;left:0;right:0;background: rgba(243, 209, 215,0.4);color:coral;height: 3rem;font-size: 2.2rem;line-height: 3rem;text-align: left;}
.title{overflow: hidden;}
.title p{float: left;margin-right: 2rem;}
.title .name{padding-left: 1rem;font-size: 1.5rem;line-height: 3rem;color:#333;}
.title .price{font-size: 1.4rem;line-height: 3rem;color:crimson;}
.car{overflow: hidden;margin-top:.8rem;}
.car input{display: block;width: 8rem;height: 3.5rem;float: left;background: coral;border-radius: .5rem;margin-left: 1rem;outline: none;}
.car p{float: right;margin-top:.6rem;padding-right:1rem;}
.car p b{display: block;float: left;width: 2.5rem;height: 2rem;border:1px solid #999;margin:0 .2rem;text-align: center;font-size: 1.5rem;line-height: 2rem;}
.car span{float: left;border:1px solid #999;width: 2rem;height: 2rem;font-size: 1rem;line-height: 2rem;}
</style>
