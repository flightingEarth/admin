<template>
    <div class="main">
        <div class="search">
            <div class="title">
                <svg-icon icon-class="search"/>
                <span>搜索</span>
            </div>
            <div class="input">
                <el-row>
                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <span><i>|</i>景区名称:</span>
                            <el-input v-model="searchList.scenicName" placeholder="请输入门票编号或名称"></el-input>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple-light">
                            <span><i>|</i>供&nbsp;应&nbsp; 商:</span>
                            <el-select v-model="searchList.supplierValue" placeholder="请选择">
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
                        <div class="grid-content bg-purple">
                            <span><i>|</i>旅游主题:</span>
                            <el-input v-model="searchList.tourismTheme" placeholder="请输入旅游主题"></el-input>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple-light">
                            <span><i>|</i>上&nbsp;下&nbsp; 架:</span>
                            <el-select v-model="searchList.upDownValue" placeholder="请选择">
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
                        <div class="grid-content bg-purple">
                            <span><i>|</i>位置推荐:</span>
                            <el-input v-model="searchList.position" placeholder="请输入位置"></el-input>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple-light">
                            <span><i>|</i>景区星级:</span>
                            <el-select v-model="searchList.scenicStarValue" placeholder="请选择">
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
            <svg-icon icon-class="list"/>
            <span>列表数据</span>
            <ul>
                <li><a href="javascript:;" @click="addScenic">添加景区</a></li>
                <li><a href="javascript:;">图片管理</a></li>
            </ul>
        </div>
        <div class="table">
            <el-table
                :data="tableData"
                border
                stripe
                style="width: 100%">
                <el-table-column
                    prop="id"
                    label="编号"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="scenicName"
                    label="景区名称"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="tourismTheme"
                    label="旅游主题"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="supplier"
                    label="供应商"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="省／市／区"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="position"
                    label="位置推荐"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="scenicStar"
                    label="景区星级"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="updateTime"
                    label="更新时间"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="upDown"
                    label="上下架"
                    align="center">
                </el-table-column>
                <el-table-column
                    label="操作"
                    align="center">
                    <template slot-scope="scope">
                        <el-button type="text" size="small">编辑</el-button>
                        <el-button type="text" size="small">查看</el-button>
                    </template>
                </el-table-column>

            </el-table>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="searchList.currentPage"
                :page-sizes="pageSizes"
                :page-size="searchList.pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="searchList.totalList">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import {fetchList} from '@/api/article'
    export default {
        data() {
            return {
                searchList: {
                    scenicName: undefined,
                    supplierValue: undefined,
                    tourismTheme: undefined,
                    upDownValue: undefined,
                    position: undefined,
                    scenicStarValue: undefined,
                    currentPage: 1,
                    pageSize: 10,
                    totalList: 100
                },
                pageSizes: [10, 20, 50, 100],
                supplierOptions: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                scenicStar: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                tableData: [{
                    id: '5395',
                    scenicName: '山东黄河岛国家湿地公园',
                    tourismTheme: '其它',
                    supplier: 'jq-api-38389 2017葫芦岛百大万美温泉',
                    address: '山东／济南／历下区',
                    position: '其它',
                    scenicStar: '5',
                    updateTime: '2017-11-13 00:00:00',
                    upDown: '√'
                }]
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
            },
            addScenic() {
                this.$router.push({path: "/scenicManagement/addScenic"})
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
                span {
                    margin-left: 10px;
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
            height: 60px;
            padding: 0 40px;
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
