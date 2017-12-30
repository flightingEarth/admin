<template>
	<section class="app-main">
		<transition name="fade" mode="out-in">
			<router-view :key="key"></router-view>
		</transition>
	</section>
</template>

<script>
	export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.app-main{
		min-width: 750px;
		min-height: 500px;
		box-shadow: 0 0 1px 0 rgba(0,0,0,0.2);
		/*display: grid;*/
	}
</style>
