<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="首页公司简介" name="first">
        </el-tab-pane>
        <el-tab-pane label="Banner" name="second">
            <el-upload
                    action="http://yxinmt.app/api/banner"
                    list-type="picture-card"
                    name="image"
                    :data="para"
                    :file-list="fileList"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
            </el-upload>

            <el-dialog title="编辑" v-model="dialogVisible" :close-on-click-modal="false">
                <el-form :model="editForm" :rules="Rules" ref="editForm" label-width="100px">
                    <el-form-item label="排序" prop="type">
                        <el-select v-model="editForm.sort" placeholder="请选择">
                            <el-option
                                    v-for="(item, index) in options"
                                    :key="index"
                                    :label="item"
                                    :value="item">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="链接" prop="link">
                        <el-input v-model="editForm.link" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="dialogVisible = false">取消</el-button>
                        <el-button type="primary" @click="editSubmit" :loading="editLoading">提交</el-button>
                    </el-form-item>
                </el-form>
            </el-dialog>
        </el-tab-pane>
        <el-tab-pane label="关于我们" name="third"></el-tab-pane>
        <el-tab-pane label="重置密码" name="password"></el-tab-pane>
    </el-tabs>
</template>

<script>
    import { getList, addBanner, updateBanner, destroyBanner } from 'api/banner';

    export default {
        data() {
            return {
                fileList: [],
                activeName: 'second',
                dialogImageUrl: '',
                dialogVisible: false,
                para: {sort: 5},
                editForm: {},
                options: [1,2,3,4,5],
                editLoading: false,
                Rules: {
                    link: [
                        {required: true, message: '请输入链接', trigger: 'blur'},
                    ],
                    sort: [
                        {type: 'number', required: true, message: '请选择排序', trigger: 'change'}
                    ],
                }
            }
        },
        mounted() {
            this.getList();
        },
        methods: {
            getList() {
                getList({}).then(response => {
                    this.fileList = response.data.data;
                })
            },
            handleClick(tab, event) {
                if (this.activeName == 'first') {
                    this.$router.push({ path: '/setting/certificate' });
                } else if(this.activeName == 'third') {
                    this.$router.push({ path: '/setting/aboutUs' });
                }  else if(this.activeName == 'password') {
                    this.$router.push({ path: '/setting/password' });
                }
            },
            handleRemove(file, fileList) {
                destroyBanner(file.id).then(response => {
                    this.$message({
                        message: '删除成功!',
                        type: 'success'
                    });
                    this.dialogVisible = false;
                });
            },
            handlePictureCardPreview(file) {
                this.editForm = file
                this.dialogVisible = true;
            },
            editSubmit() {
                this.$refs.editForm.validate((valid) => {
                    if (valid) {
                        let formData = {sort: this.editForm.sort, link: this.editForm.link}
                        updateBanner(this.editForm.id, formData).then(response => {
                            this.$message({
                                message: '更新成功!',
                                type: 'success'
                            });
                            this.dialogVisible = false;
                        });
                    }
                })
            }
        }
    }
</script>
