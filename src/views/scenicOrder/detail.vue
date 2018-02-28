<template>
    <div class="main">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <div class="search">
                <div class="title">
                    <span>订单详情</span>
                </div>
                <div class="input">
                    <el-row :gutter="20">
                        <el-col :span="6">订单号：<span>{{list.orderId}}</span></el-col>
                        <el-col :span="6">下单时间：<span>{{list.created_at}}</span></el-col>
                        <el-col :span="6">订单状态：<span>{{list.showStatus}}</span></el-col>
                        <el-col :span="6">支付金额：<span>{{list.payOff}}</span></el-col>
                    </el-row>
                </div>
            </div>
            <div class="search">
                <div class="title">
                    <span>产品信息</span>
                </div>
                <div class="input">
                    <el-row :gutter="20">
                        <el-col :span="8">景区名称：<span>{{list.scenicName}}</span></el-col>
                        <el-col :span="8">门票名称：<span>{{list.ticketName}}</span></el-col>
                        <el-col :span="8">状态：<span>{{list.status}}</span></el-col>
                    </el-row>
                </div>
                <div class="title title2">
                </div>
                <div class="input">
                    <el-row :gutter="20">
                        <el-col :span="8">单价：<span>{{list.price}}</span></el-col>
                        <el-col :span="8">购买数量：<span>{{list.currentNum}}</span></el-col>
                        <el-col :span="8">总价：<span>{{list.totalPrice}}</span></el-col>
                    </el-row>
                </div>
                <div class="title title2">
                </div>
                <div class="input">
                    <el-row :gutter="20">
                        <el-col :span="8">游客姓名：<span>{{list.visitorName}}</span></el-col>
                        <el-col :span="8">手机号码：<span>{{list.visitorTel}}</span></el-col>
                        <el-col :span="8">身份证：<span>{{list.visitorSfz}}</span></el-col>
                    </el-row>
                </div>
                <div class="title title2">
                </div>
                <div class="input">
                    <el-row :gutter="20">
                        <el-col :span="8">支付人：<span>{{list.payerUserName}}</span></el-col>
                        <el-col :span="8">支付方式：<span>{{list.payMethod}}</span></el-col>
                        <el-col :span="8">支付状态：<span>{{list.payStatus}}</span></el-col>
                    </el-row>
                </div>
                <div class="title title2">
                </div>
                <div class="input">
                    <el-row :gutter="20">
                        <el-col :span="8">订单有效期：<span>{{list.startTime}}</span></el-col>
                        <el-col :span="8">订单游玩日期：<span>{{list.endTime}}</span></el-col>
                    </el-row>
                </div>
            </div>

        </el-form>
    </div>
</template>

<script>

    import { getScenicOrder } from '@/api/scenicOrder'

    export default {
        name: 'ScenicCreate',
        props: {
            ruleForm: {
                type: Object,
                default() {
                    return {
                        region: [],
                    }
                }
            }
        },
        data() {
            return {
                list: {},
                rules: {},
                tableData: []
            }
        },
        created() {
            getScenicOrder(this.$route.params.id).then(response => {
                this.list = response.data.data
                console.log(this.list)
            })
        },
        methods: {
//            resetForm(formName) {
//                this.$refs[formName].resetFields()
//            }
        }
    }
</script>

<style lang="scss" scoped>
    .main {
        background: #fafafa;
        width: 100%;
        padding: 20px;
        .search {
            width: 100%;
            overflow: hidden;
            box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.08), -3px -3px 4px rgba(0, 0, 0, 0.08);
            background: #fff;
            padding: 20px;
            box-sizing: border-box;
            color: #666;
            margin-top: 10px;
            .title {
                border-bottom: 1px solid #E6E6E6;
                padding-bottom: 10px;
                margin-bottom: 10px;
                span {
                    margin-left: 10px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .input {
                .el-row {
                    .el-col {
                        padding-left: 20px !important;
                    }
                    .el-col-6 {
                        padding-left: 30px !important;
                    }
                    .el-col-24 {
                        line-height: 30px;
                        padding-left: 30px !important;
                    }
                    .hotelName {
                        font-size: 14px;
                        color: #3077cd;
                    }
                    .el-col-8 {
                        line-height: 30px;
                        padding-left: 30px !important;
                    }
                }
                .hotelInfo {
                    .el-col-24 {
                        line-height: 30px;
                        padding-left: 20px !important;
                    }
                }
            }
        }
        .product {
            span {
                font-size: 16px;
                color: #333;
                font-weight: 700;
            }
            .iconfont{
                margin-right: 5px;
            }
        }
        .table{
            margin-top: 5px;
            .has-gutter{
                tr{
                    background: #E2F9FF;
                }
            }
        }
    }


</style>
