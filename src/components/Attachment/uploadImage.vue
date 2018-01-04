<template>
    <div class="upload-image-region">
        <el-dialog custom-class="widget-attachment" top="0" :before-close="handleClose" :show-close="false" :visible.sync="visible" :close-on-click-modal="false">

            <div class="modal-header" slot="title">
                <i class="el-icon-close close" @click="handleClose"></i>

                <template v-if="backTitle">
                    <a @click="handleClose" class="title" style="margin-right: 4px; color: #38f">< {{ backTitle }}</a>
                    <span style="font-size: 14px;"> | </span>
                </template>

                <span class="title">{{ title }}</span>
            </div>

            <div class="modal-body">
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
                            <div slot="tip" class="c-gray el-upload__tip" style="padding-top: 20px;">仅支持jpg、gif、png三种格式, 大小不超过1 MB</div>

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
                default:'http://sz.test/admin/image'
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
                fileList: [], //本地图片
                files:[],
                para:{categoryId: 0},
                isDisabled: true,
                isSuccess: 0
            }
        },
        watch: {
            categoryId: function (val, oldVal) {
                this.para.categoryId = val
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
            //上传本地图片 事件
            handlePictureChange(file, fileList) {
                console.log(file)
                let isLt3M = file.size / 1024 /1024 < 1;
                if (!isLt3M) {
                    this.$message.error('上传图片大小不能超过 1MB!');
                    fileList.pop()
                    return false
                }
                this.fileList = fileList

                this.isDisabled = !(this.fileList.length > 0)

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
                fd.append('image', file)
                fd.append('categoryId', this.categoryId)
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
