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
                        <el-col :span="18">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>房型名称:</span>
                                <el-form-item label="膳食安排" prop="roomName">
                                    <el-input v-model="ruleForm.roomName"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>房型状态:</span>
                                <el-form-item label="膳食安排" prop="status">
                                    <el-select v-model="ruleForm.status" placeholder="请选择上下架">
                                        <el-option label="正常" value="1"></el-option>
                                        <el-option label="不营业" value="2"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>审核状态:</span>
                                <el-form-item label="审核状态" prop="reviewStatus">
                                    <el-select v-model="ruleForm.reviewStatus" placeholder="请选择">
                                        <el-option label="审核通过" value="1"></el-option>
                                        <el-option label="审核未通过" value="2"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="18">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>楼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;层:</span>
                                <el-form-item label="膳食安排" prop="roomFloor">
                                    <el-input v-model="ruleForm.roomFloor"
                                              placeholder="填写格式，如：12-40层，填写12-40即可"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="18">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>建筑面积:</span>
                                <el-form-item label="活动区域" prop="buildingArea">
                                    <el-input v-model="ruleForm.buildingArea"
                                              placeholder="填写格式，如：40平方米，填写40即可"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>入住人数:</span>
                                <el-form-item label="膳食安排" prop="capacity">
                                    <el-input type="number" v-model="ruleForm.capacity"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="18">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>独立卫浴:</span>
                                <el-form-item label="膳食安排" prop="privateBathroom">
                                    <el-select v-model="ruleForm.privateBathroom" placeholder="请选择">
                                        <el-option label="独立卫浴" value="独立卫浴"></el-option>
                                        <el-option label="无" value="无"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>无&nbsp;烟&nbsp; 房:</span>
                                <el-form-item label="膳食安排" prop="smoke">
                                    <el-select v-model="ruleForm.smoke" placeholder="请选择">
                                        <el-option label="该房型可安排无烟楼层" value="该房型可安排无烟楼层"></el-option>
                                        <el-option label="否" value="否"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>床型介绍:</span>
                                <el-form-item label="活动区域" prop="bedIntro">
                                    <el-input v-model="ruleForm.bedIntro" placeholder="填写格式，如：大床1.8米"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>有&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;窗:</span>
                                <el-form-item label="膳食安排" prop="withWindows">
                                    <el-select v-model="ruleForm.withWindows" placeholder="请选择">
                                        <el-option label="有窗" value="有窗"></el-option>
                                        <el-option label="无窗" value="无窗"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>房屋简介:</span>
                                <el-form-item label="膳食安排" prop="basic">
                                    <el-input type="textarea" v-model="ruleForm.basic"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="18">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>排&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;序:</span>
                                <el-form-item label="活动区域" prop="sort">
                                    <el-input type="number" v-model="ruleForm.sort"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                        <select-images :visible="imageVisible" @close="imageVisible = false"
                                       @submit="selectImagesSubmit"></select-images>

                        <el-col :span="22">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>图片添加:</span>
                                <div class="imgBox" v-for="(item, index) in ruleForm.images">
                                    <i class="iconfont icon-comiisjiahao-copy" @click="handleImageRemove(index)"></i>
                                    <img :src="item.link" alt="">
                                </div>
                                <div class="el-upload el-upload--text" @click="imageVisible = true">
                                    <i class="el-icon-plus picture-uploader-icon"></i>
                                </div>
                            </div>
                            <span class="imgSuggest">建议尺寸：640✖️640像素；你可以拖拽图片调整图片顺序;</span>
                        </el-col>
                    </el-row>
                </div>
                <div class="input">
                    <el-row>
                        <el-col :span="24">
                            <el-button type="primary" @click="submitForm('ruleForm')" :loading="addLoading">提交
                            </el-button>
                            <el-button @click="handleCancel">返回</el-button>
                        </el-col>
                    </el-row>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
    import {updateHotelRoom, addHotelRoom} from '@/api/hotelRoom'
    import SelectImages from "@/components/Attachment/selectImages";
    export default {
        name: "addHouse",
        components: {SelectImages},
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
                addLoading: false,
                rules: {
                    roomName: [
                        {required: true, message: '请输入房型名称', trigger: 'blur'}
                    ],
                    roomFloor: [
                        {required: true, message: '请输入楼层', trigger: 'blur'}
                    ],
                    buildingArea: [
                        {required: true, message: '请输入建筑面积', trigger: 'change'}
                    ],
                    capacity: [
                        {required: true, message: '请输入可住人数', trigger: 'blur'}
                    ],
                    privateBathroom: [
                        {required: true, message: '请选择是否有独立卫浴', trigger: 'change'}
                    ],
                    smoke: [
                        {required: true, message: '请选择是否可安排无烟房', trigger: 'change'}
                    ],
                    bedIntro: [
                        {required: true, message: '请输入床型介绍', trigger: 'blur'}
                    ],
                    withWindows: [
                        {required: true, message: '请选择是否有窗', trigger: 'change'}
                    ],
                    basic: [
                        {required: true, message: '请输入房屋简介', trigger: 'blur'}
                    ],
                    sort: [
                        {required: true, message: '请输入排序', trigger: 'blur'}
                    ],
                    status: [
                        {required: true, message: '请选择房型状态', trigger: 'blur'}
                    ],
                    reviewStatus: [
                        {required: true, message: '请选择审核状态', trigger: 'change'}
                    ],
                }
            }
        },
        created() {
            if (this.ruleForm.hotelId == undefined) {
                this.ruleForm.hotelId = this.$route.query.hotelId;
            }
        },
        methods: {
            submitForm(formName) {
                if (this.ruleForm.images.length == 0) {
                    this.$message.error('请上传景区图片');
                    return false
                }
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        this.addLoading = true
                        if (this.ruleForm.roomId == undefined) {
                                addHotelRoom(this.ruleForm).then(response => {
                                    if (response.data.status) {
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
                            updateHotelRoom(this.ruleForm.roomId, this.ruleForm).then(response => {
                                if (response.data.status) {
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
                        this.addLoading = false
                    } else {
                        console.log('error submit!!')
                        return false
                    }
                })
            },
            handleCancel(){
                this.$router.push({path: "/hotel/hotelRoom?hotelId=" + this.ruleForm.hotelId})
            },
            handleImageRemove(index) {
                this.ruleForm.images.splice(index,1)
            },
            //选择图片
            selectImagesSubmit(images) {
                images.forEach(function (image, index) {
                    this.ruleForm.images.push({'link':image.links})
                }, this)
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
                .el-upload {
                    width: 100px;
                    height: 100px;
                    border: 5px dashed #E6E6E6;
                    text-align: center;
                    line-height: 100px;
                    font-size: 24px;
                    color: #E6E6E6;
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
