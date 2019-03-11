<template>
	<div>
		<template>
		  <el-carousel :interval="3000" type="card" height="200px">
		    <el-carousel-item v-for="item in imgList" :key="item.id">
		      	<img class="imges" :src="item.url"/>
		    </el-carousel-item>
		  </el-carousel>
		</template>
		<div>
			<el-button type="info" @click='getData'>信息按钮</el-button>
		</div>
		<div>
			 <template>
			    <el-table
			      :data="tableData"
			      style="width: 100%">
			      <el-table-column
			        prop="name"
			        label="姓名"
			        width="180">
			      </el-table-column>
			      <el-table-column
			        prop="age"
			        label="年龄"
			        width="180">
			      </el-table-column>
			      <el-table-column
			        prop="address"
			        label="地址">
			      </el-table-column>
			    </el-table>
			  </template>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				imgList:[
					{url:require('../assets/image/01.jpg'),id:1},
					{url:require('../assets/image/02.jpg'),id:2},
					{url:require('../assets/image/03.jpg'),id:3}
				],
				tableData: []
			}
		},
		methods: {
			getData: function(){
				this.axios.get('http://localhost:9001/api/getList')
				.then(data => {
					console.log(data)
					this.tableData = data
				})
			}
		},
		beforeCreate(){
		  console.log('beforeCreate');
		  console.log(this.$el);
		  console.log(this.imgList);
		},
		created(){
		  console.log('cerated');
		  console.log(this.$el);
		  console.log(this.imgList);
		},
		beforeMount(){
		  console.log('beforeMound');
		  console.log(this.$el);
		  console.log(this.imgList);
		},
		mounted(){
		  console.log('mounted');
		  console.log(this.$el);
		  console.log(this.imgList);
		},
		beforeUpdate(){
		  console.log('beforeUpdate');
		  console.log(this.tableData);
		},
		updated(){
		  console.log('uodate');
		  console.log(this.tableData);
		},
		beforeDestroy(){
		  console.log('deforedestory');
		  console.log(this.$el);
		  console.log(this.imgList);
		},
		destroyed(){
		  console.log('destroyed');
		  console.log(this.$el);
		  console.log(this.imgList);
		}
	}
</script>

<style>
	.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .imges{
  	width: 100%;
  }
</style>