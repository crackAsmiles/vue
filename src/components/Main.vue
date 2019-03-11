<template>
	<el-container>
	  	<el-header class='head'>
	  		<head-nav></head-nav>
	  	</el-header>
	  	<el-container>
			  <el-aside class='asid'>
			  	 <slid-nav></slid-nav>
			  </el-aside>
			  <el-main class='main'>
			  		<router-view/>
			  </el-main>
			</el-container>
	  	<el-footer class='foot'>
	  		<foot-nav></foot-nav>
	  	</el-footer>
	</el-container>
</template>

<script>
	import HeadNav from '../views/HeadNav.vue'
	import FootNav from '../views/FootNav.vue'
	import SlidNav from '../views/SlidNav.vue'
	export default {
		components : {
			HeadNav,
			FootNav,
			SlidNav
		}
	}
</script>

<style>
	.head {
		color: #fff;
		background: #DFDFDF;
	}
	.foot {
		background: #DFDFDF;
		color: #FFFFFF;
	}
	.asid{
		color: #666;
	}
	.main{
		color: #333;
	}
</style>