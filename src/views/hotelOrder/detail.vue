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
                    <el-row class="hotelInfo">
                        <el-col :span="24" class="hotelName">重庆希尔顿假日酒店</el-col>
                        <el-col :span="24">酒店地址：<span>北京市朝阳区南京东路789创意产业园</span></el-col>
                        <el-col :span="24">前台电话：<span>010-87687997</span></el-col>
                    </el-row>
                </div>
                <div class="title title2">
                    <span>入住信息</span>
                </div>
                <div class="input">
                    <el-row :gutter="20">
                        <el-col :span="8">房型：<span>（大床）（非凡体验）</span></el-col>
                        <el-col :span="8">床型：<span>2.0米双人床，1张</span></el-col>
                        <el-col :span="8">间数：<span>1晚1间</span></el-col>
                        <el-col :span="8">早餐：<span>无</span></el-col>
                        <el-col :span="8">入离日期：<span>2017-11-20</span> 至 <span>2017-11-22 1晚</span></el-col>
                        <el-col :span="8">到店时间：<span>2017-11-20 12:11:12</span> 至 <span>2017-11-21 12:11:12</span>
                        </el-col>
                    </el-row>
                </div>
                <div class="title title2">
                    <span>联系人信息</span>
                </div>
                <div class="input">
                    <el-row :gutter="20">
                        <el-col :span="24">入住人：<span>（大床）（非凡体验）</span></el-col>
                        <el-col :span="8">联系人手机：<span>17812230099</span></el-col>
                        <el-col :span="8">身份证：<span>370827189709101212</span></el-col>
                    </el-row>
                </div>
                <div class="title title2">
                    <span>支付信息</span>
                </div>
                <div class="input">
                    <el-row :gutter="20">
                        <el-col :span="8">支付方式：<span>在线支付</span></el-col>
                        <el-col :span="8">支付状态：<span>已支付</span></el-col>
                    </el-row>
                </div>
            </div>

            <!--酒店产品详情-->
            <div class="search product">
                <i class="iconfont icon-cf-c57"></i>
                <span>订单产品详情</span>
            </div>
            <div class="search product table">
                <el-table
                    :data="tableData"
                    style="width: 100%"
                    :border="true"
                >
                    <el-table-column
                        prop="date"
                        label="酒店ID"
                        align="center"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="产品ID"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="产品名称"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="楼层"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="面积"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="床型"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="可住人数"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="加床"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="早餐"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="宽带"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="房间描述"
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
                margin-top: 10px;
                padding-bottom: 10px;
                margin-bottom: 20px;
                span {
                    margin-left: 10px;
                    font-size: 16px;
                    color: #333;
                }
            }
            .title2 {
                margin-top: 20px;
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
