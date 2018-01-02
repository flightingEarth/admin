<template>
    <div class="main">
        <div class="search">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <div class="title">
                    <i class="iconfont icon-shuxie"></i>
                    <span>{{title}}</span>
                </div>
                <div class="input">
                    <el-row>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>票&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;种:</span>
                                <el-form-item label="膳食安排" prop="ticketType">
                                    <el-select v-model="ruleForm.ticketType" placeholder="请选择">
                                        <el-option label="普通票" value="0"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>门票名称:</span>
                                <el-form-item label="膳食安排" prop="ticketName">
                                    <el-input v-model="ruleForm.ticketName"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>审核状态:</span>
                                <el-form-item label="活动区域" prop="status">
                                    <el-select v-model="ruleForm.status" placeholder="请选择">
                                        <el-option label="审核通过" value="0"></el-option>
                                        <el-option label="审核未通过" value="1"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>上&nbsp;下&nbsp; 架:</span>
                                <el-form-item label="活动区域" prop="upDown">
                                    <el-select v-model="ruleForm.upDown" placeholder="请选择">
                                        <el-option label="上架" value="0"></el-option>
                                        <el-option label="下架" value="1"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>取票地址:</span>
                                <el-form-item label="膳食安排" prop="address">
                                    <el-input v-model="ruleForm.address"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>进行活动:</span>
                                <el-form-item label="活动区域" prop="activities">
                                    <el-select v-model="ruleForm.activities" placeholder="请选择">
                                        <el-option label="无活动" value="0"></el-option>
                                        <el-option label="有活动" value="1"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>


                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>时间类型:</span>
                                <el-form-item label="膳食安排" prop="timeType">
                                    <el-radio-group v-model="ruleForm.timeType">
                                        <el-radio label="全部"></el-radio>
                                        <el-radio label="日常票"></el-radio>
                                        <el-radio label="周末票"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>支付方式:</span>
                                <el-form-item label="膳食安排" prop="pay">
                                    <el-radio-group v-model="ruleForm.pay">
                                        <el-radio label="在线支付"></el-radio>
                                        <el-radio label="景区到付"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="20">
                            <div class="grid-content bg-purple-light double">
                                <span><i>|</i>入园时间:</span>
                                <el-form-item label="活动区域" prop="inTime">
                                    <el-date-picker
                                        v-model="ruleForm.time"
                                        type="daterange"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期">
                                    </el-date-picker>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="22">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>入园方式:</span>
                                <el-form-item label="活动形式" prop="inType">
                                    <el-input type="textarea" v-model="ruleForm.inType"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="22">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>包含项目:</span>
                                <el-form-item label="活动形式" prop="include">
                                    <el-input type="textarea" v-model="ruleForm.include"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="22">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>退票说明:</span>
                                <el-form-item label="活动形式" prop="refundTicket">
                                    <el-input type="textarea" v-model="ruleForm.refundTicket"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                    </el-row>
                </div>
                <div class="title title1">
                    <i class="iconfont icon-gouwuche"></i>
                    <span>门票购买规则</span>
                </div>
                <div class="input">
                    <el-row>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light double double12">
                                <span><i>|</i>有&nbsp;&nbsp;&nbsp;效&nbsp;&nbsp;日&nbsp;&nbsp;期:</span>
                                <el-form-item label="活动区域" prop="validTime">
                                    <el-date-picker
                                        v-model="ruleForm.time1"
                                        type="daterange"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期">
                                    </el-date-picker>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>提前预定时间:</span>
                                <el-form-item label="膳食安排" prop="orderTime">
                                    <el-input v-model="ruleForm.orderTime"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>预订频次限制:</span>
                                <el-form-item label="膳食安排" prop="timesLimit">
                                    <el-radio-group v-model="ruleForm.timesLimit">
                                        <el-radio label="无"></el-radio>
                                        <el-radio label="1天"></el-radio>
                                        <el-radio label="1周"></el-radio>
                                        <el-radio label="1月"></el-radio>
                                        <el-radio label="1年"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>团购最低张数:</span>
                                <el-form-item label="膳食安排" prop="minNumber">
                                    <el-input v-model="ruleForm.minNumber"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>结&nbsp;&nbsp;&nbsp;算&nbsp;&nbsp;方&nbsp;&nbsp;式:</span>
                                <el-form-item label="膳食安排" prop="balanceType">
                                    <el-radio-group v-model="ruleForm.balanceType">
                                        <el-radio label="系统结算"></el-radio>
                                        <el-radio label="自主结算"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>身份证是否必填:</span>
                                <el-form-item label="膳食安排" prop="card">
                                    <el-radio-group v-model="ruleForm.card">
                                        <el-radio label="是"></el-radio>
                                        <el-radio label="否"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>
                </div>


                <div class="title title1">
                    <i class="iconfont icon-guize"></i>
                    <span>门票使用规则</span>
                </div>
                <div class="input">
                    <el-row>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>使&nbsp;&nbsp;&nbsp;用&nbsp;&nbsp;&nbsp;方&nbsp;&nbsp;&nbsp;式:</span>
                                <el-form-item label="膳食安排" prop="useType">
                                    <el-select v-model="ruleForm.useType" placeholder="请选择">
                                        <el-option label="刷身份证" value="0"></el-option>
                                        <el-option label="刷票" value="1"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>使用有效期（天）:</span>
                                <el-form-item label="膳食安排" prop="useTime">
                                    <el-input v-model="ruleForm.useTime"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>预订延后（h）:</span>
                                <el-form-item label="膳食安排" prop="delay">
                                    <el-input v-model="ruleForm.delay"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>可&nbsp;申&nbsp;请&nbsp;退票&nbsp;时间:</span>
                                <el-form-item label="膳食安排" prop="refundTicketTime">
                                    <el-input v-model="ruleForm.refundTicketTime"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>退票规则::</span>
                                <el-form-item label="膳食安排" prop="refundTicketRule">
                                    <el-radio-group v-model="ruleForm.refundTicketRule">
                                        <el-radio label="可退"></el-radio>
                                        <el-radio label="不可退"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>是否支持部分可退:</span>
                                <el-form-item label="膳食安排" prop="support">
                                    <el-radio-group v-model="ruleForm.support">
                                        <el-radio label="是"></el-radio>
                                        <el-radio label="否"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>改期规则:</span>
                                <el-form-item label="膳食安排" prop="changeRule">
                                    <el-radio-group v-model="ruleForm.changeRule">
                                        <el-radio label="可改"></el-radio>
                                        <el-radio label="不可改"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>
                </div>

                <div class="title title1">
                    <i class="iconfont icon-qian"></i>
                    <span>价格信息</span>
                </div>
                <div class="input">
                    <el-row>

                        <el-col :span="8">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>市场价格:</span>
                                <el-form-item label="膳食安排" prop="marketPrice">
                                    <el-input v-model="ruleForm.marketPrice"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>供应价格:</span>
                                <el-form-item label="膳食安排" prop="supplyTime">
                                    <el-input v-model="ruleForm.supplyTime"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>销售价格:</span>
                                <el-form-item label="膳食安排" prop="salesPrice">
                                    <el-input v-model="ruleForm.salesPrice"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                    </el-row>
                </div>


                <div class="input">
                    <el-row>
                        <el-col :span="24">
                            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                            <el-button>返回</el-button>
                        </el-col>
                    </el-row>
                </div>

            </el-form>
        </div>


    </div>
</template>

<script>
    import {fetchList} from '@/api/article';
    export default {
        name: 'addTicket',
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                activeName: 'second',
                checkAll: false,
                checkedCities: [],
                isIndeterminate: true,
                title:"",
                ruleForm: {
                    ticketType: "",
                    ticketName: "",
                    status: "",
                    upDown: "",
                    address: "",
                    activities: "",
                    timeType: "",
                    pay: "",
                    inType: "",
                    include: "",
                    refundTicket: "",
                    orderTime: "",
                    timesLimit: "",
                    minNumber: "",
                    balanceType: "",
                    card: "",
                    useType: "",
                    useTime: "",
                    delay: "",
                    refundTicketTime: "",
                    refundTicketRule: "",
                    support: "",
                    changeRule: "",
                    marketPrice: "",
                    supplyTime: "",
                    salesPrice: ""
                },
                rules: {
                    ticketType: [
                        {required: true, message: '此处不能为空', trigger: 'change'}
                    ],
                    ticketName: [
                        {required: true, message: '此处不能为空', trigger: 'blur'}
                    ],
                    status: [
                        {required: true, message: '此处不能为空', trigger: 'change'}
                    ],
                    upDown: [
                        {required: true, message: '此处不能为空', trigger: 'change'}
                    ],
                    address: [
                        {required: true, message: '此处不能为空', trigger: 'blur'}
                    ],
                    activities: [
                        {required: true, message: '此处不能为空', trigger: 'change'}
                    ],
                    timeType: [
                        {required: true, message: '此处不能为空', trigger: 'change'}
                    ],
                    pay: [
                        {required: true, message: '此处不能为空', trigger: 'change'}
                    ],
                    inType: [
                        {required: true, message: '此处不能为空', trigger: 'blur'}
                    ],
                    include: [
                        {required: true, message: '此处不能为空', trigger: 'blur'}
                    ],
                    refundTicket: [
                        {required: true, message: '此处不能为空', trigger: 'blur'}
                    ],
                    orderTime: [
                        {required: true, message: '此处不能为空', trigger: 'blur'}
                    ],
                    timesLimit: [
                        {required: true, message: '此处不能为空', trigger: 'change'}
                    ],
                    minNumber: [
                        {required: true, message: '此处不能为空', trigger: 'blur'}
                    ],
                    balanceType: [
                        {required: true, message: '此处不能为空', trigger: 'change'}
                    ],
                    card: [
                        {required: true, message: '此处不能为空', trigger: 'change'}
                    ],
                    useType: [
                        {required: true, message: '此处不能为空', trigger: 'change'}
                    ],
                    useTime: [
                        {required: true, message: '此处不能为空', trigger: 'blur'}
                    ],
                    delay: [
                        {required: true, message: '此处不能为空', trigger: 'blur'}
                    ],
                    refundTicketTime: [
                        {required: true, message: '此处不能为空', trigger: 'blur'}
                    ],
                    refundTicketRule: [
                        {required: true, message: '此处不能为空', trigger: 'change'}
                    ],
                    support: [
                        {required: true, message: '此处不能为空', trigger: 'change'}
                    ],
                    changeRule: [
                        {required: true, message: '此处不能为空', trigger: 'change'}
                    ],
                    marketPrice: [
                        {required: true, message: '此处不能为空', trigger: 'blur'}
                    ],
                    supplyTime: [
                        {required: true, message: '此处不能为空', trigger: 'blur'}
                    ],
                    salesPrice: [
                        {required: true, message: '此处不能为空', trigger: 'blur'}
                    ]
                }
            }
        },
        created() {
//            this.getList()

            if(this.$route.params.id){
                this.title = "编辑门票"
            }else {
                this.title = "添加门票"
            }

        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList)
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url
                this.dialogVisible = true
            },

            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        console.log(this.ruleForm)
                    } else {
                        console.log('error submit!!')
                        return false
                    }
                })
            },
            resetForm(formName) {
                this.$refs[formName].resetFields()
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
                margin-bottom: 20px;
                span {
                    margin-left: 10px;
                }
            }
            .title1 {
                margin-top: 30px;
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
                    width: 73%;
                }
                .el-textarea {
                    width: 80%;
                }
                .grid-content {
                    margin-left: 20px;
                }
                .el-select {
                    width: 73%;
                }
                .el-cascader {
                    margin: 0;
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
                .double {
                    .el-input__inner{
                        width: 44%;
                    }
                }
                .double12 {
                    .el-input__inner{
                        width: 73%;
                    }
                }
                .imgSuggest {
                    margin-left: 100px;
                    font-size: 12px;
                    color: #666;
                }
            }
            .el-tabs {
                margin-left: 40px;
                margin-top: 20px;
            }
            .tab {
                position: relative;
                .checkAll {
                    position: absolute;
                    right: 10px;
                    top: 10px;
                }
            }

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

    }


</style>
