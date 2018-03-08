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
                                <span><i>|</i>订单编号:</span>
                                <el-form-item label="订单编号" prop="orderId">
                                    <el-input v-model="searchList.orderId" placeholder=""></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="mt bg-purple">
                                <span><i>|</i>身份证号:</span>
                                <el-form-item label="身份证号" prop="idCard">
                                    <el-input v-model="searchList.idCard" placeholder=""></el-input>
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
                        <el-col :span="12">
                            <div class="bg-purple-light">
                                <span><i>|</i>支付方式:</span>
                                <el-form-item label="支付方式" prop="payMethod">
                                    <el-select v-model="searchList.payMethod" placeholder="请选择">
                                        <el-option
                                            v-for="item in supplierOptions"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
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
            <span>订单列表</span>
        </div>
        <el-table
            :data="tableData"
            border
            stripe
            style="width: 100%"
            v-loading="listLoading" element-loading-text="正在加载中。。。"
        >
            <el-table-column
                    prop="orderId"
                    label="订单号"
                    align="center">
            </el-table-column>
            <el-table-column
                prop="hotelName"
                label="酒店名称"
                align="center">
            </el-table-column>
            <el-table-column
                prop="inDay"
                label="入住时间"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="outDay"
                label="离店时间"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="guests"
                label="联系人"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="mobilePhone"
                label="手机号"
                align="center">
            </el-table-column>
            <el-table-column
                prop="PayMethod"
                label="付款方式"
                align="center">
            </el-table-column>
            <el-table-column
                prop="totalPrice"
                label="供应商总价"
                align="center">
            </el-table-column>
            <el-table-column
                prop="orderStatus"
                label="订单状态"
                align="center">
                <template slot-scope="scope">
                    <el-button type="text" size="small" class="stayIn">{{ scope.row.status }}</el-button>
                    <el-button type="text" size="small" @click="handleDetail(scope.row.orderId)">订单详情</el-button>
                </template>
            </el-table-column>
            <el-table-column
                prop="createdAt"
                label="预订时间"
                align="center">
            </el-table-column>
            <el-table-column
                label="操作"
                align="center">
                <template slot-scope="scope" class="">
                    <el-button type="text" size="small" class="btn refuse" v-if="scope.row.action1.length > 0" @click="handleAction(scope.row.orderId, scope.row.action1)">{{ scope.row.action1 }}</el-button>
                    <el-button type="text" size="small" class="btn agree" v-if="scope.row.action2.length > 0" @click="handleAction(scope.row.orderId, scope.row.action2)">{{ scope.row.action2 }}</el-button>
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
    import { hotelOrderList, updateHotelOrder } from '@/api/hotelOrder'
    export default {
        name: 'hotelOrder',
        data() {
            return {
                searchList: {
                    orderId: '',
                    idCard: '',
                    mobilePhone: '',
                    payMethod: '',
                    status: '',
                    limit: 20,
                    page: 1
                },
                number: 0,
                total: 0,
                visible2: false,
                liList: [
                   {id:0, name: '全部订单'},
                   {id:1, name: '待支付'},
                   {id:2, name: '待入住'},
                   {id:3, name: '待离店'},
                   // {id:4, name: '待评价'},
                   {id:5, name: '已取消'},
                   {id:6, name: '已退订'},
                   {id:7, name: '已完成'},
                ],
                listLoading: false,
                supplierOptions: [{
                    value: '0',
                    label: '全部'
                }, {
                    value: '1',
                    label: '在线支付'
                }, {
                    value: '2',
                    label: '酒店到付'
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
                hotelOrderList(this.searchList).then(response => {
                    this.tableData = response.data.data
                    this.total = response.data.meta.total
                    this.listLoading = false
                })
            },
            handleCurrentChange(val) {
                this.searchList.page = val
                this.getList()
            },
            handleSearch(){
                this.getList();
            },
            handleClickLi(index) {
                this.number = index;
                this.searchList.showStatus = index;
                this.getList();
            },
            handleAction(id, action) {
                this.$confirm('是否'+ action +'?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let param = { opt:action}
                    updateHotelOrder(id, param).then(response => {
                        if (response.data.status) {
                            this.$message({
                                message: '更新成功！',
                                type: 'success'
                            });
                            this.getList()
                        } else {
                            this.$message.error(response.data.msg);
                        }
                    })
                }).catch(() => {
//                    this.$message({
//                        type: 'info',
//                        message: '已取消拒绝退票'
//                    });
                });
            },
            handleDetail(id){
                this.$router.push({path: '/hotelorder/' + id});
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
            margin-top: 5px;
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
