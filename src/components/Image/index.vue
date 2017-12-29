<template>
    <div class="upload-image-region">
        <el-dialog custom-class="widget-attachment" top="0" :before-close="handleUploadCancel" :show-close="false" v-model="visible" :close-on-click-modal="false" size="small">

            <div class="modal-header" slot="title">
                <i class="el-icon-close close" @click="handleUploadCancel"></i>

                <template v-if="titleHistory.length > 1">
                    <a @click="imageTypeChange" class="title" style="margin-right: 4px; color: #38f">< {{ titleHistory[1] }}</a>
                    <span style="font-size: 14px;"> | </span>
                </template>

                <span class="title">{{ titleHistory[0] }}</span>

                <div class="ui-search-box" v-if="imageType == 'selectImage'">
                    <el-input placeholder="搜索" size="small" v-model="keyword" :on-icon-click="searchImage" icon="search">
                    </el-input>
                </div>
            </div>

            <select-image v-if="imageType == 'selectImage'" @changeUploadImage="selectChangeUploadImage"></select-image>
            <upload-image v-if="imageType == 'uploadImage'"></upload-image>

            <div slot="footer" class="dialog-footer">
                <el-button type="primary" class="ui-btn-disabled" style="width: 120px;" @click="handleUpload">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import ModalHeader from './modalHeader.vue'
    import SelectImage from './selectImage.vue'
    import UploadImage from './uploadImage.vue'

    export default {
        name:'AttachmentImage',
        components: { ModalHeader, SelectImage, UploadImage },
        props:{
            visible: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                keyword: '', // 搜索关键字
                titleHistory: [],
                imageType:'',
                networkImageUrl: '',
                dialogVisible: false,
                uploadImageVisible: false,
                fileList:[],
                networkFileList: [],
                dialogImageUrl: '',
            }
        },
        created() {
            this.titleHistory.push(this.title)
            this.imageType = this.type
        },
        methods:{
            getImages() {

            },
            handleAdd() {
                this.addFormVisible = true;
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleUploadCancel() {
                this.$emit('cancel')
            },
            handlePictureChange(file, fileList) {
                this.fileList.push(file)
            },
            handleUpload() {

            },
            //获取网络图片
            confirmNetworkImageUrl() {
                this.networkFileList.push({url: this.networkImageUrl})
                console.log(this.networkImageUrl)
            },
            //切换这个样式
            imageTypeChange() {
                this.titleHistory.shift()
                let type = this.imageType == 'selectImage' ? 'uploadImage' : 'selectImage'
                this.imageType = type
            },
            //选择图片的样式  改成上传图片的样式
            selectChangeUploadImage() {
                this.titleHistory.unshift('上传图片')
                this.imageType = 'uploadImage'
            },
            //搜索图片
            searchImage() {
                this.searchVisible = this.keyword ? true : false
                this.titleHistory.unshift('搜索结果')
                console.log('ddd')
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">

    .upload-image-region{
        .modal-header{
            padding: 6px 0 6px 15px;
            margin-right: 20px;
            border-bottom: 1px solid #e5e5e5;
            .title {
                font-size: 14px;
                line-height: 28px;
                margin-right: 20px;
                font-weight:bold;
            }
            .content {
                .input-append, .input-prepend {
                    display: inline-block;
                    margin-bottom: 10px;
                    font-size: 0;
                    white-space: nowrap;
                    vertical-align: middle;
                }
            }
        }

        .modal-body {
            min-height: 300px;
            height: 529px;
            .network-image-region .title, .local-image-region .title {
                float: left;
                font-size: 14px;
                font-weight: bold;
                width: 150px;
                text-align: right;
                height: 30px;
                line-height: 30px;
            }

            .network-image-region, .local-image-region{
                margin: 0 20px;
                padding: 40px 10px;
                zoom: 1;
            }

            .network-image-region{
                border-bottom: 1px solid #e5e5e5;
            }
            .content {
                float: left;
                width: 500px;
                margin-left: 10px;
                .input-append, .input-prepend {
                    display: block;
                    margin-bottom: 10px;
                    font-size: 0;
                    white-space: nowrap;
                    vertical-align: middle;
                }
                .image-list{
                    height: auto;
                    .upload-local-image-item {
                        position: relative;
                        float: left;
                        margin: 0 20px 20px 0;
                        .image-box{
                            width: 80px;
                            height: 80px;
                        }
                    }
                    .upload-local-image-item:hover .close-modal{
                        display: block;
                    }
                }
            }
            .close-modal {
                display: none;
            }

            .picture-uploader-icon {
                font-size: 28px;
                color: #8c939d;
                width: 80px;
                height: 80px;
                line-height: 80px;
                text-align: center;
            }
        }

        .dialog-footer{
            padding: 14px 15px 15px;
            text-align: center;
            display: block;
            border-top: 1px solid #e5e5e5;
            padding-top: 20px;
        }
    }
</style>