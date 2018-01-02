<template>
    <div class="main">
        <div class="search">
            <div class="title">
                <i class="iconfont icon-sousuo1"></i>
                <span>搜索</span>
            </div>
            <div class="input">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-row>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>房型名称:</span>
                                <el-form-item label="活动名称" prop="roomName">
                                    <el-input v-model="ruleForm.roomName"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>房间状态:</span>
                                <el-form-item label="活动区域" prop="status">
                                    <el-select v-model="ruleForm.status" placeholder="请选择">
                                        <el-option
                                            v-for="item in supplierOptions"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>

                            </div>
                        </el-col>
                        <el-col :span="24">
                            <el-button type="primary" @click="handleSearch">搜索</el-button>
                            <el-button @click="resetForm('ruleForm')">重置条件</el-button>
                        </el-col>

                    </el-row>
                </el-form>
            </div>
        </div>

        <div class="list-title">
            <i class="iconfont icon-cf-c57"></i>
            <span>列表数据</span>
            <ul>
                <li><a href="javascript:;" @click="addHouse">添加房型</a></li>
            </ul>
        </div>
        <div class="table">
            <el-table
                :data="tableData"
                border
                stripe
                v-loading="listLoading"
                style="width: 100%">
                <el-table-column
                    prop="roomId"
                    label="房间编号"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="hotelId"
                    label="酒店编号"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="roomName"
                    label="房型名称"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="bedIntro"
                    label="床型"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="buildingArea"
                    label="面积"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="roomFloor"
                    label="楼层"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="capacity"
                    label="可住人数"
                    align="center">
                </el-table-column>

                <el-table-column
                    prop="withWindows"
                    label="是否有窗"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="createdAt.data"
                    label="创建时间"
                    align="center">
                </el-table-column>
                <el-table-column
                    label="房间状态"
                    align="center">
                    <template slot-scope="scope">
                        <el-button type="text" v-if="scope.row.status == 1" size="small">正常</el-button>
                        <el-button type="text" v-if="scope.row.status == 2" size="small">未营业</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                    label="操作"
                    align="center">
                    <template slot-scope="scope">
                        <el-button type="text" size="small" @click="hotelProduct(scope.row.roomId)">产品</el-button>
                        <el-button type="text" size="small" @click="edit(scope.row.roomId)">编辑</el-button>
                    </template>
                </el-table-column>

            </el-table>
            <el-pagination
                @current-change="handleCurrentChange"
                :current-page="ruleForm.currentPage"
                :page-size="ruleForm.limit"
                layout="total, prev, pager, next, jumper"
                :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import {roomList} from '@/api/hotelRoom'

    export default {
        name: 'houseShape',
        data() {
            return {
                ruleForm: {
                    currentPage: 1,
                    limit: 20,
                    page: 1
                },
                hotelId: "",
                rules: {},
                total: 0,
                supplierOptions: [{
                    value: '1',
                    label: '正常'
                }, {
                    value: '2',
                    label: '未营业'
                }],
                tableData: []
            }
        },
        created(){
            this.getList()
        },
        methods: {
            getList() {
                this.listLoading = true
                roomList(this.ruleForm).then(response => {
                    this.tableData = response.data.data
                    this.total = response.data.meta.total
                    this.listLoading = false
                })
            },
            handleCurrentChange(val) {
                this.ruleForm.page = val;
                this.getList();
            },
            handleSearch(){
                this.getList();
            },
            resetForm(formName) {
//                console.log(this.$refs.ruleForm)
                this.$refs.ruleForm.resetFields();
            },
            addHouse() {
                let id = this.$route.query.hotelId
                this.$router.push({path: "/hotel/hotelRoom/create?hotelId=" + id })
            },
            edit(index) {
                this.$router.push({path: "/hotel/hotelRoom/"+index + '/edit'})
            },
            hotelProduct(roomId) {
                this.$router.push({ path:"/hotelproduct?roomId="+ roomId })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main {
        background: #fafafa;
        width: 100%;
        padding: 20px;
        .search {
            width: 100%;
            overflow: hidden;
            box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.08), -3px -3px 4px rgba(0, 0, 0, 0.08);
            background: #fff;
            padding: 20px;
            box-sizing: border-box;
            color: #666;
            .title {
                border-bottom: 1px solid #E6E6E6;
                margin-top: 10px;
                padding-bottom: 10px;
            }
            .input {
                span {
                    float: left;
                    margin-top: 10px;
                    margin-right: 10px;
                    i {
                        color: red;
                        margin-right: 5px;
                    }
                }
                .el-input {
                    float: left;
                    width: 70%;
                }
                .grid-content {
                    margin-left: 20px;
                    margin-top: 20px;
                }
                .el-select {
                    width: 70%;
                }
                .el-cascader {
                    margin: 0;
                    width: 70%;
                }
                .el-col-24 {
                    text-align: center;
                    margin-top: 20px;
                    border-top: 1px solid #E6E6E6;
                    padding-top: 20px;
                    button {
                        width: 100px;
                        height: 36px;
                        line-height: 36px;
                        text-align: center;
                        padding: 0;
                    }
                    .el-button--primary {
                        border-color: #5FCAB1;
                        background: #5FCAB1;
                    }
                    .el-button--primary:last-of-type {
                        border-color: #307FFF;
                        background: #307FFF;
                    }
                }
            }
        }
        .list-title {
            width: 100%;
            height: 60px;
            padding: 0 20px;
            background: #fff;
            margin-top: 20px;
            line-height: 60px;
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.08), -2px -2px 4px rgba(0, 0, 0, 0.08);
            ul {
                list-style: none;
                float: right;
                margin: 0;
                li {
                    float: left;
                    width: 100px;
                    height: 36px;
                    text-align: center;
                    line-height: 36px;
                    background: #307FFF;
                    margin-left: 10px;
                    margin-top: 12px;
                    border-radius: 3px;
                    a {
                        display: block;
                        color: #fff;
                    }
                }
            }
        }
        .table {
            background: #fff;
            width: 100%;
            padding: 20px;
            margin-top: 5px;
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.08), -2px -2px 4px rgba(0, 0, 0, 0.08);
        }
        .el-pagination {
            margin-top: 10px;
        }

    }


</style>
