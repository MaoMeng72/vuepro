<template>
    <div id="nav">
        <a href="#" class="cha" @click="back"></a>
        <i></i>
        <ul>
            <router-link tag="li" to="/index"><a href="#">首页</a></router-link>
            <router-link tag="li" to="/list"><a href="#">饮品系列</a></router-link>
            <router-link tag="li" to="/user"><a href="#">我的主页</a></router-link>
            <router-link tag="li" to="/buycar"><a href="#">我的订单</a></router-link>
        </ul>
    </div>
</template>

<script>
export default {
    methods:{
        data(){
            return {
                user:[]
            }
        },
        back(){
            this.$router.go(-1)
        }
    }
}
</script>


<style scoped>
#nav{background: #2e2e2e;height: 100%;position:absolute;left: 0;right: 
0;top:0;bottom: 0;}
a.cha{display: block;width: 1.5rem;height: 1.5rem;background: url(../assets/img/cha.png) no-repeat;background-size: 1.5rem;position: absolute;left: 0;right: 0;top:2rem ;margin: 0 auto;}
ul{position: absolute;top:5rem;left: 0;right: 0;margin: 0 auto;}
ul li{margin-bottom: 1.5rem;border-bottom: .01rem solid #fff;margin:0 1.5rem;}
ul li a{color:#fff;font-size: 1.5rem;line-height: 3rem;}
</style>

