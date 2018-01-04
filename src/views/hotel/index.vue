<template>
    <div class="main">
        <div class="search">
            <div class="title">
                <i class="iconfont icon-sousuo1"></i>
                <span>搜索</span>
            </div>
            <div class="input">
                <el-row>
                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <span><i>|</i>酒店名称:</span>
                            <el-input v-model="searchList.hotelName" placeholder="请输入酒店名称"></el-input>
                        </div>
                    </el-col>

                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <span><i>|</i>酒店星级:</span>
                            <el-select v-model="searchList.hotelStar" placeholder="请选择">
                                <el-option label="全部" value="0"></el-option>
                                <el-option label="客栈／公寓" value="1"></el-option>
                                <el-option label="二星级／经济型" value="2"></el-option>
                                <el-option label="三星级／舒适型" value="3"></el-option>
                                <el-option label="四星级／高档型" value="4"></el-option>
                                <el-option label="五星级／豪华型" value="5"></el-option>
                            </el-select>
                        </div>
                    </el-col>

                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <span><i>|</i>选择城市:</span>
                            <el-cascader
                                :options="options2"
                                @active-item-change="handleItemChange"
                                :props="props"
                            ></el-cascader>
                        </div>
                    </el-col>

                    <el-col :span="12">
                        <div class="grid-content bg-purple double">
                            <span><i>|</i>酒店状态:</span>
                            <el-select v-model="searchList.hotelStatus" placeholder="请选择">
                                <el-option label="正常" value="1"></el-option>
                                <el-option label="不营业" value="2"></el-option>
                            </el-select>
                        </div>
                    </el-col>

                    <el-col :span="24">
                        <el-button type="primary" @click="handleSearch">搜索</el-button>
                        <el-button>重置条件</el-button>
                        <!--<el-button type="primary">导出</el-button>-->
                    </el-col>

                </el-row>

            </div>
        </div>

        <div class="list-title">
            <i class="iconfont icon-cf-c57"></i>
            <span>列表数据</span>
            <ul>
                <li><a href="javascript:;" @click="addHotel">添加酒店</a></li>
                <li><a href="javascript:;" @click="priceCalendar">价格日历</a></li>
            </ul>
        </div>
        <el-table :data="tableData" border v-loading="listLoading" style="width: 100%">
            <el-table-column
                prop="hotelId"
                label="编号"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="hotelName"
                label="酒店名称"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="hotelStar"
                label="酒店星级"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="hotelAddress"
                label="酒店地址"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="hotelTelephone"
                label="联系方式"
                align="center"
            >
            </el-table-column>
            <el-table-column
                prop="minimumHotelHousePrice"
                label="最小价格"
                align="center">
            </el-table-column>
            <el-table-column

                label="酒店状态"
                align="center">
                <template slot-scope="scope">
                    <el-button v-if="scope.row.hotelStatus ==1" type="text" size="small">上架</el-button>
                    <el-button v-if="scope.row.hotelStatus ==2" type="text" size="small">下架</el-button>
                </template>
            </el-table-column>
            <el-table-column
                prop="createdTime"
                label="添加时间"
                align="center">
            </el-table-column>
            <el-table-column
                label="操作"
                align="center">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="handleHouse(scope.row.hotelId)">房型</el-button>
                    <el-button type="text" size="small" @click="edit(scope.row.hotelId)">编辑</el-button>
                </template>
            </el-table-column>

        </el-table>
        <el-pagination
            @current-change="handleCurrentChange"
            :current-page="searchList.currentPage"
            :page-size="searchList.limit"
            layout="total, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
    </div>
</template>

<script>
    import {hotelList} from '@/api/hotel'
    export default {
        name: 'hotel',
        data() {
            return {
                total: 0,
                searchList: {
                    hotelName: '',
                    hotelStar: '',
                    hotelStatus: '',
                    currentPage: 1,
                    limit: 20,
                    page: 1
                },
                beginTime: "",
                endTime: "",
                minTime: {
                    disabledDate: (time) => {
                        return time.getTime() < this.beginTime
                    }
                },
                tableData: [],
                options2: [],
                props: {
                    value: 'label',
                    children: 'cities'
                }
            }
        },
        created() {
            this.getList()
        },
        methods: {
            getList() {
                this.listLoading = true
                hotelList(this.searchList).then(response => {
                    this.tableData = response.data.data
                    this.total = response.data.meta.total
                    this.listLoading = false
                })
            },
            handleCurrentChange(val) {
                this.searchList.page = val;
                this.getList();
            },
            handleItemChange(val) {
                console.log('active item:', val)
            },
            addHotel() {
                this.$router.push({path: "/hotel/create"})
            },
            handleSearch() {
                this.getList()
            },
            edit(index) {
                this.$router.push({path: "/hotel/" + index + '/edit'})
            },
            handleHouse(){
                this.$router.push({path: "/hotel/hotelRoom"})
            },
            priceCalendar(){
                this.$router.push({path: "/hotel/priceCalendar"})
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
            background: #f3f3f3;
            border: 1px solid #ccc;
            border-bottom: 0;
            margin-bottom: 0 !important;
            margin-top: 24px;
            height: 40px;
            line-height: 40px;
            .iconfont {
                color: #333;
                margin-left: 20px;
                font-size: 18px;
            }
            span {
                font-size: 14px;
                font-weight: 600;
                color: #333;
            }
            ul {
                list-style: none;
                float: right;
                margin: 0;
                li {
                    float: left;
                    width: 90px;
                    height: 25px;
                    text-align: center;
                    line-height: 25px;
                    background: #fff;
                    margin-right: 10px;
                    margin-top: 9px;
                    border-radius: 2px;
                    border: 1px solid #ccc;
                    font-size: 12px;
                    a {
                        color: #666;
                        display: block;
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
