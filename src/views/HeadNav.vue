<template>
		<el-row class='container'>
	  	<el-col :span="12" class='text-lt'>
	  		<img class="logo" src="../assets/image/wine.jpg"/>
	  	</el-col>
	  	<el-col :span="12" class='text-rt'>
	  		<el-button round @click='singOut'>退出登录</el-button>
	  	</el-col>
		</el-row>
</template>
<script>
	export default {
		name:'HeadNav',
		data(){
			return {
				
			}
		},
		methods: {
			singOut: function(){
					this.$confirm('您确定要退出登陆吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '退出成功！'
          });
        }).catch(() => {
          return;
        });
			}
		}
		
	}
</script>
<style type="text/css" scoped="scoped">
		.container{
				height: 55px;
				overflow: hidden;
				line-height: 55px;
		}
		.logo {
			height: 55px;
			float: left;
			margin-left: 20px;
		}
		.text-lt{
			text-align: left;
		}
		.text-rt{
			text-align: right;
		}
		
</style>
