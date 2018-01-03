<template>
    <div class="main">
        <div class="search">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <div class="title">
                    <i class="iconfont icon-comiisjiahao"></i>
                    <span>{{title}}</span>
                </div>
                <div class="input">
                    <el-row>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>酒店名称:</span>
                                <el-form-item label="膳食安排" prop="hotelName">
                                    <el-input v-model="ruleForm.hotelName"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>销售起价:</span>
                                <el-form-item label="膳食安排" prop="minimumHotelHousePrice">
                                    <el-input v-model="ruleForm.minimumHotelHousePrice" type="number"
                                              placeholder="请输入数字"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>酒店品牌:</span>
                                <el-form-item label="活动区域" prop="hotelBrandId">
                                    <el-select v-model="ruleForm.hotelBrandId" placeholder="其他">
                                        <el-option label="其他" value="0"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-popover
                            ref="popover4"
                            placement="bottom-end"
                            title="选择供应商"
                            trigger="click"
                            offset="1"
                            v-model="tableShow"
                            style="display: none"
                        >
                            <el-form ref="form" :model="form" label-width="80px" class="supplierForm">
                                <el-row>
                                    <el-col :span="8">
                                        <el-form-item label="用户名">
                                            <el-input v-model="form.name" placeholder="用户名或昵称"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="编号">
                                            <el-input v-model="form.id" placeholder="用户编号"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item>
                                            <el-button type="primary" @click="onSubmit">搜索</el-button>
                                        </el-form-item>
                                    </el-col>
                                </el-row>

                            </el-form>
                            <el-table
                                ref="singleTable"
                                :data="tableData"
                                highlight-current-row
                                @current-change="handleCurrentChange"
                                height="250"
                                style="width: 100%">
                                <el-table-column width="90" property="id" label="编号"></el-table-column>
                                <el-table-column width="200" property="name" label="用户名"></el-table-column>
                                <el-table-column width="130" property="name1" label="用户昵称"></el-table-column>
                                <el-table-column width="100" property="type" label="用户类型"></el-table-column>
                                <el-table-column width="100" property="status" label="状态"></el-table-column>
                            </el-table>
                        </el-popover>

                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>供&nbsp;应&nbsp; 商:</span>
                                <el-form-item label="膳食安排" prop="hotelSupplierId">
                                    <el-input v-model="ruleForm.hotelSupplierId" v-popover:popover4  :readonly="true"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>百度经度:</span>
                                <el-form-item label="膳食安排" prop="hotelLongitude">
                                    <el-input v-model="ruleForm.hotelLongitude"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>百度纬度:</span>
                                <el-form-item label="膳食安排" prop="hotelLatitude">
                                    <el-input v-model="ruleForm.hotelLatitude"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>


                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>酒店地址:</span>
                                <el-form-item label="膳食安排" prop="hotelAddress">
                                    <el-input v-model="ruleForm.hotelAddress"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>酒店状态:</span>
                                <el-form-item label="活动区域" prop="hotelStatus">
                                    <el-select v-model="ruleForm.hotelStatus" placeholder="请选择">
                                        <el-option label="正常营业" value="1"></el-option>
                                        <el-option label="不营业" value="2"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-popover
                            ref="popoverSort"
                            placement="bottom"
                            title="提示信息"
                            width="200"
                            trigger="click"
                            content="填写数字，数字越大排序越靠前" style="display: none">
                        </el-popover>

                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>排&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;序:</span>
                                <el-form-item label="膳食安排" prop="hotelSort">
                                    <el-input v-model="ruleForm.hotelSort"  v-popover:popoverSort type="number" placeholder="请输入数字"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-popover
                            ref="popoverSale"
                            placement="bottom"
                            title="提示信息"
                            width="200"
                            trigger="click"
                            content="填写数字，2代表销售了2间屋子" style="display: none">
                        </el-popover>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>销&nbsp;售&nbsp; 量:</span>
                                <el-form-item label="膳食安排" prop="hotelSaleCount">
                                    <el-input type="number" v-model="ruleForm.hotelSaleCount"
                                              placeholder="请输入数字" v-popover:popoverSale></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>所在省份:</span>
                                <el-form-item label="活动区域" prop="activeLocation">

                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>酒店星级:</span>
                                <el-form-item label="活动区域" prop="hotelStar">
                                    <el-select v-model="ruleForm.hotelStar" placeholder="请选择酒店星级">
                                        <el-option label="客栈／公寓" value="1"></el-option>
                                        <el-option label="二星级／经济型" value="2"></el-option>
                                        <el-option label="三星级／舒适型" value="3"></el-option>
                                        <el-option label="四星级／高档型" value="4"></el-option>
                                        <el-option label="五星级／豪华型" value="5"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>

                    </el-row>
                </div>
                <div class="title title1">
                    <i class="iconfont icon-shuxie"></i>
                    <span>基本信息</span>
                </div>
                <div class="input">
                    <el-row>
                        <el-col :span="22">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>酒店电话:</span>
                                <el-form-item label="膳食安排" prop="hotelTelephone">
                                    <el-input v-model="ruleForm.hotelTelephone"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="22">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>酒店特色:</span>
                                <el-form-item label="活动形式" prop="hotelFeatures">
                                    <el-input type="textarea" v-model="ruleForm.hotelFeatures"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="22">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>酒店简介:</span>
                                <el-form-item label="活动形式" prop="hotelIntroduction">
                                    <el-input type="textarea" v-model="ruleForm.hotelIntroduction"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                    </el-row>
                </div>
                <div class="title title1">
                    <i class="iconfont icon-gongju"></i>
                    <span>设备选择</span>
                </div>
                <div class="tab">
                    <el-checkbox :indeterminate="isIndeterminate" class="checkAll" v-model="checkAll"
                                 @change="handleCheckAllChange">全选
                    </el-checkbox>
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="酒店地标" name="first">用户管理</el-tab-pane>
                        <el-tab-pane label="网络设备" name="second">
                            <el-checkbox-group v-model="ruleForm.network">
                                <el-checkbox v-for="city in networkList" :label="city.id" :key="city.id">{{city.name}}
                                </el-checkbox>
                            </el-checkbox-group>
                        </el-tab-pane>
                        <el-tab-pane label="停车场" name="third">
                            <el-checkbox-group v-model="ruleForm.parkingLot">
                                <el-checkbox v-for="parking in parkingLotList" :label="parking.id" :key="parking.id">
                                    {{parking.name}}
                                </el-checkbox>
                            </el-checkbox-group>
                        </el-tab-pane>
                        <el-tab-pane label="设备服务" name="fourth">
                            <el-checkbox-group v-model="ruleForm.hotelFacilities">
                                <el-checkbox v-for="city in facilitiesList" :label="city.id" :key="city.id">{{city.name}}</el-checkbox>
                            </el-checkbox-group>
                        </el-tab-pane>
                    </el-tabs>
                </div>

                <select-images :max="1" :visible="imageVisible" @close="imageVisible = false"
                               @submit="selectImagesSubmit"></select-images>

                <div class="title title1">
                    <i class="iconfont icon-tupian"></i>
                    <span>图片添加</span>
                </div>
                <div class="input">
                    <el-row>
                        <el-col :span="22">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>图片添加:</span>
                                <!--<el-upload-->
                                    <!--action="https://jsonplaceholder.typicode.com/posts/"-->
                                    <!--list-type="picture-card"-->
                                    <!--:on-preview="handlePictureCardPreview"-->
                                    <!--:on-remove="handleRemove">-->
                                    <!--<i class="el-icon-plus"></i>-->
                                <!--</el-upload>-->
                                <div class="el-upload el-upload--text"  @click="imageVisible = true">
                                    <i class="el-icon-plus picture-uploader-icon"></i>
                                </div>
                            </div>
                            <span class="imgSuggest">建议尺寸：640✖️640像素；你可以拖拽图片调整图片顺序;</span>
                        </el-col>
                    </el-row>
                </div>

                <div class="title title1">
                    <i class="iconfont icon-hotel"></i>
                    <span>酒店政策</span>
                </div>
                <div class="input">
                    <el-row>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>入店时间:</span>
                                <el-form-item label="入店时间" prop="checkInTime">
                                    <el-select v-model="ruleForm.checkInTime" placeholder="请选择">
                                        <el-option label="00:00" value="00:00"></el-option>
                                        <el-option label="01:00" value="01:00"></el-option>
                                        <el-option label="02:00" value="02:00"></el-option>
                                        <el-option label="03:00" value="03:00"></el-option>
                                        <el-option label="04:00" value="04:00"></el-option>
                                        <el-option label="05:00" value="05:00"></el-option>
                                        <el-option label="06:00" value="06:00"></el-option>
                                        <el-option label="07:00" value="07:00"></el-option>
                                        <el-option label="08:00" value="08:00"></el-option>
                                        <el-option label="09:00" value="09:00"></el-option>
                                        <el-option label="10:00" value="10:00"></el-option>
                                        <el-option label="11:00" value="11:00"></el-option>
                                        <el-option label="12:00" value="12:00"></el-option>
                                        <el-option label="13:00" value="13:00"></el-option>
                                        <el-option label="14:00" value="14:00"></el-option>
                                        <el-option label="15:00" value="15:00"></el-option>
                                        <el-option label="16:00" value="16:00"></el-option>
                                        <el-option label="17:00" value="17:00"></el-option>
                                        <el-option label="18:00" value="18:00"></el-option>
                                        <el-option label="19:00" value="19:00"></el-option>
                                        <el-option label="20:00" value="20:00"></el-option>
                                        <el-option label="21:00" value="21:00"></el-option>
                                        <el-option label="22:00" value="22:00"></el-option>
                                        <el-option label="23:00" value="23:00"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>离店时间:</span>
                                <el-form-item label="活动区域" prop="departureTime">
                                    <el-select v-model="ruleForm.departureTime" placeholder="请选择">
                                        <el-option label="00:00" value="00:00"></el-option>
                                        <el-option label="01:00" value="01:00"></el-option>
                                        <el-option label="02:00" value="02:00"></el-option>
                                        <el-option label="03:00" value="03:00"></el-option>
                                        <el-option label="04:00" value="04:00"></el-option>
                                        <el-option label="05:00" value="05:00"></el-option>
                                        <el-option label="06:00" value="06:00"></el-option>
                                        <el-option label="07:00" value="07:00"></el-option>
                                        <el-option label="08:00" value="08:00"></el-option>
                                        <el-option label="09:00" value="09:00"></el-option>
                                        <el-option label="10:00" value="10:00"></el-option>
                                        <el-option label="11:00" value="11:00"></el-option>
                                        <el-option label="12:00" value="12:00"></el-option>
                                        <el-option label="13:00" value="13:00"></el-option>
                                        <el-option label="14:00" value="14:00"></el-option>
                                        <el-option label="15:00" value="15:00"></el-option>
                                        <el-option label="16:00" value="16:00"></el-option>
                                        <el-option label="17:00" value="17:00"></el-option>
                                        <el-option label="18:00" value="18:00"></el-option>
                                        <el-option label="19:00" value="19:00"></el-option>
                                        <el-option label="20:00" value="20:00"></el-option>
                                        <el-option label="21:00" value="21:00"></el-option>
                                        <el-option label="22:00" value="22:00"></el-option>
                                        <el-option label="23:00" value="23:00"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>开业时间:</span>
                                <el-form-item label="开业时间" prop="hotelStartBusiness">
                                    <el-form-item label="开业时间" prop="hotelStartBusiness">
                                        <el-input v-model="ruleForm.hotelStartBusiness"
                                                  placeholder="请填写开业时间（如：2014）"></el-input>
                                    </el-form-item>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <span><i>|</i>装修时间:</span>
                                <el-form-item label="装修时间" prop="decorationTime">
                                    <el-input v-model="ruleForm.decorationTime"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>携带宠物:</span>
                                <el-form-item label="携带宠物" prop="pet">
                                    <el-input v-model="ruleForm.pet"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="18">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>取消政策:</span>
                                <el-form-item label="取消政策" prop="abolitionOfPolicy">
                                    <el-input v-model="ruleForm.abolitionOfPolicy"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>入住手续:</span>
                                <el-form-item label="入住手续" prop="checkIn">
                                    <el-input v-model="ruleForm.checkIn"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <div class="grid-content bg-purple-light">
                                <span><i>|</i>膳食安排:</span>
                                <el-form-item label="膳食安排" prop="buffet">
                                    <el-input v-model="ruleForm.buffet"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>

                    </el-row>
                </div>


                <div class="input">
                    <el-row>
                        <el-col :span="24">
                            <el-button type="primary" @click="submitForm" :loading="addLoading">提交</el-button>
                            <el-button>返回</el-button>
                        </el-col>
                    </el-row>
                </div>

            </el-form>
        </div>

    </div>
</template>

<script>
    import {updateHotel, addHotel} from '@/api/hotel'
    import {getFacilities} from '@/api/hotelFacilities'
    import SelectImages from "@/components/Attachment/selectImages";

    export default {
        components: {SelectImages},
        props: {
            ruleForm: {
                type: Object,
                default() {
                    return {
                        network: [],
                        parkingLot: [],
                        hotelFacilities: []
                    }
                }
            }
        },
        data() {
            return {
                imageVisible: false,
                dialogImageUrl: '',
                dialogVisible: false,
                activeName: 'first',
                addLoading: false,
                minTime: {
                    disabledDate: (time) => {
                        return time.getTime() < this.beginTime
                    }
                },
                form: {},
                tableShow: false,
                tableData: [{
                    id: '3579071',
                    name: 'fenxiaoshangceshi001',
                    name1: '分销商测试001',
                    type: '分销商',
                    status: '正常'
                },
                    {
                        id: '3579071',
                        name: 'fenxiaoshangceshi002',
                        name1: '分销商测试002',
                        type: '分销商',
                        status: '正常'
                    },
                    {
                        id: '3579071',
                        name: 'fenxiaoshangceshi003',
                        name1: '分销商测试003',
                        type: '分销商',
                        status: '正常'
                    },
                    {
                        id: '3579071',
                        name: 'fenxiaoshangceshi003',
                        name1: '分销商测试003',
                        type: '分销商',
                        status: '正常'
                    },
                    {
                        id: '3579071',
                        name: 'fenxiaoshangceshi003',
                        name1: '分销商测试003',
                        type: '分销商',
                        status: '正常'
                    },
                    {
                        id: '3579071',
                        name: 'fenxiaoshangceshi003',
                        name1: '分销商测试003',
                        type: '分销商',
                        status: '正常'
                    },
                    {
                        id: '3579071',
                        name: 'fenxiaoshangceshi003',
                        name1: '分销商测试003',
                        type: '分销商',
                        status: '正常'
                    }],
                networkList: [],//网络设施
                parkingLotList: [], //停车场
                facilitiesList: [], //设备服务
                options: [],
                title: "",
                checkAll: false,
                isIndeterminate: true,
                options2: [],
                props: {
                    label: "name",
                    value: "id"
                },
                rules: {
                    hotelName: [
                        {required: true, message: '请填写酒店名称', trigger: 'blur'}
                    ],
                    minimumHotelHousePrice: [
                        {type: 'number', required: true, message: '请填写酒店售卖的最小价格', trigger: 'blur'}
                    ],
                    hotelBrandId: [
                        {type: 'number', required: true, message: '请选择酒店的品牌', trigger: 'change'}
                    ],
//                    hotelSupplierId: [
//                        {required: true, message: '此处不能为空', trigger: 'blur'}
//                    ],
                    hotelLongitude: [
                        {required: true, message: '请填写百度经度', trigger: 'blur'},
                    ],
                    hotelLatitude: [
                        {required: true, message: '请填写百度纬度', trigger: 'blur'},
//                    {type: number, message: '您填写的百度纬度格式错误', trigger: 'blur'}
                    ],
                    hotelAddress: [
                        {required: true, message: '请填写酒店地址', trigger: 'blur'}
                    ],
                    hotelStatus: [
                        {required: true, message: '请选择酒店状态', trigger: 'change'}
                    ],
                    hotelSort: [
                        {required: true, message: '请选择酒店排序顺序', trigger: 'blur'}
                    ],
                    hotelSaleCount: [
                        {required: true, message: '请填写酒店的销量', trigger: 'blur'}
                    ],
                    hotelStar: [
                        {required: true, message: '请选择酒店的星级', trigger: 'change'}
                    ],
                    hotelTelephone: [
                        {required: true, message: '请填写酒店电话', trigger: 'blur'}
                    ],
                    hotelFeatures: [
                        {required: true, message: '请填写酒店的特色', trigger: 'blur'}
                    ],
                    hotelIntroduction: [
                        {required: true, message: '请填写酒店的简介', trigger: 'blur'}
                    ],
                    checkInTime: [
                        {required: true, message: '请填写酒店入店时间', trigger: 'change'}
                    ],
                    departureTime: [
                        {required: true, message: '请填写酒店离店时间', trigger: 'change'}
                    ],
                    hotelStartBusiness: [
                        {required: true, message: '请填写开业时间', trigger: 'blur'},
                    ]
                }
            }
        },
        created() {
            if (this.$route.params.id) {
                this.title = "编辑酒店"
            } else {
                this.title = "添加酒店"
            }
        },
        methods: {
            handleCheckAllChange(val) {
                this.ruleForm.network = val ? this.networkList : []
                this.isIndeterminate = false
            },
            handleCheckedCitiesChange(value) {
                console.log(value)
                let checkedCount = value.length
                this.checkAll = checkedCount === this.networkList.length
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.networkList.length
            },


            //添加图片
            handleRemove(file, fileList) {
                console.log(file, fileList)
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url
                this.dialogVisible = true
            },

            submitForm() {
                console.log(this.ruleForm)
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        this.addLoading = true
                        if (this.ruleForm.hotelId == undefined) {
                            addHotel(this.ruleForm).then(response => {
                                console.log(response.data);
                                this.$message({
                                    message: '添加成功！',
                                    type: 'success'
                                });
                                this.handleCancel();
                            })
                        } else {
                            updateHotel(this.ruleForm.hotelId, this.ruleForm).then(response => {
                                this.$message({
                                    message: '更新成功！',
                                    type: 'success'
                                });
                                this.handleCancel();
                            })
                        }
                    } else {
                        console.log('error submit!!')
                        return false
                    }
                })
            },
            handleCancel(){
                this.$router.push({path: "/hotel"})
            },
            resetForm(formName) {
                this.$refs[formName].resetFields()
            },
            handleClick(tab) {
                console.log(this.networkList.length)
                if (this.activeName == 'first') {
//                    this.$router.push({ path: '/setting/certificate' });
                } else if (this.activeName == 'second') {
                    if (this.networkList.length == 0) {
                        this.getNetworkList()
                    }
                } else if (this.activeName == 'third') {
                    if (this.parkingLotList.length == 0) {
                        this.getParkingLot()
                    }
                } else if (this.activeName == 'fourth') {
                    if (this.facilitiesList.length == 0) {
                        this.getFacilitiesList()
                    }
                }
            },
            //获取酒店网络设施
            getNetworkList() {
                let para = {type: 1}
                getFacilities(para).then(response => {
                    this.networkList = response.data.data
                })
            },
            //获取酒店停车场
            getParkingLot() {
                let para = {type: 2}
                getFacilities(para).then(response => {
                    this.parkingLotList = response.data.data
                })
            },
            getFacilitiesList() {
                let para = {type: 3}
                getFacilities(para).then(response => {
                    this.facilitiesList = response.data.data
                })
            },
            //选择图片
            selectImagesSubmit(images) {
                this.news.page_image = images[0].links
            },
            onSubmit(){

            },
            handleCurrentChange(val) {
                console.log(val)
                this.tableShow = false;
                this.ruleForm.hotelSupplierId = val.name1;
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
                    margin-left: 10px;
                }
            }
            .title1 {
                margin-top: 30px;
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
                    width: 80%;
                }
                .el-textarea {
                    width: 80%;
                }
                .grid-content {
                    margin-left: 20px;
                }
                .el-select {
                    width: 80%;
                }
                .el-cascader {
                    margin: 0;
                    width: 80%;
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
                }
                .imgSuggest {
                    margin-left: 100px;
                    font-size: 12px;
                    color: #666;
                }
                .el-upload{
                    width: 100px;
                    height: 100px;
                    border: 5px dashed #E6E6E6;
                    text-align: center;
                    line-height: 100px;
                    font-size: 24px;
                    color: #E6E6E6;
                }
            }
            .el-tabs {
                margin-left: 40px;
                margin-top: 20px;
            }
            .tab {
                position: relative;
                .checkAll {
                    position: absolute;
                    right: 10px;
                    top: 10px;
                }
            }

        }
        .stayIn {
            color: #666;
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

    .supplierForm {
        overflow: hidden;
        .el-form-item {
            float: left;
            width: 100%;
        }
        .el-input {
            width: 66% !important;
        }
        .el-button--primary {
            background: #5FCAB1;
            border-color: #5FCAB1;
            margin-left: 20px;
        }
    }


</style>

