<template>
    <div class="main">
        <div class="search">
            <div class="title">
                <i class="iconfont icon-sousuo1"></i>
                <span>搜索</span>
            </div>
            <div class="input">
                <el-form :model="searchList" ref="ticketForm">
                <el-row>
                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <span><i>|</i>门票搜索:</span>
                            <el-input v-model="searchList.ticketName" placeholder="请输入旅游主题"></el-input>
                        </div>
                    </el-col>

                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <span><i>|</i>票&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;种:</span>
                            <el-select v-model="searchList.ticketType" placeholder="请选择">
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
                            <span><i>|</i>有效起始:</span>
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

                    <el-col :span="24">
                        <el-button type="primary" @click="getList">搜索</el-button>
                        <el-button @click="resetForm('ticketForm')">重置条件</el-button>
                        <!--<el-button type="primary">导出</el-button>-->
                    </el-col>

                </el-row>
                </el-form>

            </div>
        </div>

        <div class="list-title">
            <i class="iconfont icon-cf-c57"></i>
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
                        prop="storage"
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
                        prop="benginTime"
                        label="有效期开始"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="endTime"
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
                    :current-page="searchList.currentPage"
                    :page-size="searchList.limit"
                    layout="prev, pager, next, jumper"
                    :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import { getList } from '@/api/ticket'
    export default {
        name: 'ticketList',
        data() {
            return {
                total:0,
                searchList: {
                    ticketName: '',
                    ticketType: '',
                    ticketStatus: '',
                    currentPage: 1,
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
                supplierOptions: [],
                scenicStar: [],
                tableData: [],
                scenicId: 0
            }
        },
        created() {
            this.scenicId = this.$route.params.scenicId
            this.getList()
        },
        methods: {
            getList() {
                this.listLoading = true
                getList(this.scenicId, this.searchList).then(response => {
                    this.tableData = response.data.data
                    this.total = response.data.total
                    this.listLoading = false
                })
            },
            resetForm(formName){
                this.$refs[formName].resetFields();
            },
            handleCurrentChange(val) {
                this.searchList.page = val
                this.getList()
            },
            create() {
                this.$router.push({path: '/scenic/' + this.scenicId + '/ticket/create'})
            },
            edit(index) {
                this.$router.push({path: "/scenic/" + this.scenicId + '/ticket/'+index + '/edit'})
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
