<template>
    <div class="main">
        <div class="search top">
            <div class="top-title"><i class="iconfont icon-qian"></i>我的资产</div>
            <div class="top-bottom">
                <div class="detail second">
                    <span>金币账户</span>
                    <p><span>{{account.youbi}}</span>枚</p>
                </div>
                <div class="detail last">
                    <div>
                        <span>现金账户</span>
                        <p><span>¥{{account.availableAmount}}</span>元</p>
                    </div>
                    <a :href="account.depositUrl">充值</a>
                    <a :href="account.withdrawUrl">提现</a>
                </div>
            </div>
        </div>
        <!--<ul class="tab-list">-->
            <!--<li v-for="(item , index) in liList" @click="handleClickLi(index)" :class="{active:index===number}"><a-->
                <!--href="javascript:;">{{item}}</a></li>-->
        <!--</ul>-->
        <div class="search">
            <div class="title">
                <i class="iconfont icon-sousuo"></i>
                <span>搜索</span>
            </div>
            <div class="input">
                <el-form :model="searchList" ref="searchForm">
                <el-row>
                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <span><i>|</i>订单编号:</span>
                            <el-form-item label="订单编号" prop="orderId">
                                <el-input v-model="searchList.orderId" placeholder=""></el-input>
                            </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple-light">
                            <span><i>|</i>收支类型:</span>
                            <el-form-item label="收支类型" prop="type">
                                <el-select v-model="searchList.type" placeholder="请选择">
                                    <el-option
                                        v-for="item in accountType"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </el-col>
                    <!--<el-col :span="12">-->
                        <!--<div class="grid-content bg-purple-light double">-->
                            <!--<span><i>|</i>时间选择:</span>-->
                            <!--<el-date-picker-->
                                <!--v-model="beginTime"-->
                                <!--type="date"-->
                                <!--placeholder="选择开始日期">-->
                            <!--</el-date-picker>-->
                            <!--<span class="zhi">至</span>-->
                            <!--<el-date-picker-->
                                <!--v-model="endTime"-->
                                <!--type="date"-->
                                <!--:picker-options="minTime"-->
                                <!--placeholder="选择结束日期">-->
                            <!--</el-date-picker>-->
                        <!--</div>-->
                    <!--</el-col>-->
                    <!--<el-col :span="12">-->
                        <!--<div class="grid-content bg-purple-light">-->
                            <!--<span><i>|</i>收支状态:</span>-->
                            <!--<el-select v-model="searchList.payStatus" placeholder="请选择">-->
                                <!--<el-option-->
                                    <!--v-for="item in payStatus"-->
                                    <!--:key="item.value"-->
                                    <!--:label="item.label"-->
                                    <!--:value="item.value">-->
                                <!--</el-option>-->
                            <!--</el-select>-->
                        <!--</div>-->
                    <!--</el-col>-->
                    <el-col :span="24">
                        <el-button type="primary" @click="handleSearch">搜索</el-button>
                        <el-button @click="resetForm('searchForm')">重置条件</el-button>
                    </el-col>
                </el-row>
                </el-form>
            </div>
        </div>

        <div class="list-title">
            <i class="iconfont icon-liebiao"></i>
            <span>订单列表</span>
        </div>
        <el-table
            :data="tableData"
            border
            stripe
            style="width: 100%"
            v-loading="listLoading" element-loading-text="正在加载中。。。">
            <el-table-column
                prop="orderId"
                label="订单编号"
                align="center">
            </el-table-column>
            <el-table-column
                prop="productType"
                label="产品名称"
                align="center">
            </el-table-column>
            <el-table-column
                prop="accountType"
                label="收支类型"
                align="center">
            </el-table-column>
            <!--<el-table-column-->
                <!--prop="payStatus"-->
                <!--label="收支状态"-->
                <!--align="center">-->
                <!--<template slot-scope="scope">-->
                    <!--<el-button type="text" size="small" class="stayIn">待入住</el-button>-->
                    <!--<el-button type="text" size="small" @click="handleDetail(scope.row.orderId)">订单详情</el-button>-->
                <!--</template>-->
            <!--</el-table-column>-->
            <el-table-column
                prop="amount"
                label="收支金额(元)"
                align="center">
            </el-table-column>
            <el-table-column
                    prop="createdAt"
                    label="收支时间"
                    align="center">
            </el-table-column>
        </el-table>

        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="searchList.currentPage"
            :page-size="searchList.pageSize"
            layout="total, prev, pager, next"
            :total="total">
        </el-pagination>
    </div>
</template>

<script>
    import { getAccount, accountDetails } from '@/api/account'
    export default {
        name: 'account',
        data() {
            return {
                searchList: {
                    currentPage: 1,
                    pageSize: 10,
                    orderId:'',
                    type:''
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
                liList: ["全部账单", "账户收支", "提现记录", "充值记录", "月结记录"],
                listLoading: false,
                accountType: [
                    { value: 0, label: '全部' },
                    { value: '1', label: '支付' },
                    { value: '2', label: '退票' },
                    { value: '3', label: '充值' },
                    { value: '4', label: '申请提现' },
                    { value: '5', label: '提现成功' },
                    { value: '6', label: '提现驳回' },
                ],
                tableData: [],
                account:{availableAmount:0,youbi:0}
            }
        },
        created(){
            this.getList()
        },
        methods: {
            getList() {
                getAccount().then(response => {
                    this.account = response.data
                })
                this.listLoading = true
                accountDetails(this.searchList).then(response => {
                    this.tableData = response.data.data
                    this.total = response.data.meta.total
                    this.listLoading = false
                })
            },
            handleSizeChange(val) {
                this.searchList.pageSize = val
                this.getList()
            },
            handleCurrentChange(val) {
                this.searchList.currentPage = val
                this.getList()
            },
            handleSearch(){
//                this.searchList.beginTime = beginTime
//                this.searchList.endTime = endTime
                this.getList();
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            handleClickLi(index) {
                this.number = index;
                this.searchList.showStatus = index;
                this.getList();
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
                    width: 50%;
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
