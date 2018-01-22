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
                            <span><i>|</i>订&nbsp;&nbsp;单&nbsp;&nbsp;号:</span>
                            <el-form-item label="订单号" prop="orderId">
                                <el-input v-model="searchList.orderId" placeholder="请输入订单号"></el-input>
                            </el-form-item>
                        </div>
                    </el-col>

                    <el-col :span="12">
                        <div class="mt bg-purple">
                            <span><i>|</i>门票名称:</span>
                            <el-form-item label="门票名称" prop="ticketName">
                                <el-input v-model="searchList.ticketName" placeholder="请输入门票名称"></el-input>
                            </el-form-item>
                        </div>
                    </el-col>

                    <el-col :span="12">
                        <div class="bg-purple">
                            <span><i>|</i>手机号码:</span>
                            <el-form-item label="手机号码" prop="mobilePhone">
                                <el-input v-model="searchList.mobilePhone" placeholder="请输入游玩人手机号"></el-input>
                            </el-form-item>
                        </div>
                    </el-col>

                    <el-col :span="12">
                        <div class=" bg-purple">
                            <span><i>|</i>购&nbsp;&nbsp;买&nbsp;&nbsp;者:</span>
                            <el-form-item label="购买者" prop="userName">
                                <el-input v-model="searchList.userName" placeholder="请输入购买者账号"></el-input>
                            </el-form-item>
                        </div>
                    </el-col>

                    <el-col :span="12">
                        <div class=" bg-purple double">
                            <span><i>|</i>审核状态:</span>
                            <el-form-item label="购买者" prop="status">
                                <el-select v-model="searchList.status" placeholder="请选择">
                                    <el-option label="待审核" value="0"></el-option>
                                    <el-option label="审核通过" value="1"></el-option>
                                    <el-option label="审核未通过" value="2"></el-option>
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

        <el-dialog title="退款审核" :visible.sync="dialogFormVisible" class="financial">

            <el-form :model="addForm" :rules="rules" ref="ruleForm" label-width="100px">
                <div class="grid-content bg-purple-light shenhe">
                    <span>审&nbsp;&nbsp;&nbsp;&nbsp;核:</span>
                    <el-form-item label="膳食安排" prop="status">
                        <el-radio-group v-model="addForm.status">
                            <el-radio label="审核通过" value="1"></el-radio>
                            <el-radio label="驳回" value="2"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </div>
                <div class="grid-content bg-purple-light shenhe">
                    <span>备&nbsp;&nbsp;&nbsp;&nbsp;注:</span>
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
            <i class="iconfont icon-liebiao"></i>
            <span>列表数据</span>
        </div>
        <el-table :data="tableData" border v-loading="listLoading" style="width: 100%">
            <el-table-column
                prop="orderId"
                label="订单号"
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
                prop="mobilePhone"
                label="游玩人手机号"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="userName"
                label="购买者"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="refundNum"
                label="数量（张）"
                align="center">
            </el-table-column>
            <el-table-column
                prop="refundFee"
                label="退款手续费"
                align="center">
            </el-table-column>
            <el-table-column
                prop="refundAmount"
                label="退款金额（元）"
                align="center">
            </el-table-column>
            <el-table-column
                prop="refundReason"
                label="备注"
                align="center">
            </el-table-column>
            <el-table-column
                prop="createdAt"
                label="申请时间"
                align="center">
            </el-table-column>
            <el-table-column
                label="操作"
                align="center">
                <template slot-scope="scope">
                    <el-button v-if="scope.row.status == 0" class="btn refuse" @click="handleAudit(scope.row.orderId)">
                        审核
                    </el-button>
                    <span v-if="scope.row.status == 1">审核成功</span>
                    <span v-if="scope.row.status == 2">审核未通过</span>
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
    import {refundlList, auditWithdraw} from '@/api/scenicRefund'
    export default {
        name: 'scenicRefund',
        data() {
            return {
                total: 0,
                searchList: {
                    limit: 20,
                    page: 1
                },
                addForm: {},
                dialogFormVisible: false,
                tableData: [],
                rules: {
                    status: [
                        {required: true, message: '请选择审核结果', trigger: 'change'}
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
            handleAudit(id){
                this.dialogFormVisible = true;
                this.orderId = id;
            },
            handleSubmit(){
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        this.addLoading = true

                        if (this.addForm.status == "审核通过") {
                            this.addForm.status = 1
                        } else {
                            this.addForm.status = 2
                        }

                        auditWithdraw(this.orderId, this.addForm).then(response => {
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
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
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
