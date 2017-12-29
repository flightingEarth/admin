<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="首页公司简介" name="first">
        </el-tab-pane>
        <el-tab-pane label="Banner" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="关于我们" name="third">
            <el-form :model="company" :rules="Rules" ref="company" label-width="100px">
                <el-form-item label="电话号码" prop="phone">
                    <el-input v-model="company.phone" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="企业邮箱" prop="email">
                    <el-input v-model="company.email" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="传真号码" prop="fax">
                    <el-input v-model="company.fax" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="企业QQ" prop="qq">
                    <el-input v-model="company.qq" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="邮政编码" prop="postalcode">
                    <el-input v-model="company.postalcode" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="公司地址" prop="address">
                    <el-input v-model="company.address" auto-complete="off"></el-input>
                </el-form-item>

                <!--<el-form-item label="首页公司简介" prop="homte_picture">-->
                    <!--<div class="picture-uploader">-->
                        <!--<img v-if="company.home_page" :src="company.home_page" width="80" height="80">-->
                        <!--<div class="el-upload el-upload&#45;&#45;text" @click="handleUploadHomePage">-->
                            <!--<i class="el-icon-plus picture-uploader-icon"></i>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</el-form-item>-->

                <el-form-item label="公司介绍" prop="content">
                    <Tinymce :height=400 ref="editor" v-model="company.content"></Tinymce>
                </el-form-item>

                <el-form-item label="品牌介绍" prop="brand_content">
                    <Tinymce :height=400 id="brand_content" ref="editor1" v-model="company.brand_content"></Tinymce>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit" :loading="addLoading">提交</el-button>
                </el-form-item>
            </el-form>
        </el-tab-pane>
        <el-tab-pane label="重置密码" name="password"></el-tab-pane>
        <select-images :max="imgCount" :visible="imageVisible" @close="imageVisible = false" @submit="selectImagesSubmit"></select-images>
    </el-tabs>
</template>
<script>
    import Tinymce from '@/components/Tinymce'
    import SelectImages from "@/components/Attachment/selectImages";
    import { getList, updateCompany } from 'api/company';

    export default {
        components: { Tinymce, SelectImages },
        data() {
            return {
                addLoading: false,
                imgCount: 1,
                imageVisible: false,
                imageType: 0,
                page_image: '',
                company: {},
                activeName: 'third',
                Rules: {
                    content: [
                        {required: true, message: '请输入内容', trigger: 'blur'}
                    ],
                },
            };
        },
        mounted() {
            this.getList();
        },
        methods: {
            getList() {
                getList().then(response => {
                    this.company = response.data.data;
                })
            },
            handleClick(tab, event) {
                if (this.activeName == 'first') {
                    this.$router.push({ path: '/setting/certificate' });
                } else if(this.activeName == 'second') {
                    this.$router.push({ path: '/setting/banner' });
                } else if(this.activeName == 'password') {
                    this.$router.push({ path: '/setting/password' });
                }
            },
            onSubmit() {
                this.addLoading = true
                this.$refs.company.validate((valid) => {
                    if (valid) {
                        updateCompany(this.company.id, this.company).then(response => {
                            this.$message({
                                message: '更新成功!',
                                type: 'success'
                            });
                            this.addLoading = false
                        });
                    }
                })
            },
            //上传地址
            handleUploadHomePage() {
                this.imageType = 1
                this.imgCount = 1
                this.imageVisible = true
            },
            //上传资质照片
            handleUploadHonor() {
                this.imageType = 2
                this.imgCount = 6
                this.imageVisible = true
            },
            // 选择图片
            selectImagesSubmit(images) {
                if (this.imageType == 2) {
                    images.forEach(function (image) {
                        this.company.honor.push(image.links)
                    }, this)
                } else {
                    this.company.home_page = images[0].links
                }
            },
            //删除企业资质
            handleRemoveHonor(index) {
                this.company.honor.splice(index, 1)
            },
        }
    };
</script>
