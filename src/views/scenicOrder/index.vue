<template>
    <div class="main">
        <ul>
            <li v-for="(item) in liList" @click="handleClickLi(item.id)" :class="{active:item.id===number}"><a
                href="javascript:;">{{item.name}}</a></li>
        </ul>
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
                            <span><i>|</i>订单号码:</span>
                            <el-form-item label="订单号码" prop="orderId">
                                <el-input v-model="searchList.orderId" placeholder=""></el-input>
                            </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="mt bg-purple">
                            <span><i>|</i>景区名称:</span>
                            <el-form-item label="景区名称" prop="scenicName">
                                <el-input v-model="searchList.scenicName" placeholder=""></el-input>
                            </el-form-item>
                        </div>
                    </el-col>

                    <el-col :span="12">
                        <div class="bg-purple">
                            <span><i>|</i>手机号码:</span>
                            <el-form-item label="手机号码" prop="mobilePhone">
                                <el-input v-model="searchList.mobilePhone" placeholder=""></el-input>
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
            <span>订单列表</span>
        </div>

        <el-table :data="tableData" border stripe style="width: 100%" v-loading="listLoading" element-loading-text="正在加载">
            <el-table-column prop="scenicName" label="景区名称" align="center"></el-table-column>
            <el-table-column prop="orderId" label="订单号" align="center"></el-table-column>
            <el-table-column prop="currentNum" label="数量" align="center"></el-table-column>
            <el-table-column prop="visitorName" label="联系人" align="center"></el-table-column>
            <el-table-column prop="payMethod" label="付款方式" align="center"></el-table-column>
            <el-table-column prop="totalPrice" label="订单总价" align="center"></el-table-column>
            <el-table-column prop="showStatus" label="订单状态" align="center">
                <template slot-scope="scope">
                    <el-button type="text" size="small" class="stayIn">{{scope.row.showStatus}}</el-button>
                    <el-button type="text" size="small" @click="handleDetail(scope.row.orderId)">订单详情</el-button>
                </template>
            </el-table-column>
            <el-table-column prop="endTime" label="有效期" align="center"> </el-table-column>
        </el-table>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="searchList.page"
            :page-size="searchList.limit"
            layout="total, prev, pager, next"
            :total="total">
        </el-pagination>
    </div>
</template>

<script>
    import {scenicOrderList} from '@/api/scenicOrder'
    export default {
        name: 'scenicOrder',
        data() {
            return {
                searchList: {
                    orderId: '',
                    scenicName: '',
                    mobilePhone: '',
                    limit: 20,
                    page: 1
                },
                number: 0,
                liList: [
                  {id:0,name:'全部订单'},
                  {id:1,name:'未付订单'},
                  {id:2,name:'已付未检订单'},
                  // {id:3,name:'待评价'},
                  {id:4,name:'已取消订单'},
                  {id:5,name:'已退订单'},
                  {id:6,name:'已完成'},
                ],
                listLoading: false,
                total: 0,
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
                this.searchList.page = val
                this.getList()
            },
            handleCurrentChange(val) {
                this.searchList.page = val
                this.getList()
            },
            handleClickLi(index) {
                this.number = index;
                this.searchList.showStatus = index;
                this.getList();
            },
            handleDetail(id){
                this.$router.push({path: '/scenicOrder/' + id})
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
                    .el-input__inner {
                        width: 80%;
                    }
                }
                .mt {
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
