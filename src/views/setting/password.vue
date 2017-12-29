<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="首页公司简介" name="first">
        </el-tab-pane>
        <el-tab-pane label="Banner" name="second">
        </el-tab-pane>
        <el-tab-pane label="关于我们" name="third"></el-tab-pane>
        <el-tab-pane label="重置密码" name="password">
          <el-form :model="user" status-icon :rules="Rules" ref="ruleForm" label-width="100px">
              <el-form-item label="密码" minlength="6" prop="pass">
                  <el-input v-model="user.pass" type="password" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="新密码" prop="newPass">
                  <el-input v-model="user.newPass" type="password" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPass">
                  <el-input v-model="user.checkPass" type="password" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" @click="onSubmit" :loading="loading">提交</el-button>
              </el-form-item>
          </el-form>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
import { updateUser } from 'api/user';

export default {
  data() {
        const validatePass = (rule, value, callback) => {
          if (value.length < 4) {
            callback(new Error('密码不能小于6位'));
          } else {
            callback();
          }
        };
        const validateNewPass = (rule, value, callback) => {
         if (value.length < 6) {
           callback(new Error('新密码不能小于6位'));
         } else {
           if (this.user.checkPass !== '') {
             this.$refs.ruleForm.validateField('checkPass');
           }
           callback();
         }
       };
       const validateCheckPass = (rule, value, callback) => {
         if (value === '') {
           callback(new Error('请再次输入密码'));
         } else if (value !== this.user.newPass) {
           callback(new Error('两次输入密码不一致!'));
         } else {
           callback();
         }
       };
      return {
        activeName: 'password',
        user: {
          pass: '',
          newPass: '',
          checkPass: ''
        },
        loading: false,
        Rules: {
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ],
            newPass: [
              { validator: validateNewPass, trigger: 'blur' }
            ],
            checkPass: [
              { validator: validateCheckPass, trigger: 'blur' }
            ],
        },
      }
  },
  methods:{
    handleClick(tab, event) {
        if (this.activeName == 'first') {
            this.$router.push({ path: '/setting/certificate' });
        } else if(this.activeName == 'second') {
            this.$router.push({ path: '/setting/banner' });
        } else if(this.activeName == 'third') {
            this.$router.push({ path: '/setting/aboutUs' });
        }
    },
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
            this.loading = true
            updateUser(1, this.user).then(response => {
                if (response.data.state) {
                  this.$message({
                      message: '更新成功!',
                      type: 'success'
                  });
                  this.$store.dispatch('FedLogOut').then(() => {
                    location.reload();// 为了重新实例化vue-router对象 避免bug
                  })
                } else {
                  this.$message({
                      message: response.data.message,
                      type: 'error'
                  });
                }

                this.loading = false;
            });
          }
      })
    }
  }
}
</script>
