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
                            <div class=" mt bg-purple">
                                <span><i>|</i>景区名称:</span>
                                <el-form-item label="景区名称" prop="scenicName">
                                    <el-input v-model="searchList.scenicName" placeholder="请输景区名称"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="12">
                            <div class="mt bg-purple-light">
                                <span><i>|</i>上&nbsp;下&nbsp; 架:</span>
                                <el-form-item label="上下架" prop="scenicStatus">
                                    <el-select v-model="searchList.scenicStatus" placeholder="请选择">
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
                            <div class="bg-purple-light">
                                <span><i>|</i>景区星级:</span>
                                <el-form-item label="景区星级" prop="scenicStar">
                                    <el-select v-model="searchList.scenicStar" placeholder="请选择">
                                        <el-option
                                            v-for="item in scenicStarList"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="24">
                            <el-button type="primary" @click="handleSearch">搜索</el-button>
                            <el-button @click="resetForm('searchForm')">重置</el-button>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
        </div>

        <div class="list-title">
            <i class="iconfont icon-liebiao"></i>
            <span>列表数据</span>
            <!-- <ul>
                <li><a href="javascript:;" @click="create">添加景区</a></li>
            </ul> -->
        </div>
        <el-table :data="tableData" border v-loading="listLoading" style="width: 100%">
            <el-table-column prop="scenicId" label="编号" align="center"></el-table-column>
            <el-table-column prop="scenicName" label="景区名称" align="center"></el-table-column>
            <!--<el-table-column prop="supplier" label="供应商" align="center"></el-table-column>-->
            <el-table-column prop="scenicFullAddress" label="地址" align="center"></el-table-column>
            <el-table-column prop="scenicStar" label="景区级别" align="center"></el-table-column>
            <el-table-column prop="status" label="上下架" align="center"></el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="edit(scope.row.scenicId)">编辑</el-button>
                    <el-button type="text" size="small" @click="handleTicket(scope.row.scenicId)">门票管理</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="searchList.page"
                :page-size="searchList.limit"
                layout="total, prev, pager, next"
                :total="total">
        </el-pagination>

    </div>
</template>

<script>
    import {getList} from '@/api/scenic'
    import {getStatusList, getScenicStar, getCurrentState} from '@/utils/common'

    export default {
        name: 'scenicList',
        data() {
            return {
                total: 0,
                searchList: {
                    scenicName: '',
                    scenicStar: '',
                    scenicStatus: '',
                    limit: 20,
                    page: 1
                },
                scenicStarList: [],
                statusList: [],
                tableData: [],
                listLoading: false
            }
        },
        created() {
            this.statusList = getStatusList();
            this.scenicStarList = getScenicStar()
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
                this.$refs[formName].resetFields();
            },
            handleSearch() {
                this.getList()
            },
            handleCurrentChange(val) {
                this.searchList.page = val
                this.getList()
            },
            create() {
                this.$router.push({path: "/scenic/create"})
            },
            edit(index) {
                this.$router.push({path: "/scenic/" + index + '/edit'})
            },
            handleTicket(index){
                this.$router.push({path: "/scenic/" + index + '/ticket'})
            },
            handleSizeChange() {

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
                    /*margin-top: 20px;*/
                }
                .mt {
                    margin-top: 20px;
                }
                .el-select {
                    width: 80%;
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
            ul {
                list-style: none;
                float: right;
                margin: 0;
                li {
                    float: left;
                    width: 90px;
                    height: 25px;
                    text-align: center;
                    line-height: 25px;
                    background: #fff;
                    margin-right: 10px;
                    margin-top: 9px;
                    border-radius: 2px;
                    border: 1px solid #ccc;
                    font-size: 12px;
                    a {
                        color: #666;
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

    }
</style>
