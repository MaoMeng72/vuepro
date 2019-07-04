<template>
    <div id="index">
        <div class="banner">
            <h3>TRUE LOVE</h3>
            <h4>挚爱</h4>
            <p>本店自2019年成立，专业销售健康饮品，品类包括咖啡、果汁及奶茶系列。我们的企业理念是为顾客提供最健康的饮品.</p>
            <p>从顾客的健康角度出发，确保原材料以及配料的足够新鲜。您的满意就是我们的使命。</p>
            <router-link to="/list"><input type="button" value="立即选购"></router-link>
            
        </div>
        <div class="list">
            <h3>饮品推荐</h3>
            <ul>
                <li><i></i><p>奶茶奶盖</p></li>
                <li><i></i><p>汽水饮料</p></li>
                <li><i></i><p>咖啡牛奶</p></li>
                <li><i></i><p>冷饮茶品</p></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        
    }
}
</script>


<style scoped>
.banner{height: 20rem;background: url(../assets/img/index/index1.png) no-repeat;background-size: 100% 20rem;padding:0 1rem;}
.banner h3{color:#6b6b6b;font-size: 1.5rem;line-height: 3rem;}
.banner h4{font-size:1rem;color:#6b6b6b;}
.banner p{color:#6b6b6b;font-size: .8rem;line-height: 1.6rem;margin-top:1rem;font-size: .8rem;line-height: 1.6rem;}
.banner input{cursor: pointer;background: #28b28b;color:#fff;font-size: 1.5rem;width:8.5rem;height: 3.5rem;border-radius: .5rem;margin-top:1.5rem;}
.list h3{color:#28b28b;font-size: 1.5rem;line-height: 2rem;}
.list ul{padding:0 1rem;overflow: hidden;}
.list ul li{float: left;margin:1rem 1.5rem;}
.list ul li p{margin-top:1rem;font-size: 1rem;line-height: 2rem;}
.list ul li i{display: block;width: 8rem;height: 12rem;background: url(../assets/img/index/in2.png) no-repeat;background-size: 8rem 12rem;}
.list ul li:nth-child(2) i{background: url(../assets/img/index/in3.png) no-repeat;}
.list ul li:nth-child(3) i{background: url(../assets/img/index/in4.png) no-repeat;}
.list ul li:nth-child(4) i{background: url(../assets/img/index/in5.png) no-repeat;}
</style>
