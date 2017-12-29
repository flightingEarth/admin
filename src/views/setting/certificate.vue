<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="资质证书" name="first">
          <el-upload
                  action="http://yxinmt.app/api/certificate"
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
                  <el-form-item label="标题" prop="title">
                      <el-input v-model="editForm.title" auto-complete="off"></el-input>
                  </el-form-item>
                  <el-form-item>
                      <el-button @click="dialogVisible = false">取消</el-button>
                      <el-button type="primary" @click="editSubmit" :loading="editLoading">提交</el-button>
                  </el-form-item>
              </el-form>
          </el-dialog>
        </el-tab-pane>
        <el-tab-pane label="Banner" name="second"></el-tab-pane>
        <el-tab-pane label="关于我们" name="third"></el-tab-pane>
        <el-tab-pane label="重置密码" name="password"></el-tab-pane>
    </el-tabs>
</template>

<script>
    import { getList, addCertificate, updateCertificate, destroyCertificate } from 'api/certificate';

    export default {
        data() {
            return {
                fileList: [],
                activeName: 'first',
                dialogImageUrl: '',
                dialogVisible: false,
                para: {sort: 5},
                editForm: {},
                editLoading: false,
                Rules: {
                    title: [
                        {required: true, message: '请输入标题', trigger: 'blur'},
                    ]
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
                if (this.activeName == 'second') {
                    this.$router.push({ path: '/setting/banner' });
                } else if(this.activeName == 'third') {
                    this.$router.push({ path: '/setting/aboutUs' });
                } else if(this.activeName == 'password') {
                    this.$router.push({ path: '/setting/password' });
                }
            },
            handleRemove(file, fileList) {
                destroyCertificate(file.id).then(response => {
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
                        let formData = {title: this.editForm.title}
                        updateCertificate(this.editForm.id, formData).then(response => {
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
