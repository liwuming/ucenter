<template>
	<div class="top-nav-wrap" id="headerBox">
        <div class="tn-header" id="wx233headerwidth">
            <div class="tn-nav">
                <div class="tn-title">
					<router-link to="/" class="tn-tab ui-check-tiku">首页</router-link>
				</div>
                <!--<div class="tn-title" active-class="ui-check">
                    <a href="/" class="tn-tab ui-check-kc">课程</a>
                </div>
				-->
				
                <div class="tn-title">
                    <router-link to="/blog" class="tn-tab ui-check-tiku">博客</router-link>
				</div>
                <div class="tn-title ">
					<router-link to="/block" class="tn-tab ui-check-tiku">专栏</router-link>
				</div>
                <div class="tn-title "><a href="/book/index.html" class="tn-tab ui-check-tiku">书籍</a></div>
                <div class="tn-title "><a href="/school/index.html" class="tn-tab ui-check-tiku">学校</a></div>
                <div class="tn-title "><a href="/soft/index.html" class="tn-tab ui-check-tiku">软件</a></div>
                <div class="tn-title "><a href="/news/index.html" class="tn-tab ui-check-tiku">电影</a></div>
                <div class="tn-title "><a href="/law/index.html" class="tn-tab ui-check-tiku">法律</a></div>
                <div class="tn-title "><a href="/news/index.html" class="tn-tab ui-check-tiku">新闻</a></div>
                <div class="tn-title "><a href="/zhiku/index.html" class="tn-tab ui-check-tiku">知库</a></div>
                <div class="tn-title "><a href="/zhiku/index.html" class="tn-tab ui-check-tiku">摄影</a></div>
				<div class="tn-title"><a href="/module/index.html" class="tn-tab ui-check-tiku">模块</a></div>
				<div class="tn-title "><a href="/wiki/index.html" class="tn-tab ui-check-tiku">文档</a></div>
                <div class="tn-title "><a href="/ask/index.html" class="tn-tab ui-check-tiku">问答</a></div>
                <div class="tn-title "><a href="/wallpaper/index.html" class="tn-tab ui-check-tiku">壁纸</a></div>
                <div class="tn-title "><a href="/magazine/index.html" class="tn-tab ui-check-tiku">杂志</a></div>
                <div class="tn-title "><a href="/baike/index.html" class="tn-tab ui-check-tiku">百科</a></div>
                <div class="tn-title "><a href="/photos/index.html" class="tn-tab ui-check-tiku">相册</a></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'v-header',
  props: {
    msg: String
	
  }
}
</script>