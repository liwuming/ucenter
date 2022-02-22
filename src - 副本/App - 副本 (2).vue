<template>
  <div id="root">
    <!--<div
      id="mainSection"
      class="layout__panel flex flex--column"
      style="width: 100vw; height: 100vh"
    >
    -->

      <div class="ui-menu-section">
        <nav class="navigation-bar navigation-bar--editor">
          <div
            class="navigation-bar__inner navigation-bar__inner--edit-pagedownButtons"
          >
            <!--<div id="folder_btn" class="navigation-bar-button-box" style="margin-left:0;padding:0;"><button style="margin-left:0;" class="navigation-bar-button button btn-tooltip" data-toggle="tooltip" data-placement="bottom" title="文档及分类"><i class="icon icon-folder"></i></button></div>
				-->
            <div class="navigation-bar-button-box">
              <button @click="bold()" class="navigation-bar-button button" title="加粗">
                <i class="icon icon-bold"></i>
                <span>加粗</span>
              </button>
            </div>

            <div class="navigation-bar-button-box">
              <button @click="italic()" title="斜体"
                class="navigation-bar-button button clearfix"
              >
                <i class="icon icon-italic"></i>
                <span>斜体</span>
              </button>
            </div>

            <div class="navigation-bar-button-box">
              <button @click="strikethrough()" title="删除线"
                class="navigation-bar-button button"
              >
                <i class="icon icon-strikethrough"></i>
                <span>删除线</span>
              </button>
            </div>


			<!--
            <div class="navigation-bar-button-box">
              <button @clcik="underline()" class="navigation-bar-button button"
                title="加粗"
              >
                <i class="icon icon-underline"></i>
                <span>下划线</span>
              </button>
            </div>
			-->
			
            <div class="navigation_bar_split_line"></div>

            <!--
                                <div id="headline_btn" class="navigation-bar-button-box">
									<button data-toggle="tooltip" data-placement="bottom" title="标题" class="navigation-bar-button button clearfix">
										<i class="icon icon-headline" style="margin-top:1px;font-size:19px;"></i>
										<span>删除线</span>
									</button>
								</div>
								--->

            <div class="navigation-bar-button-box">
              <button @click="toggleHeading(1)" title="标题1"
                class="navigation-bar-button button"
              >
                <i class="icon icon-h1"></i>
                <span>标题1</span>
              </button>
            </div>

            <div class="navigation-bar-button-box">
              <button @click="toggleHeading(2)" title="标题2"
                class="navigation-bar-button button"
              >
                <i class="icon icon-h2"></i>
                <span>标题2</span>
              </button>
            </div>

            <div class="navigation-bar-button-box">
              <button @click="toggleHeading(3)" title="标题3"
                class="navigation-bar-button button"
              >
                <i class="icon icon-h3"></i>
                <span>标题3</span>
              </button>
            </div>

            <div class="navigation-bar-button-box">
              <button @click="toggleHeading(4)" title="标题4"
                class="navigation-bar-button button"
              >
                <i class="icon icon-h4"></i>
                <span>标题4</span>
              </button>
            </div>

            <div class="navigation_bar_split_line"></div>

            <div  class="navigation-bar-button-box">
              <button @click="toggleLine('ulist')" title="无序列表"
                class="navigation-bar-button button"
              >
                <i class="icon icon-olist"></i>
                <span>无序</span>
              </button>
            </div>

            <div  class="navigation-bar-button-box">
              <button @click="toggleLine('olist')" title="有序列表"
                class="navigation-bar-button button clearfix"
              >
                <i class="icon icon-ulist"></i>
                <span>有序</span>
              </button>
            </div>

            <div  class="navigation-bar-button-box">
              <button @click="toggleLine('tlist')" title="待办事项"
                class="navigation-bar-button button clearfix"
              >
                <i class="icon icon-task-list"></i>
                <span>待办</span>
              </button>
            </div>

            <div class="navigation-bar-button-box">
              <button @click="blockquote()" title="引用块"
                class="navigation-bar-button button clearfix"
              >
                <i class="icon icon-blockquote"></i>
                <span>引用块</span>
              </button>
            </div>

            <div ref="insert_code" @mouseenter="mouseover" @mouseleave="mouseout"  class="navigation-bar-code-button">
              <button title="插入代码" 
                class="navigation-bar-button button clearfix"
              >
                <i class="icon icon-code"></i>
                <span>代码块</span>
              </button>

              <div
                class="code-selector-box-content"
				v-show="show_language_section"
			  >
                <div class="code-selector-box">
                  <ul class="code-selector">
                    <li @click="blockcode('css')">CSS</li>
                    <li @click="blockcode('javascript')">JavaScript</li>
                    <li @click="blockcode('java')">Java</li>
                    <li @click="blockcode('c')">C</li>
                    <li @click="blockcode('cpp')">C++</li>
                    <li @click="blockcode('python')">Python</li>
                    <li @click="blockcode('php')">PHP</li>
                    <li @click="blockcode('go')">Go</li>
                    <li @click="blockcode('c#')">C#</li>
                    <li @click="blockcode('sql')">SQL</li>
                    <li @click="blockcode('docker')">Docker</li>
                    <li @click="blockcode('yaml')">YAML</li>
                    <li @click="blockcode('markdown')">Markdown</li>
                    <li @click="blockcode('objective-c')">Objective-C</li>
                    <li @click="blockcode('bash')">Bash</li>
                    <li @click="blockcode('ruby')">Ruby</li>
                    <li @click="blockcode('perl')">Perl</li>
                    <li @click="blockcode('swift')">Swift</li>
                    <li @click="blockcode('vb.net')">VB.Net</li>
                    <li @click="blockcode('shell')">Shell</li>
                    <li @click="blockcode('lua')">Lua</li>
                    <li @click="blockcode('typescript')">TypeScript</li>
                    <li @click="blockcode('xml')">XML</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="navigation_bar_split_line"></div>

            <div class="navigation-bar-button-box">
              <button @click="chooseImg()" title="上传图片"
                class="navigation-bar-button button clearfix"
              >
                <i class="icon icon-image"></i>
                <span>图片</span>
              </button>
            </div>

            <div class="navigation-bar-button-box">
              <button @click="drawTable()" title="插入表格"
                class="navigation-bar-button button clearfix"
              >
                <i class="icon icon-table"></i>
                <span>表格</span>
              </button>
            </div>

            <div class="navigation-bar-button-box">
              <button @click="dialogLink()" 
                title="超链接"
                class="navigation-bar-button button clearfix"
              >
                <i class="icon icon-link"></i>
                <span>超链接</span>
              </button>
            </div>

            <div class="navigation_bar_split_line"></div>

            <div class="navigation-bar-button-box">
              <button @click="chooseMd"
                title="导入文件"
                class="navigation-bar-button button clearfix"
              >
                <i class="icon icon-import"></i>
                <span>导入</span>
              </button>
            </div>

            <div class="navigation-bar-button-box">
              <button @click="exportMd"
                title="导出文件"
                class="navigation-bar-button button clearfix"
              >
                <i class="icon icon-export"></i>
                <span>导出</span>
              </button>
            </div>

            <div  class="navigation-bar-button-box">
              <button @click="()=>{history_modal_show=true}" title="历史版本"
                class="navigation-bar-button button clearfix"
              >
                <i class="icon icon-history"></i>
                <span>历史</span>
              </button>
            </div>

            <div @click="help()" class="navigation-bar-button-box">
              <button title="帮助"
                class="navigation-bar-button button clearfix"
              >
                <i class="icon icon-help"></i>
                <span>帮助</span>
              </button>
            </div>

            <div @click="undo()" class="navigation-bar-button-box">
              <button title="撤销"
                class="navigation-bar-button button clearfix"
              >
                <i class="icon icon-undo"></i>
                <span>撤销</span>
              </button>
            </div>

            <div @click="redo()" class="navigation-bar-button-box">
              <button title="重做"
                class="navigation-bar-button button clearfix"
              >
                <i class="icon icon-redo"></i>
                <span>重做</span>
              </button>
            </div>

            <div @click="show_drawer = true" class="navigation-bar-button-box">
              <button title="保存"
                class="navigation-bar-button button clearfix"
              >
                <i class="icon icon-save"></i>
                <span>保存</span>
              </button>
            </div>
          </div>
          <!--
							<div class="navigation-bar__inner navigation-bar__inner--left navigation-bar__inner--button">
                                <button id="folder_btn" tour-step-anchor="explorer" class="navigation-bar-button navigation-bar-button--explorer-toggler button" title="Toggle explorer" aria-label="Toggle explorer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M10,4H4C2.89,4 2,4.89 2,6V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"></path></svg></button></div>
								<div class="navigation-bar__inner navigation-bar__inner--right navigation-bar__inner--button"><button tour-step-anchor="menu" class="navigation-bar-button navigation-bar-button--stackedit button" title="Toggle side bar" aria-label="Toggle side bar"><div class="icon-provider icon-provider--stackedit"></div></button></div>
                            <div class="navigation-bar__inner navigation-bar__inner--right navigation-bar__inner--title flex flex--row">
                                <div class="navigation-bar__spinner">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M20,4H14V10L16.24,7.76C17.32,8.85 18,10.34 18,12C18,13 17.75,13.94 17.32,14.77L18.78,16.23C19.55,15 20,13.56 20,12C20,9.79 19.09,7.8 17.64,6.36L20,4M2.86,5.41L5.22,7.77C4.45,9 4,10.44 4,12C4,14.21 4.91,16.2 6.36,17.64L4,20H10V14L7.76,16.24C6.68,15.15 6,13.66 6,12C6,11 6.25,10.06 6.68,9.23L14.76,17.31C14.5,17.44 14.26,17.56 14,17.65V19.74C14.79,19.53 15.54,19.2 16.22,18.78L18.58,21.14L19.85,19.87L4.14,4.14L2.86,5.41M10,6.35V4.26C9.2,4.47 8.45,4.8 7.77,5.22L9.23,6.68C9.5,6.56 9.73,6.44 10,6.35Z"></path></svg></div>
                                <div class="navigation-bar__title navigation-bar__title--fake text-input">11</div>
                                <div class="navigation-bar__title navigation-bar__title--text text-input" style="width: 50.3667px;">11</div> <input class="navigation-bar__title navigation-bar__title--input text-input" style="width: 50.3667px;">
                                <div class="flex flex--row"> <button disabled="disabled" class="navigation-bar-button navigation-bar-button--sync button" title="Synchronize now" aria-label="Synchronize now"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M12,18C8.69,18 6,15.31 6,12C6,11 6.25,10.03 6.7,9.2L5.24,7.74C4.46,8.97 4,10.43 4,12C4,16.42 7.58,20 12,20V23L16,19L12,15M12,4V1L8,5L12,9V6C15.31,6 18,8.69 18,12C18,13 17.75,13.97 17.3,14.8L18.76,16.26C19.54,15.03 20,13.57 20,12C20,7.58 16.42,4 12,4Z"></path></svg></button>                                    <button disabled="disabled" class="navigation-bar-button navigation-bar-button--publish button" title="Publish now" aria-label="Publish now"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M 8.99939,15.998L 8.99939,9.99805L 4.99939,9.99805L 11.9994,2.99805L 18.9994,9.99805L 14.9994,9.99805L 14.9994,15.998L 8.99939,15.998 Z M 4.99937,19.9981L 4.99937,17.9981L 18.9994,17.9981L 18.9994,19.9981L 4.99937,19.9981 Z "></path></svg></button></div>
                                
                            </div>
                            <div class="navigation-bar__inner navigation-bar__inner--edit-pagedownButtons"><button disabled="disabled" class="navigation-bar-button button" title="Undo" aria-label="Undo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"></path></svg></button>                                <button disabled="disabled" class="navigation-bar-button button" title="Redo" aria-label="Redo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"></path></svg></button>
                                <div>
                                    <div class="navigation-bar__spacer"></div>
                                </div>
                                <div><button class="navigation-bar-button button" title="Bold – Ctrl+Shift+B" aria-label="Bold – Ctrl+Shift+B"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M13.35,17.401l-4.201,0l0,-3.601l4.201,0c0.997,0 1.801,0.805 1.801,1.801c0,0.996 -0.804,1.8 -1.801,1.8m-4.201,-10.802l3.601,0c0.996,0 1.801,0.804 1.801,1.8c0,0.996 -0.805,1.801 -1.801,1.801l-3.601,0m6.722,1.548c1.164,-0.816 1.98,-2.149 1.98,-3.349c0,-2.712 -2.1,-4.801 -4.801,-4.801l-7.502,0l0,16.804l8.45,0c2.521,0 4.454,-2.04 4.454,-4.549c0,-1.825 -1.033,-3.385 -2.581,-4.105Z" style="fill-rule: nonzero;"></path></svg></button></div>
                                <div><button class="navigation-bar-button button" title="Italic – Ctrl+Shift+I" aria-label="Italic – Ctrl+Shift+I"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M8.617,3.658l0,3.575l2.633,0l-2.075,9.534l-3.325,0l0,3.575l9.533,0l0,-3.575l-2.633,0l2.075,-9.534l3.325,0l0,-3.575l-9.533,0Z" style="fill-rule: nonzero;"></path></svg></button></div>
                                <div><button class="navigation-bar-button button" title="Heading – Ctrl+Shift+H" aria-label="Heading – Ctrl+Shift+H"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M2.007,12.526l3.156,0l0,7.363l3.155,0l0,-7.363l3.156,0l0,-3.156l-9.467,0m6.311,-5.259l0,3.155l5.26,0l0,12.623l3.156,0l0,-12.623l5.259,0l0,-3.155l-13.675,0Z" style="fill-rule: nonzero;"></path></svg></button></div>
                                <div><button class="navigation-bar-button button" title="Strikethrough – Ctrl+Shift+S" aria-label="Strikethrough – Ctrl+Shift+S"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M20.874,12.059l0,1.729l-3.541,0c0.806,1.851 0.766,6.918 -5.026,6.918c-6.721,0.043 -6.463,-5.621 -6.463,-5.621l3.203,0.044c0.024,2.914 2.55,2.914 3.05,2.879c0.516,-0.043 2.444,-0.034 2.598,-2.058c0.064,-0.942 -0.823,-1.66 -1.791,-2.162l-9.778,0l0,-1.729l17.748,0m-2.896,-3.554l-3.211,-0.026c0,0 0.137,-2.395 -2.646,-2.404c-2.783,-0.017 -2.541,1.902 -2.541,2.144c0.032,0.243 0.274,1.436 2.42,2.007l-5.074,0c0,0 -2.816,-5.82 4.057,-6.814c7.027,-1.038 7.011,5.11 6.995,5.093Z" style="fill-rule: nonzero;"></path></svg></button></div>
                                <div>
                                    <div class="navigation-bar__spacer"></div>
                                </div>
                                <div><button class="navigation-bar-button button" title="Unordered list – Ctrl+Shift+U" aria-label="Unordered list – Ctrl+Shift+U"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M7.043,4.695l14.61,0l0,2.087l-14.61,0l0,-2.087m0,8.349l0,-2.088l14.61,0l0,2.088l-14.61,0m-3.131,-8.871c0.866,0 1.566,0.699 1.566,1.565c0,0.867 -0.7,1.566 -1.566,1.566c-0.866,0 -1.565,-0.699 -1.565,-1.566c0,-0.866 0.699,-1.565 1.565,-1.565m0,6.262c0.866,0 1.566,0.699 1.566,1.565c0,0.866 -0.7,1.565 -1.566,1.565c-0.866,0 -1.565,-0.699 -1.565,-1.565c0,-0.866 0.699,-1.565 1.565,-1.565m3.131,8.87l0,-2.087l14.61,0l0,2.087l-14.61,0m-3.131,-2.609c0.866,0 1.566,0.699 1.566,1.566c0,0.866 -0.7,1.565 -1.566,1.565c-0.866,0 -1.565,-0.699 -1.565,-1.565c0,-0.867 0.699,-1.566 1.565,-1.566Z" style="fill-rule: nonzero;"></path></svg></button></div>
                                <div><button class="navigation-bar-button button" title="Ordered list – Ctrl+Shift+O" aria-label="Ordered list – Ctrl+Shift+O"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M7.235,13.059l14.825,0l0,-2.118l-14.825,0m0,8.471l14.825,0l0,-2.117l-14.825,0m0,-10.59l14.825,0l0,-2.117l-14.825,0m-5.295,6.353l1.906,0l-1.906,2.224l0,0.953l3.177,0l0,-1.059l-1.906,0l1.906,-2.224l0,-0.953l-3.177,0m1.059,-2.118l1.059,0l0,-4.235l-2.118,0l0,1.059l1.059,0m-1.059,12.707l2.118,0l0,0.529l-1.059,0l0,1.059l1.059,0l0,0.529l-2.118,0l0,1.059l3.177,0l0,-4.235l-3.177,0l0,1.059Z" style="fill-rule: nonzero;"></path></svg></button></div>
                                <div><button class="navigation-bar-button button" title="Check list – Ctrl+Shift+C" aria-label="Check list – Ctrl+Shift+C"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z"></path></svg></button></div>
                                <div>
                                    <div class="navigation-bar__spacer"></div>
                                </div>
                                <div><button class="navigation-bar-button button" title="Blockquote – Ctrl+Shift+Q" aria-label="Blockquote – Ctrl+Shift+Q"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M14.446,18.235l2.92,0l1.946,-4.988l0,-7.482l-5.839,0l0,7.482l2.92,0m-10.732,4.988l2.919,0l1.947,-4.988l0,-7.482l-5.839,0l0,7.482l2.919,0l-1.946,4.988Z" style="fill-rule: nonzero;"></path></svg></button></div>
                                <div><button class="navigation-bar-button button" title="Code – Ctrl+Shift+K" aria-label="Code – Ctrl+Shift+K"><svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 20 20" class="icon"><path d="M 14.6,16.6L 19.2,12L 14.6,7.4L 16,6L 22,12L 16,18L 14.6,16.6 Z M 9.4,16.6L 4.8,12L 9.4,7.4L 8,6L 2,12L 8,18L 9.4,16.6 Z "></path></svg></button></div>
                                <div><button class="navigation-bar-button button" title="Table – Ctrl+Shift+T" aria-label="Table – Ctrl+Shift+T"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M 5,4L 19,4C 20.1046,4 21,4.89543 21,6L 21,18C 21,19.1046 20.1046,20 19,20L 5,20C 3.89543,20 3,19.1046 3,18L 3,6C 3,4.89543 3.89543,4 5,4 Z M 5,8L 5,12L 11,12L 11,8L 5,8 Z M 13,8L 13,12L 19,12L 19,8L 13,8 Z M 5,14L 5,18L 11,18L 11,14L 5,14 Z M 13,14L 13,18L 19,18L 19,14L 13,14 Z "></path></svg></button></div>
                                <div><button class="navigation-bar-button button" title="Link – Ctrl+Shift+L" aria-label="Link – Ctrl+Shift+L"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M 10.5858,13.4142C 10.9763,13.8047 10.9763,14.4379 10.5858,14.8284C 10.1952,15.2189 9.56207,15.2189 9.17154,14.8284C 7.21892,12.8758 7.21892,9.70995 9.17154,7.75733L 9.17157,7.75736L 12.707,4.2219C 14.6596,2.26928 17.8255,2.26929 19.7781,4.2219C 21.7307,6.17452 21.7307,9.34034 19.7781,11.293L 18.2925,12.7785C 18.3008,11.9583 18.1659,11.1368 17.8876,10.355L 18.3639,9.87865C 19.5355,8.70708 19.5355,6.80759 18.3639,5.63602C 17.1923,4.46445 15.2929,4.46445 14.1213,5.63602L 10.5858,9.17155C 9.41419,10.3431 9.41419,12.2426 10.5858,13.4142 Z M 13.4142,9.17155C 13.8047,8.78103 14.4379,8.78103 14.8284,9.17155C 16.781,11.1242 16.781,14.29 14.8284,16.2426L 14.8284,16.2426L 11.2929,19.7782C 9.34026,21.7308 6.17444,21.7308 4.22182,19.7782C 2.26921,17.8255 2.2692,14.6597 4.22182,12.7071L 5.70744,11.2215C 5.69913,12.0417 5.8341,12.8631 6.11234,13.645L 5.63601,14.1213C 4.46444,15.2929 4.46444,17.1924 5.63601,18.3639C 6.80758,19.5355 8.70708,19.5355 9.87865,18.3639L 13.4142,14.8284C 14.5858,13.6568 14.5858,11.7573 13.4142,10.5858C 13.0237,10.1952 13.0237,9.56207 13.4142,9.17155 Z "></path></svg></button></div>
                                <div><button class="navigation-bar-button button" title="Image – Ctrl+Shift+G" aria-label="Image – Ctrl+Shift+G"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M 12.9994,8.99807L 18.4994,8.99807L 12.9994,3.49807L 12.9994,8.99807 Z M 5.99938,1.99809L 13.9994,1.99809L 19.9994,7.99808L 19.9994,19.9981C 19.9994,21.1021 19.1034,21.9981 17.9994,21.9981L 5.98937,21.9981C 4.88537,21.9981 3.99939,21.1021 3.99939,19.9981L 4.0094,3.99808C 4.0094,2.89407 4.89437,1.99809 5.99938,1.99809 Z M 6,20L 15,20L 18,20L 18,12L 14,16L 12,14L 6,20 Z M 8,9C 6.89543,9 6,9.89543 6,11C 6,12.1046 6.89543,13 8,13C 9.10457,13 10,12.1046 10,11C 10,9.89543 9.10457,9 8,9 Z "></path></svg></button></div>
                            </div>
							-->
        </nav>
      </div>

      <div class="ui-body-section">
        <div id="markdown_section" class="layout__panel layout__panel--editor">
          <div class="editor">
            <textarea
              ref="cmeditor"
              id="cmeditor"
              autocomplete="off"
            ></textarea>
          </div>
        </div>

        <div
          id="toolbar_section"
          class="layout__panel layout__panel--button-bar"
          style="width: 26px"
        >
          <div class="button-bar">
            <div class="button-bar__inner button-bar__inner--top">
              <button
                class="button-bar__button button-bar__button--navigation-bar-toggler button button-bar__button--on"
                title="Toggle navigation bar"
                aria-label="Toggle navigation bar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="icon"
                >
                  <path
                    d="M19,8.977l-14,0l0,10l14,0m0,2l-14,0c-1.104,0 -2,-0.896 -2,-2l0,-10c0,-1.105 0.896,-2 2,-2l14,0c1.105,0 2,0.895 2,2l0,10c0,1.104 -0.895,2 -2,2Z"
                  ></path>
                  <rect x="3" y="3.023" width="18" height="2"></rect>
                </svg>
              </button>

              <button
                tour-step-anchor="editor"
                class="button-bar__button button-bar__button--side-preview-toggler button button-bar__button--on"
                title="Toggle side preview"
                aria-label="Toggle side preview"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="icon"
                >
                  <path
                    d="M11,20.977l-6,0c-1.104,0 -2,-0.896 -2,-2l0,-14c0,-1.105 0.896,-2 2,-2l14,0c1.105,0 2,0.895 2,2l0,14c0,1.104 -0.895,2 -2,2l-6,0l0,0.023l-2,0l0,-0.023Zm0,-2l0,-14l-6,0l0,14l6,0Zm8,-14l-6,0l0,14l6,0l0,-14Z"
                  ></path>
                </svg>
              </button>

              <button
                id="preview_btn"
                class="button-bar__button button-bar__button--editor-toggler button"
                title="Reader mode"
                aria-label="Reader mode"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="icon"
                >
                  <path
                    d="M 11.9994,8.99813C 10.3424,8.99813 8.99941,10.3411 8.99941,11.9981C 8.99941,13.6551 10.3424,14.9981 11.9994,14.9981C 13.6564,14.9981 14.9994,13.6551 14.9994,11.9981C 14.9994,10.3411 13.6564,8.99813 11.9994,8.99813 Z M 11.9994,16.9981C 9.23841,16.9981 6.99941,14.7591 6.99941,11.9981C 6.99941,9.23714 9.23841,6.99813 11.9994,6.99813C 14.7604,6.99813 16.9994,9.23714 16.9994,11.9981C 16.9994,14.7591 14.7604,16.9981 11.9994,16.9981 Z M 11.9994,4.49813C 6.99741,4.49813 2.72741,7.60915 0.99941,11.9981C 2.72741,16.3871 6.99741,19.4981 11.9994,19.4981C 17.0024,19.4981 21.2714,16.3871 22.9994,11.9981C 21.2714,7.60915 17.0024,4.49813 11.9994,4.49813 Z "
                  ></path>
                </svg>
              </button>
            </div>

            <div class="button-bar__inner button-bar__inner--bottom">
              <button
                class="button-bar__button button-bar__button--focus-mode-toggler button button-bar__button--on"
                title="Toggle focus mode"
                aria-label="Toggle focus mode"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="icon"
                >
                  <path
                    d="M 11.0013,2.0025L 11.0013,4.0725C 7.3825,4.53125 4.53125,7.3825 4.0725,11.0012L 2.0025,11.0012L 2.0025,12.9975L 4.0725,12.9975C 4.53125,16.6213 7.3825,19.4675 11.0013,19.9262L 11.0013,22.0025L 12.9975,22.0025L 12.9975,19.9313C 16.6212,19.4675 19.4675,16.6213 19.9263,12.9975L 22.0025,12.9975L 22.0025,11.0012L 19.9312,11.0012C 19.4675,7.3825 16.6212,4.53125 12.9975,4.0725L 12.9975,2.0025M 11.0013,6.08375L 11.0013,7.9975L 12.9975,7.9975L 12.9975,6.08875C 15.5175,6.51375 17.485,8.48625 17.915,11.0012L 16.0012,11.0012L 16.0012,12.9975L 17.91,12.9975C 17.485,15.5175 15.5125,17.485 12.9975,17.915L 12.9975,16.0012L 11.0013,16.0012L 11.0013,17.91C 8.48625,17.485 6.51375,15.5125 6.08375,12.9975L 7.9975,12.9975L 7.9975,11.0012L 6.08875,11.0012C 6.51375,8.48625 8.48625,6.51375 11.0013,6.08375 Z M 12.0025,11.0012C 11.445,11.0012 11.0013,11.445 11.0013,12.0025C 11.0013,12.5538 11.445,12.9975 12.0025,12.9975C 12.5537,12.9975 12.9975,12.5538 12.9975,12.0025C 12.9975,11.445 12.5537,11.0012 12.0025,11.0012 Z "
                  ></path>
                </svg>
              </button>
              <button
                class="button-bar__button button-bar__button--scroll-sync-toggler button button-bar__button--on"
                title="Toggle scroll sync"
                aria-label="Toggle scroll sync"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="icon"
                >
                  <path
                    d="M9,18l3,0l-4,4l-4,-4l3,0l0,-3l2,0l0,3Zm8,0l3,0l-4,4l-4,-4l3,0l0,-3l2,0l0,3Zm0.055,-5l-10.11,0l0,-2l10.11,0l0,2Zm-8.055,-4l-2,0l0,-3l-3,0l4,-4l4,4l4,-4l4,4l-3,0l0,3l-2,0l0,-3l-6,0l0,3Z"
                  ></path>
                </svg>
              </button>
              <button
                class="button-bar__button button-bar__button--status-bar-toggler button button-bar__button--on"
                title="Toggle status bar"
                aria-label="Toggle status bar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="icon"
                >
                  <path
                    d="M19,15.023l-14,0l0,-10l14,0m0,-2l-14,0c-1.104,0 -2,0.896 -2,2l0,10c0,1.105 0.896,2 2,2l14,0c1.105,0 2,-0.895 2,-2l0,-10c0,-1.104 -0.895,-2 -2,-2Z"
                  ></path>
                  <rect x="3" y="18.977" width="18" height="2"></rect>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div id="preview_section" class="layout__panel layout__panel--preview">
          <div
            ref="preview"
            id="preview"
            class="preview"
            v-html="preview"
          ></div>
          <!--
							<div class="preview__corner"><button class="preview__button button" title="Edit file" aria-label="Edit file"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M 16.8363,2.73375C 16.45,2.73375 16.0688,2.88125 15.7712,3.17375L 13.6525,5.2925L 18.955,10.5962L 21.0737,8.47625C 21.665,7.89 21.665,6.94375 21.0737,6.3575L 17.895,3.17375C 17.6025,2.88125 17.2163,2.73375 16.8363,2.73375 Z M 12.9437,6.00125L 4.84375,14.1062L 7.4025,14.39L 7.57875,16.675L 9.85875,16.85L 10.1462,19.4088L 18.2475,11.3038M 4.2475,15.0437L 2.515,21.7337L 9.19875,19.9412L 8.955,17.7838L 6.645,17.6075L 6.465,15.2925"></path></svg></button></div>-->
        </div>
      </div>

      <div class="ui-toolbar-section">
        <div class="stat-panel panel no-overflow">
          <div class="stat-panel__block stat-panel__block--left">
            <span class="stat-panel__block-name">Markdown</span>
            <span><span class="stat-panel__value">4</span> 字数</span>
            <span><span class="stat-panel__value">4</span> 行数</span>
            <span class="stat-panel__value">当前行 1, 当前列 0</span>
          </div>

          <div class="stat-panel__block stat-panel__block--right">
            <span class="stat-panel__block-name">HTML</span>
            <span><span class="stat-panel__value">3</span> 字数</span>
            <span><span class="stat-panel__value">1</span> 段落</span>
          </div>
        </div>
      </div>
    <!--</div>
    -->




  <!--历史版本信息-->
	<Modal v-model="history_modal_show" fullscreen title="历史版本">
      <div class="flex">
          <Timeline>
            <TimelineItem color="green">发布1.0版本</TimelineItem>
            <TimelineItem color="green">发布2.0版本</TimelineItem>
            <TimelineItem color="red">严重故障</TimelineItem>
            <TimelineItem color="blue">发布3.0版本</TimelineItem>
        </Timeline>



          <div style="border-left:1px solid #ddd;width:500px;height:200px;">
            11
          </div>
      </div>
  </Modal>




	<Drawer
      title="使用说明"
      v-model="show_help"
      width="650"
      :mask-closable="false"
      :styles="drawerStyles"
    >
      <Form :model="formData">
        <FormItem label-position="center">
          <RadioGroup v-model="formData.read_auth" type="button">
            <Radio label="1">基本样式</Radio>
            <Radio label="2">标题目录</Radio>
            <Radio label="3">目录目录</Radio>
            <Radio label="4">特色功能</Radio>
          </RadioGroup>
        </FormItem>
      </Form>
      <div class="drawer-footer">
        <Button style="margin-right: 8px" @click="show_drawer = false"
          >取消</Button
        >
        <Button type="primary" @click="save">发布</Button>
      </div>
    </Drawer>
	
	
    <Drawer
      title="发布文章"
      v-model="show_drawer"
      width="650"
      :mask-closable="false"
      :styles="drawerStyles"
    >
      <Form :model="formData">
        <FormItem label="文章摘要" label-position="top">
          <Input
            v-model="formData.title"
            placeholder="文章标题"
            show-word-limit
            maxlength="100"
          ></Input>
        </FormItem>
        <FormItem label="文章摘要" label-position="top">
          <Input
          ref="reftest"
            type="textarea"
            v-model="formData.abstract"
            :rows="4"
            :autosize="{ maxRows: 4, minRows: 4 }"
            placeholder="文章摘要"
          />
        </FormItem>

        <FormItem>
            <div class="ui-row">
              <div class="ui-row-item">文章标签</div>
              <div class="ui-row-content">
              <Tag v-for="item in formData.keywords" :key="item" :name="item" closable @on-close="del_keyword()">{{item}}</Tag>

              <Input ref="inputKeyword" v-model="tag_value" placeholder="文章标签" v-show="input_keyword" :disabled="tag_disable" show-word-limit maxlength="20" @keyup.enter.native ="handleSaveKeyword()" @on-blur="handleLeaveKeyword()" style="margin-left: -3px;width:120px;"></Input>
              <!--
 <Input ref="inputKeyword" v-model="tag_value" placeholder="文章标签" v-show="input_keyword" :disabled="tag_disable" show-word-limit maxlength="20" @keyup.enter.native ="handleSaveKeyword()" @on-blur="handleLeaveKeyword()" style="margin-left: -3px;width:120px;"></Input>
              
                <Input v-model="tag_value" placeholder="文章标签" v-show="input_keyword" :disabled="tag_disable" show-word-limit maxlength="20" @keyup.enter.native ="add_keyword" @blur="showBtn()" style="margin-left: -3px;width:120px;"></Input>
              -->
              <Button icon="ios-add" type="dashed" v-show="add_keyword_btn" size="small" @click="handleAddKeywordBtn()">添加标签</Button>
              </div>
            </div>


        

<!--
          <Row>
            <Col span="3">文章标签</Col>
            <Col span="20" style="display:flex;">
              <Tag v-for="item in formData.keywords" :key="item" :name="item" closable @on-close="close_keyword">标签{{ item + 1 }}</Tag>

              <Input v-model="tag_value" placeholder="文章标签" :disabled="tag_disable" show-word-limit maxlength="20" @keyup.enter.native ="add_keyword"
                style="margin-left: -3px;min-width:40px;"></Input>
              <Button icon="ios-add" type="dashed" size="small" @click="add_keyword">添加标签</Button>
            </Col>


            <Col span="10">
              <Input v-model="tag_value" placeholder="文章标签"
                :disabled="tag_disable" show-word-limit maxlength="20" @keyup.enter.native ="add_keyword"
                style="margin-left: -3px"></Input>
            </Col>
            
            <Col span="10">
              <Button
                size="default"
                style="margin-left: 8px; padding: 0 0.75em"
                custom-icon="fa fa-edit"
                type="default"
                @click="add_keyword"
                :disabled="tag_disable"
                >添加标签</Button
              >
            </Col>
            
          </Row>
          <Row>
            <Col span="32">
              <Tag
                size="medium"
                v-for="keyword in formData.keywords"
                :key="keyword"
                :name="keyword"
                closable
                @on-close="delete_keyword"
                >{{ keyword }}</Tag
              >
            </Col>
          </Row>
          --->
        </FormItem>

        <FormItem label="文章分类" :label-width="70">
          <Select style="width: 220px" placeholder="请选择系统分类" :default-label="formData.system_cat" v-model="formData.system_cat">
            <Option v-for="item in system_cat_list" :key="item.id" :value="Number(item.id)" :label="item.cat_name">{{item.cat_name}}</Option>
          </Select>

          <Select style="margin-left: 20px; width: 220px" placeholder="请选择个人分类" :default-label="formData.system_cat" v-model="formData.myself_cat">
            <Option v-for="item in myself_cat_list" :key="item.id" :value="Number(item.id)" :label="item.cat_name">{{item.cat_name}}</Option>
          </Select>
        </FormItem>

        <FormItem label="文章类型" label-position="left">
          <RadioGroup
            v-model="formData.atype"
            value="formData.atype"
            type="button"
            @on-change="watch_atype"
          >
            <Radio label="1">原创</Radio>
            <Radio label="2">翻译</Radio>
            <Radio label="3">转载</Radio>
          </RadioGroup>
        </FormItem>

        <FormItem label="阅读权限" label-position="left">
          <RadioGroup v-model="formData.read_auth" type="button">
            <Radio label="1">公开</Radio>
            <Radio label="2">粉丝可见</Radio>
            <Radio label="3">会员可见</Radio>
            <Radio label="4">私密</Radio>
          </RadioGroup>
        </FormItem>

        <FormItem
          v-show="show_source_url"
          label="转载链接"
          prop="left"
          :label-width="70"
        >
          <Input v-model="formData.source_url" placeholder="转载链接"></Input>
        </FormItem>
      </Form>
      <div class="drawer-footer">
        <Button style="margin-right: 8px" @click="show_drawer = false">取消</Button>&nbsp;&nbsp;
        <Button type="primary" @click="save(0)">存为草稿</Button>&nbsp;&nbsp;
        <Button type="primary" @click="save(1)">立即发布</Button>
      </div>
    </Drawer>



    <input type="file" ref="upload_image" @change="uploadImg($event)" accept="image/*" name="file" class="none" />
    <input ref="upload_md" @change="importMd($event)" type="file"  accept="*.md" class="none" />
  </div>
</template>


<script>
import CodeMirror from "codemirror";
import "codemirror/mode/markdown/markdown.js";
import "codemirror/addon/fold/foldcode.js";
import "codemirror/addon/fold/foldgutter.js";
import "codemirror/addon/fold/brace-fold.js";
import "codemirror/addon/fold/xml-fold.js";
import "codemirror/addon/fold/indent-fold.js";
import "codemirror/addon/fold/markdown-fold.js";
import "codemirror/addon/fold/comment-fold.js";
import "codemirror/addon/edit/continuelist.js";
//高亮当前行
import "codemirror/addon/selection/active-line";
import "codemirror/addon/edit/matchbrackets.js";
//除了括号，引号也会自动闭合
import "codemirror/addon/edit/closebrackets.js";



import MarkdownId from "markdown-it";
import MdItToc from "markdown-it-toc";
import MdItMark from "markdown-it-mark";
import MdItInsert from "markdown-it-ins";
import MdItKatex from "markdown-it-katex";
import MdItImsize from "markdown-it-imsize";
import MdItSub from "markdown-it-sub";
import MdItSup from "markdown-it-sup";
import MdItFootnote from "markdown-it-footnote";
import MdItDeflist from "markdown-it-deflist";
import MdItAbbreviation from "markdown-it-abbr";
import MdItContainer from "markdown-it-container";


//import MarkdownItPrism from "markdown-it-prism";
//import MarkdownItMermaid from "@/services/mermaid";
//import MarkdownItGraphviz from "markdown-it-graphviz";
import MdItMermaid from "@liradb2000/markdown-it-mermaid";
//import MarkdownItTasklists from "markdown-it-task-lists";
//import MarkdownItTaskCheckbox from "markdown-it-task-checkbox";
//import MarkdownItFontawesome from "markdown-it-fontawesome";



//import MarkdownItMultimdTable from "markdown-it-multimd-table";
//import markdownItImplicitFigures from "markdown-it-implicit-figures";
//import MarkdownItImplicitFigures from "markdown-it-implicit-figures";

//import "inline-attachment/inline-attachment";
//import "inline-attachment/codemirror-3.inline-attachment";


//引进代码渲染
import Prism from "prismjs";
import "prismjs/components/prism-markup-templating";
import "prismjs/components/prism-java";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-php";
import "prismjs/components/prism-python";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-sql";

//引入markdown编辑器
// import stackedit from "@/libs/markdown";

const axios = require('axios');
axios.defaults.baseURL=window.config.api_domain;
export default {
  name: 'App',
  data() {
    return {
      cmeditor: null,
      mdeditor: null,
      tableEditor: null,
      content: "",
      preview: "",
      tag_value: "",
      show_drawer: false,
      show_link: false,
      show_url: false,
	    show_help:false,
      tag_disable: false,
      show_source_url: false,
	    show_language_section:false,
      history_modal_show:false,
      is_selected: true,
      input_keyword:false,
      add_keyword_btn:true,
      crows:0,
      column:0,
      drawerStyles: {
        padding: "16px 20px",
        height: "calc(100% - 55px)",
        overflow: "auto",
      },
      keyword_max_length:15,
      keyword_max_limit:5,
      etype:0,
      //config:window.config,
      system_cat_list: [],
      myself_cat_list: [],
      formData: {
        id: 0,
        title: "", //文章标题
        abstract: "", //摘要
        md_content: "", //md内容
        content: "", //预览内容
        myself_cat: 0, //个人分类
        system_cat: 0, //系统分类
        source_url: "", //转载链接url
        atype: "1", //文章类型
        read_auth: "1", //阅读权限
        keywords: [], //文章标签
      },
      linkData: {
        link_contents: "11", //md内容
        link_url: "22", //预览内容
      },
      netPicData: {
        label: "", //md内容
        url_link: "", //预览内容
      },
      insertTexts: {
		    blockcode:["```"],
        link: ["[", "](#url#)"],
        image: ["![](", "#url#)"],
        table: ["","| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text     | Text     |",
        ],
        horizontalRule: ["", "\n\n-----\n\n"],
      },
      cm_options: {
        mode: "text/markdown",
        indentWithTabs: true,
        indentUnit: 4,
        tabSize: 4, //tab字符的宽度，默认为4
        lineNumbers: true,
        lineWrapping: true, // 长句子折行
        autofocus: true,
        autoCloseTags: true,
        //括号匹配
        matchBrackets: true,
        //括号自动闭合
        autoCloseBrackets: true,
        showCursorWhenSelecting: true,
        //高亮当前行
        styleActiveLine: true,
        lineWiseCopyCut: true,
        extraKeys: {
          Enter: "newlineAndIndentContinueMarkdownList",
          Tab: "tabAndIndentMarkdownList",
          "Shift-Tab": "shiftTabAndUnindentMarkdownList",
        },
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
      },
      md_options: {
        html: false,
        xhtmlOut: false,
        linkify: true,
        typography: true,
        typographer: false,
        breaks: true,
        //quotes:
        highlight: function (code, lang) {
          let language = "";
          switch (lang.toLowerCase()) {
            case "html":
            case "markdown":
            case "xml":
              language = "markup";
              break;
            case "css":
              language = "css";
              break;
            case "js":
            case "json":
            case "javascript":
              language = "javascript";
              break;
            case "sql":
            case "php":
            case "java":
            case "python":
            case "go":
            case "bash":
            case "docker":
              language = lang.toLowerCase();
              break;
            default:
              language = lang.toLowerCase();
              break;
          }
          if (language.length > 0 && Object.keys(Prism.languages).includes(language)) {
            let tmp = Prism.highlight(code,Prism.languages[language],language);
            let tmp_code = Prism.highlight(code,Prism.languages[language],language);

            let rows = code.split("\n").length;
            var line_content = "";
            for (let i = 0; i < rows - 1; i++) {
              line_content += '<p class="row-number"></p>';
            }
            line_content =
              '<div class="line-numbers-rows">' + line_content + "</div>";

            //const code = prismLang ? _prismjs.default.highlight(text, prismLang, langToUse) : markdownit.utils.escapeHtml(text);
            //const classAttribute = langToUse ? ` class="${markdownit.options.langPrefix}${langToUse}"` : '';
            return `<pre class="line-numbers">${line_content}<code class="language-${language}">${tmp_code}</code></pre>`;
          }
        },
      },
      blockStyles: {
        bold: "**",
        italic: "*",
        strikethrough: "~~",
        blockquote: "> ",
        code: "```",
        Ulist: "- ",
        Olist: "1. ",
        taskList: "- []",
      },
    };
  },
  methods:{
    handleAddKeywordBtn(){
      this.input_keyword=true;
      this.add_keyword_btn=false;
      //将回调延迟到下次 DOM 更新循环之后执行。
      this.$nextTick(this.$refs.inputKeyword.focus)
    },
    //处理光标离开事件
    handleLeaveKeyword(){
      if(this.etype == 1){
        this.etype = 0;
      }else{
        let tmp_tag_value = this.tag_value.trim();
        //判断输入框是否有值
        if(tmp_tag_value.length>0){
          let length = this.formData.keywords.length;
          if (tmp_tag_value.length > this.keyword_max_length) {
            this.$Message.warning({ content: "关键字长度至多"+this.keyword_max_length+"个字符", duration: 2 });
            return false;
          } else if (length && this.formData.keywords.indexOf(tmp_tag_value)>-1) {
            this.$Message.warning({ content: "关键字不可重复", duration: 2 });
            return false;
          }
          this.tag_value = "";
          this.formData.keywords.push(tmp_tag_value);
          if (this.formData.keywords.length >= 5) {
            this.add_keyword_btn=false;
          }else{
            this.add_keyword_btn=true;
          }
        }else{
          this.add_keyword_btn=true;
        }
        this.input_keyword = false;
      }
    },
    //处理添加关键字事件
    handleSaveKeyword(){
      this.etype = 1;
      let tmp_tag_value = this.tag_value.trim(),is_exists = false,length = this.formData.keywords.length;
      //如果文章关键字列表不为空，则便利循环校验是否重复
      if (tmp_tag_value.length == 0) {
        this.$Message.warning({ content: "关键字不可为空", duration: 2 });
        return false;
      } else if (tmp_tag_value.length > this.keyword_max_length) {
        this.$Message.warning({ content: "关键字长度至多"+this.keyword_max_length+"个字符", duration: 2 });
        return false;
      } else if (length && this.formData.keywords.indexOf(tmp_tag_value)>-1) {

        console.log(this.formData.keywords);
        
        console.log(this.formData.keywords.indexOf(tmp_tag_value));
        this.$Message.warning({ content: "关键字不可重复", duration: 2 });
        return false;
      }
     this.input_keyword = false;
      this.formData.keywords.push(tmp_tag_value);
      if (this.formData.keywords.length >= 5) {
        this.add_keyword_btn=false;
      }else{
        this.add_keyword_btn=true;
      }
    },
    del_keyword(e, keyword) {
      const index = this.formData.keywords.indexOf(keyword);
      this.formData.keywords.splice(index, 1);

      if(this.formData.keywords.length<this.keyword_max_limit){
        this.add_keyword_btn=true;
      }
      window.focus();
    },
    initialize() {
	//this.cm_options["extraKeys"] = keyMap1;
      let cmeditor = this.cmeditor = CodeMirror.fromTextArea(
        this.$refs.cmeditor,
        this.cm_options
      );
	  
      this.markdown = MarkdownId(this.md_options)
		.use(MdItSub)
        .use(MdItSup)
        .use(MdItFootnote)
        .use(MdItDeflist)
        .use(MdItAbbreviation)
        .use(MdItInsert)
        .use(MdItMark)
        .use(MdItToc)
        .use(MdItImsize)
        /*.use(MarkdownItGraphviz)
		//.use(MarkdownItTasklists)
        //.use(MarkdownItTaskCheckbox, { disabled: false, idPrefix: "task_" })
        //.use(MarkdownItMultimdTable)
        .use(MdItFontawesome)
        .use(MdItImplicitFigures, { figcaption: true })*/
        .use(MdItMermaid, {
          startOnLoad: false,
          securityLevel: true,
          theme: "default",
          flowchart: {
            htmlLabels: false,
            useMaxWidth: true,
          },
        })
		
        //.use(MarkdownItLinkAttributes, linkAttributes)
        .use(MdItKatex)
        .use(MdItContainer, "warning", {
          validate: function (params) {
            return params.trim() === "warning";
          },
          render: (tokens, idx) => {
            if (tokens[idx].nesting === 1) {
              const icon = `<i class="markdown-it-vue-alert-icon markdown-it-vue-alert-icon-warning"><svg viewBox="64 64 896 896" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" class=""><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path></svg></i>`;
              return `<div class="markdown-it-section markdown-it-section-warning">`;
            } else {
              return "</div>";
            }
          },
        })
        .use(MdItContainer, "info", {
          validate: function (params) {
            return params.trim() === "info";
          },
          render: (tokens, idx) => {
            if (tokens[idx].nesting === 1) {
              const icon = `<i class="markdown-it-vue-alert-icon markdown-it-vue-alert-icon-info"><svg viewBox="64 64 896 896" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" class=""><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path></svg></i>`;
              return `<div class="markdown-it-section markdown-it-section-info">`;
            } else {
              return "</div>";
            }
          },
        })
        .use(MdItContainer, "success", {
          validate: function (params) {
            return params.trim() === "success";
          },
          render: (tokens, idx) => {
            if (tokens[idx].nesting === 1) {
              const icon = `<i class="markdown-it-vue-alert-icon markdown-it-vue-alert-icon-success"><svg viewBox="64 64 896 896" data-icon="check-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" class=""><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg></i>`;
              //${icon}
              return `<div class="markdown-it-section markdown-it-section-success">`;
            } else {
              return "</div>";
            }
          },
        })
        .use(MdItContainer, "error", {
          validate: function (params) {
            return params.trim() === "error";
          },
          render: (tokens, idx) => {
            if (tokens[idx].nesting === 1) {
              const icon = `<i class="markdown-it-vue-alert-icon markdown-it-vue-alert-icon-error"><svg viewBox="64 64 896 896" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" class=""><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg></i>`;

              //${icon}
              return `<div class="markdown-it-section markdown-it-section-error">`;
            } else {
              return "</div>";
            }
          },
        });


      cmeditor.on("cursorActivity", () => {
       /*if (!editorIntf.transaction) {
          updateActiveState();
        }
        */
        console.log(cmeditor);
      });

      cmeditor.on("changes", (cm) => {
        /*if (!editorIntf.transaction) {
          updateActiveState();
        }
        */
        this.preview = this.markdown.render(cm.getValue());
      });

    },
    //代码加粗
    bold(){
      return this.toggleBlock("bold", undefined, "加粗样式");
    },
    //代码斜体
    italic() {
      return this.toggleBlock("italic", undefined, "斜体样式");
    },
    //代码删除线
    strikethrough() {
      return this.toggleBlock("strikethrough", undefined, "删除线格式");
    },
    //代码删除线
    underline() {
      return this.toggleBlock("underline", undefined, "删除线格式");
    },
    //引用块
    blockquote() {
      return this.toggleBlock("quote", undefined, "这里是引用");
    },
	//引用块
    blockcode(language) {
      let cm = this.cmeditor,
			startPoint = cm.getCursor("start"),
			endPoint = cm.getCursor("end"),
			text = cm.getSelection(),
			remark = this.insertTexts.blockcode,replace_text='';
		if (text.length) {
			replace_text = remark+language+'\n\n'+remark;
		} else {
			replace_text = remark +language+'\n\n'+ remark;
		}
		cm.replaceSelection(replace_text);
		startPoint.line += 1;
		cm.setCursor(startPoint);
		cm.focus();
    },
	mouseover(){
		this.show_language_section = true;
	},
	mouseout(){
		this.show_language_section = false;
	},
    dialogLink() {
      let contents = this.cmeditor.getValue();
      let reg = /\[(.*?)\]\((.*?)\)/;
      let result = contents.match(reg);
      if (result) {
        this.linkData.link_contents = result[1];
        this.linkData.link_url = result[2];
      } else if (contents) {
        this.linkData.link_contents = contents;
        this.linkData.link_url = "";
      } else {
        this.linkData.link_contents = "";
        this.linkData.link_url = "";
      }

      console.log("hello worlld");
      this.show_link = true;
    },
    drawTable() {
      //stackedit.drawTable(this.codemirror);
      let stat = this.getState(this.cmeditor);
      this.replaceSelection(stat.table, this.insertTexts.table);
    },
	drawLink() {
		let stat = this.getState(this.cmeditor);
		this.replaceSelection(stat.table, this.insertTexts.table);
    },
    chooseImg() {
		this.$refs.upload_image.dispatchEvent(new MouseEvent("click"));
    },
	chooseMd(){
		this.$refs.upload_md.dispatchEvent(new MouseEvent("click"));
	},
    //导入md
    importMd(event) {
		let input = event.target,reg = /.+?\.md$/i;
		
		console.log(input.files);
		if(!reg.test(input.files[0].name)){
			return layer.msg("仅支持导入markdown文件");
		}
		var reader = new FileReader(),that = this;
		reader.onload = function() {
			if(reader.result) {
				let cm = that.cmeditor,startPoint = cm.getCursor("start");
				cm.replaceSelection(reader.result);
				startPoint.line += 1;
				cm.setCursor(startPoint);
				cm.focus();
			}
		};
		reader.readAsText(input.files[0]);
	},
    //导出md
    exportMd() {
		console.log("导出md");
	},
    //撤销
    undo() {
      this.cmeditor.undo();
      return this.cmeditor.focus();
    },
    //重做
    redo() {
      this.cmeditor.redo();
      return this.cmeditor.focus();
    },
	history(){


	},
    //插入image
    drawImage(desc = "", src = "") {
      let cm = this.cmeditor,stat = this.getState(cm),html = "",url = "http://";
      if (desc.length == 0 && src.length == 0) {
        html = this.insertTexts.image;
      } else {
        if (desc.length == 0) {
          desc = "这里是图片描述";
        }
        html = ["![" + desc + "](", src + ")"];
      }

      if (this.insertTexts.promptURLs) {
        url = prompt(options.promptTexts.image);
        if (!url) {
          return false;
        }
      }
      this.replaceSelection(stat.image, html, url);
    },
	watch_atype() {
      if (this.formData.atype == 3) {
        this.show_source_url = true;
      } else {
        this.show_source_url = false;
      }
      console.log(this.formData.atype);
      console.log(this.show_source_url);
    },
	help() {
		this.show_help = true;
	},
    //发布文章
    save(state=0){
      if(state==1){
        this.formData.md_content = this.cmeditor.getValue();
        this.formData.ck_content = this.preview;
      }
      this.formData.status = state;
      let formData = new URLSearchParams();
      for (var item in this.formData) {
        formData.append(item, this.formData[item]);
      }
      axios.post(window.config.save_url, formData).then((res) => {
        if (res.data.code == 200) {
          this.formData.id = res.data.id;
          console.log("ok");
        } else {
          console.log("error");
        }
      });
    },
    uploadImg(event) {
      let that = this,
        url = "/blog/upload_image",
        file = event.target.files[0];
      /* eslint-disable no-undef */
      let formdata = new FormData(); // 创建form对象
      formdata.append("file", file); // 通过append向form对象添加数据

      //console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
      let config = {
        headers: { "Content-Type": "multipart/form-data" },
      };
      // 添加请求头
      //stackedit.drawImage(that.codemirror);

      axios.post(this.config.upload_url, formdata, config).then((res) => {
        if (res.data.code === 200) {
          //self.ImgUrl = res.data.data
          console.log(res.data.data.src);
          this.drawImage("", res.data.data.src);
        } else {
          console.log("error");
        }
      });
      //this.$refs.upload_image.dispatchEvent(new MouseEvent('click'))
    },
    toggleBlock(type, end_chars, tips_words = "") {
      let start_chars = null;
      switch (type) {
        case "bold":
          start_chars = "**";
          end_chars = typeof end_chars === "undefined" ? start_chars : end_chars;
          break;
        case "italic":
          start_chars = "*";
          end_chars = typeof end_chars === "undefined" ? start_chars : end_chars;
          break;
        case "strikethrough":
          start_chars = "~~";
          end_chars =
            typeof end_chars === "undefined" ? start_chars : end_chars;
          break;
        case "underline":
          start_chars = "++";
          end_chars = typeof end_chars === "undefined" ? start_chars : end_chars;
          break;
        case "quote":
          start_chars = "> ";
          end_chars = "";
          break;
        case "code":
          start_chars = "```";
          end_chars = typeof end_chars === "undefined" ? start_chars : end_chars;
          break;
      }

      //let start_chars = blockStyles[type];
      //end_chars = typeof end_chars === "undefined" ? start_chars : end_chars;
      let cm = this.cmeditor,
        text,
        stat = this.getState(cm),
        start = start_chars,
        end = end_chars,
        startPoint = cm.getCursor("start"),
        endPoint = cm.getCursor("end");

      //console.log(blockStyles + "--" + type);
      console.log(stat + "--" + end);
      if (stat[type]) {
        console.log(11);
        text = cm.getLine(startPoint.line);
        start = text.slice(0, startPoint.ch);
        end = text.slice(startPoint.ch);
        if (type == "bold") {
          start = start.replace(/(\*\*|__)(?![\s\S]*(\*\*|__))/, "");
          end = end.replace(/(\*\*|__)/, "");
        } else if (type == "italic") {
          start = start.replace(/(\*|_)(?![\s\S]*(\*|_))/, "");
          end = end.replace(/(\*|_)/, "");
        } else if (type == "strikethrough") {
          start = start.replace(/(\*\*|~~)(?![\s\S]*(\*\*|~~))/, "");
          end = end.replace(/(\*\*|~~)/, "");
        }
        cm.replaceRange(
          start + end,
          {
            line: startPoint.line,
            ch: 0,
          },
          {
            line: startPoint.line,
            ch: 99999,
          }
        );

        if (type == "bold" || type == "strikethrough") {
          startPoint.ch -= 2;
          if (startPoint !== endPoint) {
            endPoint.ch -= 2;
          }
        } else if (type == "italic") {
          startPoint.ch -= 1;
          if (startPoint !== endPoint) {
            endPoint.ch -= 1;
          }
        }
      } else {
        console.log(22);
        text = cm.getSelection();
        if (text.length == 0) {
          text = tips_words;
          console.log(text);
        } else {
          console.log(22);
        }

        switch (type) {
          case "bold":
            text = text.split("**").join("");
            break;
          case "italic":
            text = text.split("*").join("");
            break;
          case "strikethrough":
            text = text.split("~~").join("");
            break;
          case "underline":
            text = text.split("++").join("");
            break;
          case "quote":
            text = text.split("> ").join("");
            break;
        }

        cm.replaceSelection(start + text + end);

        startPoint.ch += start_chars.length;
        endPoint.ch = startPoint.ch + text.length;

        console.log(startPoint);
        console.log(endPoint);
      }
      cm.setSelection(startPoint, endPoint);
      cm.focus();
    },
    toggleHeading(level) {
      /*if (
        /editor-preview-active/.test(cm.getWrapperElement().lastChild.className)
      ) {
        return;
      }
      */

      var that = this,
        startPoint = this.cmeditor.getCursor("start"),
        endPoint = this.cmeditor.getCursor("end");

      if (that.cmeditor.getLine(startPoint.line).length == 0) {
        that.is_selected = true;
      } else {
        that.is_selected = false;
      }
      for (var i = startPoint.line; i <= endPoint.line; i++) {
        (function (i) {
          let text = that.cmeditor.getLine(i);
          let currHeadingLevel = text.search(/[^#]/);

          if (text.length == 0) {
            text = "标题" + level;
          }

          switch (level) {
            case 1:
              if (currHeadingLevel <= 0) {
                text = "# " + text;
              } else if (currHeadingLevel == level) {
                that.is_selected = false;
                text = text.substr(currHeadingLevel + 1);
              } else {
                text = "# " + text.substr(currHeadingLevel + 1);
              }
              break;
            case 2:
              if (currHeadingLevel <= 0) {
                text = "## " + text;
              } else if (currHeadingLevel == level) {
                that.is_selected = false;
                text = text.substr(currHeadingLevel + 1);
              } else {
                text = "## " + text.substr(currHeadingLevel + 1);
              }
              break;
            case 3:
              if (currHeadingLevel <= 0) {
                text = "### " + text;
              } else if (currHeadingLevel == level) {
                that.is_selected = false;
                text = text.substr(currHeadingLevel + 1);
              } else {
                text = "### " + text.substr(currHeadingLevel + 1);
              }
              break;
            case 4:
              if (currHeadingLevel <= 0) {
                text = "#### " + text;
              } else if (currHeadingLevel == level) {
                that.is_selected = false;
                text = text.substr(currHeadingLevel + 1);
              } else {
                text = "#### " + text.substr(currHeadingLevel + 1);
              }
              break;
            default:
              if (currHeadingLevel <= 0) {
                text = "# " + text;
              } else if (currHeadingLevel == size) {
                text = text.substr(currHeadingLevel + 1);
              } else {
                text = "# " + text.substr(currHeadingLevel + 1);
              }
              break;
          }
          that.cmeditor.replaceRange(
            text,
            {
              line: i,
              ch: 0,
            },
            {
              line: i,
              ch: 9999,
            }
          );
        })(i);
      }

      if (that.is_selected) {
        let line = endPoint.line;
        let ch = level + 1;
        that.cmeditor.setSelection({ line, level }, { line, ch });
      }
      that.cmeditor.focus();
    },
    toggleLine(name) {
      /*if(/editor-preview-active/.test(cm.getWrapperElement().lastChild.className))
        return;
        */
      const cm = this.cmeditor;
      var stat = this.getState(cm);
      var startPoint = cm.getCursor("start");
      var endPoint = cm.getCursor("end");
      var repl = {
        quote: /^(\s*)\>\s+/,
        ulist: /^(\s*)(\*|\-|\+)\s+/,
        olist: /^(\s*)\d+\.\s+/,
        tlist: /^(\s*)(\*|\-|\+)\s+[\s+?]\s+/,
      };
      var map = {
        quote: "> ",
        ulist: "- ",
        olist: "1. ",
        tlist: "- [ ] ",
      };
      for (var i = startPoint.line; i <= endPoint.line; i++) {
        (function (i) {
          var text = cm.getLine(i);
          if (stat[name]) {
            text = text.replace(repl[name], "$1");
          } else {
            text = map[name] + text;
          }
          cm.replaceRange(
            text,
            {
              line: i,
              ch: 0,
            },
            {
              line: i,
              ch: 99999,
            }
          );
        })(i);
      }
      cm.focus();
    },
    getState(cm, pos) {
      pos = pos || cm.getCursor("start");
      var stat = cm.getTokenAt(pos);
      if (!stat.type) return {};

      var types = stat.type.split(" ");

      var ret = {},
        data,
        text;
      for (var i = 0; i < types.length; i++) {
        data = types[i];
        if (data === "strong") {
          ret.bold = true;
        } else if (data === "variable-2") {
          text = cm.getLine(pos.line);
          if (/^\s*\d+\.\s/.test(text)) {
            ret["ordered-list"] = true;
          } else {
            ret["unordered-list"] = true;
          }
        } else if (data === "atom") {
          ret.quote = true;
        } else if (data === "em") {
          ret.italic = true;
        } else if (data === "quote") {
          ret.quote = true;
        } else if (data === "strikethrough") {
          ret.strikethrough = true;
        } else if (data === "comment") {
          ret.code = true;
        } else if (data === "link") {
          ret.link = true;
        } else if (data === "tag") {
          ret.image = true;
        } else if (data.match(/^header(\-[1-6])?$/)) {
          ret[data.replace("header", "heading")] = true;
        }
      }
      return ret;
    },
    replaceSelection(active, startEnd, url = "") {
      let cm = this.cmeditor,
        text,
        start = startEnd[0],
        end = startEnd[1],
        startPoint = cm.getCursor("start"),
        endPoint = cm.getCursor("end");
      if (url) {
        end = end.replace("#url#", url);
      }
      if (active) {
        text = cm.getLine(startPoint.line);
        start = text.slice(0, startPoint.ch);
        end = text.slice(startPoint.ch);
        cm.replaceRange(start + end, {
          line: startPoint.line,
          ch: 0,
        });
      } else {
        text = cm.getSelection();
        cm.replaceSelection(start + text + end);

        startPoint.ch += start.length;
        if (startPoint !== endPoint) {
          endPoint.ch += start.length;
        }
      }
      cm.setSelection(startPoint, endPoint);
      cm.focus();
    },
  },
  mounted() {
    this.initialize();
    //localStorage.clear();
    let systemCatList = localStorage.getItem("systemCatList");

    if(!systemCatList){
        axios.get(window.config.getCatListUrl).then((res) => {
        if (res.data.code == 200) {
          let cat_list = res.data.data;


          this.system_cat_list = cat_list.system_cat_list;
          this.myself_cat_list = cat_list.myself_cat_list;

          localStorage.setItem('systemCatList',JSON.stringify(cat_list.system_cat_list));
          localStorage.setItem('myselfCatList',JSON.stringify(cat_list.myself_cat_list));
        }
      });
    }else{
      this.system_cat_list = systemCatList;
      this.myself_cat_list = localStorage.getItem('myselfCatList');
    }
    

    setTimeout(() => {
      this.system_cat_list = JSON.parse(this.system_cat_list);
      this.myself_cat_list = JSON.parse(this.myself_cat_list);
      console.log(this.system_cat_list)
    }, 10)
	
	this.formData.keywords = window.config.article_info.keywords;

    /*
    if(!myselfCatList){
        $.get('https://v1.ibiancheng.net/blog/getmyselfCatList',function(res){
            console.log(res.data);
            if(res.code == 200){
                localStorage.setItem('myselfCatList',JSON.stringify(res.data));
            }
        });
    }else{
        myselfCatList = localStorage.getItem('myselfCatList');
    }
    */

    //blog/getmyselfCatList
  },
}
</script>

