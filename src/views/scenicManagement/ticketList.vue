
<template>
  <div class="main">
    <div class="search">
      <div class="title">
        <svg-icon icon-class="search"/>
        <span>搜索</span>
      </div>
      <div class="input">
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <span><i>|</i>景区名称:</span>
              <el-input v-model="searchList.scenicName" placeholder="请输入门票编号或名称"></el-input>
            </div>
          </el-col>

          <el-col :span="12">
            <div class="grid-content bg-purple">
              <span><i>|</i>票&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;种:</span>
              <el-select v-model="searchList.ticketType" placeholder="请选择">
                <el-option
                  v-for="item in supplierOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>

          <el-col :span="12">
            <div class="grid-content bg-purple">
              <span><i>|</i>门票搜索:</span>
              <el-input v-model="searchList.ticketName" placeholder="请输入旅游主题"></el-input>
            </div>
          </el-col>

          <el-col :span="12">
            <div class="grid-content bg-purple double">
              <span><i>|</i>有效起始:</span>
              <el-date-picker
                v-model="beginTime"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
              <span class="zhi">至</span>
              <el-date-picker
                v-model="endTime"
                type="date"
                placeholder="选择日期"
                :picker-options="minTime">
              </el-date-picker>
            </div>
          </el-col>

          <el-col :span="24">
            <el-button type="primary">搜索</el-button>
            <el-button>重置条件</el-button>
            <el-button type="primary">导出</el-button>
          </el-col>

        </el-row>

      </div>
    </div>

    <div class="list-title">
      <svg-icon icon-class="list"/>
      <span>列表数据</span>
      <ul>
        <li><a href="javascript:;" @click="addTicket">添加门票</a></li>
      </ul>
    </div>
    <div class="table">
      <el-table
        :data="tableData"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="ticketId"
          label="门票编号"
          align="center"
        >
        </el-table-column>
          <el-table-column
            prop="scenicId"
            label="景区编号"
            align="center"
          >
        </el-table-column>
        <el-table-column
          prop="ticketType"
          label="票种"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="ticketName"
          label="门票名称"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="supplier"
          label="供应商"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="saleNum"
          label="售出数量（张）"
          align="center">
        </el-table-column>
          <el-table-column
            prop="surplusNum"
            label="剩余数量（张）"
            align="center">
          </el-table-column>

        <el-table-column
          prop="price"
          label="价格（元）"
          align="center">
        </el-table-column>
        <el-table-column
          prop="rule"
          label="规则"
          align="center">
        </el-table-column>
        <el-table-column
          prop="benginTime"
          label="有效期开始"
          align="center">
        </el-table-column>
          <el-table-column
            prop="endTime"
            label="有效期结束"
            align="center">
          </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          align="center">
        </el-table-column>
          <el-table-column
            prop="ticketSource"
            label="票种来源"
            align="center">
          </el-table-column>
        <el-table-column
          label="操作"
          align="center">
          <template slot-scope="scope">
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">查看</el-button>
          </template>
        </el-table-column>

      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="searchList.currentPage"
        :page-sizes="pageSizes"
        :page-size="searchList.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="searchList.totalList">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import { fetchList } from '@/api/article'
  export default {
    data() {
      return {
        searchList: {
          scenicName: undefined,
          ticketType: undefined,
          ticketName: undefined,
          currentPage: 1,
          pageSize: 10,
          totalList: 100
        },
        beginTime: "",
        endTime: "",
        pageSizes: [10, 20, 50, 100],
        minTime: {
          disabledDate: (time) => {
            return time.getTime() < this.beginTime
          }
        },
        supplierOptions: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        scenicStar: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        tableData: [{
          ticketId: '28286',
          scenicId: '5395',
          ticketType: '普通票',
          ticketName: '淡季平日票（团队）',
          supplier: 'jq-api-38389 2017葫芦岛百大万美温泉',
          saleNum: '0',
          surplusNum: '9999',
          price: '市：103.00  售：89.00  供：79.00  游币：0个',
          rule: '使用后分润 刷身份证',
          benginTime: '2017-11-13 00:00:00',
          endTime: '2017-11-13 00:00:00',
          status: '审核通过',
          ticketSource: '自动对家-票付通 （九天科技）'
        }]
      }
    },
    methods: {
      getList() {
        this.listLoading = true
        fetchList(this.searchList).then(response => {
          this.tableData = response.data.items
          this.total = response.data.total
          this.listLoading = false
        })
      },
      handleSizeChange(val) {
        this.searchList.pageSize = val
        this.tableData()
      },
      handleCurrentChange(val) {
        this.searchList.currentPage = val
        this.tableData()
      },
      addTicket() {
        this.$router.push({path:"/scenicManagement/addTicket"})
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
        span {
          margin-left: 10px;
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
        .double {
          .el-input {
            width: 32.8%;
          }
          .zhi {
            float: left;
            margin-left: 10px;
          }
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
      padding: 0 40px;
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
