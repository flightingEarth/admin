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

                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>起购&nbsp;房&nbsp;间&nbsp;数:</span>
                                <el-form-item label="活动区域" prop="lowestNum">
                                    <el-input v-model="ruleForm.lowestNum" placeholder="填写格式，如：散客房填1，团购房大于1"></el-input>
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
                                        <el-option
                                            v-for="item in guaranteeType"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
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
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>退&nbsp;&nbsp;房&nbsp;&nbsp;时&nbsp;&nbsp;&nbsp;间:</span>
                                <el-form-item label="膳食安排" prop="refundTime">
                                    <el-input v-model="ruleForm.refundTime"
                                              placeholder="例：1天15:59表示入住酒店前一天16：00前可申请退房"></el-input>
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
                                    <el-select v-model="ruleForm.arrivalTime" placeholder="请选择">
                                        <el-option label="00:00" value="00:00"></el-option>
                                        <el-option label="01:00" value="01:00"></el-option>
                                        <el-option label="02:00" value="02:00"></el-option>
                                        <el-option label="03:00" value="03:00"></el-option>
                                        <el-option label="04:00" value="04:00"></el-option>
                                        <el-option label="05:00" value="05:00"></el-option>
                                        <el-option label="06:00" value="06:00"></el-option>
                                        <el-option label="07:00" value="07:00"></el-option>
                                        <el-option label="08:00" value="08:00"></el-option>
                                        <el-option label="09:00" value="09:00"></el-option>
                                        <el-option label="10:00" value="10:00"></el-option>
                                        <el-option label="11:00" value="11:00"></el-option>
                                        <el-option label="12:00" value="12:00"></el-option>
                                        <el-option label="13:00" value="13:00"></el-option>
                                        <el-option label="14:00" value="14:00"></el-option>
                                        <el-option label="15:00" value="15:00"></el-option>
                                        <el-option label="16:00" value="16:00"></el-option>
                                        <el-option label="17:00" value="17:00"></el-option>
                                        <el-option label="18:00" value="18:00"></el-option>
                                        <el-option label="19:00" value="19:00"></el-option>
                                        <el-option label="20:00" value="20:00"></el-option>
                                        <el-option label="21:00" value="21:00"></el-option>
                                        <el-option label="22:00" value="22:00"></el-option>
                                        <el-option label="23:00" value="23:00"></el-option>
                                    </el-select>
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
                                <el-form-item label="活动区域" prop="activeLocation">
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
    import {addHotel, addressList} from '@/api/article'
    //  const cityOptions1 = ['商务中心', '熨衣设备', 'iPad音乐基座', '浴衣', '叫车服务', '电热水壶']
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
                inTime: "",
                outTime: "",
                title: "",
                minInTime: {
                    disabledDate: (time) => {
                        return time.getTime() < this.inTime
                    }
                },
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
                guaranteeType: [
                    {
                        value: '0',
                        label: '无需担保',
                    },
                    {
                        value: '1',
                        label: '无条件担保',
                    },
                    {
                        value: '2',
                        label: '房量担保',
                    },
                    {
                        value: '3',
                        label: '到店时间担保',
                    },
                    {
                        value: '4',
                        label: '房量和到店时间同时担保',
                    },
                    {
                        value: '5',
                        label: '无条件担保 (限时取消)',
                    }
                ],
                props: {
                    label: "name",
                    value: "id"
                },
                rules: {
//          hotelName: [
//            {required: true, message: '此处不能为空', trigger: 'blur'}
//          ],
//          minimumHotelHousePrice: [
//            {required: true, message: '此处不能为空', trigger: 'blur'}
//          ],
//          hotelBrandId: [
//            {required: true, message: '此处不能为空', trigger: 'change'}
//          ],
//          hotelSupplierId: [
//            {required: true, message: '此处不能为空', trigger: 'blur'}
//          ],
//          hotelLongitude: [
//            {required: true, message: '此处不能为空', trigger: 'blur'}
//          ],
//          hotelLatitude: [
//            {required: true, message: '此处不能为空', trigger: 'blur'}
//          ],
//          hotelAddress: [
//            {required: true, message: '此处不能为空', trigger: 'blur'}
//          ],
//          hotelStatus: [
//            {required: true, message: '此处不能为空', trigger: 'change'}
//          ],
//          hotelSort: [
//            {required: true, message: '此处不能为空', trigger: 'change'}
//          ],
//          hotelSaleCount: [
//            {required: true, message: '此处不能为空', trigger: 'change'}
//          ],
//          hotelStar: [
//            {required: true, message: '此处不能为空', trigger: 'change'}
//          ],
//          hotelTelephone: [
//            {required: true, message: '此处不能为空', trigger: 'blur'}
//          ],
//          hotelFeatures: [
//            {required: true, message: '此处不能为空', trigger: 'blur'}
//          ],
//          hotelIntroduction: [
//            {required: true, message: '此处不能为空', trigger: 'blur'}
//          ],
//          checkInTime: [
//            {required: true, message: '此处不能为空', trigger: 'change'}
//          ],
//          departureTime: [
//            {required: true, message: '此处不能为空', trigger: 'change'}
//          ],
//          hotelStartBusiness: [
//            {required: true, message: '此处不能为空', trigger: 'blur'}
//          ],
//          decorationTime: [
//            {required: true, message: '此处不能为空', trigger: 'blur'}
//          ],
//          pet: [
//            {required: true, message: '此处不能为空', trigger: 'blur'}
//          ],
//          abolitionOfPolicy: [
//            {required: true, message: '此处不能为空', trigger: 'blur'}
//          ],
//          checkIn: [
//            {required: true, message: '此处不能为空', trigger: 'blur'}
//          ],
//          buffet: [
//            {required: true, message: '此处不能为空', trigger: 'blur'}
//          ]
                }
            }
        },
        created() {
//            this.getList()

            if (this.$route.params.id) {
                this.title = "编辑产品"
            } else {
                this.title = "添加产品"
            }

        },
        methods: {
//            getList() {
//                addressList().then(response => {
////          this.options2 = response.data.data;
//                })
//            },
            handleCheckAllChange(val) {
                this.ruleForm.network = val ? this.networkList : []
                this.isIndeterminate = false
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length
                this.checkAll = checkedCount === this.networkList.length
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.networkList.length
            },

            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
//            addHotel(this.ruleForm).then(response => {
//
//              console.log(response);
//            })
                        console.log(this.ruleForm);
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
                    width: 78%;
                }
                .double {
                    .el-input {
                        width: 36%;
                    }
                    .zhi {
                        float: left;
                        margin-left: 10px;
                        margin-top: 0;
                    }
                    .el-input__inner {
                        width: 78%;
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

