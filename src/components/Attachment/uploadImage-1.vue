<template>
    <div class="upload-image-region">
        <el-dialog custom-class="widget-attachment" top="0" :before-close="handleClose" :show-close="false" v-model="visible" :close-on-click-modal="false">

            <div class="modal-header" slot="title">
                <i class="el-icon-close close" @click="handleClose"></i>

                <template v-if="backTitle">
                    <a @click="handleClose" class="title" style="margin-right: 4px; color: #38f">< {{ backTitle }}</a>
                    <span style="font-size: 14px;"> | </span>
                </template>

                <span class="title">{{ title }}</span>
            </div>

            <div class="modal-body">
                <div class="network-image-region clearfix">
                    <div class="title">网络图片：</div>
                    <div class="content">
                        <div class="input-append">
                            <el-input placeholder="请输入内容" size="small" v-model="networkImageUrl">
                                <template slot="append" >
                                    <el-button type="primary" @click="confirmNetworkImageUrl">提取</el-button>
                                </template>
                            </el-input>
                        </div>
                        <ul class="image-list">
                            <li class="upload-local-image-item" v-for="(file, index) in networkFileList">
                                <img :src="file.url" @error="handleInvalidLink(index)" class="image-box"/>
                                <i class="close-modal small el-icon-circle-cross" @click="handleRemoveNetworkImage(index)"></i>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="local-image-region clearfix" >
                    <div class="title">本地图片：</div>
                    <div class="content">
                        <ul class="image-list">
                            <li class="upload-local-image-item" v-for="(file, index) in fileList">
                                <img :src="file.url" class="image-box"/>
                                <i class="close-modal small el-icon-circle-cross" @click="handleRemove(index)"></i>
                            </li>
                        </ul>
                        <el-upload
                                ref="upload"
                                class="picture-uploader"
                                :auto-upload="false"
                                :multiple="false"
                                :action="action"
                                name="image"
                                :data="para"
                                :file-list="files"
                                :on-error="handlePictureError"
                                :on-success="handlePictureSuccess"
                                :on-change="handlePictureChange"
                                :show-file-list="false">
                            <i slot="trigger"  class="el-icon-plus picture-uploader-icon"></i>
                            <div slot="tip" class="c-gray el-upload__tip" style="padding-top: 20px;">仅支持jpg、gif、png三种格式, 大小不超过3 MB</div>

                        </el-upload>
                    </div>
                </div>
            </div>

            <div slot="footer" class="dialog-footer">
                <el-button type="primary" :class="{ 'ui-btn-disabled': isDisabled }" style="width: 120px;" @click="submitUpload">确 定</el-button>
            </div>

        </el-dialog>
    </div>
</template>

<script>
    import fetch from 'utils/fetch'
    import { addImages } from 'api/image'

    export default {
        name: 'UploadImage',
        props: {
            action: {
                type: String,
                default:'http://yxinmt.app/api/image'
            },
            visible: {
                type: Boolean,
                default: false
            },
            backTitle: {
                type: String,
                default:''
            },
            title: {
                type: String,
                default:'上传图片'
            },
            categoryId:{
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                networkFileList: [], // 网络图片
                networkImageUrl: '', // 网络图片url
                fileList: [], //本地图片
                files:[],
                para:{category_id: 0},
                isDisabled: true,
                isSuccess: 0
            }
        },
        watch: {
            categoryId: function (val, oldVal) {
                this.para.category_id = val
            }
        },
        methods: {
            //关闭窗口
            handleClose() {
                this.$emit('close')
                this.fileList = []
                this.networkFileList = []
                this.isDisabled = true
                this.isSuccess = 0
//
            },
            dialogSwitch() {
                this.$emit('switch')
            },
            //提取网络图片url
            confirmNetworkImageUrl() {
                if (this.networkImageUrl) {
                    this.networkFileList.push({url:this.networkImageUrl})
                }
            },
            //上传本地图片 事件
            handlePictureChange(file, fileList) {
                console.log(file)
                let isLt3M = file.size / 1024 /1024 < 3;
                if (!isLt3M) {
                    this.$message.error('上传图片大小不能超过 3MB!');
                    fileList.pop()
                    return false
                }
                this.fileList = fileList

                this.isDisabled = !(this.fileList.length > 0)

            },
            // 无效的链接
            handleInvalidLink(index) {
                this.$message.error('无效的链接!')
                this.handleRemoveNetworkImage(index)
            },
            // 移除网络图片
            handleRemoveNetworkImage(index) {
                this.networkFileList.splice(index, 1)
            },
            // 移除本地图片
            handleRemove(index) {
                this.fileList.splice(index, 1)
            },
            handlePictureError() {
                this.isSuccess += 1
            },
            handlePictureSuccess(response, file, fileList) {
                this.isSuccess += 1
                if (this.isSuccess == fileList.length || this.fileList.length == 0) {
                    this.$emit('submit')
                    this.$refs.upload.clearFiles()
                }
            },
            beforeUpload (file) {
                console.log(file)
                let fd = new FormData()
                fd.append('image', file)
                fd.append('category_id', 1)
                addImages(fd).then(response => {
                    this.$message({
                        message: '更新成功！',
                        type: 'success'
                    });
                    this.handleCancel()
                })
                return true
            },
            submitUpload() {
                if (! this.isDisabled) {
                    this.$refs.upload.submit()
                    this.handleClose()
                }
            }
        }

    }
</script>
