<template>
<div class="app-container calendar-list-container">
    <el-row>
        <el-col :span="24" class="toolbar">
            <el-form :inline="true" :model="listQuery">
                <el-form-item>
                    <el-input v-model="listQuery.name" placeholder="类名"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" icon="search" @click="getList">搜索</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" icon="plus" @click="addFormVisible = true">新增</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
    <el-table :data="list" border v-loading="listLoading">
        <el-table-column prop="id" label="序号" width="100"> </el-table-column>
        <el-table-column prop="name" label="分类"></el-table-column>
        <el-table-column label="类别" width="120">
            <template slot-scope="scope">
                <el-tag :type="scope.row.type | typeClassFilter">{{scope.row.type | typeFilter }}</el-tag>
            </template>
        </el-table-column>
        <el-table-column prop="created_at" label="创建时间" width="250"></el-table-column>

        <el-table-column label="操作" width="200">
            <template slot-scope="scope">
                <el-button type="text"  size="small" @click="handleEdit(scope.row)">编辑</el-button>
                <el-button type="text" size="small" @click="handleDel(scope.row)">删除</el-button>
        </template>
        </el-table-column>
    </el-table>

    <!--工具条-->
    <el-col :span="24" class="toolbar">
        <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="listQuery.limit" :total="total" style="float:right;">
        </el-pagination>
    </el-col>

    <!--新增界面-->
    <el-dialog title="新增" v-model="addFormVisible" :close-on-click-modal="false">
        <el-form :model="addForm" :rules="Rules" ref="addForm" label-width="100px">
            <el-form-item label="分类" prop="type">
                <el-select v-model="addForm.type" placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="分类" prop="name">
                <el-input v-model="addForm.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="排序" prop="sort">
                <el-input v-model="addForm.sort" placeholder="排序从下到大排序" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="addFormVisible = false">取消</el-button>
                <el-button type="primary" @click="addSubmit" :loading="addLoading">提交</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>

    <!--编辑界面-->
    <el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
        <el-form :model="editForm" :rules="Rules" ref="editForm" label-width="100px">
            <el-form-item label="分类" prop="type">
                <el-select v-model="editForm.type" placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="分类" prop="name">
                <el-input v-model="editForm.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="排序" prop="sort">
                <el-input v-model="editForm.sort" placeholder="排序从下到大排序" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="editFormVisible = false">取消</el-button>
                <el-button type="primary" @click="editSubmit" :loading="editLoading">提交</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
    </div>

    </template>

    <script>
import { getCategories, addCategory, updateCategory, destroyCategory } from 'api/category';

export default{
    name: 'category',
    data(){
        return {
            list:[],
            total: 0,
            listLoading: false,
            listQuery: {
                page: 1,
                limit: 20
            },
            options: [
                { id:1, name: '产品中心' },
                { id:2, name: '客户案例' }
            ],
            //新增界面数据
            addForm: {type:''},
            addFormVisible: false,//新增界面是否显示
            addLoading: false,
            editFormVisible: false,//编辑界面是否显示
            editLoading: false,
            //编辑界面数据
            editForm: {},
            Rules: {
                name: [
                    { required: true, message: '请输入类名', trigger: 'blur' },
                ],
                type: [
                    { type: 'number', required: true, message: '请选择类别', trigger: 'change' }
                ],
            },
        }
    },
    mounted() {
        this.getList();
    },
    filters: {
        typeClassFilter(status) {
            const statusMap = {
                0: 'primary',
                1: 'success',
                2: 'gray',
            };
            return statusMap[status]
        },
        typeFilter(status) {
            const statusMap = {
                0: '其它',
                1: '产品中心',
                2: '客户案例',
            };
            return statusMap[status]
        },
    },
    methods:{
        getList() {
            this.listLoading = true;
            getCategories(this.listQuery).then(response => {
                this.list = response.data.data;
                this.total = response.data.meta.pagination.total;
                this.listLoading = false;
            })
        },
        addSubmit() {
            this.$refs.addForm.validate((valid) => {
                if (valid) {
                    this.$confirm('确认提交吗？', '提示', {}).then(() => {
                        this.addLoading = true;
                        let category = Object.assign({}, this.addForm);

                        addCategory(category).then(response => {
                            this.$message({
                                message: '操作成功',
                                type: 'success'
                            });
                            this.$refs.addForm.resetFields();
                            this.addFormVisible = false;
                            this.addLoading = false;
                            this.getList();

                        })
                    });
                }
            });
        },
        //编辑
        handleEdit(row) {
            this.editForm = row
            this.editFormVisible = true
        },
        // 编辑
        editSubmit() {
            this.$refs.editForm.validate((valid) => {
                if (valid) {
                    this.$confirm('确认提交吗？', '提示', {}).then(() => {
                        this.editLoading = true;
                        let category = Object.assign({}, this.editForm);

                        updateCategory(category.id, category).then(response => {
                            this.$message({
                                message: '操作成功',
                                type: 'success'
                            });
                            this.$refs.editForm.resetFields();
                            this.editFormVisible = false;
                            this.editLoading = false;
                            this.getList();
                            
                        })
                    });
                }
            });
        },
        //删除
        handleDel(row) {
            this.$confirm('确认删除该记录吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {

                destroyProduct(row.id).then(response => {
                    this.$message({
                        message: '删除成功!',
                        type: 'success'
                    });
                    this.getList()
                })
            }).catch(() => {
                this.$message({
                    message: '已取消删除',
                    type: 'info'
                });
            });
        },
        //翻页
        handleCurrentChange(val) {
            this.listQuery.page = val;
            this.getList();
        },
    },

}
</script>
