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
                            <span><i>|</i>产品名称:</span>
                            <el-input v-model="searchList.hotelName" placeholder=""></el-input>
                        </div>
                    </el-col>

                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <span><i>|</i>审核状态:</span>
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
                            <span><i>|</i>产品状态:</span>
                            <el-select v-model="searchList.hotelStatus" placeholder="请选择">
                                <el-option
                                    v-for="item in supplierOptions"
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
                <li><a href="javascript:;" @click="addProduct">添加产品</a></li>
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
                    label="产品编号"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="hotelId"
                    label="酒店编号"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="houseId"
                    label="房型编号"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="productName"
                    label="产品名称"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="bed"
                    label="床型"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="addBed"
                    label="加床"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="breakfast"
                    label="早餐"
                    align="center">
                </el-table-column>

                <el-table-column
                    prop="wifi"
                    label="宽带"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="shareType"
                    label="分润方式"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="status"
                    label="审核状态"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="productStatus"
                    label="产品状态"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="creatTime"
                    label="创建时间"
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
                    ticketType: undefined,
                    ticketName: undefined,
                    currentPage: 1,
                    pageSize: 10,
                    totalList: 100
                },
                beginTime: "",
                endTime: "",
                pageSizes: [10, 20, 50, 100],
                minTime: {
                    disabledDate: (time) => {
                        return time.getTime() < this.beginTime
                    }
                },
                supplierOptions: [{
                    value: '0',
                    label: '其他'
                }],
                tableData: [{
                    id: '995395',
                    hotelId: '23',
                    houseId: '679890',
                    productName: '大床房',
                    bed: '双人床1.8，1张',
                    addBed: '不可加床',
                    breakfast: '无早',
                    wifi: '免费无线',
                    shareType: '',
                    status: '审核通过',
                    productStatus: '',
                    creatTime: '2017-11-13 00:00:00'
                }],
                options2: [{
                    label: '江苏',
                    cities: []
                }, {
                    label: '浙江',
                    cities: []
                }],
                props: {
                    value: 'label',
                    children: 'cities'
                }
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
            addProduct() {
                this.$router.push({ path:"/hotelManagement/addProduct" });
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

    }


</style>
