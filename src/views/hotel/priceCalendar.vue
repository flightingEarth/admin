<template>
    <div class="main">
        <div class="search">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <div class="title">
                    <i class="iconfont icon-comiisjiahao"></i>
                    <span>批量添加</span>
                </div>
                <div class="input">
                    <el-row>
                        <ul>
                            <el-checkbox-group v-model="ruleForm.week">
                            <li v-for="week in weeks">
                                <el-checkbox  :label="week.id" :key="week.id">{{week.name}}</el-checkbox>
                            </li>
                            </el-checkbox-group>
                            <li>
                                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                            </li>
                        </ul>

                        <el-col :span="12">
                            <div class="grid-content bg-purple titleTime top">
                                <span><i>|</i>选择时间:</span>
                                <el-date-picker
                                    v-model="ruleForm.times"
                                    type="daterange"
                                    range-separator="至"
                                    value-format="yyyy-MM-dd"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期">
                                </el-date-picker>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light top">
                                <span><i>|</i>库存余量:</span>
                                <el-form-item label="库存余量" prop="limitNum">
                                    <el-input type="number" v-model="ruleForm.limitNum"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>市场价格:</span>
                                <el-form-item label="市场价格" prop="marketPrice">
                                    <el-input type="number" v-model="ruleForm.marketPrice"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>销售价格:</span>
                                <el-form-item label="销售价格" prop="shopPrice">
                                    <el-input type="number" v-model="ruleForm.shopPrice"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>供应价:</span>
                                <el-form-item label="供应价" prop="providePrice">
                                    <el-input type="number" v-model="ruleForm.providePrice"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="input">
                    <el-row>
                        <el-col :span="24" class="button">
                            <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
                            <el-button @click="handleCancel">返回</el-button>
                        </el-col>
                    </el-row>
                </div>
            </el-form>
        </div>

        <div class="calendar">
            <!--<p class="prompt">注：修改当日数量：双击选择日期 批量修改抽奖数量：鼠标按住拖选日期 选择修改抽奖数量：ctrl+单击日历</p>-->
            <div class="title">
                <i class="iconfont icon-zuo" @click="handLastMonth"></i>
                <span>{{ years }}</span>
                <i class="iconfont icon-you" @click="handNextMonth"></i>
            </div>
            <table v-loading="loading">
                <tr>
                    <th>一</th>
                    <th>二</th>
                    <th>三</th>
                    <th>四</th>
                    <th>五</th>
                    <th>六</th>
                    <th>日</th>
                </tr>
                <tr v-for="(items, index) in tableData">
                    <td v-for="(item, index) in items" v-bind:class="{ nextDate: item.expire }">
                        <span class="date">{{ item.day }}</span>
                        <template v-if="item.display == true" >
                            <p>库存量:{{ item.limitNum }}</p>
                            <p>市场价:{{ item.marketPrice }}</p>
                            <p>销售价:{{ item.shopPrice }}</p>
                            <p>供应价:{{ item.providePrice }}</p>
                        </template>

                    </td>
                </tr>
            </table>
        </div>


    </div>
</template>

<script>
    import { getHotelDailyPrice, addHotelDailyPrice } from '@/api/hotelDailyPrice'
    import "../../iconfont/iconfont.css"
//    const cityOptions = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
    export default {
        name: 'priceCalendar',
        data() {
            return {
                checkAll: false,
                weeks: [
                    {id:1, name:'周一'},
                    {id:2, name:'周二'},
                    {id:3, name:'周三'},
                    {id:4, name:'周四'},
                    {id:5, name:'周五'},
                    {id:6, name:'周六'},
                    {id:0, name:'周日'},
                ],
                years:'',
                loading: false,
                lastMonth:'',
                nextMonth:'',
                tableData:[],
                isIndeterminate: true,
                ruleForm: {
                    week:[],
                    times:[]
                },
                roomId: '',
                rules: {
                    marketPrice: [
                        {required: true, message: '请输入市场价格', trigger: 'blur'}
                    ],
                    shopPrice: [
                        {required: true, message: '请输入销售价格', trigger: 'blur'}
                    ],
                    providePrice: [
                        {required: true, message: '请输入供应价', trigger: 'blur'}
                    ],
                    limitNum: [
                        {required: true, message: '请输入库存', trigger: 'blur'}
                    ]
                }
            }
        },
        created() {
            this.roomId = this.$route.query.roomId
            this.ruleForm.goodsId = this.$route.query.goodsId
            this.getList()
        },
        methods: {
            getList() {
                let para = {'years': this.years}
                getHotelDailyPrice(para).then(response => {
                    this.tableData = response.data.data
                    this.years = response.data.years
                    this.lastMonth = response.data.lastMonth
                    this.nextMonth = response.data.nextMonth
                    this.loading = false
                })
            },
            handLastMonth() {
                this.loading = true
                this.years = this.lastMonth
                this.getList()
            },
            handNextMonth() {
                this.loading = true
                this.years = this.nextMonth
                this.getList()
            },
            handleCheckAllChange(val) {
                this.ruleForm.week = val ? [0,1,2,3,4,5,6] : [];
                this.isIndeterminate = false;
            },
            submitForm(ruleForm) {
                if (this.ruleForm.week.length == 0) {
                    this.$message.error('请选择添加的价格是周几');
                    return false;
                }

                if (this.ruleForm.times.length < 2) {
                    this.$message.error('请选择选择开始日期和结束日期');
                    return false;
                }

                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        this.addLoading = true
                        addHotelDailyPrice(this.ruleForm).then(response => {
                            if (response.data.status) {
                                this.$message({
                                    message: '添加成功！',
                                    type: 'success'
                                });
                                this.handleCancel();
                            } else {
                                this.$message.error(response.data.msg);
                            }
                        })
                    } else {
                        console.log('error submit!!')
                        return false
                    }
                })
            },
            handleCancel() {
                this.$router.push({path: "/hotelproduct?roomId=" + this.roomId})
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
            margin-top: 5px;
            .title {
                border-bottom: 1px solid #E6E6E6;
                margin-top: 10px;
                padding-bottom: 10px;
                margin-bottom: 20px;
                span {
                    margin-left: 5px;
                }
                i{
                    color: #2C7ADE;
                }
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
                ul {
                    height: 60px;
                    width: 100%;
                    background: #fafafa;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    li {
                        float: left;
                        width: 100px;
                        height: 40px;
                        line-height: 40px;
                        background: #fff;
                        text-align: center;
                        border-radius: 3px;
                        margin-left: 10px;
                        margin-top: 10px;
                        cursor: pointer;
                    }
                }
                .titleTime {
                    float: left;
                    overflow: hidden;
                    /*margin-top: 20px;*/
                    /*margin-left: 10%;*/
                    width: 100%;
                }
                .top{
                    margin-top: 20px;
                }
                .inputTime {
                    float: left;
                    overflow: hidden;
                    margin-top: 20px;
                    width: 100%;
                    margin-bottom: 20px;
                    .el-input{
                        width: 90%;
                        margin-bottom: 20px;
                        .el-input__inner{
                            text-align: center;
                        }
                    }
                    .el-form-item {
                        width: 40%;
                        float: left;
                        margin-left: 5%;
                        .el-input {
                            float: left;
                            width: 100%;
                        }
                    }
                }
                .grid-content{
                    padding-left: 10%;
                    .el-input{
                        width: 64%;
                    }
                }
                .left{
                    margin-left: 20%;
                }

                .stayIn {
                    color: #666;
                }
                .button {
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
                }
                .btn {
                    display: inline-block;
                    width: 80px;
                    height: 36px;
                    text-align: center;
                    border-radius: 3px;
                }
                .refuse {
                    background: #5fcab1;
                    color: #fff;
                }
                .agree {
                    border: 1px solid #DEDEDE;
                    color: #666;
                    margin-left: 0;
                    margin-top: 5px;
                }
            }
        }
        .calendar{
            margin-top: 10px;
            width: 100%;
            height: 700px;
            background: #fff;
            padding: 0 70px;
            overflow: hidden;
            .prompt{
                color: red;
                margin: 15px 0;
                text-align: center;
            }
            .iconfont{
                color: #262F3B;
            }
            .title{
                height: 50px;
                width: 30%;
                /*background: #388FFF;*/
                text-align: center;
                color: #262F3B;
                font-size: 18px;
                line-height: 50px;
                margin: 0 auto;
                .icon-zuo{
                    float: left;
                    margin-left: 10px;
                    cursor: pointer;
                }
                .icon-you{
                    float: right;
                    margin-right: 10px;
                    cursor: pointer;
                }
            }
            table{
                width: 90%;
                table-layout: fixed;
                margin: 0 auto;
                border-collapse: collapse;
                border: 1px solid #ccc;
                box-sizing: border-box;
                th{
                    height: 50px;
                    background: #fff;
                    font-size: 18px;
                    font-weight: normal;
                }
                td{
                    background: #fff;
                    height: 100px;
                    vertical-align: top;
                    border: 1px solid #E6E6E6;
                    position: relative;
                    padding: 5px 0 0 10px;
                    span{
                        position: absolute;
                        font-size: 18px;
                    }
                    p{
                        margin: 5px 0 5px 0;
                        margin-left: 35%;
                    }
                }
            }
        }
    }


</style>
