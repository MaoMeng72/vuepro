<template>
    <div class="content">
        <h2></h2>
        <div class="user-box">
            <a href="#">欢迎您：{{data.username}}</a><br>
            <a href="#" class="logout" @click="logout">注销</a>
        </div>
        <ul class="clear">
        <li>
            <router-link to="/detail"><p>订单</p></router-link>
            
        </li>
        <li>
            <p class="end">设置</p>
        </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return {data:{}}
    },
    methods:{
        logout(){
            axios({
                url:'/api/logout',
                method:'put'
            }).then(
                res=>{
                    if(res.data.err===0){
                        this.$router.push('/login')
                    }
                }
            )
        }    
    },
    
    beforeRouteEnter(to,from,next){
        axios({
        url:'/api/user'
        }).then(
            res=>{
                    if(res.data.err===1){
                    next('/login')
                }else{
                    next((_this)=>{_this.data=res.data.data})
                }
            }
        )
    }
}
</script>


<style scoped>
.content{max-width:20rem; margin:0 auto; margin-bottom:0.8rem;}
h2{width:8rem;height:8rem; border-radius:50%; margin:0 auto;background:url(../assets/img/user.png) no-repeat;background-size: 100%;}
.user-box{font-size:1rem;  margin:0 auto; margin-top:1rem; }
.user-box a{margin: 0 .1rem;font-size: 1rem;line-height: 2rem;}
.user-box a.logout{font-size: 1rem;line-height: 2rem;color:crimson }

ul{ margin-top:2rem;}
ul li{width:50%;height:2rem; float:left;}
ul li span{height:2rem; line-height:2rem; text-align:center; display:block; font-size:1rem;}
ul li p{ text-align:center; font-size:1rem;height:1.5rem; line-height:1.5rem; border-right:1px solid #000;}
ul li p.end{ border:0;}
</style>
