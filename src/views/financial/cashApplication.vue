<template>
    <div class="main">
        <div class="search">
            <div class="title">
                <i class="iconfont icon-sousuo1"></i>
                <span>搜索</span>
            </div>
            <div class="input">
                <el-row>
                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <span><i>|</i>提现编号:</span>
                            <el-input v-model="searchList.orderId" placeholder=""></el-input>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <span><i>|</i>用&nbsp;户&nbsp; 名:</span>
                            <el-input v-model="searchList.cardNum" placeholder=""></el-input>
                        </div>
                    </el-col>

                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <span><i>|</i>持&nbsp;卡&nbsp; 人:</span>
                            <el-input v-model="searchList.phone" placeholder=""></el-input>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple-light">
                            <span><i>|</i>手机号码:</span>
                            <el-input v-model="searchList.phone" placeholder=""></el-input>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple-light">
                            <span><i>|</i>提现金额:</span>
                            <el-input v-model="searchList.phone" placeholder=""></el-input>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple-light">
                            <span><i>|</i>支付状态:</span>
                            <el-select v-model="searchList.status" placeholder="请选择">
                                <el-option
                                    v-for="item in supplierOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple double">
                            <span><i>|</i>提现时间:</span>
                            <el-date-picker
                                v-model="beginTime"
                                type="date"
                                placeholder="选择日期">
                            </el-date-picker>
                            <span class="zhi">至</span>
                            <el-date-picker
                                v-model="endTime"
                                type="date"
                                placeholder="选择日期"
                                :picker-options="minTime">
                            </el-date-picker>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple-light">
                            <span><i>|</i>审核状态:</span>
                            <el-select v-model="searchList.status" placeholder="请选择">
                                    <el-radio label="已审核"></el-radio>
                                    <el-radio label="待审核"></el-radio>
                            </el-select>
                        </div>
                    </el-col>

                    <el-col :span="24">
                        <el-button type="primary">搜索</el-button>
                        <el-button>重置条件</el-button>
                    </el-col>

                </el-row>

            </div>
        </div>


        <!--新增界面-->
        <el-dialog title="提现审核" :visible.sync="dialogFormVisible" class="financial">

            <el-form :model="addForm" label-width="100px">
                <div class="grid-content bg-purple-light shenhe">
                    <span><i class="iconfont icon-guize"></i>审核:</span>
                    <el-form-item label="膳食安排" prop="balanceType">
                        <el-radio v-model="addForm.radio" label="1">审核通过</el-radio>
                        <el-radio v-model="addForm.radio" label="2">驳回</el-radio>
                    </el-form-item>
                </div>
                <div class="grid-content bg-purple-light shenhe">
                    <span><i class="iconfont icon-shuxie"></i>备注:</span>
                    <el-form-item label="活动形式">
                        <el-input type="textarea" v-model="addForm.textarea"></el-input>
                    </el-form-item>
                </div>
                <div class="alertBtn">
                    <el-button type="primary">确定</el-button>
                    <el-button>返回</el-button>
                </div>
            </el-form>
        </el-dialog>


        <div class="list-title">
            <i class="iconfont icon-cf-c57"></i>
            <span>数据列表</span>
        </div>

        <div class="table">
            <el-table
                :data="tableData"
                border
                stripe
                style="width: 100%"
                v-loading="listLoading" element-loading-text="正在加载中。。。"
            >
                <el-table-column
                    prop="orderDetail"
                    label="提现编号"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="inTime"
                    label="用户名"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="outTime"
                    label="提现金额"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="person"
                    label="持卡人"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="pay"
                    label="银行卡号"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="total"
                    label="手机号"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="total"
                    label="证件号"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="total"
                    label="提现设备"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="total"
                    label="创建时间"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="total"
                    label="审核时间"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="orderStatus"
                    label="审核"
                    align="center">
                    <template slot-scope="scope">
                        <el-button type="text" size="small" class="stayIn">已付</el-button>
                        <el-button  type="text" size="small"  @click="dialogFormVisible = true">一键审核</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                    label="操作"
                    align="center">
                    <template slot-scope="scope" class="">
                        <el-button type="text" size="small" class="btn refuse">查看详情</el-button>
                    </template>
                </el-table-column>

            </el-table>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="searchList.currentPage"
                :page-size="searchList.pageSize"
                layout="total, prev, pager, next, jumper"
                :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import {fetchList} from '@/api/article'
    export default {
        name:'cashApplication',
        data() {
            return {
                searchList: {
                    orderId: undefined,
                    cardNum: undefined,
                    phone: undefined,
                    payWay: undefined,
                    status: undefined,
                    currentPage: 1,
                    pageSize: 10
                },
                total: 1,
                beginTime: "",
                endTime: "",
                minTime: {
                    disabledDate: (time) => {
                        return time.getTime() < this.beginTime
                    }
                },

                gridData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                dialogFormVisible: false,//新增界面是否显示
                beginTime: "",
                endTime: "",
                listLoading: false,
                pageSizes: [10, 20, 50, 100],
                supplierOptions: [{
                    value: '选项1',
                    label: '黄金糕'
                }],
                tableData: [{
                    orderDetail: '杭州马可波罗假日酒店（1晚1间）（大床）（洁乐体验）（12）',
                    inTime: '2017-12-13',
                    outTime: '2017-12-23',
                    person: '王盐盐:13219009090',
                    pay: '在线支付',
                    total: '¥552.00',
                    orderTime: '2017-11-13 00:00:00',
                    orderId: '17121817457158'
                }],
                addForm:{},
                Rules:[]
            }
        },
        methods: {
            getList() {
                this.listLoading = true
                fetchList(this.searchList).then(response => {
                    this.tableData = response.data.items
                    this.total = response.data.total
                    this.listLoading = false
                })
            },
            handleSizeChange(val) {
                this.searchList.pageSize = val
                this.tableData()
            },
            handleCurrentChange(val) {
                this.searchList.currentPage = val
                this.tableData()
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
            margin-top: 5px;
            .title {
                border-bottom: 1px solid #E6E6E6;
                margin-top: 10px;
                padding-bottom: 10px;
                i{
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
        .list-title {
            width: 100%;
            height: 60px;
            padding: 0 20px;
            background: #fff;
            margin-top: 20px;
            line-height: 60px;
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.08), -2px -2px 4px rgba(0, 0, 0, 0.08);
            i{
                color: #2C7ADE;
            }
        }
        ul {
            list-style: none;
            /*margin-top: 10px;*/
            overflow: hidden;
            padding: 0;
            margin-bottom: 0;
            li {
                float: left;
                width: 100px;
                height: 40px;
                text-align: center;
                line-height: 40px;
                background: #fff;
                margin-left: 10px;
                border-radius: 3px;
                a {
                    color: #333;
                }
            }
            li:first-child {
                margin-left: 0;
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
        .shenhe{
            span{
                float: left;
                margin-top: 7px;
                margin-right: 10px;
            }
            .iconfont{
                margin-right: 5px;
            }
            .el-textarea{
                width: 60% !important;
                .el-textarea__inner{
                    height: 70px!important;
                }
            }


        }
        .alertBtn{
            text-align: center;
        }

    }


</style>
