<template>
    <div class="main">
        <div class="search">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <div class="title">
                    <i class="iconfont icon-comiisjiahao"></i>
                    <span>{{title}}</span>
                </div>
                <div class="input">
                    <el-row>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>产&nbsp;&nbsp;品&nbsp;&nbsp;名&nbsp;&nbsp;&nbsp;称:</span>
                                <el-form-item label="膳食安排" prop="goodsName">
                                    <el-input v-model="ruleForm.goodsName"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>产&nbsp;&nbsp;品&nbsp;&nbsp;类&nbsp;&nbsp;型:</span>
                                <el-form-item label="膳食安排" prop="isGroup">
                                    <el-select v-model="ruleForm.isGroup" placeholder="请选择">
                                        <el-option
                                            v-for="item in isGroup"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-popover
                            ref="popoverLowestNum"
                            placement="bottom"
                            title="提示信息"
                            width="200"
                            trigger="click"
                            content="填写数字，数字越大排序越靠前" style="display: none">
                        </el-popover>


                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>起购&nbsp;房&nbsp;间&nbsp;数:</span>
                                <el-form-item label="活动区域" prop="lowestNum">
                                    <el-input v-model="ruleForm.lowestNum" v-popover:popoverLowestNum placeholder="填写格式，如：散客房填1，团购房大于1"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>床&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型:</span>
                                <el-form-item label="膳食安排" prop="bedType">
                                    <el-input v-model="ruleForm.bedType"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>担&nbsp;&nbsp;保&nbsp;&nbsp;规&nbsp;&nbsp;&nbsp;则:</span>
                                <el-form-item label="膳食安排" prop="guaranteeType">
                                    <el-select v-model="ruleForm.guaranteeType" placeholder="请选择">
                                        <el-option label="无需担保" value="0"></el-option>
                                        <el-option label="无条件担保" value="1"></el-option>
                                        <el-option label="房量担保" value="2"></el-option>
                                        <el-option label="到店时间担保" value="3"></el-option>
                                        <el-option label="房量和到店时间同时担保" value="4"></el-option>
                                        <el-option label="无条件担保（限时取消）" value="5"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>早&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;餐:</span>
                                <el-form-item label="膳食安排" prop="breakfast">
                                    <el-select v-model="ruleForm.breakfast" placeholder="请选择">
                                        <el-option label="单早" value="0"></el-option>
                                        <el-option label="无早" value="1"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>


                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>取&nbsp;&nbsp;消&nbsp;&nbsp;规&nbsp;&nbsp;&nbsp;则:</span>
                                <el-form-item label="膳食安排" prop="changeRules">
                                    <el-select v-model="ruleForm.changeRules" placeholder="请选择">
                                        <el-option label="免费取消" value="0"></el-option>
                                        <el-option label="允许变更／取消，需在XX日YY时之前通知" value="1"></el-option>
                                        <el-option label="允许变更／取消，需在最早到店时间之前几个小时通知" value="2"></el-option>
                                        <el-option label="允许变更／取消，需在到店日期的24点之前几个小时通知" value="3"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>加&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;床:</span>
                                <el-form-item label="活动区域" prop="extraBed">
                                    <el-select v-model="ruleForm.extraBed" placeholder="请选择">
                                        <el-option label="可加床" value="1"></el-option>
                                        <el-option label="不可加床" value="2"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light refundTime">
                                <span><i>|</i>退&nbsp;&nbsp;房&nbsp;&nbsp;时&nbsp;&nbsp;&nbsp;间:</span>
                                <el-form-item label="膳食安排" prop="refundTime">
                                    <el-input v-model="ruleForm.refundDay"
                                              placeholder="例：1天,请输入1"></el-input>
                                    <span class="day">天</span>
                                    <el-time-select
                                        v-model="refundTime"
                                        :picker-options="{
                                            start: '00:00',
                                            step: '00:15',
                                            end: '23:45'
                                          }"
                                        placeholder="选择时间">
                                    </el-time-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>宽&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;带:</span>
                                <el-form-item label="膳食安排" prop="broadbandFee">
                                    <el-select v-model="ruleForm.broadbandFee" placeholder="请选择">
                                        <el-option label="收费" value="1"></el-option>
                                        <el-option label="免费有线" value="2"></el-option>
                                        <el-option label="免费无线" value="3"></el-option>
                                        <el-option label="免费宽带" value="4"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>担保房间数量:</span>
                                <el-form-item label="活动区域" prop="amount">
                                    <el-input v-model="ruleForm.amount" type="number"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i></i>确&nbsp;&nbsp;认&nbsp;&nbsp;时&nbsp;&nbsp;&nbsp;间:</span>
                                <el-form-item label="活动区域" prop="promptly">
                                    <el-input v-model="ruleForm.promptly" type="number"
                                              placeholder="填写数字，2表示2小时确认，如需立即确认，则填写"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>退改扣费比例:</span>
                                <el-form-item label="活动区域" prop="changeRate">
                                    <el-input v-model="ruleForm.changeRate" type="number"
                                              placeholder="填写格式，如：0-100，100%用户的房费全部作为违约金"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>付&nbsp;&nbsp;款&nbsp;&nbsp;方&nbsp;&nbsp;&nbsp;式:</span>
                                <el-form-item label="膳食安排" prop="payMethod">
                                    <el-select v-model="ruleForm.payMethod" placeholder="请选择">
                                        <el-option label="到店支付" value="0"></el-option>
                                        <el-option label="网上支付" value="1"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>最早到达时间:</span>
                                <el-form-item label="膳食安排" prop="arrivalTime">
                                        <el-time-select
                                            v-model="ruleForm.arrivalTime"
                                            :picker-options="{
                                            start: '00:00',
                                            step: '01:00',
                                            end: '23:45'
                                          }"
                                            placeholder="请选择">
                                        </el-time-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>立减或返金额:</span>
                                <el-form-item label="膳食安排" prop="payMoney">
                                    <el-input v-model="ruleForm.payMoney"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>审&nbsp;&nbsp;核&nbsp;&nbsp;状&nbsp;&nbsp;&nbsp;态:</span>
                                <el-form-item label="膳食安排" prop="reviewStatus">
                                    <el-radio v-model="ruleForm.reviewStatus" label="0">待审核</el-radio>
                                    <el-radio v-model="ruleForm.reviewStatus" label="1">审核通过</el-radio>
                                    <el-radio v-model="ruleForm.reviewStatus" label="2">审核未通过</el-radio>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>产&nbsp;&nbsp;品&nbsp;&nbsp;状&nbsp;&nbsp;&nbsp;态:</span>
                                <el-form-item label="膳食安排" prop="status">
                                    <el-radio v-model="ruleForm.status" label="1">上架</el-radio>
                                    <el-radio v-model="ruleForm.status" label="2">下架</el-radio>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple double">
                                <span><i>|</i>到店担保时间:</span>
                                <el-form-item label="活动区域" prop="inTime">
                                    <el-time-select
                                        v-model="startTime"
                                        :picker-options="{
                                            start: '00:00',
                                            step: '00:15',
                                            end: '23:45'
                                          }"
                                        placeholder="担保开始时间">
                                    </el-time-select>
                                    <span class="zhi">
                                        <el-select v-model="ruleForm.isTomorrow" placeholder="请选择">
                                        <el-option label="当天" value="0"></el-option>
                                        <el-option label="次日" value="1"></el-option>
                                    </el-select>
                                    </span>
                                    <el-time-select
                                        v-model="endTime"
                                        :picker-options="{
                                            start: '00:00',
                                            step: '00:15',
                                            end: '23:45'
                                          }"
                                        placeholder="担保结束时间">
                                    </el-time-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>排&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;序:</span>
                                <el-form-item label="膳食安排" prop="sort">
                                    <el-input v-model="ruleForm.sort" type="number" placeholder="请输入数字"></el-input>
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
    import {updateProduct, addProduct} from '@/api/hotelProduct'
    import {parseTime} from '@/utils';
    export default {
        name: "addProduct",
        props: {
            ruleForm: {
                type: Object,
                default() {
                    return {
//                        status: 1
                    }
                }
            }
        },
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                activeName: 'second',
                title: "",
                refundTime: "",
                startTime: "",
                endTime: "",
                isGroup: [
                    {
                        value: '0',
                        label: '散客房',
                    },
                    {
                        value: '1',
                        label: '团队房按天',
                    },
                    {
                        value: '2',
                        label: '团队房按订单',
                    }
                ],
                rules: {
                    goodsName: [
                        {required: true, message: '请输入产品名称', trigger: 'blur'}
                    ],
                    isGroup: [
                        {required: true, message: '请选择产品类型', trigger: 'change'}
                    ],
                    lowestNum: [
                        {required: true, message: '请输入起购房间数量', trigger: 'blur'}
                    ],
                    bedType: [
                        {required: true, message: '请输入床型', trigger: 'blur'}
                    ],
                    guaranteeType: [
                        {required: true, message: '请选择担保规则', trigger: 'change'}
                    ],
                    breakfast: [
                        {required: true, message: '请选择是否含早', trigger: 'change'}
                    ],
                    changeRules: [
                        {required: true, message: '请选择取消规则', trigger: 'change'}
                    ],
                    extraBed: [
                        {required: true, message: '请选择可否加床', trigger: 'change'}
                    ],
                    broadbandFee: [
                        {required: true, message: '请选择宽带类型', trigger: 'change'}
                    ],
                    amount: [
                        {required: true, message: '请输入担保房间数量', trigger: 'blur'}
                    ],
                    changeRate: [
                        {required: true, message: '请输入改扣费比例', trigger: 'blur'}
                    ],
                    payMethod: [
                        {required: true, message: '请选择付款方式', trigger: 'change'}
                    ],
                    arrivalTime: [
                        {required: true, message: '请选择最早到达时间', trigger: 'change'}
                    ],
                    payMoney: [
                        {required: true, message: '请输入立减或减返金额', trigger: 'blur'}
                    ],
                    reviewStatus: [
                        {required: true, message: '请选择审核状态', trigger: 'change'}
                    ],
                    status: [
                        {required: true, message: '请选择产品状态', trigger: 'blur'}
                    ],
                    sort: [
                        {required: true, message: '请输入排序规则', trigger: 'blur'}
                    ]
                }
            }
        },
        created() {
            this.ruleForm.roomId = this.$route.query.roomId;
            if (this.$route.params.id) {
                this.title = "编辑产品"
            } else {
                this.title = "添加产品"
            }

        },
        methods: {
            submitForm(formName) {
                this.ruleForm.refundTime = parseTime(this.refundTime, '{h}:{i}')
                this.ruleForm.startTime = parseTime(this.startTime, '{h}:{i}')
                this.ruleForm.endTime = parseTime(this.endTime, '{h}:{i}')
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        this.addLoading = true
                        if (this.ruleForm.goods_id == undefined) {
                            addProduct(this.ruleForm).then(response => {
                                console.log(response.data);
                                this.$message({
                                    message: '添加成功！',
                                    type: 'success'
                                });
                                this.handleCancel();
                            })
                        } else {
                            updateProduct(this.ruleForm.goods_id, this.ruleForm).then(response => {
                                this.$message({
                                    message: '更新成功！',
                                    type: 'success'
                                });
                                this.handleCancel();
                            })
                        }
                    } else {
                        console.log('error submit!!')
                        return false
                    }
                })
            },
            resetForm(formName) {
                this.$refs[formName].resetField()
            },
            handleCancel(){
                this.$router.push({path: "/hotelproduct"})
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
                    width: 78%;
                }
                .double {
                    .el-input {
                        width: 24%;
                    }
                    .zhi {
                        float: left;
                        margin-left: 10px;
                        margin-top: 0;
                        .el-select {
                            width: 100%;
                        }
                    }
                    .el-input__inner {
                        width: 78%;
                    }
                }
                .refundTime {
                    .el-input {
                        width: 37%;
                        /*float: left;*/
                    }
                    .day {
                        /*float: left;*/
                        margin: 0 10px 0;
                    }
                }
                .el-textarea {
                    width: 80%;
                }
                .grid-content {
                    margin-left: 20px;
                }
                .el-select {
                    width: 78%;
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

