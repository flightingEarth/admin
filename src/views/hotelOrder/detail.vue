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
                        <el-col :span="6">下单时间：<span>{{list.time}}</span></el-col>
                        <el-col :span="6">订单状态：<span>{{list.status}}</span></el-col>
                        <el-col :span="6">支付金额：<span>{{list.pay}}</span></el-col>
                    </el-row>
                </div>
            </div>
            <div class="search">
                <div class="title">
                    <span>产品信息</span>
                </div>
                <div class="input">
                    <el-row class="hotelInfo">
                        <el-col :span="24" class="hotelName">{{list.hotelName}}</el-col>
                        <el-col :span="24">酒店地址：<span>{{list.address}}</span></el-col>
                        <el-col :span="24">前台电话：<span>{{list.phone}}</span></el-col>
                    </el-row>
                </div>
                <div class="title title2">
                    <span>入住信息</span>
                </div>
                <div class="input">
                    <el-row :gutter="20">
                        <el-col :span="8">房型：<span>{{list.roomType}}</span></el-col>
                        <el-col :span="8">床型：<span>{{list.bedType}}</span></el-col>
                        <el-col :span="8">间数：<span>{{list.roomNum}}</span></el-col>
                        <el-col :span="8">早餐：<span>{{list.breakfast}}</span></el-col>
                        <el-col :span="8">入离日期：<span>{{list.inTime}}</span> 至 <span>{{list.outTime}}</span></el-col>
                        <el-col :span="8">到店时间：<span>{{list.arriveTime}}</span> 至 <span>{{list.leaveTime}}</span>
                        </el-col>
                    </el-row>
                </div>
                <div class="title title2">
                    <span>联系人信息</span>
                </div>
                <div class="input">
                    <el-row :gutter="20">
                        <el-col :span="24">入住人：<span>{{list.person}}</span></el-col>
                        <el-col :span="8">联系人手机：<span>{{list.phone}}</span></el-col>
                        <el-col :span="8">身份证：<span>{{list.idCard}}</span></el-col>
                    </el-row>
                </div>
                <div class="title title2">
                    <span>支付信息</span>
                </div>
                <div class="input">
                    <el-row :gutter="20">
                        <el-col :span="8">支付方式：<span>{{list.payType}}</span></el-col>
                        <el-col :span="8">支付状态：<span>{{list.payStatus}}</span></el-col>
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
                        prop="hotelId"
                        label="酒店ID"
                        align="center"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="productId"
                        label="产品ID"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="productName"
                        label="产品名称"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="floor"
                        label="楼层"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="area"
                        label="面积"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="bedType"
                        label="床型"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="inNum"
                        label="可住人数"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="addBed"
                        label="加床"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="breakfast"
                        label="早餐"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="broadband"
                        label="宽带"
                        align="center">
                    </el-table-column>
                    <el-table-column
                        prop="roomDescription"
                        label="房间描述"
                        align="center">
                    </el-table-column>
                </el-table>
            </div>
        </el-form>


    </div>
</template>

<script>

    export default {
        name: 'ScenicDetail',
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
                tableData: []
            }
        },
        created() {
//            getHotel(this.$route.params.id).then(response => {
//                this.list = response.data.data
//            })
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
