<template>
	<div id="sidebar">
		<div class="ui-logo-box"></div>
		<div class="ui-sidebar-section">
			<a href="javascript:void(0)" id="addMdBtn" class="editor-btn markdown-btn"><span>Markdown</span></a>
			<a href="javascript:void(0)" id="addCkBtn" class="editor-btn ckeditor-btn"><span>富文本编辑器</span></a>
			<a href="javascript:void(0)" @click="showBlockDialog()" class="editor-btn markdown-btn"><span>新增专栏</span></a>
			
			<div class="ui-menu-section">
				<dl>
					<dt>专栏管理</dt>
					<dd id="hubleft-1"><a href="/blog/index.html"><i class="mylessons"></i>文章管理</a></dd>
					<dd id="hubleft-2"><a href="/blog/comments.html"><i class="record"></i>评论管理</a></dd>
					<dd id="hubleft-2"><a href="/block/contents.html"><i class="record"></i>媒体管理</a></dd>
					<dd id="hubleft-16"><a href="/blog/category.html"><i class="zhibo"></i>分类管理</a></dd>
					<dd id="hubleft-16"><a href="/blog/setting.html"><i class="zhibo"></i>博客设置</a></dd>
				</dl>
			</div>
		</div>
	</div>
		
		
	<div class="ui-main-section">
		<div class="ui-title">
		专栏管理122
		</div>
		<div class="ui-datagrip-section">
			<table class="table1">
				<thead>
				<tr>
					<th>专栏名称</th>
					<th class="w250">封面</th>
					<th class="w200">添加时间</th>
					<th class="w80 text-center">浏览量</th>
					<th class="w200">操作</th>
				</tr>
				</thead>
				
				
				<tbody id="datagrip">
					<tr id="block1" v-for="data in data_list">
						<td>{{data.title}}</td>
						<td></td>
						<td class="text-center">2020-12-06 10:58:20</td>
						<td class="text-center">0</td>
						<td class="text-center">
							<!--<router-link :to="`/block/contents?id=${data.id}`"><button type="button" class="ui-btn ui-btn-default">目录</button></router-link>
							-->
<router-link :to="{
		path:'/books/contents',
		query:{
			id:data.id
		}
	}"><button type="button" class="ui-btn ui-btn-default">目录</button></router-link>
							<button type="button" class="ui-btn ml7"><i class="fa fa-edit">编辑</i></button>
							<button type="button" class="ui-btn ml7" block_name="我想成为mysql dba" remark="1">删除</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
    </div>
	<!--
	<v-dialog
		title="新增专栏"
		:width="500"
		v-model:visible="is_show_block_dialog"
		@close="closeBlockDialog">
		
		<template #body>
			
			<div class="ui-flex-row">
			  <label class="ui-item">专栏名称</label>
			  <input class="ui-input ui-origin-url"  v-model="formdata_block.title" placeholder="请输入文章标题11"/>
			</div>
			
			<div class="ui-flex-row">
			  <label class="ui-item">专栏简介</label>
			  
			  <textarea class="ui-textarea" v-model="formdata_block.abstract"></textarea>
			</div>
		</template>
		
		<template #footer>
			<button class="ui-button" type="default">草稿</button>
			<button class="ui-button" type="success" @click="addBlock()">添加</button>
		</template>
  </v-dialog>
  -->
</template>

<script>
import dialog from '@/components/dialog.vue';

export default {
  name: 'index',
  components:{
	'v-dialog':dialog
  },
  data(){
	return {
		
		is_show_block_dialog:false,
		data_list:[],
		formdata_block:{
			block_id : 0,
			title : "",
			abstract : ""
		}
	}
  },
  methods:{
	showBlockDialog(){
		this.is_show_block_dialog = true;
	},
	addBlock(){
		let config = {
        headers: { "Content-Type": "multipart/form-data" },
      };
		this.$http.post(window.save_block,this.formdata_block,config).then((res) => {
			console.log(res);
			if (res.code == 200) {
			  
			} else {
			  console.log("error");
			}
		});
	},
	closeBlockDialog(){
		this.is_show_block_dialog = false;
	}
  },mounted() {
   	this.$http.get( window.get_block_list).then((res) => {
		this.data_list = res.data;
	});
  }
}
</script>