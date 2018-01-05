<template>
    <div class="main">
        <div class="search top">
            <div class="top-title"><i class="iconfont icon-qian"></i>我的资产</div>
            <div class="top-bottom">
                <div class="detail">
                    <span>月结账户</span>
                    <p><span>¥288.66</span>元</p>
                </div>
                <div class="detail second">
                    <span>金币账户</span>
                    <p><span>12</span>枚</p>
                </div>
                <div class="detail last">
                    <div>
                        <span>现金账户</span>
                        <p><span>¥0.00</span>元</p>
                    </div>
                    <a href="javascript:;">充值</a>
                    <a href="javascript:;">提现</a>
                </div>
            </div>
        </div>
        <ul class="tab-list">
            <li v-for="(item , index) in liList" @click="handleClickLi(index)" :class="{active:index===number}"><a
                href="javascript:;">{{item}}</a></li>
        </ul>
        <div class="search">
            <div class="title">
                <i class="iconfont icon-sousuo1"></i>
                <span>搜索</span>
            </div>
            <div class="input">
                <el-row>
                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <span><i>|</i>订单编号:</span>
                            <el-input v-model="searchList.orderId" placeholder=""></el-input>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple-light">
                            <span><i>|</i>收支类型:</span>
                            <el-select v-model="searchList.payMethod" placeholder="请选择">
                                <el-option
                                    v-for="item in payMethod"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple-light double">
                            <span><i>|</i>时间选择:</span>
                            <el-date-picker
                                v-model="beginTime"
                                type="date"
                                placeholder="选择开始日期">
                            </el-date-picker>
                            <span class="zhi">至</span>
                            <el-date-picker
                                v-model="endTime"
                                type="date"
                                :picker-options="minTime"
                                placeholder="选择结束日期">
                            </el-date-picker>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple-light">
                            <span><i>|</i>收支状态:</span>
                            <el-select v-model="searchList.payStatus" placeholder="请选择">
                                <el-option
                                    v-for="item in payStatus"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                    <el-col :span="24">
                        <el-button type="primary" @click="handleSearch">搜索</el-button>
                        <el-button>重置条件</el-button>
                    </el-col>

                </el-row>

            </div>
        </div>

        <div class="list-title">
            <i class="iconfont icon-cf-c57"></i>
            <span>订单列表</span>
        </div>
        <el-table
            :data="tableData"
            border
            stripe
            style="width: 100%"
            v-loading="listLoading" element-loading-text="正在加载中。。。"
        >
            <el-table-column
                prop="orderId"
                label="订单编号"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="orderName"
                label="产品名称"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="payMethod"
                label="收支类型"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="payStatus"
                label="收支状态"
                align="center"
            >
                <template slot-scope="scope">
                    <el-button type="text" size="small" class="stayIn">待入住</el-button>
                    <el-button type="text" size="small" @click="handleDetail(scope.row.orderId)">订单详情</el-button>
                </template>
            </el-table-column>
            <el-table-column
                prop="payTime"
                label="收支时间"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="payAccount"
                label="支付账户"
                align="center">
            </el-table-column>
            <el-table-column
                prop="cashPrice"
                label="收入金额(元)"
                align="center">
            </el-table-column>
            <el-table-column
                prop="payPrice"
                label="支出金额(元)"
                align="center">
            </el-table-column>
        </el-table>

        <el-pagination
            @current-change="handleCurrentChange"
            :current-page="searchList.page"
            :page-size="searchList.limit"
            layout="total, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
    </div>
</template>

<script>
//    import {hotelOrderList} from '@/api/hotelOrder'
    export default {
        name: 'hotelOrder',
        data() {
            return {
                searchList: {
                    limit: 20,
                    page: 1
                },
                beginTime: "",
                endTime: "",
                minTime: {
                    disabledDate: (time) => {
                        return time.getTime() < this.beginTime
                    }
                },
                number: 0,
                total: 0,
                visible2: false,
                liList: ["全部账单", "账户收支", "提现记录", "充值记录", "月结记录"],
                listLoading: false,
                payMethod: [{
                    value: '0',
                    label: '充值'
                }, {
                    value: '1',
                    label: '提现'
                }],
                payStatus: [{
                    value: '0',
                    label: '支付'
                }, {
                    value: '1',
                    label: '退款'
                }],
                tableData: []
            }
        },
        created(){
//            this.getList();
        },
        methods: {
            getList() {
                this.listLoading = true
//                hotelOrderList(this.searchList).then(response => {
//                    this.tableData = response.data.data
//                    this.total = response.data.meta.total
//                    this.listLoading = false
//                })
            },
            handleCurrentChange(val) {
                this.searchList.page = val
                this.getList()
            },
            handleSearch(){
                this.searchList.beginTime = beginTime
                this.searchList.endTime = endTime
                this.getList();
            },
            handleClickLi(index) {
                this.number = index;
                if (index === 0) {
                    this.searchList.showStatus = 0;
                    this.getList();
                }
                if (index === 1) {
                    this.searchList.showStatus = 1;
                    this.getList();
                }
                if (index === 2) {
                    this.searchList.showStatus = 2;
                    this.getList();
                }
                if (index === 3) {
                    this.searchList.showStatus = 3;
                    this.getList();
                }
                if (index === 4) {
                    this.searchList.showStatus = 4;
                    this.getList();
                }
            }
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

            .title {
                border-bottom: 1px solid #E6E6E6;
                margin-top: 10px;
                padding-bottom: 10px;

                i {
                    color: #2C7ADE;
                }

            }
            .input {

                span {
                    float: left;
                    margin-top: 10px;
                    margin-right: 10px;

                    i {
                        color: red;
                        margin-right: 5px;
                    }

                }
                .el-input {
                    float: left;
                    width: 80%;
                }

                .grid-content {
                    margin-left: 20px;
                    margin-top: 20px;

                    .el-input__inner {
                        width: 80%;
                    }

                }
                .el-select {
                    width: 80%;
                }

                .double {

                    .el-input {
                        width: 36.6%;
                    }

                    .zhi {
                        float: left;
                        margin-left: 10px;
                    }

                }
                .el-col-24 {
                    text-align: center;
                    margin-top: 20px;
                    border-top: 1px solid #E6E6E6;
                    padding-top: 20px;

                    button {
                        width: 100px;
                        height: 36px;
                        line-height: 36px;
                        text-align: center;
                        padding: 0;
                    }

                    .el-button--primary {
                        border-color: #5FCAB1;
                        background: #5FCAB1;
                    }

                }
            }
        }

        .top {
            margin-bottom: 20px;
            padding-bottom: 0;
            .top-title {
                border-bottom: 1px solid rgba(51, 51, 51, 0.15);
                padding-bottom: 10px;
            }
            .top-bottom {
                padding: 10px;
                width: 100%;
                height: 112px;
                overflow: hidden;
                .detail {
                    width: 20%;
                    height: 100%;
                    border-right: 1px solid #F2F2F2;
                    padding-left: 20px;
                    padding-top: 20px;
                    float: left;
                    span {
                        font-size: 14px;
                        color: #666;
                    }
                    p {
                        margin-top: 10px;
                        span {
                            font-size: 24px;
                            color: #FF394B;
                            margin-right: 5px;
                        }
                    }
                }
                .second {
                    padding-left: 5%;
                }
                .last {
                    width: 25%;
                    padding-left: 5%;
                    border: 0;
                    div{
                        float: left;
                    }
                    a {
                        float: right;
                        width: 60px;
                        height: 32px;
                        line-height: 32px;
                        text-align: center;
                        border-radius: 3px;
                        color: #fff;
                        background: #307fff;
                        margin-right: 10px;
                        margin-top: 15px;
                    }
                }
            }
        }

        .list-title {
            width: 100%;
            background: #f3f3f3;
            border: 1px solid #ccc;
            border-bottom: 0;
            margin-bottom: 0 !important;
            margin-top: 24px;
            height: 40px;
            line-height: 40px;

            .iconfont {
                color: #333;
                margin-left: 20px;
                font-size: 18px;
            }

            span {
                font-size: 14px;
                font-weight: 600;
                color: #333;
            }

        }
        .tab-list {
            list-style: none;
            /*margin-top: 10px;*/
            overflow: hidden;
            padding: 0;
            margin-bottom: 0;
            border-bottom: 2px solid rgba(80, 154, 255, 1);

            li {
                float: left;
                width: 100px;
                height: 40px;
                text-align: center;
                line-height: 40px;
                background: #fff;
                margin-left: 5px;
                border-radius: 1px;

                a {
                    color: #333;
                    display: block;
                }

            }
            li:first-child {
                margin-left: 0;
            }

            .active {
                background: rgba(80, 154, 255, 1);

                a {
                    color: #fff;
                }

            }
        }
        .table {
            background: #fff;
            width: 100%;
            padding: 20px;
            margin-top: 5px;
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.08), -2px -2px 4px rgba(0, 0, 0, 0.08);
        }

        .stayIn {
            color: #666;
        }

        .btn {
            display: inline-block;
            width: 80px;
            height: 36px;
            text-align: center;
            border-radius: 3px;
        }

        .refuse {
            background: #5fcab1;
            color: #fff;
        }

        .agree {
            border: 1px solid #DEDEDE;
            color: #666;
            margin-left: 0;
            margin-top: 5px;
        }

        .el-pagination {
            margin-top: 10px;
        }
    }


</style>
