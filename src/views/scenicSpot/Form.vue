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
                                <span><i>|</i>旅游主题:</span>
                                <el-form-item label="膳食安排" prop="scenicTypeId">
                                    <el-select v-model="ruleForm.scenicTypeId" placeholder="请选择旅游主题">
                                        <el-option v-for="type in scenicTypes" :label="type.name"
                                                   :value="type.id"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>景&nbsp;&nbsp;区&nbsp;&nbsp;星&nbsp;&nbsp;级:</span>
                                <el-form-item label="景区星级" prop="scenicStar">
                                    <el-select v-model="ruleForm.scenicStar" placeholder="请选择景区星级">
                                        <el-option label="无" value="0"></el-option>
                                        <el-option label="A" value="1"></el-option>
                                        <el-option label="AA" value="2"></el-option>
                                        <el-option label="AAA" value="3"></el-option>
                                        <el-option label="AAAA" value="4"></el-option>
                                        <el-option label="AAAAA" value="5"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>景区名称:</span>
                                <el-form-item label="景区名称" prop="scenicName">
                                    <el-input v-model="ruleForm.scenicName"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>开&nbsp;&nbsp;放&nbsp;&nbsp;时&nbsp;&nbsp;间:</span>
                                <el-form-item label="膳食安排" prop="scenicOpenTime">
                                    <el-input v-model="ruleForm.scenicOpenTime"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>最小售价:</span>
                                <el-form-item label="最小售价" prop="minPrice">
                                    <el-input type="number" v-model="ruleForm.minPrice"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>联&nbsp;&nbsp;系&nbsp;&nbsp;电&nbsp;&nbsp;话:</span>
                                <el-form-item label="联系电话" prop="contactNumber">
                                    <el-input v-model="ruleForm.contactNumber"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-popover
                            ref="identification"
                            placement="bottom"
                            title="景区标识"
                            width="100"
                            trigger="click"
                            content="例：世界3大奇塔等" style="display: none">
                        </el-popover>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>景区标识:</span>
                                <el-form-item label="景区标识" prop="identification">
                                    <el-input v-model="ruleForm.identification" v-popover:identification></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-popover
                            ref="recommendTime"
                            placement="bottom"
                            title="解释说明"
                            width="250"
                            trigger="click"
                            content="推荐旅游时间;例：XX月—-XX月" style="display: none">
                        </el-popover>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>推荐旅游时间:</span>
                                <el-form-item label="推荐旅游时间" prop="recommendTime">
                                    <el-input v-model="ruleForm.recommendTime" v-popover:recommendTime></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>上&nbsp;下&nbsp; 架:</span>
                                <el-form-item label="上下架" prop="status">
                                    <el-select v-model="ruleForm.status" placeholder="请选择上下架">
                                        <el-option label="上架" value="1"></el-option>
                                        <el-option label="下架" value="2"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>审&nbsp;&nbsp;核&nbsp;&nbsp;状&nbsp;&nbsp;&nbsp;态:</span>
                                <el-form-item label="审核状态" prop="reviewStatus">
                                    <el-select v-model="ruleForm.reviewStatus" placeholder="请选择">
                                        <el-option label="审核通过" value="1"></el-option>
                                        <el-option label="审核未通过" value="2"></el-option>
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
                                <el-form-item label="所在省份" prop="areaName">
                                    <el-select v-model="ruleForm.areaName" placeholder="请选择">
                                        <el-option
                                                v-for="item in cities"
                                                :key="item.code"
                                                :label="item.name"
                                                :value="item.code">
                                        </el-option>
                                    </el-select>
                                    <!--<area-select :level="2" type="all" v-model="ruleForm.region"></area-select>-->
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>详细地址:</span>
                                <el-form-item label="详细地址" prop="detailAddress">
                                    <el-input v-model="ruleForm.scenicAddress"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>百度经度:</span>
                                <el-form-item label="百度经度" prop="longitude">
                                    <el-input type="number" v-model="ruleForm.longitude"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>百度纬度:</span>
                                <el-form-item label="百度纬度" prop="latitude">
                                    <el-input type="number" v-model="ruleForm.latitude"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>
                </div>

                <select-images :visible="imageVisible" @close="imageVisible = false"
                               @submit="selectImagesSubmit"></select-images>

                <div class="title title1">
                    <i class="iconfont icon-tupian"></i>
                    <span>图片添加</span>
                </div>
                <div class="input">
                    <el-row>
                        <el-col :span="22">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>图片添加:</span>
                                <div class="imgBox" v-for="(item, index) in ruleForm.images">
                                    <i class="iconfont icon-comiisjiahao-copy" @click="handleImageRemove(index)"></i>
                                    <img :src="item.link" alt="">
                                </div>
                                <div class="el-upload el-upload--text" @click="imageVisible = true">
                                    <i class="el-icon-plus picture-uploader-icon" ></i>
                                </div>
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
                                <el-form-item label="内容" prop="guidelines">
                                    <Tinymce :height="200" id="guidelines" ref="scenicGuidelines"
                                             v-model="ruleForm.scenicGuidelines"></Tinymce>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="22">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>景区详情:</span>
                                <el-form-item label="内容" prop="scenicInfo">
                                    <Tinymce :height="200" id="scenicInfo" ref="scenicInfo"
                                             v-model="ruleForm.scenicInfo"></Tinymce>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="22">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>交通路线:</span>
                                <el-form-item label="内容" prop="scenicTraffic">
                                    <Tinymce :height="200" id="traffic" ref="traffic"
                                             v-model="ruleForm.scenicTraffic"></Tinymce>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="22">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>注意事项:</span>
                                <el-form-item label="内容" prop="scenicNotice">
                                    <Tinymce :height="200" id="notice" ref="notice"
                                             v-model="ruleForm.scenicNotice"></Tinymce>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>
                </div>


                <div class="input">
                    <el-row>
                        <el-col :span="24">
                            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                            <el-button @click="handleCancel">返回</el-button>
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
    import {getStatusList, getScenicStar} from '@/utils/common'
    import {updateScenic, addScenic} from '@/api/scenic'
    import { getRegion } from '@/api/region'

    export default {
        name: 'ScenicCreate',
        components: {Tinymce, SelectImages},
        mixins: [FormMixin],
        props: {
            ruleForm: {
                type: Object,
                default() {
                    return {
                        images:[]
                    }
                }
            },
            title:''
        },
        data() {
            return {
                imageVisible: false,
                scenicStarList: [],
                dialogImageUrl: '',
                dialogVisible: false,
                cities: [],
                isIndeterminate: true,
                rules: {
                    identification: [
                      {required: true, message: '请输入景区标识', trigger: 'blur'}
                    ],
                    scenicTypeId: [
                        {required: true, message: '请选择旅游主题', trigger: 'change'}
                    ],
                    scenicStar: [
                        {required: true, message: '请选择景区星级', trigger: 'change'}
                    ],
                    scenicName: [
                        {required: true, message: '请输入景区名称', trigger: 'blur'}
                    ],
                    scenicOpenTime: [
                        {required: true, message: '请输入景区的开发时间', trigger: 'blur'}
                    ],
                    minPrice: [
                        {required: true, message: '请输入景区的最小售价', trigger: 'blur'}
                    ],
                    contactNumber: [
                        {required: true, message: '请输入景区的联系方式', trigger: 'blur'}
                    ],
                    recommendTime: [
                        {required: true, message: '请输入推荐旅游时间', trigger: 'blur'}
                    ],
                    status: [
                        {required: true, message: '请选择景区状态', trigger: 'change'}
                    ],
                    reviewStatus: [
                        {required: true, message: '请选择审核状态', trigger: 'change'}
                    ],
                    features: [
                        {required: true, message: '请输入景区的特色', trigger: 'change'}
                    ],
                    areaName: [
                        {required: true, message: '请选择景区所在的区县', trigger: 'blur'}
                    ],
                    longitude: [
                        {required: true, message: '请输入景区的经度', trigger: 'blur'}
                    ],
                    scenicAddress: [
                        {required: true, message: '请输入景区的详细地址', trigger: 'blur'}
                    ],
                    latitude: [
                        {required: true, message: '请输入景区的纬度', trigger: 'blur'}
                    ],
                    scenicGuidelines: [
                        {required: true, message: '请输入景区的预定须知', trigger: 'blur'}
                    ],
                    scenicInfo: [
                        {required: true, message: '请输入景区详情', trigger: 'blur'}
                    ],
                    scenicTraffic: [
                        {required: true, message: '请输入景区交通线路', trigger: 'blur'}
                    ],
                    scenicNotice: [
                        {required: true, message: '请输入景区的注意事项', trigger: 'blur'}
                    ]
                }
            }
        },
        created() {
            this.scenicStarList = getScenicStar()
            this.getStatusList = getStatusList()

            getRegion({}).then(response => {
                this.cities = response.data.data
            })
        },
        methods: {
            handleImageRemove(index) {
                this.ruleForm.images.splice(index,1)
            },
            //选择图片
            selectImagesSubmit(images) {
                images.forEach(function (image, index) {
                    this.ruleForm.images.push({'link':image.links})
                }, this)
            },
            submitForm(formName) {
                if (this.ruleForm.images.length == 0) {
                    this.$message.error('请上传景区图片');
                    return false
                }
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.addLoading = true
                        if (this.ruleForm.scenicId == undefined) {
                            addScenic(this.ruleForm).then(response => {
                                if(response.data.status) {
                                    this.$message({
                                        message: '添加成功！',
                                        type: 'success'
                                    });
                                    this.handleCancel();
                                } else {
                                    this.$message.error(response.data.msg);
                                }
                            })
                        } else {
                            updateScenic(this.ruleForm.scenicId, this.ruleForm).then(response => {
                                if(response.data.status) {
                                    this.$message({
                                        message: '更新成功！',
                                        type: 'success'
                                    });
                                    this.handleCancel();
                                } else {
                                    this.$message.error(response.data.msg);
                                }
                            })
                        }
                    } else {
                        console.log('error submit!!')
                        return false
                    }
                })
            },
            handleCancel() {
                this.$router.push({path: "/scenic"})
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
            .imgSuggest {
                margin-left: 100px;
                font-size: 12px;
                color: #666;
            }
            .el-upload {
                width: 100px;
                height: 100px;
                border: 5px dashed #E6E6E6;
                text-align: center;
                line-height: 100px;
                font-size: 24px;
                color: #E6E6E6;
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
        .imgBox {
            width: 100px;
            height: 100px;
            /*background: red;*/
            float: left;
            margin-right: 10px;
            position: relative;
            cursor: pointer;
            .iconfont {
                position: absolute;
                right: -7px;
                top: -6px;
                z-index: 999;
                display: none;
                cursor: pointer;
                color: #999;
            }
            img {
                width: 100px;
                height: 100px;
            }
        }
        .imgBox:hover {
            .iconfont {
                display: block;
            }
        }
    }


</style>
