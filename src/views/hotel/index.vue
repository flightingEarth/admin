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
                            <span><i>|</i>酒店名称:</span>
                            <el-form-item label="酒店名称" prop="hotelName">
                                <el-input v-model="searchList.hotelName" placeholder="请输入酒店名称"></el-input>
                            </el-form-item>
                        </div>
                    </el-col>

                    <el-col :span="12">
                        <div class="mt bg-purple">
                            <span><i>|</i>酒店星级:</span>
                            <el-form-item label="酒店星级" prop="hotelStar">
                                <el-select v-model="searchList.hotelStar" placeholder="请选择">
                                    <el-option label="全部" value="0"></el-option>
                                    <el-option label="客栈／公寓" value="1"></el-option>
                                    <el-option label="二星级／经济型" value="2"></el-option>
                                    <el-option label="三星级／舒适型" value="3"></el-option>
                                    <el-option label="四星级／高档型" value="4"></el-option>
                                    <el-option label="五星级／豪华型" value="5"></el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </el-col>

                    <el-col :span="12">
                        <div class="bg-purple double">
                            <span><i>|</i>酒店状态:</span>
                            <el-form-item label="酒店状态" prop="hotelStatus">
                                <el-select v-model="searchList.hotelStatus" placeholder="请选择">
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
            <span>列表数据</span>
            <ul>
                <li><a href="javascript:;" @click="addHotel">添加酒店</a></li>
            </ul>
        </div>
        <el-table :data="tableData" border v-loading="listLoading" style="width: 100%">
            <el-table-column
                prop="hotelId"
                label="编号"
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
                prop="hotelStar"
                label="酒店星级"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="hotelAddress"
                label="酒店地址"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="hotelTelephone"
                label="联系方式"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="minimumHotelHousePrice"
                label="最小价格"
                align="center">
            </el-table-column>
            <el-table-column
                prop="hotelStatus"
                label="酒店状态"
                align="center">
            </el-table-column>
            <el-table-column
                prop="createdTime"
                label="添加时间"
                align="center">
            </el-table-column>
            <el-table-column
                label="操作"
                align="center">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="handleHouse(scope.row.hotelId)">房型</el-button>
                    <el-button type="text" size="small" @click="edit(scope.row.hotelId)">编辑</el-button>
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
</template>

<script>
    import {hotelList} from '@/api/hotel'
    import { getStatusList } from '@/utils/common'

    export default {
        name: 'hotel',
        data() {
            return {
                total: 0,
                searchList: {
                    hotelName: '',
                    hotelStar: '',
                    hotelStatus: '',
                    limit: 20,
                    page: 1
                },
                minTime: {
                    disabledDate: (time) => {
                        return time.getTime() < this.beginTime
                    }
                },
                tableData: [],
                statusList: []
            }
        },
        created() {
            this.statusList = getStatusList();
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
            addHotel() {
                this.$router.push({path: "/hotel/create"})
            },
            handleSearch() {
                this.getList()
            },
            edit(index) {
                this.$router.push({path: "/hotel/" + index + '/edit'})
            },
            handleHouse(hotelId){
                this.$router.push({path: "/hotel/hotelRoom?hotelId=" + hotelId})
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
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
                }
                .mt {
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
