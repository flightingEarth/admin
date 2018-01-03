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
                            <span><i>|</i>订&nbsp;&nbsp;单&nbsp;&nbsp;ID:</span>
                            <el-input v-model="searchList.orderId" placeholder="请输入订单ID"></el-input>
                        </div>
                    </el-col>

                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <span><i>|</i>酒店搜索:</span>
                            <el-input v-model="searchList.hotelName" placeholder="请输入酒店名称或酒店编号"></el-input>
                        </div>
                    </el-col>

                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <span><i>|</i>供&nbsp;&nbsp;应&nbsp;&nbsp;商:</span>
                            <el-input v-model="searchList.supplier" placeholder="请输入供应商账户名或id"></el-input>
                        </div>
                    </el-col>

                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <span><i>|</i>申&nbsp;&nbsp;请&nbsp;&nbsp;人:</span>
                            <el-input v-model="searchList.proposer" placeholder="请输入申请人或uid或手机号"></el-input>
                        </div>
                    </el-col>

                    <el-col :span="12">
                        <div class="grid-content bg-purple double">
                            <span><i>|</i>退款状态:</span>
                            <el-select v-model="searchList.refundStatus" placeholder="请选择">
                                <el-option label="退款中" value="1"></el-option>
                                <el-option label="未退款" value="2"></el-option>
                                <el-option label="已退款" value="3"></el-option>
                            </el-select>
                        </div>
                    </el-col>

                    <el-col :span="12">
                        <div class="grid-content bg-purple double">
                            <span><i>|</i>是否退款:</span>
                            <el-select v-model="searchList.isRefund" placeholder="请选择">
                                <el-option label="是" value="1"></el-option>
                                <el-option label="否" value="2"></el-option>
                            </el-select>
                        </div>
                    </el-col>

                    <el-col :span="24">
                        <el-button type="primary" @click="handleSearch">搜索</el-button>
                        <el-button>重置条件</el-button>
                        <!--<el-button type="primary">导出</el-button>-->
                    </el-col>

                </el-row>

            </div>
        </div>

        <div class="list-title">
            <i class="iconfont icon-cf-c57"></i>
            <span>列表数据</span>
        </div>
        <div class="table">
            <el-table :data="tableData" border v-loading="listLoading" style="width: 100%">
                <el-table-column
                    prop="hotelId"
                    label="编号"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="hotelOrder"
                    label="酒店订单"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="hotelName"
                    label="酒店名称"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="refundTime"
                    label="退订日期"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="refundNum"
                    label="退订数量"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="supplierName"
                    label="供应商名称"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="supplierID"
                    label="供应商ID"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="proposerName"
                    label="申请人名称"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="proposerUID"
                    label="申请人uid"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="proposerPhone"
                    label="申请人手机号"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="poundage"
                    label="手续费"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="refundStatus"
                    label="退款状态"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="isRefund"
                    label="是否退款"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="createdTime"
                    label="创建时间"
                    align="center">
                </el-table-column>
                <el-table-column
                    label="操作"
                    align="center">
                    <template slot-scope="scope">
                        <el-button type="text" size="small" class="btn refuse" @click="open2" >拒绝退款</el-button>
                        <el-button type="text" size="small" class="btn agree" @click="open3">同意退款</el-button>
                    </template>
                </el-table-column>

            </el-table>
            <el-pagination
                @current-change="handleCurrentChange"
                :current-page="searchList.currentPage"
                :page-size="searchList.limit"
                layout="total, prev, pager, next, jumper"
                :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import { hotelList } from '@/api/hotel'
    export default {
        name: 'hotel',
        data() {
            return {
                total: 0,
                searchList: {
                    currentPage: 1,
                    limit: 20,
                    page: 1
                },
                tableData: []
            }
        },
        created() {
            this.getList()
        },
        methods: {
            getList() {
                this.listLoading = true
                hotelList(this.searchList).then(response => {
                    this.tableData = response.data.data
                    this.total = response.data.meta.total
                    this.listLoading = false
                })
            },
            handleCurrentChange(val) {
                this.searchList.page = val;
                this.getList();
            },
            handleSearch() {
                this.getList()
            },
            open2() {
                this.$confirm('是否拒绝退款?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '拒绝退款成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消拒绝退款'
                    });
                });
            },
            open3() {
                this.$confirm('是否同意退款?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '同意退款成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消同意退款'
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
                    width: 70%;
                }
                .grid-content {
                    margin-left: 20px;
                    margin-top: 20px;
                }
                .el-select {
                    width: 70%;
                }
                .el-cascader {
                    margin: 0;
                    width: 70%;
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
                    .el-button--primary:last-of-type {
                        border-color: #307FFF;
                        background: #307FFF;
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
            ul {
                list-style: none;
                float: right;
                margin: 0;
                li {
                    float: left;
                    width: 100px;
                    height: 36px;
                    text-align: center;
                    line-height: 36px;
                    background: #307FFF;
                    margin-left: 10px;
                    margin-top: 12px;
                    border-radius: 3px;
                    a {
                        color: #fff;
                        display: block;
                    }
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
        .el-pagination {
            margin-top: 10px;
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

    }


</style>
