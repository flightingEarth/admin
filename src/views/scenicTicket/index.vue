<template>
    <div class="main">
        <div class="search">
            <div class="title">
                <i class="iconfont icon-sousuo"></i>
                <span>搜索</span>
            </div>
            <div class="input">
                <el-form :model="searchList" ref="searchForm">
                <el-row class="grid-content">
                    <el-col :span="12">
                        <div class="mt bg-purple">
                            <span><i>|</i>门票名称:</span>
                            <el-form-item label="门票名称" prop="ticketName">
                                <el-input v-model="searchList.ticketName" placeholder="请输入门票名称"></el-input>
                            </el-form-item>
                        </div>
                    </el-col>

                    <el-col :span="12">
                        <div class="mt bg-purple">
                            <span><i>|</i>票&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;种:</span>
                            <el-form-item label="票种" prop="ticketType">
                                <el-select v-model="searchList.ticketType" placeholder="请选择">
                                    <el-option
                                            v-for="item in ticketTypeList"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </el-col>

                    <el-col :span="12">
                        <div class="bg-purple">
                            <span><i>|</i>上下架:</span>
                            <el-form-item label="上下架" prop="ticketStatus">
                                <el-select v-model="searchList.ticketStatus" placeholder="请选择">
                                    <el-option
                                            v-for="item in statusList"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </el-col>

                    <el-col :span="12">
                        <div class="bg-purple double">
                            <span><i>|</i>有效起始:</span>
                            <el-form-item label="有效起始" prop="sellStartTime">
                                <el-date-picker
                                        v-model="searchList.sellStartTime"
                                        type="date"
                                        format="yyyy-MM-dd"
                                        value-format="yyyy-MM-dd"
                                        placeholder="选择日期">
                                </el-date-picker>
                                <span class="zhi">至</span>
                                <el-date-picker
                                        v-model="searchList.sellEndTime"
                                        type="date"
                                        format="yyyy-MM-dd"
                                        value-format="yyyy-MM-dd"
                                        placeholder="选择日期"
                                        :picker-options="minTime">
                                </el-date-picker>
                            </el-form-item>
                        </div>
                    </el-col>

                    <el-col :span="24">
                        <el-button type="primary" @click="getList">搜索</el-button>
                        <el-button @click="resetForm('searchForm')">重置条件</el-button>
                    </el-col>

                </el-row>
                </el-form>

            </div>
        </div>

        <div class="list-title">
            <i class="iconfont icon-liebiao"></i>
            <span>列表数据</span>
            <ul>
                <li><a href="javascript:;" @click="create">添加门票</a></li>
            </ul>
        </div>
        <div class="table">
            <el-table
                    :data="tableData"
                    border
                    stripe
                    style="width: 100%">
                <el-table-column
                        prop="ticketId"
                        label="门票编号"
                        align="center"
                >
                </el-table-column>
                <el-table-column
                        prop="ticketType"
                        label="票种"
                        align="center"
                >
                </el-table-column>
                <el-table-column
                        prop="ticketName"
                        label="门票名称"
                        align="center"
                >
                </el-table-column>
                <el-table-column
                        prop="sales_volume"
                        label="售出数量（张）"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="remain"
                        label="剩余数量（张）"
                        align="center">
                </el-table-column>

                <el-table-column
                        prop="shop_price"
                        label="价格（元）"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="sell_start_time"
                        label="有效期开始"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="sell_end_time"
                        label="有效期结束"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="status"
                        label="状态"
                        align="center">
                </el-table-column>
                <el-table-column
                        label="操作"
                        align="center">
                    <template slot-scope="scope">
                        <el-button type="text" size="small" @click="edit(scope.row.ticketId)">编辑</el-button>
                    </template>
                </el-table-column>

            </el-table>
            <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page="searchList.page"
                    :page-size="searchList.limit"
                    layout="total, prev, pager, next"
                    :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import { getList } from '@/api/ticket'
    import { getStatusList } from '@/utils/common'

    export default {
        name: 'ticketList',
        data() {
            return {
                total:0,
                searchList: {
                    ticketName: '',
                    ticketType: '',
                    ticketStatus: '',
                    sellStartTime: '',
                    sellEndTime: '',
                    currentPage: 1,
                    limit: 20,
                    page: 1
                },
                minTime: {
                    disabledDate: (time) => {
                        return time.getTime() < this.searchList.sellStartTime
                    }
                },
                ticketTypeList: [
                    {'id':0, 'name':'全部'},
                    {'id':1, 'name':'普通票'},
                    {'id':2, 'name':'年票'},
                ],
                tableData: [],
                statusList: []
            }
        },
        created() {
            this.statusList = getStatusList()
            this.getList()
        },
        methods: {
            getList() {
                this.listLoading = true
                getList(this.searchList).then(response => {
                    this.tableData = response.data.data
                    this.total = response.data.meta.total
                    this.listLoading = false
                })
            },
            resetForm(formName){
                this.$refs[formName].resetFields()
                this.searchList.sellEndTime = ''
            },
            handleCurrentChange(val) {
                this.searchList.page = val
                this.getList()
            },
            create() {
                this.$router.push({path: '/scenic/ticket/create'})
            },
            edit(index) {
                this.$router.push({path: "/scenic/ticket/"+ index +"/edit"})
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
                    width: 70%;
                }
                .grid-content {
                    margin-left: 20px;
                }
                .mt {
                    margin-top: 20px;
                }
                .el-select {
                    width: 70%;
                }
                .double {
                    .el-input {
                        width: 32.8%;
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
            i{
                color: #2C7ADE;
            }
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
                        display: block;
                        color: #fff;
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

    }


</style>
