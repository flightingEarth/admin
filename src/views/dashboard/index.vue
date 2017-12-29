<template>
  <div class="dashboard-container">
    <el-cascader
            :options="options2"
            @active-item-change="handleItemChange"
            :props="props"
            @change = "categoryChange"
    ></el-cascader>
  </div>
</template>

<script>
  import { getList, updateNews, destroyNews, getRegion } from 'api/news';

  export default {
    name: 'dashboard',
      data() {
          return {
              options2: [],
              props: {
                  value: 'regionId',
                  children: 'cities',
                  label:'regionName'
              },
              regionCount:1
          };
      },
      mounted() {
          this.getList();
      },
      methods: {
          getList() {
//              this.listLoading = true;
              let para = {parent_id1:1}
              getRegion(para).then(response => {
                  this.options2 = response.data.data;
//                  this.total = response.data.meta.pagination.total;
//                  this.listLoading = false;
              })
          },

          categoryChange(s,v) {
              console.log(s,v)
          },

          handleItemChange(val, ss) {
//              console.log(this.options2[0])
//
//              console.log('active item:', val);
              let i = this.options2.findIndex(function(value, index, arr) {
                  return value.regionId == val[0];
              })

              let p = {parent_id:val[0]}
              getRegion(p).then(response => {
                  this.options2[i].cities = response.data.data;
              })
//                  if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
//                      this.options2[0].cities = [{
//                          label: '南京'
//                      }];
//                  } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
//                      this.options2[1].cities = [{
//                          label: '杭州'
//                      }];
//                  }
//              }, 300);
          }
      }
  }
</script>
