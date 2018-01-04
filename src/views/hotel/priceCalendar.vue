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
                            <li v-for="city in cities">
                                <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                                    <el-checkbox  :label="city" :key="city">{{city}}</el-checkbox>
                                </el-checkbox-group>
                            </li>
                            <li>
                                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                            </li>
                        </ul>

                        <el-col :span="12">
                            <div class="grid-content bg-purple titleTime top">
                                <span><i>|</i>选择时间:</span>
                                <el-date-picker
                                    v-model="ruleForm.time"
                                    type="daterange"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期">
                                </el-date-picker>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light top">
                                <span><i>|</i>库存余量:</span>
                                <el-form-item label="膳食安排" prop="checkIn">
                                    <el-input v-model="ruleForm.checkIn"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <!--<el-col :span="12">-->
                            <!--<div class="grid-content bg-purple-light">-->
                                <!--<span><i>|</i>金币抵扣:</span>-->
                                <!--<el-form-item label="膳食安排" prop="checkIn">-->
                                    <!--<el-input v-model="ruleForm.checkIn"></el-input>-->
                                <!--</el-form-item>-->
                            <!--</div>-->
                        <!--</el-col>-->
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>市场价格:</span>
                                <el-form-item label="膳食安排" prop="checkIn">
                                    <el-input v-model="ruleForm.checkIn"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>销售价格:</span>
                                <el-form-item label="膳食安排" prop="checkIn">
                                    <el-input v-model="ruleForm.checkIn"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="input">
                    <el-row>
                        <el-col :span="24" class="button">
                            <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
                            <el-button>返回</el-button>
                        </el-col>
                    </el-row>
                </div>

            </el-form>
        </div>

        <div class="calendar">
            <p class="prompt">注：修改当日数量：双击选择日期 批量修改抽奖数量：鼠标按住拖选日期 选择修改抽奖数量：ctrl+单击日历</p>
            <div class="title">
                <i class="iconfont icon-zuo"></i>
                <span>2017-12</span>
                <i class="iconfont icon-you"></i>
            </div>
            <table>
                <tr>
                    <th>日</th>
                    <th>一</th>
                    <th>二</th>
                    <th>三</th>
                    <th>四</th>
                    <th>五</th>
                    <th>六</th>
                </tr>
                <tr>
                    <td>
                        <span class="date">1</span>
                        <p>库存量:600.00</p>
                        <p>市场价:600.00</p>
                        <p>销售价:529.00</p>
                        <p>金币抵:0</p>
                    </td>
                    <td>
                        <span class="date">2</span>
                    </td>
                    <td>
                        <span class="date">3</span>
                    </td>
                    <td>
                        <span class="date">4</span>
                    </td>
                    <td>
                        <span class="date">5</span>
                    </td>
                    <td>
                        <span class="date">6</span>
                    </td>
                    <td>
                        <span class="date">7</span>
                        <p>库存量:600.00</p>
                        <p>市场价:600.00</p>
                        <p>销售价:529.00</p>
                        <p>金币抵:0</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="date">8</span>
                    </td>
                    <td>
                        <span class="date">9</span>
                    </td>
                    <td>
                        <span class="date">10</span>
                    </td>
                    <td>
                        <span class="date">11</span>
                    </td>
                    <td>
                        <span class="date">12</span>
                    </td>
                    <td>
                        <span class="date">13</span>
                    </td>
                    <td>
                        <span class="date">14</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="date">15</span>
                    </td>
                    <td>
                        <span class="date">16</span>
                    </td>
                    <td>
                        <span class="date">17</span>
                    </td>
                    <td>
                        <span class="date">18</span>
                    </td>
                    <td>
                        <span class="date">19</span>
                    </td>
                    <td>
                        <span class="date">20</span>
                    </td>
                    <td>
                        <span class="date">21</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="date">22</span>
                    </td>
                    <td>
                        <span class="date">23</span>
                    </td>
                    <td>
                        <span class="date">24</span>
                    </td>
                    <td>
                        <span class="date">25</span>
                    </td>
                    <td>
                        <span class="date">26</span>
                    </td>
                    <td>
                        <span class="date">27</span>
                    </td>
                    <td>
                        <span class="date">28</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="date">29</span>
                    </td>
                    <td>
                        <span class="date">30</span>
                    </td>
                    <td>
                        <span class="date">31</span>
                    </td>
                    <td class="nextDate">
                        <span class="date">1</span>
                    </td>
                    <td class="nextDate">
                        <span class="date">2</span>
                    </td>
                    <td class="nextDate">
                        <span class="date">3</span>
                    </td>
                    <td class="nextDate">
                        <span class="date">4</span>
                    </td>
                </tr>
            </table>
        </div>


    </div>
</template>

<script>
    import {addHotel, addressList} from '@/api/article'
    import "../../iconfont/iconfont.css"
    const cityOptions = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
    export default {
        name: 'priceCalendar',
        data() {
            return {
                checkAll: false,
                checkedCities: [],
                cities: cityOptions,
                isIndeterminate: true,
                dialogImageUrl: '',
                dialogVisible: false,
                activeName: 'second',
                time1:"",
                time2:"",
                time3:"",
                time4:"",
                ruleForm: {},
                rules: {}
            }
        },
        created() {
//            this.getList()
        },
        methods: {
            handleCheckAllChange(val) {
                this.checkedCities = val ? cityOptions : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cities.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
            },
            resetForm(formName) {
                this.$refs[formName].resetFields()
            }
        },
        watch: {
            ruleForm (val) {
                console.log(val)
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
                        /*float: left;*/
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
                width: 80%;
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
                        margin: 5px 0 5px 60px ;
                    }
                }
                .nextDate{
                    background: #F5F5F5;
                }
            }
        }
    }


</style>
