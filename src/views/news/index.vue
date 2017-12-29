<template>
    <div class="app-container calendar-list-container">
        <el-row>
                <el-col :span="24" class="toolbar">
                    <el-form :inline="true" :model="listQuery">
                        <el-form-item>
                            <el-input v-model="listQuery.title" placeholder="标题"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" icon="search" @click="getList">搜索</el-button>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" icon="plus" @click="handleCreate">新增</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
        </el-row>
        <el-table :data="list" border v-loading="listLoading">
            <el-table-column prop="title" label="标题" width="250"> </el-table-column>
            <el-table-column prop="published_at" width="200"label="发布时间"></el-table-column>
            <el-table-column prop="view_count" label="阅读数"></el-table-column>
            <el-table-column label="状态" >
                <template slot-scope="scope">
                    <el-tag :type="scope.row.is_draft | statusTypeFilter">{{scope.row.is_draft | statusFilter }}</el-tag>
                </template>
            </el-table-column>

            <el-table-column label="操作" width="215">
                <template slot-scope="scope">
                    <el-button v-if="scope.row.is_draft != 1" type="text" size="small" @click="handleModifyStatus(scope.row, 1)">草稿
          </el-button>
                    <el-button v-else size="small" type="success" @click="handleModifyStatus(scope.row, 0)">发布
          </el-button>
                    <el-button type="text"  size="small" @click="handleEdit(scope.row.id)">编辑</el-button>
                    <el-button type="text" size="small" @click="handleDel(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!--工具条-->
        <el-col :span="24" class="toolbar">
            <!--<el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button>-->
            <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="listQuery.limit" :total="total" style="float:right;">
            </el-pagination>
        </el-col>
    </div>

</template>

<script>
    import { getList, updateNews, destroyNews } from 'api/news';

    export default{
        name: 'news',
        data(){
            return {
                list:[],
                total: 0,
                listLoading: false,
                listQuery: {
                    page: 1,
                    limit: 20
                },
            }
        },
        mounted() {
            this.getList();
        },
        filters: {
            statusTypeFilter(status) {
                const statusMap = {
                    0: 'success',
                    1: 'gray',
                };
                return statusMap[status]
            },
            statusFilter(status) {
                const statusMap = {
                    0: '已发布',
                    1: '草稿',
                };
                return statusMap[status]
            },
        },
        methods:{
            getList() {
                this.listLoading = true;
                getList(this.listQuery).then(response => {
                    this.list = response.data.data;
                    this.total = response.data.meta.pagination.total;
                    this.listLoading = false;
                })
            },
            //新增
            handleCreate() {
                this.$router.push({ path: '/news/create' });
            },
            //编辑
            handleEdit(id) {
                this.$router.push({ path: '/news/' + id + '/edit' });
            },
            //删除
            handleDel(row) {
                this.$confirm('确认删除该记录吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {

                    destroyNews(row.id).then(response => {
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
            //草稿
            handleModifyStatus(row, status) {
                updateNews(row.id, {is_draft: status}).then(response => {
                    this.$message({
                        message: '操作成功',
                        type: 'success'
                    });
                    row.is_draft = status;
                })

            },
        },

    }
</script>
