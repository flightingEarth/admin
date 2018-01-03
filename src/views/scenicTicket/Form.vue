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
                                <span><i>|</i>门&nbsp;&nbsp;&nbsp;票&nbsp;&nbsp;名&nbsp;&nbsp;称:</span>
                                <el-form-item label="门票名称" prop="ticketName">
                                    <el-input v-model="ruleForm.ticketName"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>票&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;种:</span>
                                <el-form-item label="票种" prop="ticketType">
                                    <el-select v-model="ruleForm.ticketType" placeholder="请选择">
                                        <el-option label="普通票" value="0"></el-option>
                                        <el-option label="年票" value="1"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>审&nbsp;&nbsp;&nbsp;核&nbsp;&nbsp;状&nbsp;&nbsp;态:</span>
                                <el-form-item label="活动区域" prop="auditStatus">
                                    <el-select v-model="ruleForm.review_status" placeholder="请选择">
                                        <el-option label="通过"  value="0"></el-option>
                                        <el-option label="未通过"  value="1"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>上&nbsp;&nbsp;&nbsp;&nbsp;下&nbsp;&nbsp;&nbsp;&nbsp;架:</span>
                                <el-form-item label="上下架" prop="status">
                                    <el-select v-model="ruleForm.status" placeholder="请选择">
                                        <el-option label="上架" value="0"></el-option>
                                        <el-option label="下架" value="1"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="20">
                            <div class="grid-content bg-purple-light double">
                                <span><i>|</i>入&nbsp;&nbsp;&nbsp;园&nbsp;&nbsp;时&nbsp;&nbsp;间:</span>
                                <el-form-item label="入园时间" prop="in_time">
                                    <el-time-select
                                            v-model="ruleForm.in_time"
                                            :picker-options="{start: '08:30',step: '00:15',end: '12:30'}"
                                            placeholder="入园时间">
                                    </el-time-select>
                                    <span class="zhi">至</span>

                                    <el-time-select
                                            v-model="ruleForm.out_time"
                                            :picker-options="{start: '12:30',step: '00:15',end: '20:30'}"
                                            placeholder="闭园时间">
                                    </el-time-select>
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
                                <span><i>|</i>可&nbsp;&nbsp;&nbsp;售&nbsp;&nbsp;日&nbsp;&nbsp;期:</span>
                                <el-form-item label="售卖日期" prop="sell_start_time">
                                    <el-date-picker
                                            v-model="ruleForm.sell_start_time"
                                            type="date"
                                            format="yyyy-MM-dd"
                                            value-format="yyyy-MM-dd"
                                            placeholder="选择日期">
                                    </el-date-picker>
                                    <span class="zhi">至</span>
                                    <el-date-picker
                                            v-model="ruleForm.sell_end_time"
                                            type="date"
                                            placeholder="选择日期"
                                            format="yyyy-MM-dd"
                                            value-format="yyyy-MM-dd"
                                            :picker-options="minInTime">
                                    </el-date-picker>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>提前预定天数:</span>
                                <el-form-item label="提前预定天数" prop="orderTime">
                                    <el-input type="number" value="number"  v-model="ruleForm.advance_date"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>提前预定时间:</span>
                                <el-form-item label="膳食安排" prop="advance_time">
                                    <el-time-select
                                            v-model="ruleForm.advance_time"
                                            :picker-options="{start: '08:30',step: '00:15',end: '12:30'}"
                                            placeholder="提前预定时间">
                                    </el-time-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>推迟游玩天数:</span>
                                <el-form-item label="推迟游玩天数" prop="delay_days">
                                    <el-input type="number" v-model="ruleForm.delay_days"></el-input>
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
                                <span><i>|</i>一次最多购买的票数:</span>
                                <el-form-item label="一次最多购买的票数" prop="orderTime">
                                    <el-input type="number" v-model="ruleForm.buy_limit_up"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>一次最少购买的票数:</span>
                                <el-form-item label="一次最多购买的票数" prop="orderTime">
                                    <el-input type="number" v-model="ruleForm.buy_limit_low"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>限&nbsp;&nbsp;&nbsp;购&nbsp;&nbsp;方&nbsp;&nbsp;式:</span>
                                <el-form-item label="限购方式" prop="orderTime">
                                    <el-select v-model="ruleForm.buy_limit_date" placeholder="请选择">
                                        <el-option label="整个销售时间段" value="0"></el-option>
                                        <el-option label="每日" value="1"></el-option>
                                        <el-option label="每周" value="2"></el-option>
                                        <el-option label="每月" value="3"></el-option>
                                        <el-option label="每年" value="4"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>


                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>限&nbsp;&nbsp;&nbsp;购&nbsp;&nbsp;规&nbsp;&nbsp;则:</span>
                                <el-form-item label="限购方式" prop="orderTime">
                                    <el-select v-model="ruleForm.buy_limit" placeholder="请选择">
                                        <el-option label="不限" value="0"></el-option>
                                        <el-option label="手机号限购每张" value="1"></el-option>
                                        <el-option label="手机号限购每笔" value="2"></el-option>
                                        <el-option label="身份证限购每张" value="3"></el-option>
                                        <el-option label="身份整限购每笔" value="4"></el-option>
                                        <el-option label="手机号+身份证每张" value="5"></el-option>
                                        <el-option label="手机号+身份证每笔" value="6"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>限&nbsp;&nbsp;&nbsp;购&nbsp;&nbsp;张&nbsp;&nbsp;数:</span>
                                <el-form-item label="限购张数" prop="orderTime">
                                    <el-input type="number" v-model="ruleForm.buy_limit_num"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>



                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>退&nbsp;&nbsp;&nbsp;票&nbsp;&nbsp;规&nbsp;&nbsp;则:</span>
                                <el-form-item label="退票规则" prop="refund_rule">
                                    <el-select v-model="ruleForm.refund_rule" placeholder="请选择">
                                        <el-option label="随时退" value="0"></el-option>
                                        <el-option label="可退" value="1"></el-option>
                                        <el-option label="不可退" value="2"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>可退时分限制:</span>
                                <el-form-item label="可退时分限制" prop="refund_time">
                                    <el-time-select
                                        v-model="ruleForm.refund_time"
                                        :picker-options="{ start: '08:30', step: '00:15', end: '18:30'}"
                                        placeholder="选择时间">
                                    </el-time-select>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>可退天数限制:</span>
                                <el-form-item label="膳食安排" prop="refund_day">
                                    <el-input type="number" v-model="ruleForm.refund_day"></el-input>
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
                                <el-form-item label="市场价格" prop="market_price">
                                    <el-input type="number" v-model="ruleForm.market_price"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>供应价格:</span>
                                <el-form-item label="供应价格" prop="provide_price">
                                    <el-input type="number" v-model="ruleForm.provide_price"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>销售价格:</span>
                                <el-form-item label="销售价格" prop="shop_price">
                                    <el-input type="number" v-model="ruleForm.shop_price"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="8">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>库&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;存:</span>
                                <el-form-item label="销售价格" prop="remain">
                                    <el-input type="number" v-model="ruleForm.remain"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="22">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>取票地址:</span>
                                <el-form-item label="取票地址" prop="address">
                                    <el-input v-model="ruleForm.address"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="22">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>入园方式:</span>
                                <el-form-item label="活动形式" prop="park_mode">
                                    <el-input type="textarea" v-model="ruleForm.park_mode"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="22">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>包含项目:</span>
                                <el-form-item label="包含项目" prop="contain_item">
                                    <el-input type="textarea" v-model="ruleForm.contain_item"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="22">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>退票说明:</span>
                                <el-form-item label="活动形式" prop="refund_info">
                                    <el-input type="textarea" v-model="ruleForm.refund_info"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="22">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>使用说明:</span>
                                <el-form-item label="使用说明" prop="instructions">
                                    <el-input type="textarea" v-model="ruleForm.instructions"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>
                </div>


                <div class="input">
                    <el-row>
                        <el-col :span="24">
                            <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
                            <el-button>返回</el-button>
                        </el-col>
                    </el-row>
                </div>

            </el-form>
        </div>


    </div>
</template>

<script>
    import { parseTime } from '@/utils';
    import { updateTicket, addTicket } from '@/api/ticket'
    export default {
        name: 'addTicket',
        props: {
            ruleForm: {
                type: Object,
                default() {
                    return {
                        status : '上架'
                    }
                }
            }
        },
        data() {
            return {
                scenicId: 0,
                sell_start_time: '',
                title:"",
                minInTime: {
                    disabledDate: (time) => {
//                        console.log(time)
                        return time.getTime() < this.sell_start_time
                    }
                },
                minValidTime: {
                    disabledDate: (time) => {
                        return time.getTime() < this.validTime
                    }
                },
                rules: {
                    ticketType: [
                        {required: true, message: '请选择门票票种', trigger: 'change'}
                    ],
                    ticketName: [
                        {required: true, message: '请输入门票名称', trigger: 'blur'}
                    ],
                    status: [
                        {required: true, message: '请选择门票售卖状态', trigger: 'change'}
                    ],
                    review_status: [
                        {required: true, message: '请选择门票审核状态', trigger: 'change'}
                    ],
                    address: [
                        { required: true, message: '请填写取票地址', trigger: 'blur'}
                    ],
                    in_time: [
                        {required: true, message: '请填写入园时间', trigger: 'change'}
                    ],
                    sell_end_time: [
                        {required: true, type:'date', message: '请选择售卖日期', trigger: 'change'}
                    ],
                    advance_date: [
                        {required: true, message: '请填写提前预定天数', trigger: 'blur'}
                    ],
                    advance_time: [
                        {required: true, message: '请选择提前预订时间', trigger: 'blur'}
                    ],
                    buy_limit_up: [
                        {required: true, message: '请填写一次最多购买的票数', trigger: 'blur'}
                    ],
                    buy_limit_low: [
                        {required: true, message: '请填写一次最少购买的票数', trigger: 'blur'}
                    ],
                    buy_limit: [
                        {required: true, message: '请选择限购的规则', trigger: 'change'}
                    ],
                    buy_limit_date: [
                        {required: true, message: '请选择限购的方式', trigger: 'change'}
                    ],
                    buy_limit_num: [
                        {required: true, message: '请选择限购的限购张数', trigger: 'blur'}
                    ],
                    market_price: [
                        {required: true, message: '请请输入门票市场价',trigger: 'blur'}
                    ],
                    shop_price: [
                        {required: true, message: '请填写门票的销售价', trigger: 'blur'}
                    ],
                    provide_price: [
                        {required: true, message: '请填写门票的供应价', trigger: 'blur'}
                    ],
                    delay_days: [
                        {required: true, message: '请填写门票可推迟游玩的天数', trigger: 'blur'}
                    ],
                    refund_rule: [
                        {required: true, message: '请选择退票规则', trigger: 'change'}
                    ],
                    refund_day: [
                        {required: true, message: '请填写门票可退天数限制', trigger: 'blur'}
                    ],
                    refund_time: [
                        {required: true, message: '请选择门票可退时间限制', trigger: 'blur'}
                    ],
                    park_mode: [
                        {required: true, message: '请填写包含项目', trigger: 'blur'}
                    ],
                    contain_item: [
                        {required: true, message: '请填写入园方式', trigger: 'blur'}
                    ],
                    refund_info: [
                        {required: true, message: '请填写退款说明', trigger: 'blur'}
                    ],
                    instructions: [
                        {required: true, message: '请填写使用说明', trigger: 'blur'}
                    ]
                }
            }
        },
        created() {
            this.scenicId = this.$route.params.scenicId
            if(this.$route.params.scenicId){
                this.title = "编辑门票"
            }else{
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
                console.log(this.ruleForm)
                if (!this.ruleForm.sell_start_time || !this.ruleForm.sell_end_time || this.ruleForm.sell_start_time == '0-0-0 0:0:0' || this.ruleForm.sell_end_time == '0-0-0 0:0:0') {
                    this.$message({
                        message: '请选择可售日期！',
                        type: 'error'
                    });
                    return false;
                }

                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.addLoading = true
                        if (this.ruleForm.ticketId == undefined) {
                            addTicket(this.scenicId, this.ruleForm).then(response => {
                                this.$message({
                                    message: '添加成功！',
                                    type: 'success'
                                });
                                this.handleCancel();
                            })
                        } else {
                            updateTicket(this.scenicId, this.ruleForm.tieketId, this.ruleForm).then(response => {
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
                    width: 73%;
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
                    .el-input {
                        width: 20.5%;
                    }
                    .zhi {
                        float: left;
                        margin-left: 10px;
                        margin-top: 0;
                    }
                }
                .double12 {
                    .el-input {
                        width: 34.5%;
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
