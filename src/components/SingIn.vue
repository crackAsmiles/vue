<template>
	<div class="singbox">
		<el-form label-position='top' :rules="rules" ref='ruleForm' :model="formLabelAlign">
	  	  <el-form-item style='margin-bottom: 0;'>
		    <img class="logo" src="../../../../vue-2/myapp/src/assets/logo.png"/>
		  </el-form-item>
		  <el-form-item label="用户名" prop="name">
		    <el-input v-model="formLabelAlign.name"></el-input>
		  </el-form-item>
		  <el-form-item label="密码" prop="pws">
		    <el-input v-model="formLabelAlign.pws" type='password' maxlength='6'></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button class='submit' type="primary" @click="singIn('ruleForm')">登&nbsp;&nbsp;陆</el-button>
		  </el-form-item>
		</el-form>
	</div>
</template>
<script>
	export default {
	  name: 'singIn',
	  data(){
	  	return {
	  		formLabelAlign:{
	  			name:'',
	  			pws:''
	  		},
	  		rules: {
	  			name:[
	  				{ required: true, message: '请输入用户名', trigger: 'blur' },
	  				{ min: 3, max: 11, message: '用户名在 3 到 11 个字符', trigger: 'blur' }
	  			],
	  			pws: [
	  				{ required: true, message: '请输入密码', trigger: 'blur' },
	  				{  max: 6, message: '密码不能超过6位', trigger: 'blur' }
	  			]
	  		}
	  	}
	  },
	  methods: {
	  	singIn:function(formName){
	  		this.$refs[formName].validate((valid) => {
		          if (valid) {
		          	console.log(this.formLabelAlign)
		          	this.cookies.set('user',{name:this.formLabelAlign.name,pws:this.formLabelAlign.pws})
		          	this.$router.push('/main')
		          } else {
		            return false;
		          }
		    });
	  	}
	  }
	}
</script>

<style scoped>
	.singbox {
		width:380px;
		background:rgba(255,255,255,1);
		box-shadow:0px 0px 12px 0px rgba(0,0,0,0.2);
		border-radius:15px;
		margin: 160px auto 0px auto;
		padding: 10px 20px;
	}
	.logo {
		width: 100px;
		display: block;
		margin: 0 auto;
	}
	.submit{
		width: 100%;
		background: #6EC1FF;
		color: #fff;
		margin-top: 20px;
		height: 50px;
    	font-size: 20px;
	}
</style>