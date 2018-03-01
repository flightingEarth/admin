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
                        <el-col :span="6">下单时间：<span>{{list.createdAt}}</span></el-col>
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
                    <el-row class="hotelInfo">
                        <el-col :span="24" class="hotelName">{{list.hotelName}}</el-col>
                        <el-col :span="24">酒店地址：<span>{{list.products[0].address}}</span></el-col>
                        <el-col :span="24">前台电话：<span>{{list.products[0].telephone}}</span></el-col>
                    </el-row>
                </div>
                <div class="title title2">
                    <span>入住信息</span>
                </div>
                <div class="input">
                    <el-row :gutter="20">
                        <el-col :span="8">房型：<span>{{list.roomName}}</span></el-col>
                        <el-col :span="8">床型：<span>{{list.products[0].bedType}}</span></el-col>
                        <el-col :span="8">间数：<span>{{list.roomNum}}</span></el-col>
                        <el-col :span="8">早餐：<span>{{list.products[0].breakfast}}</span></el-col>
                        <el-col :span="8">入离日期：<span>{{list.inDay}}</span> 至 <span>{{list.outDay}}</span></el-col>
                        <el-col :span="8">到店时间：<span>{{list.arrivalTime}}</span> 至 <span>{{list.latestTime}}</span></el-col>
                    </el-row>
                </div>
                <div class="title title2">
                    <span>联系人信息</span>
                </div>
                <div class="input">
                    <el-row :gutter="20">
                        <el-col :span="24">入住人：<span>{{list.guests}}</span></el-col>
                        <el-col :span="8">联系人手机：<span>{{list.mobilePhone}}</span></el-col>
                        <el-col :span="8">身份证：<span>{{list.idCard}}</span></el-col>
                    </el-row>
                </div>
                <div class="title title2">
                    <span>支付信息</span>
                </div>
                <div class="input">
                    <el-row :gutter="20">
                        <el-col :span="8">支付方式：<span>{{list.PayMethod}}</span></el-col>
                        <el-col :span="8">支付状态：<span>{{list.status}}</span></el-col>
                    </el-row>
                </div>
            </div>

            <!--酒店产品详情-->
            <div class="search product">
                <i class="iconfont icon-liebiao"></i>
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
                            align="center">
                    </el-table-column>
                    <el-table-column
                            prop="goodsId"
                            label="产品ID"
                            align="center">
                    </el-table-column>
                    <el-table-column
                            prop="goodsName"
                            label="产品名称"
                            align="center">
                    </el-table-column>
                    <el-table-column
                            prop="floor"
                            label="楼层"
                            align="center">
                    </el-table-column>
                    <el-table-column
                            prop="building_area"
                            label="面积"
                            align="center">
                    </el-table-column>
                    <el-table-column
                            prop="bed"
                            label="床型"
                            align="center">
                    </el-table-column>
                    <el-table-column
                            prop="checkin_num"
                            label="可住人数"
                            align="center">
                    </el-table-column>
                    <el-table-column
                            prop="extra_bed"
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
                            prop="basic"
                            label="房间描述"
                            align="center">
                    </el-table-column>
                </el-table>
            </div>
        </el-form>


    </div>
</template>

<script>

    import { getHotelOrder } from '@/api/hotelOrder'

    export default {
        name: 'HotelDetail',
        props: {
            ruleForm: {
                type: Object,
                default() {
                    return {
                    }
                }
            }
        },
        data() {
            return {
                list: {
                },
                rules: {},
                tableData: []
            }
        },
        created() {
            getHotelOrder(this.$route.params.id).then(response => {
                this.list = response.data.data
                this.tableData = this.list.products
                this.tableData[0].goodsId = this.list.goodsId
                this.tableData[0].hotelId = this.list.hotelId
                this.tableData[0].goodsName = this.list.goodsName
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
