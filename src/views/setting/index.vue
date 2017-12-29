<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="首页公司简介" name="first">
            <el-form :model="company" :rules="Rules" ref="company" label-width="100px">
                <el-form-item label="标题" prop="title">
                    <el-input v-model="company.title" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="副标题" prop="subtitle">
                    <el-input v-model="company.subtitle" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="内容" prop="content">
                    <Tinymce :height=400 ref="editor" v-model="company.content"></Tinymce>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit" :loading="addLoading">提交</el-button>
                </el-form-item>
            </el-form>
        </el-tab-pane>
        <el-tab-pane label="Banner" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="关于我们" name="third">角色管理</el-tab-pane>
    </el-tabs>
</template>
<script>
    import Tinymce from '@/components/Tinymce'
    import { getList, update } from 'api/homePage';

    export default {
        components: { Tinymce },
        data() {
            return {
                addLoading: false,
                company: {},
                activeName: 'first',
                Rules: {
                    title: [
                        {required: true, message: '请填写标题', trigger: 'blur'},
                    ],
                    content: [
                        {required: true, message: '请天蝎公司简介', trigger: 'blur'}
                    ],
                    subtitle: [
                        {required: true, message: '请填写副标题', trigger: 'blur'}
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
                if (this.activeName == 'second') {
                    this.$router.push({ path: '/setting/banner' });
                } else if(this.activeName == 'third') {
                    this.$router.push({ path: '/setting/aboutUs' });
                }
            },
            onSubmit() {
                this.addLoading = true
                this.$refs.company.validate((valid) => {
                    if (valid) {
                        update(this.company.id, this.company).then(response => {
                            this.$message({
                                message: '更新成功!',
                                type: 'success'
                            });
                            this.addLoading = false
                        });
                    }
                })
            },
        }
    };
</script>