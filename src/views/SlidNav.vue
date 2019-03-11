<template>
	<el-menu default-active="1" class="el-menu-vertical-demo">
	  <el-menu-item index="1" @click='toogle(1)'>
	    <i class="el-icon-menu"></i>
	    <span slot="title">数据</span>
	  </el-menu-item>
	  <el-menu-item index="2" @click='toogle(2)'>
	    <i class="el-icon-menu"></i>
	    <span slot="title">可视化</span>
	  </el-menu-item>
	</el-menu>
</template>

<script>
	export default {
		data(){
			return {
				isCollapse: true
			}
		},
		methods: {
			toogle: function(key) {
				if(key ===1){
					this.$router.push('/main')
				}else{
					this.$router.push('/main/map')
				}
		    }
		}
	}
</script>

<style>
	aside{
		width: auto !important;
	}
	.el-menu{
		height: 600px;
	}
</style>












