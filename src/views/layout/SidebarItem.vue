<template>
    <div class='menu-wrapper'>
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <template v-for="(item,index) in routes" v-if="!item.hidden">
                <el-submenu :index="index+''" v-if="!item.leaf">
                    <template slot="title">
                        <span><i class="iconfont icon-iconjia"></i>{{item.name}}</span>
                    </template>
                    <el-menu-item v-for="(child, index) in item.children" :index="child.path" v-if="!child.hidden"
                                  :key="index"><i class="iconfont icon-dian-copy-copy"></i>{{child.name}}
                    </el-menu-item>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'SidebarItem',
        props: {
            routes: {
                type: Array
            }
        }
    }
</script>
<style lang="scss" scoped="">
    .iconfont {
        margin-right: 10px;
        margin-top: -1px;
    }
</style>

