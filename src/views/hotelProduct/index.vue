<template>
    <div class="main">
        <div class="search">
            <div class="title">
                <i class="iconfont icon-sousuo"></i>
                <span>搜索</span>
            </div>
            <div class="input">
                <el-row>
                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <span><i>|</i>产品名称:</span>
                            <el-input v-model="searchList.goodsName" placeholder=""></el-input>
                        </div>
                    </el-col>

                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <span><i>|</i>审核状态:</span>
                            <el-select v-model="searchList.reviewStatus" placeholder="请选择">
                                <el-option label="全部" value="0"></el-option>
                                <el-option label="审核通过" value="1"></el-option>
                                <el-option label="审核未通过" value="2"></el-option>
                            </el-select>
                        </div>
                    </el-col>

                    <el-col :span="12">
                        <div class="grid-content bg-purple double">
                            <span><i>|</i>产品状态:</span>
                            <el-select v-model="searchList.status" placeholder="请选择">
                                <el-option
                                        v-for="item in statusList"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>

                    <el-col :span="24">
                        <el-button type="primary" @click="handleSearch">搜索</el-button>
                        <el-button @click="resetForm('ruleForm')">重置条件</el-button>
                    </el-col>

                </el-row>

            </div>
        </div>

        <div class="list-title">
            <i class="iconfont icon-liebiao"></i>
            <span>列表数据</span>
            <ul>
                <li><a href="javascript:;" @click="addProduct">添加产品</a></li>
            </ul>
        </div>
        <el-table
            :data="tableData"
            border
            stripe
            style="width: 100%">
            <el-table-column
                prop="goods_id"
                label="产品编号"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="roomId"
                label="房型编号"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="goodsName"
                label="产品名称"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="bedType"
                label="床型"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="extraBed"
                label="加床"
                align="center">
            </el-table-column>
            <el-table-column
                prop="breakfast"
                label="早餐"
                align="center">
            </el-table-column>

            <el-table-column
                prop="broadbandFee"
                label="宽带"
                align="center">
            </el-table-column>
            <el-table-column
                prop="reviewStatus"
                label="审核状态"
                align="center">
            </el-table-column>
            <el-table-column
                prop="status"
                label="产品状态"
                align="center">
            </el-table-column>
            <el-table-column
                label="操作"
                align="center">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="edit(scope.row.goods_id)">编辑</el-button>
                    <el-button type="text" size="small" @click="handlePrice(scope.row.goods_id)">价格日历</el-button>
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
    import {ProductList} from '@/api/hotelProduct'
    import { getStatusList } from '@/utils/common'
    import "../../iconfont/iconfont.css";
    export default {
        name: 'hotelProduct',
        data() {
            return {
                searchList: {
                    status: '',
                    roomId:'',
                    reviewStatus: '',
                    goodsName: '',
                    page: 1,
                    limit:20
                },
                total: 0,
                tableData: [],
                statusList: []
            }
        },
        created(){
            this.searchList.roomId = this.$route.query.roomId
            this.statusList = getStatusList();
            this.getList()
        },
        methods: {
            getList() {
                this.listLoading = true
                ProductList(this.searchList).then(response => {
                    this.tableData = response.data.data
                    this.total = response.data.meta.total
                    this.listLoading = false
                })
            },
            handleSearch(){
                this.getList();
            },
            resetForm(formName) {
                this.$refs.ruleForm.resetFields();
            },
            handleCurrentChange(val) {
                this.searchList.currentPage = val
                this.tableData()
            },
            addProduct() {
                this.$router.push({path: "/hotelproduct/create?roomId=" + this.searchList.roomId });
            },
            edit(index){
                this.$router.push({path: "/hotelproduct/" + index + "/edit"})
            },
            handlePrice(goodsId){
                this.$router.push({path: "/hotel/priceCalendar"})
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
