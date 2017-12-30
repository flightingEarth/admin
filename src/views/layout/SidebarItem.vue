<template>
	<div class='menu-wrapper'>
			<el-menu :default-active="$route.path" class="el-menu-vertical-demo"  theme="dark" unique-opened router>
				<template v-for="(item,index) in routes" v-if="!item.hidden">
					<el-submenu :index="index+''" v-if="!item.leaf">
							<template slot="title">
								<icon-svg v-if='item.icon' :icon-class="item.icon"></icon-svg><span>{{item.name}}</span>
							</template>
						<!--<template slot="title"><i v-if='item.icon' :class="item.icon"></i>{{item.name}}</template>-->
						<el-menu-item :name="name" v-for="(child, index) in item.children" :index="child.path" v-if="!child.hidden" :key="index">{{child.name}}</el-menu-item>
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

