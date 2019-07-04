<template>
    <div class="content">
        <p class="fhbtn"><a href="javascript:;" @click="back"></a></p>
        <h1></h1>
        <div class="login-box">
            <p class="lsolid"></p>
            <div class="login">
                <router-link to="/login">登录</router-link>
                <router-link to="/reg">注册</router-link>
            </div>
            <p class="rsolid"></p>
        </div>
        <ul>
            <li class="lifirst">
                <input type="text" value="" v-model="username"/>
                <span>帐号</span>
            </li>
            <li>
                <input type="password" value="" v-model="password"/>
                <span>密码</span>
            </li>
            {{msg}}
        </ul>
        <div class="footbox">
            <input type="button" value="登 录" class="login-btn" @click="login"/>
            <a href="javascript:;" class="tishi">忘记密码？</a>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return {username:"",password:"",msg:""}
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        login(){
            axios({
                url:'/api/login',
                method:'post',
                data:{username:this.username,password:this.password,save:true},
            }).then(
                res=>{
                    if(res.data.err===0){
                        console.log(res.data)
                        this.$router.push('/user')
                    }else{
                        this.mess = res.data.mess
                    }
                }
            )
            
        }
    }
}
</script>


<style scoped>
    .content .fhbtn{ padding-top:1rem;height: 2rem;}
    .content .fhbtn a{ display:block;width:1.5rem;height:1.5rem; background:url(../assets/img/back.png) no-repeat 0 0; background-size:100%; margin-left:1rem;margin-top:.2rem;}
    .content h1{width:15rem;height:7rem; background:url(../assets/img/login.png) no-repeat 0 0; background-size:100%; margin:0 auto; margin-top:3.5rem;}
    .content .login{width:10rem;height:3rem; margin:0 auto; margin-top:1.5rem;}
    .login a{width:4rem;height:3rem; font-size:1.5rem; line-height:2rem; float:left; color:#4c4f50; text-align:center;margin:0 .5rem;}
    .content .login-box{ position:relative;}
    .content .login-box .lsolid{width:5rem;height:1rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;left:0.1rem;}
    .content .login-box .rsolid{width:5rem;height:1rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;right:0.1rem;}
    .content ul{width:21rem;height:6rem; border:1px solid #e5e7e8; background:#fff; margin:0 auto; margin-top:0.68rem;}
    .content ul li{height:3rem; position:relative;}
    .content ul li.lifirst{border-bottom:1px solid #e5e7e8;}
    .content ul li input{ padding-left:3rem;width:18rem;height:100%; font-size:2rem;}
    .content ul li span{width:3rem;height:2rem; position:absolute;top:.5rem;left:0; border-right:1px solid #676868; color:#676868; font-size:1rem; line-height:2rem; text-align:center;}
    .content .footbox{width:10rem;margin:0 auto;}
    .content .login-btn{width:10rem;height:3rem; background:#4c4f50; color:#fff; text-align:center; line-height:3rem; border-radius:8px; display:block; margin-top:0.62rem; font-size:1rem;}
    .content .tishi{width:10rem; font-size:.6rem; margin-top:1rem; display:block;}
  </style>
