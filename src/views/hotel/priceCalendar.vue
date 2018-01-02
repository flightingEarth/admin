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
                            <li>
                                <el-checkbox v-model="ruleForm.Monday" value="1">周一</el-checkbox>
                            </li>
                            <li>
                                <el-checkbox v-model="ruleForm.Tuesday" value="2">周二</el-checkbox>
                            </li>
                            <li>
                                <el-checkbox v-model="ruleForm.Wednesday" value="3">周三</el-checkbox>
                            </li>
                            <li>
                                <el-checkbox v-model="ruleForm.Thursday" value="4">周四</el-checkbox>
                            </li>
                            <li>
                                <el-checkbox v-model="ruleForm.Friday" value="5">周五</el-checkbox>
                            </li>
                            <li>
                                <el-checkbox v-model="ruleForm.Saturday" value="6">周六</el-checkbox>
                            </li>
                            <li>
                                <el-checkbox v-model="ruleForm.Sunday" value="7">周日</el-checkbox>
                            </li>
                            <li>
                                <el-checkbox v-model="ruleForm.checkAll">全选</el-checkbox>
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
            <p>注：修改当日数量：双击选择日期 批量修改抽奖数量：鼠标按住拖选日期 选择修改抽奖数量：ctrl+单击日历</p>
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
                    <td>
                        <span class="date">1</span>
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
                </tr>
            </table>
        </div>


    </div>
</template>

<script>
    import {addHotel, addressList} from '@/api/article'
    import "../../iconfont/iconfont.css"
    //  const cityOptions1 = ['商务中心', '熨衣设备', 'iPad音乐基座', '浴衣', '叫车服务', '电热水壶']
    export default {
        name: 'priceCalendar',
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                activeName: 'second',
                time1:"",
                time2:"",
                time3:"",
                time4:"",
                ruleForm: {},
                rules: {
//          hotelName: [
//            {required: true, message: '此处不能为空', trigger: 'blur'}
//          ],
//          minimumHotelHousePrice: [
//            {required: true, message: '此处不能为空', trigger: 'blur'}
//          ],
//          hotelBrandId: [
//            {required: true, message: '此处不能为空', trigger: 'change'}
//          ],
//          hotelSupplierId: [
//            {required: true, message: '此处不能为空', trigger: 'blur'}
//          ],
//          hotelLongitude: [
//            {required: true, message: '此处不能为空', trigger: 'blur'}
//          ],
//          hotelLatitude: [
//            {required: true, message: '此处不能为空', trigger: 'blur'}
//          ],
//          hotelAddress: [
//            {required: true, message: '此处不能为空', trigger: 'blur'}
//          ],
//          hotelStatus: [
//            {required: true, message: '此处不能为空', trigger: 'change'}
//          ],
//          hotelSort: [
//            {required: true, message: '此处不能为空', trigger: 'change'}
//          ],
//          hotelSaleCount: [
//            {required: true, message: '此处不能为空', trigger: 'change'}
//          ],
//          hotelStar: [
//            {required: true, message: '此处不能为空', trigger: 'change'}
//          ],
//          hotelTelephone: [
//            {required: true, message: '此处不能为空', trigger: 'blur'}
//          ],
//          hotelFeatures: [
//            {required: true, message: '此处不能为空', trigger: 'blur'}
//          ],
//          hotelIntroduction: [
//            {required: true, message: '此处不能为空', trigger: 'blur'}
//          ],
//          checkInTime: [
//            {required: true, message: '此处不能为空', trigger: 'change'}
//          ],
//          departureTime: [
//            {required: true, message: '此处不能为空', trigger: 'change'}
//          ],
//          hotelStartBusiness: [
//            {required: true, message: '此处不能为空', trigger: 'blur'}
//          ],
//          decorationTime: [
//            {required: true, message: '此处不能为空', trigger: 'blur'}
//          ],
//          pet: [
//            {required: true, message: '此处不能为空', trigger: 'blur'}
//          ],
//          abolitionOfPolicy: [
//            {required: true, message: '此处不能为空', trigger: 'blur'}
//          ],
//          checkIn: [
//            {required: true, message: '此处不能为空', trigger: 'blur'}
//          ],
//          buffet: [
//            {required: true, message: '此处不能为空', trigger: 'blur'}
//          ]
                }
            }
        },
        created() {
//            this.getList()
        },
        methods: {
//            getList() {
//                addressList().then(response => {
////          this.options2 = response.data.data;
//                })
//            },
//            submitForm(formName) {
//                this.$refs[formName].validate((valid) => {
//                    if (valid) {
////            addHotel(this.ruleForm).then(response => {
////
////              console.log(response);
////            })
//                        console.log(this.ruleForm);
//                    } else {
//                        console.log('error submit!!')
//                        return false
//                    }
//                })
//            },
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
            p{
                margin: 15px 0;
            }
            .title{
                height: 50px;
                width: 100%;
                background: #388FFF;
                text-align: center;
                color: #fff;
                font-size: 18px;
                line-height: 50px;
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
                width: 100%;
                table-layout: fixed;
                th{
                    height: 50px;
                    background: #fff;
                    font-size: 24px;
                    font-weight: normal;
                }
                td{
                    background: #F2F2F2;
                    height: 100px;
                    vertical-align: top;
                    border: 1px solid #E6E6E6;
                    position: relative;
                    span{
                        position: absolute;
                        font-size: 26px;
                    }
                    p{
                        margin: 5px 0 5px 60px ;
                    }
                }
            }
        }
    }


</style>
