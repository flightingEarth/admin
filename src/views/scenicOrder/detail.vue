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
                        <el-col :span="6">下单时间：<span>2017-12-29 21:18</span></el-col>
                        <el-col :span="6">订单状态：<span>待入住</span></el-col>
                        <el-col :span="6">支付金额：<span>¥488.00</span></el-col>
                    </el-row>
                </div>
            </div>
            <div class="search">
                <div class="title">
                    <span>产品信息</span>
                </div>
                <div class="input">
                    <el-row :gutter="20">
                        <el-col :span="8">订单号：<span>20171209004</span></el-col>
                        <el-col :span="8">门票名称：<span>九华山旅游门票</span></el-col>
                        <el-col :span="8">老订单：<span>-</span></el-col>
                    </el-row>
                </div>
                <div class="title title2">
                </div>
                <div class="input">
                    <el-row :gutter="20">
                        <el-col :span="8">游客姓名：<span>张晓晓</span></el-col>
                        <el-col :span="8">单价：<span>¥46.00</span></el-col>
                        <el-col :span="8">购买数量：<span>2</span></el-col>
                    </el-row>
                </div>
                <div class="title title2">
                </div>
                <div class="input">
                    <el-row :gutter="20">
                        <el-col :span="8">下单时间：<span>2017-0911 12:09:00</span></el-col>
                        <el-col :span="8">总价：<span>¥200.00</span></el-col>
                        <el-col :span="8">手机号码：<span>19909092887</span></el-col>
                    </el-row>
                </div>
                <div class="title title2">
                </div>
                <div class="input">
                    <el-row :gutter="20">
                        <el-col :span="8">支付方式：<span>在线支付</span></el-col>
                        <el-col :span="8">支付状态：<span>已付</span></el-col>
                        <el-col :span="8">计划出游时间：<span>2017-09-11 12:09:00</span></el-col>
                    </el-row>
                </div>
                <div class="title title2">
                </div>
                <div class="input">
                    <el-row :gutter="20">
                        <el-col :span="8">状态：<span>已检票</span></el-col>
                        <el-col :span="8">使用时间：<span>2017-09-11 12:09:00</span></el-col>
                    </el-row>
                </div>
            </div>

            <div class="search">
                <div class="title">
                    <span>订单详情</span>
                </div>
                <div class="input">
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <span>修改订单退票规则：</span>
                            <el-radio v-model="radio" label="1">备选项</el-radio>
                            <el-radio v-model="radio" label="2">备选项</el-radio>
                        </el-col>
                        <el-col :span="8">
                            <span>修改订单改票规则：</span>
                            <el-radio v-model="radio1" label="1">备选项</el-radio>
                            <el-radio v-model="radio1" label="2">备选项</el-radio>
                        </el-col>
                    </el-row>
                </div>
            </div>

            <!--酒店产品详情-->
            <div class="search product">
                <i class="iconfont icon-cf-c57"></i>
                <span>支付订单信息</span>
            </div>
            <div class="search product table">
                <el-table
                    :data="tableData"
                    style="width: 100%"
                    :border="true"
                >
                    <el-table-column
                        prop="date"
                        label="支付编号"
                        align="center"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="订单ID"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="产品编号"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="联系人"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="联系人手机号"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="支付金额（元）"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="产品名称"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="支付时间"
                        align="center">
                    </el-table-column>
                </el-table>
            </div>
        </el-form>
    </div>
</template>

<script>
    import FormMixin from './FormMixin'
    import Tinymce from '@/components/Tinymce'
    import SelectImages from "@/components/Attachment/selectImages";

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
                list: {
                    orderId: 123456,
                },
                radio:"",
                radio1:"",
                rules: {},
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }]
            }
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
