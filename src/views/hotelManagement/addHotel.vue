
<template>
  <div class="main">
    <div class="search">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <div class="title">
          <svg-icon icon-class="added"/>
          <span>添加酒店</span>
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
                  <el-input v-model="ruleForm.minimumHotelHousePrice" type="number" placeholder="请输入数字"></el-input>
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
            <el-col :span="12">
              <div class="grid-content bg-purple-light">
                <span><i>|</i>供&nbsp;应&nbsp; 商:</span>
                <el-form-item label="膳食安排" prop="hotelSupplierId">
                  <el-input v-model="ruleForm.hotelSupplierId"></el-input>
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
            <el-col :span="12">
              <div class="grid-content bg-purple-light">
                <span><i>|</i>排&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;序:</span>
                <el-form-item label="膳食安排" prop="hotelSort">
                  <el-input v-model="ruleForm.hotelSort" type="number" placeholder="请输入数字"></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light">
                <span><i>|</i>销&nbsp;售&nbsp; 量:</span>
                <el-form-item label="膳食安排" prop="hotelSaleCount">
                  <el-input type="number" v-model="ruleForm.hotelSaleCount" placeholder="请输入数字"></el-input>
                </el-form-item>
              </div>
            </el-col>

            <el-col :span="12">
              <div class="grid-content bg-purple">
                <span><i>|</i>所在省份:</span>
                <el-form-item label="活动区域" prop="activeLocation">
                  <el-cascader
                    :options="options2"
                    v-model="ruleForm.address"
                    :props = "props"
                  ></el-cascader>
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
          <svg-icon icon-class="hotel"/>
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
          <svg-icon icon-class="gongju"/>
          <span>设备选择</span>
        </div>
        <div class="tab">
          <el-checkbox :indeterminate="isIndeterminate" class="checkAll" v-model="checkAll"
                       @change="handleCheckAllChange">全选
          </el-checkbox>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="酒店地标" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="网络设备" name="second">
              <el-checkbox-group v-model="ruleForm.network" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in networkList" :label="city" :key="city">{{city}}</el-checkbox>
              </el-checkbox-group>
            </el-tab-pane>
            <el-tab-pane label="停车场" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="设备服务" name="fourth">
              <!--<el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">-->
              <!--<el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>-->
              <!--</el-checkbox-group>-->
            </el-tab-pane>
          </el-tabs>
        </div>

        <div class="title title1">
          <svg-icon icon-class="gongju"/>
          <span>图片添加</span>
        </div>
        <div class="input">
          <el-row>
            <el-col :span="22">
              <div class="grid-content bg-purple-light">
                <span><i>|</i>图片添加:</span>
                <el-upload
                  action="https://jsonplaceholder.typicode.com/posts/"
                  list-type="picture-card"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible" size="tiny">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
              </div>
              <span class="imgSuggest">建议尺寸：640✖️640像素；你可以拖拽图片调整图片顺序;</span>
            </el-col>
          </el-row>
        </div>

        <div class="title title1">
          <svg-icon icon-class="zc"/>
          <span>酒店政策</span>
        </div>
        <div class="input">
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <span><i>|</i>入店时间:</span>
                <el-form-item label="活动区域" prop="checkInTime">
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
                <el-form-item label="膳食安排" prop="hotelStartBusiness">
                  <el-date-picker
                    v-model="ruleForm.hotelStartBusiness"
                    type="date"
                    placeholder="选择日期">
                  </el-date-picker>
                </el-form-item>
              </div>
            </el-col>

            <el-col :span="12">
              <div class="grid-content bg-purple">
                <span><i>|</i>装修时间:</span>
                <el-form-item label="膳食安排" prop="decorationTime">
                  <el-input v-model="ruleForm.decorationTime"></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="18">
              <div class="grid-content bg-purple-light">
                <span><i>|</i>携带宠物:</span>
                <el-form-item label="膳食安排" prop="pet">
                  <el-input v-model="ruleForm.pet"></el-input>
                </el-form-item>
              </div>
            </el-col>

            <el-col :span="18">
              <div class="grid-content bg-purple-light">
                <span><i>|</i>取消政策:</span>
                <el-form-item label="膳食安排" prop="abolitionOfPolicy">
                  <el-input v-model="ruleForm.abolitionOfPolicy"></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="18">
              <div class="grid-content bg-purple-light">
                <span><i>|</i>入住手续:</span>
                <el-form-item label="膳食安排" prop="checkIn">
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
              <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
              <el-button>返回</el-button>
            </el-col>
          </el-row>
        </div>

      </el-form>
    </div>


  </div>
</template>

<script>
  import {addHotel, addressList} from '@/api/article'
  //  const cityOptions1 = ['商务中心', '熨衣设备', 'iPad音乐基座', '浴衣', '叫车服务', '电热水壶']
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        activeName: 'second',
        minTime: {
          disabledDate: (time) => {
            return time.getTime() < this.beginTime
          }
        },
        options: [],
        checkAll: false,
        networkList: ['免费宽带', '收费宽带', '免费Wi-Fi', '部分公共区域免费Wi-Fi', '提供宽带上网', '收费Wi-Fi'],
        isIndeterminate: true,
        options2: [],
        props:{
          label:"name",
          value:"id"
        },
        ruleForm: {
          network: []
        },
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
      this.getList()
    },
    methods: {
      getList() {
        addressList().then(response => {
//          this.options2 = response.data.data;
        })
      },
      handleCheckAllChange(val) {
        this.ruleForm.network = val ? this.networkList : []
        this.isIndeterminate = false
      },
      handleCheckedCitiesChange(value) {
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

      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
//            addHotel(this.ruleForm).then(response => {
//
//              console.log(response);
//            })
            console.log(this.ruleForm);
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
      handleClick(tab) {

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


</style>

