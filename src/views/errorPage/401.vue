<template>
    <div class="main">
        <img src="./no.png" alt="">
        <div class="font">
            <p class="info">非常抱歉，当前您没有访问权限，请联系管理员</p>
            <!--<a href="#" class="backIndex">返回首页</a>-->
            <a href="javascript:;" class="backIndex" @cilck="handleGoBack">返回上一页</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Error401',
        methods: {
            handleGoBack() {
                window.history.go(-1)
            }
        }
    }
</script>
<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    html, body {
        width: 100%;
        height: 100%;
        background: #fff;
    }
    .main{
        padding-top: 50px;
        text-align: center;
        overflow: hidden;
    }
    .info{
        font-size: 16px;
        color: #666;
        margin-top: 40px;
    }
    a{
        display: inline-block;
        width: 160px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        margin-left: 20px;
        margin-top: 30px;
        border-radius: 5px;
        font-size: 16px;
        text-decoration: none;
    }
    .backIndex{
        background: #0083D1;
        color: #fff;
    }
    .backLast{
        border: 1px solid #ccc;
        color: #666;
    }
</style>
