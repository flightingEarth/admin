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
                            <span><i>|</i>提现编号:</span>
                            <el-input v-model="searchList.withdrawId" placeholder=""></el-input>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <span><i>|</i>用&nbsp;户&nbsp; 名:</span>
                            <el-input v-model="searchList.userName" placeholder=""></el-input>
                        </div>
                    </el-col>

                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <span><i>|</i>持&nbsp;卡&nbsp; 人:</span>
                            <el-input v-model="searchList.cardholder" placeholder=""></el-input>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple-light">
                            <span><i>|</i>手机号码:</span>
                            <el-input v-model="searchList.mobilePhone" placeholder=""></el-input>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple-light">
                            <span><i>|</i>支付状态:</span>
                            <el-select v-model="searchList.status" placeholder="请选择">
                                <el-option
                                    v-for="item in payStatus"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple-light">
                            <span><i>|</i>审核状态:</span>
                            <el-select v-model="searchList.auditStatus" placeholder="请选择">
                                <el-option
                                    v-for="item in status"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>

                    <el-col :span="24">
                        <el-button type="primary" @click="handleSearch">搜索</el-button>
                        <el-button>重置条件</el-button>
                    </el-col>

                </el-row>

            </div>
        </div>


        <!--新增界面-->
        <el-dialog title="提现审核" :visible.sync="dialogFormVisible" class="financial">

            <el-form :model="addForm" :rules="rules" ref="ruleForm" label-width="100px">
                <div class="grid-content bg-purple-light shenhe">
                    <span><i class="iconfont icon-guize"></i>审核:</span>
                    <el-form-item label="膳食安排" prop="auditStatus">
                        <el-radio-group v-model="addForm.auditStatus">
                            <el-radio label="审核通过" value="1"></el-radio>
                            <el-radio label="驳回" value="2"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </div>
                <div class="grid-content bg-purple-light shenhe">
                    <span><i class="iconfont icon-shuxie"></i>备注:</span>
                    <el-form-item label="活动形式" prop="describe">
                        <el-input type="textarea" v-model="addForm.describe"></el-input>
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
            <span>数据列表</span>
        </div>

        <div class="table">
            <el-table
                :data="tableData"
                border
                stripe
                style="width: 100%"
                v-loading="listLoading" element-loading-text="正在加载中。。。"
            >
                <el-table-column
                    prop="withdrawId"
                    label="提现编号"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="userName"
                    label="用户名"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="poundage"
                    label="提现金额"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="cardholder"
                    label="持卡人"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="bankCard"
                    label="银行卡号"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="mobilePhone"
                    label="手机号"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="idCard"
                    label="证件号"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="bankName"
                    label="银行名称"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="createdAt"
                    label="创建时间"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="updatedAt"
                    label="审核时间"
                    align="center">
                </el-table-column>
                <el-table-column
                    label="审核"
                    align="center">
                    <template slot-scope="scope">
                        <span type="text" v-if="scope.row.status == 2" size="small" class="stayIn">已支付</span>
                        <span type="text" v-if="scope.row.status !== 2" size="small" class="stayIn">未支付</span>
                        <el-button type="text" size="small" v-if="scope.row.auditStatus == 0 && scope.row.status == 2"
                                   @click="hadleAudit(scope.row.withdrawId)">审核
                        </el-button>
                        <span type="text" size="small" v-if="scope.row.auditStatus == 1 && scope.row.status == 2">审核成功</span>
                        <span type="text" size="small" v-if="scope.row.auditStatus == 2 && scope.row.status == 2">驳回</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="操作"
                    align="center">
                    <template slot-scope="scope" class="">
                        <el-button type="text" size="small" class="btn refuse">查看详情</el-button>
                    </template>
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
    </div>
</template>

<script>
    import {withdrawList, auditWithdraw} from '@/api/cashApplication'
    export default {
        name: 'cashApplication',
        data() {
            return {
                searchList: {
                    currentPage: 1,
                    limit: 20,
                    page: 1
                },
                total: 1,
                withdrawId: 0,
                dialogFormVisible: false,//新增界面是否显示
                listLoading: false,
                payStatus: [{
                    value: '1',
                    label: '未支付'
                },
                    {
                        value: '2',
                        label: '已支付'
                    }
                ],
                status: [{
                    value: '1',
                    label: '待审核'
                },
                    {
                        value: '2',
                        label: '已审核'
                    },
                    {
                        value: '3',
                        label: '驳回'
                    }
                ],
                tableData: [],
                addForm: {},
                rules: {
                    auditStatus: [
                        {required: true, message: '请选择审核结果', trigger: 'change'}
                    ],
                    describe: [
                        {required: true, message: '请填写备注', trigger: 'blur'}
                    ]
                }
            }
        },
        created(){
            this.getList();
        },
        methods: {
            getList() {
                this.listLoading = true
                withdrawList(this.searchList).then(response => {
                    this.tableData = response.data.data
                    this.total = response.data.meta.total

                    this.listLoading = false
                })
            },
            handleCurrentChange(val) {
                this.searchList.page = val
                this.getList()
            },
            back(){
                this.dialogFormVisible = false
            },
            handleSearch(){
                this.getList();
            },
            hadleAudit(id){
                this.dialogFormVisible = true;
                this.withdrawId = id;
            },
            handleSubmit(){
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        this.addLoading = true

                        if(this.addForm.auditStatus == "审核通过"){
                            this.addForm.auditStatus = 1
                        }else {
                            this.addForm.auditStatus = 2
                        }

                        auditWithdraw(this.withdrawId, this.addForm).then(response => {
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
            margin-top: 5px;
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
            height: 60px;
            padding: 0 20px;
            background: #fff;
            margin-top: 20px;
            line-height: 60px;
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.08), -2px -2px 4px rgba(0, 0, 0, 0.08);
            i {
                color: #2C7ADE;
            }
        }
        ul {
            list-style: none;
            /*margin-top: 10px;*/
            overflow: hidden;
            padding: 0;
            margin-bottom: 0;
            li {
                float: left;
                width: 100px;
                height: 40px;
                text-align: center;
                line-height: 40px;
                background: #fff;
                margin-left: 10px;
                border-radius: 3px;
                a {
                    color: #333;
                }
            }
            li:first-child {
                margin-left: 0;
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
        .shenhe {
            span {
                float: left;
                margin-top: 7px;
                margin-right: 10px;
            }
            .el-form-item {

            }
            .el-input {
                width: 60% !important;
            }
            .iconfont {
                margin-right: 5px;
            }
            .el-textarea {
                width: 60% !important;
                .el-textarea__inner {
                    height: 70px !important;
                }
            }

        }
        .alertBtn {
            text-align: center;
        }

    }


</style>
