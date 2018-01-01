<template>
    <div class="main">
        <div class="search">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <div class="title">
                    <i class="iconfont icon-comiisjiahao"></i>
                    <span>添加景区</span>
                </div>
                <div class="input">
                    <el-row>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>旅游主题:</span>
                                <el-form-item label="膳食安排" prop="tourismTheme">
                                    <el-select v-model="ruleForm.type" placeholder="请选择旅游主题">
                                        <el-option v-for="type in scenicTypes" :label="type.name" :value="type.id"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>景区星级:</span>
                                <el-form-item label="膳食安排" prop="scenicStar">
                                    <el-select v-model="ruleForm.scenicStar" placeholder="请选择景区星级">
                                        <el-option label="5A级景区" value="5A级景区"></el-option>
                                        <el-option label="4A级景区" value="4A级景区"></el-option>
                                        <el-option label="3A级景区" value="3A级景区"></el-option>
                                        <el-option label="2A级景区" value="2A级景区"></el-option>
                                        <el-option label="1A级景区" value="1A级景区"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>景区名称:</span>
                                <el-form-item label="活动区域" prop="scenicName">
                                    <el-input v-model="ruleForm.scenicName"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>开放时间:</span>
                                <el-form-item label="膳食安排" prop="openTime">
                                    <el-date-picker
                                            v-model="ruleForm.openTime"
                                            type="date"
                                            placeholder="选择日期">
                                    </el-date-picker>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>上&nbsp;下&nbsp; 架:</span>
                                <el-form-item label="膳食安排" prop="upDown">
                                    <el-select v-model="ruleForm.status" placeholder="请选择上下架">
                                        <el-option label="上架" value="上架"></el-option>
                                        <el-option label="下架" value="下架"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>景区特点:</span>
                                <el-form-item label="景区特点" prop="features">
                                    <el-input type="textarea" v-model="ruleForm.features"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="title title1">
                    <i class="iconfont icon-dizhi"></i>
                    <span>地址详情</span>
                </div>
                <div class="input">
                    <el-row>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>所在省份:</span>
                                <area-cascader :level="1" type="all" v-model="ruleForm.region"></area-cascader>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>百度经度:</span>
                                <el-form-item label="膳食安排" prop="longitude">
                                    <el-input  v-model="ruleForm.longitude"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>详细地址:</span>
                                <el-form-item label="膳食安排" prop="detailAddress">
                                    <el-input v-model="ruleForm.detailAddress"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>百度纬度:</span>
                                <el-form-item label="膳食安排" prop="latitude">
                                    <el-input v-model="ruleForm.latitude"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>
                </div>

                <div class="title title1">
                    <i class="iconfont icon-tupian"></i>
                    <span>图片添加</span>
                </div>
                <div class="input">
                    <el-row>
                        <el-col :span="22">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>图片添加:</span>
                                <draggable class="dragArea">
                                    <el-upload
                                            action="https://jsonplaceholder.typicode.com/posts/"
                                            list-type="picture-card"
                                            :on-preview="handlePictureCardPreview"
                                            :on-remove="handleRemove">
                                        <i class="el-icon-plus"></i>
                                    </el-upload>
                                    <el-dialog :visible.sync="dialogVisible" size="tiny">
                                        <img width="100%" :src="dialogImageUrl" alt="">
                                    </el-dialog>
                                </draggable>
                            </div>
                            <span class="imgSuggest">建议尺寸：640✖️640像素；你可以拖拽图片调整图片顺序;</span>
                        </el-col>
                    </el-row>
                </div>

                <div class="title title1">
                    <i class="iconfont icon-jingdian"></i>
                    <span>景区详细信息</span>
                </div>
                <div class="input">
                    <el-row>
                        <el-col :span="22">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>预订须知:</span>
                                <Tinymce :height="200" id="guidelines" ref="guidelines" v-model="ruleForm.guidelines"></Tinymce>
                            </div>
                        </el-col>
                        <el-col :span="22">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>景区详情:</span>
                                <Tinymce :height="200" id="scenicInfo" ref="scenicInfo" v-model="ruleForm.info"></Tinymce>
                            </div>
                        </el-col>
                        <el-col :span="22">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>交通路线:</span>
                                <Tinymce :height="200" id="traffic" ref="traffic" v-model="ruleForm.traffic"></Tinymce>
                            </div>
                        </el-col>
                        <el-col :span="22">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>注意事项:</span>
                                <Tinymce :height="200" id="notice" ref="notice"  v-model="ruleForm.notice"></Tinymce>
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
    import FormMixin from './FormMixin'
    import Tinymce from '@/components/Tinymce'
    import SelectImages from "@/components/Attachment/selectImages";

    export default {
        name: 'ScenicCreate',
        components: {Tinymce, SelectImages},
        mixins: [FormMixin],
        props: {
            ruleForm: {
                type: Object,
                default() {
                    return {
                        region: [],
                    }
                }
            }
        },
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                activeName: 'second',
                checkAll: false,
                checkedCities: [],
                cities: cityOptions,
                isIndeterminate: true,
//                ruleForm: {
//                    tourismTheme: "",
//                    scenicStar: "",
//                    scenicName: "",
//                    openTime: "",
//                    upDown: "",
//                    scenicPoint: "",
//                    activeLocation: "",
//                    longitude: "",
//                    detailAddress: "",
//                    latitude: "",
//                    scave: "aaaa",
//                    order: "",
//                    scenicDetail: "",
//                    trafficLine: "",
//                    attention: ""
//                },
                rules: {
                    tourismTheme: [
                        {required: true, message: '此处不能为空', trigger: 'change'}
                    ],
                    scenicStar: [
                        {required: true, message: '此处不能为空', trigger: 'change'}
                    ],
                    scenicName: [
                        {required: true, message: '此处不能为空', trigger: 'blur'}
                    ],
                    openTime: [
                        {required: true, message: '此处不能为空', trigger: 'blur'}
                    ],
                    upDown: [
                        {required: true, message: '此处不能为空', trigger: 'change'}
                    ],
                    scenicPoint: [
                        {required: true, message: '此处不能为空', trigger: 'blur'}
                    ],
                    activeLocation: [
                        {required: true, message: '此处不能为空', trigger: 'change'}
                    ],
                    longitude: [
                        {required: true, message: '此处不能为空', trigger: 'blur'}
                    ],
                    detailAddress: [
                        {required: true, message: '此处不能为空', trigger: 'blur'}
                    ],
                    latitude: [
                        {required: true, message: '此处不能为空', trigger: 'blur'}
                    ]
                }
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
                .tinymce-container {
                    width: 80%;
                    margin-left: 130px;
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
                .el-col-22 {
                    div {
                        margin-top: 20px;
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
