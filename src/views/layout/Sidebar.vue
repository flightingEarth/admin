<template>
    <el-menu mode="vertical" theme="dark" unique-opened :default-active="$route.path" :collapse="isCollapse">
        <div class='menu-wrapper'>
            <sidebar-item :routes='$router.options.routes'></sidebar-item>
        </div>
    </el-menu>
</template>

<script>
  import { mapGetters } from 'vuex';
  import SidebarItem from './SidebarItem';
  export default {
    name: 'sidebar',
    components: { SidebarItem },
    computed: {
      ...mapGetters([
        'sidebar'
      ]),
      isCollapse() {
        return !this.sidebar.opened
      }
    }
  }
</script>
