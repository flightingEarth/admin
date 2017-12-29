<template>
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
                    <li class="upload-local-image-item" v-for="file in networkFileList">
                        <img :src="file.url" class="image-box"/>
                    </li>
                </ul>
            </div>
        </div>
        <div class="local-image-region clearfix" >
            <div class="title">本地图片：</div>
            <div class="content">
                <ul class="image-list">
                    <li class="upload-local-image-item" v-for="file in fileList">
                        <img :src="file.url" class="image-box"/>
                        <i class="close-modal small el-icon-circle-cross
"></i>
                    </li>
                </ul>
                <el-upload
                        class="picture-uploader"
                        :auto-upload="false"
                        :multiple="false"
                        :action="action"
                        :on-change="handlePictureChange"
                        :on-preview="handlePictureCardPreview"
                        :show-file-list="false"
                        :on-remove="handleRemove">
                    <i class="el-icon-plus picture-uploader-icon"></i>
                </el-upload>
                <div class="c-gray" style="clear: both; padding-top: 20px;font-size: 12px;">
                    仅支持jpg、gif、png三种格式, 大小不超过3 MB
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'UploadImage',
        props:{
            action: {
                type: String,
                default:'https://jsonplaceholder.typicode.com/posts/'
            },
            visible: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                networkImageUrl: '',
                dialogVisible: false,
                uploadImageVisible: false,
                fileList:[
//                    {url: 'https://dn-phphub.qbox.me/uploads/avatars/1_1479342408.png?imageView2/1/w/100/h/100'},
                ],
                networkFileList: [
//                    {url: 'https://dn-phphub.qbox.me/uploads/avatars/1_1479342408.png?imageView2/1/w/100/h/100'},
                ],
                dialogImageUrl: '',
            }
        },
        methods:{
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
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>