<template>
    <div style="width: 100%;height: 100%;background: #5EB5AB;">
        <div class="main">
            <img src="./404.png" alt="" width="50%">
            <div class="font">
                <p class="info">非常抱歉，您访问的页面不存在</p>
                <a href="#">返回首页</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    html, body {
        width: 100%;
        height: 100%;
        background: #5EB5AB;
    }
    .main {
        position: relative;
        padding-top: 208px;
        text-align: center;
        overflow: hidden;
        background: #5EB5AB;
    }

    .font {
        position: absolute;
        top: 70%;
        left: 50%;
        margin-left: -32px;
    }

    .info {
        font-size: 12px;
        color: #666;
    }

    a {
        display: inline-block;
        width: 100px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        color: #fff;
        background: #5EB6AB;
        font-size: 12px;
        border-radius: 5px;
        margin-top: 23px;
        text-decoration: none;
    }
</style>