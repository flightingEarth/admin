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
                            <span><i>|</i>订&nbsp;&nbsp;单&nbsp;&nbsp;号:</span>
                            <el-input v-model="searchList.orderId" placeholder="请输入订单ID"></el-input>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <span><i>|</i>供&nbsp;&nbsp;应&nbsp;&nbsp;商:</span>
                            <el-input v-model="searchList.supplierName" placeholder="请输入供应商账户名"></el-input>
                        </div>
                    </el-col>

                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <span><i>|</i>申&nbsp;&nbsp;请&nbsp;&nbsp;人:</span>
                            <el-input v-model="searchList.mobilePhone" placeholder="请输入申请人手机号"></el-input>
                        </div>
                    </el-col>

                    <el-col :span="12">
                        <div class="grid-content bg-purple double">
                            <span><i>|</i>是否退款:</span>
                            <el-select v-model="searchList.reviewStatus" placeholder="请选择">
                                <el-option label="未退款" value="1"></el-option>
                                <el-option label="已退款" value="2"></el-option>
                            </el-select>
                        </div>
                    </el-col>

                    <el-col :span="12">
                        <div class="grid-content bg-purple double">
                            <span><i>|</i>退款状态:</span>
                            <el-select v-model="searchList.status" placeholder="请选择">
                                <el-option label="申请退款" value="0"></el-option>
                                <el-option label="同意退款" value="1"></el-option>
                                <el-option label="拒绝退款" value="2"></el-option>
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


        <el-dialog title="退款审核" :visible.sync="dialogFormVisible" class="financial">

            <el-form :model="addForm" :rules="rules" ref="ruleForm" label-width="100px">
                <div class="grid-content bg-purple-light shenhe">
                    <span><i class="iconfont icon-guize"></i>审&nbsp;&nbsp;&nbsp;&nbsp;核:</span>
                    <el-form-item label="膳食安排" prop="reviewStatus">
                        <el-radio-group v-model="addForm.reviewStatus">
                            <el-radio label="审核通过" value="1"></el-radio>
                            <el-radio label="驳回" value="2"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </div>
                <div class="grid-content bg-purple-light shenhe">
                    <span><i class="iconfont icon-qian"></i>手续费:</span>
                    <el-form-item label="膳食安排" prop="counterFee">
                        <el-input v-model="addForm.counterFee" type="number"></el-input>
                    </el-form-item>
                </div>
                <div class="grid-content bg-purple-light shenhe">
                    <span><i class="iconfont icon-shuxie"></i>备&nbsp;&nbsp;&nbsp;&nbsp;注:</span>
                    <el-form-item label="活动形式" prop="note">
                        <el-input type="textarea" v-model="addForm.note"></el-input>
                    </el-form-item>
                </div>
                <div class="alertBtn">
                    <el-button type="primary" @click="handleSubmit">确定</el-button>
                    <el-button @click="back">返回</el-button>
                </div>
            </el-form>
        </el-dialog>


        <div class="list-title">
            <i class="iconfont icon-cf-c57"></i>
            <span>列表数据</span>
        </div>
        <el-table :data="tableData" border v-loading="listLoading" style="width: 100%">
            <el-table-column
                prop="refundId"
                label="编号"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="orderId"
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
                prop="days"
                label="退订日期"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="num"
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
                prop="userName"
                label="申请人名称"
                align="center">
            </el-table-column>
            <el-table-column
                prop="mobilePhone"
                label="申请人手机号"
                align="center">
            </el-table-column>
            <el-table-column
                prop="counterFee"
                label="手续费"
                align="center">
            </el-table-column>
            <el-table-column
                label="退款状态"
                align="center">
                <template slot-scope="scope">
                    <span v-if="scope.row.status == 0">用户申请退款</span>
                    <span v-if="scope.row.status == 1">同意退款</span>
                    <span v-if="scope.row.status == 2">拒绝退款</span>
                </template>
            </el-table-column>
            <el-table-column
                label="是否退款"
                align="center">
                <template slot-scope="scope">
                    <span v-if="scope.row.reviewStatus == 1">未退款</span>
                    <span v-if="scope.row.reviewStatus == 2">已退款</span>
                    <el-button type="text" size="small" v-if="scope.row.status == 1 && scope.row.reviewStatus == 1"
                               @click="hadleAudit(scope.row.refundId)">审核
                    </el-button>
                </template>
            </el-table-column>

            <el-table-column
                prop="createdAt"
                label="创建时间"
                align="center">
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
</template>

<script>
    import {refundlList, auditWithdraw} from '@/api/hotelRefund'
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
                dialogFormVisible: false,
                addForm: {},
                tableData: [],
                rules: {
                    reviewStatus: [
                        {required: true, message: '请选择审核结果', trigger: 'change'}
                    ],
                    counterFee: [
                        {required: true, message: '请填写手续费', trigger: 'blur'}
                    ],
                    note: [
                        {required: true, message: '请填写备注', trigger: 'blur'}
                    ]
                }
            }
        },
        created() {
            this.getList()
        },
        methods: {
            getList() {
                this.listLoading = true
                refundlList(this.searchList).then(response => {
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
            back(){
                this.dialogFormVisible = false
            },
            hadleAudit(id){
                this.dialogFormVisible = true;
                this.refundId = id;
            },
            handleSubmit(){
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        this.addLoading = true

                        if (this.addForm.reviewStatus == "审核通过") {
                            this.addForm.reviewStatus = 1
                        } else {
                            this.addForm.reviewStatus = 2
                        }

                        auditWithdraw(this.refundId, this.addForm).then(response => {
                            if (response.data.status) {
                                this.$message({
                                    message: '审核成功！',
                                    type: 'success'
                                });
                            } else {
                                this.$message({
                                    message: response.data.msg,
                                    type: 'error'
                                });
                            }

                            this.dialogFormVisible = false;
                        })
                    } else {
                        console.log('error submit!!')
                        return false
                    }
                })
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

        .shenhe {
            .el-form-item {
                /*margin-bottom: 0;*/
            }
            span {
                float: left;
                margin-top: 7px;
                margin-right: 10px;
            }
            .iconfont {
                margin-right: 5px;
            }
            .alertBtn {
                margin-left: 5%;
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
            font-size: 12px;
        }
        .agree {
            border: 1px solid #DEDEDE;
            color: #666;
            margin-left: 0;
            margin-top: 5px;
        }

    }


</style>
