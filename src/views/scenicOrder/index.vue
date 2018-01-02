<template>
    <div class="main">
        <ul>
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
                            <span><i>|</i>订单号码:</span>
                            <el-input v-model="searchList.orderId" placeholder=""></el-input>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <span><i>|</i>景区名称:</span>
                            <el-input v-model="searchList.cardNum" placeholder=""></el-input>
                        </div>
                    </el-col>

                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <span><i>|</i>手机号码:</span>
                            <el-input v-model="searchList.phone" placeholder=""></el-input>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple-light">
                            <span><i>|</i>付款方式:</span>
                            <el-select v-model="searchList.payWay" placeholder="请选择">
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
                        <div class="grid-content bg-purple-light">
                            <span><i>|</i>票种来源:</span>
                            <el-select v-model="searchList.status" placeholder="请选择">
                                <el-option
                                    v-for="item in scenicStar"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
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

        <div class="list-title">
            <i class="iconfont icon-cf-c57"></i>
            <span>订单列表</span>
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
                    prop="scenicName"
                    label="景区名称"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="orderId"
                    label="订单号"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="currentNum"
                    label="数量"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="visitorName"
                    label="联系人"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="payMethod"
                    label="付款方式"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="totalPrice"
                    label="订单总价"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="showStatus"
                    label="订单状态"
                    align="center">
                    <template slot-scope="scope">
                        <el-button type="text" size="small" class="stayIn">待入住</el-button>
                        <el-button type="text" size="small">订单详情</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="endTime"
                    label="有效期"
                    align="center">
                </el-table-column>
                <el-table-column
                    label="操作"
                    align="center">
                    <template slot-scope="scope" class="">
                        <el-button type="text" size="small" class="btn refuse" @click="open2">拒绝退票</el-button>
                        <el-button type="text" size="small" class="btn agree" @click="open3">同意退票</el-button>
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
    import {scenicOrderList} from '@/api/scenicOrder'
    export default {
        name: 'scenicOrder',
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
                number: 0,
                liList: ["全部订单", "未付订单", "已付未检订单", "已检订单", "已改订单", "已退订单", "已完成"],
                listLoading: false,
                total:1,
                supplierOptions: [{
                    value: '0',
                    label: '不限'
                }, {
                    value: '1',
                    label: '在线支付'
                }, {
                    value: '2',
                    label: '景区到付'
                }],
                scenicStar: [{
                    value: '0',
                    label: '其他'
                }],
                tableData: []
            }
        },
        created(){
          this.getList();
        },
        methods: {
            getList() {
                this.listLoading = true
                scenicOrderList(this.searchList).then(response => {
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
                if (index === 5) {
                    this.searchList.showStatus = 5;
                    this.getList();
                }
                if (index === 6) {
                    this.searchList.showStatus = 6;
                    this.getList();
                }
            },
            open2() {
                this.$confirm('是否拒绝退票?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '拒绝退票成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消拒绝退票'
                    });
                });
            },
            open3() {
                this.$confirm('是否同意退票?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '同意退票成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消同意退票'
                    });
                });
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
                    .el-input__inner{
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
            margin-top: 10px;
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
