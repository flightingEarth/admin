import { login, logout, getUserInfo } from 'api/login';
import { getToken, setToken, removeToken, setNickname, getNickname, setRoles } from 'utils/auth';

const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    }
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction;
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting;
    },
    SET_STATUS: (state, status) => {
      state.status = status;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    LOGIN_SUCCESS: () => {
      console.log('login success')
    },
    LOGOUT_USER: state => {
      state.user = '';
    }
  },

  actions: {
    // 邮箱登录
    Login({ commit }, userInfo) {
      const email = userInfo.name.trim();
      return new Promise((resolve, reject) => {
        login(email, userInfo.password).then(response => {
          const data = response.data;

          setToken(response.data.access_token);
          commit('SET_TOKEN', data.access_token);
          resolve();
        }).catch(error => {
          reject(error);
        });
      });
    },

    // 获取用户信息
    GetUserInfo({ commit, state }) {
        return new Promise((resolve, reject) => {
            getUserInfo().then(response => {
                if (!response.data) { // 由于mockjs 不支持自定义状态码只能这样hack
                    reject('error')
                }
                const data = response.data
                commit('SET_ROLES', data.role)
                commit('SET_NAME', data.nickname)
                commit('SET_AVATAR', data.avatar)
                commit('SET_STATUS', data.status)
                setNickname(data.nickname)
                setRoles(data.role)
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },

    // 第三方验证登录
    LoginByThirdparty({ commit, state }, code) {
      return new Promise((resolve, reject) => {
        commit('SET_CODE', code);
        loginByThirdparty(state.status, state.email, state.code).then(response => {
          commit('SET_TOKEN', response.data.token);
          setToken(response.data.token);
          resolve();
        }).catch(error => {
          reject(error);
        });
      });
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '');
          // commit('SET_ROLES', []);
          removeToken();
          resolve();
        }).catch(error => {
          reject(error);
        });
      });
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '');
        removeToken();
        resolve();
      });
    },

    // 动态修改权限
    ChangeRole({ commit }, role) {
      return new Promise(resolve => {
        commit('SET_ROLES', [role]);
        commit('SET_TOKEN', role);
        setToken(role);
        resolve();
      })
    }
  }
};

export default user;
