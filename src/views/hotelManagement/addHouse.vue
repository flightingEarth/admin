<template>
    <div class="main">
        <div class="search">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <div class="title">
                    <i class="iconfont icon-comiisjiahao"></i>
                    <span>添加酒店房型</span>
                </div>
                <div class="input">
                    <el-row>
                        <el-col :span="18">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>房型名称:</span>
                                <el-form-item label="膳食安排" prop="houseName">
                                    <el-input v-model="ruleForm.houseName"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>楼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;层:</span>
                                <el-form-item label="膳食安排" prop="minimumHotelHousePrice">
                                    <el-input v-model="ruleForm.minimumHotelHousePrice"
                                              placeholder="填写格式，如：12-40层，填写12-40即可"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="18">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>建筑面积:</span>
                                <el-form-item label="活动区域" prop="hotelBrandId">
                                    <el-input v-model="ruleForm.houseName" placeholder="填写格式，如：40平方米，填写40即可"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>入住人数:</span>
                                <el-form-item label="膳食安排" prop="hotelSupplierId">
                                    <el-select v-model="ruleForm.hotelBrandId" placeholder="请选择">
                                        <el-option label="其他" value="0"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="18">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>独立卫浴:</span>
                                <el-form-item label="膳食安排" prop="hotelLongitude">
                                    <el-select v-model="ruleForm.hotelBrandId" placeholder="请选择">
                                        <el-option label="有" value="0"></el-option>
                                        <el-option label="无" value="1"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>无&nbsp;烟&nbsp; 房:</span>
                                <el-form-item label="膳食安排" prop="hotelLatitude">
                                    <el-select v-model="ruleForm.hotelBrandId" placeholder="请选择">
                                        <el-option label="是" value="0"></el-option>
                                        <el-option label="否" value="1"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>


                        <el-col :span="18">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>产品类型:</span>
                                <el-form-item label="膳食安排" prop="hotelAddress">
                                    <el-select v-model="ruleForm.hotelBrandId" placeholder="请选择">
                                        <el-option label="有" value="0"></el-option>
                                        <el-option label="无" value="1"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>床型介绍:</span>
                                <el-form-item label="活动区域" prop="hotelStatus">
                                    <el-input v-model="ruleForm.houseName" placeholder="填写格式，如：大床1.8米"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>有&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;窗:</span>
                                <el-form-item label="膳食安排" prop="hotelSort">
                                    <el-select v-model="ruleForm.hotelBrandId" placeholder="请选择">
                                        <el-option label="有" value="0"></el-option>
                                        <el-option label="无" value="1"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>房屋简介:</span>
                                <el-form-item label="膳食安排" prop="hotelSaleCount">
                                    <el-input type="textarea" v-model="ruleForm.hotelIntroduction"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="18">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>排&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;序:</span>
                                <el-form-item label="活动区域" prop="hotelStar">
                                    <el-input type="number" v-model="ruleForm.hotelIntroduction"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="18">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>房间状态:</span>
                                <el-form-item label="活动区域" prop="hotelStar">
                                    <el-radio v-model="ruleForm.radio" label="0">上架</el-radio>
                                    <el-radio v-model="ruleForm.radio" label="1">下架</el-radio>
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
    import {addHotel, addressList} from '@/api/article'
    //  const cityOptions1 = ['商务中心', '熨衣设备', 'iPad音乐基座', '浴衣', '叫车服务', '电热水壶']
    export default {
        name: "addHouse",
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                activeName: 'second',
                ruleForm: {},
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
            this.getList()
        },
        methods: {
            getList() {
                addressList().then(response => {
//          this.options2 = response.data.data;
                })
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
                    width: 80%;
                }
                .el-textarea {
                    width: 80%;
                }
                .grid-content {
                    margin-left: 20px;
                }
                .el-select {
                    width: 80%;
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
