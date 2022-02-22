<template>
  <div id="ui-header-section">
    <nav class="editor-toolbar">
      <div class="ui-toolbar-btn-box"><button
          title="加粗"
          class="ui-toolbar-btn btn"
          @click="copyline()"
        ><i class="icon icon-bold"></i><span>加粗</span></button></div>
      <div class="ui-toolbar-btn-box"><button
          title="斜体"
          class="ui-toolbar-btn btn clearfix"
        ><i class="icon icon-italic"></i><span>斜体</span></button></div>
      <div class="ui-toolbar-btn-box"><button
          title="删除线"
          class="ui-toolbar-btn btn"
        ><i class="icon icon-strikethrough"></i><span>删除线</span></button></div>
      <div class="ui-toolbar-btn-box"><button
          title="加粗"
          class="ui-toolbar-btn btn"
        ><i class="icon icon-underline"></i><span>下划线</span></button></div>
      <div class="toolbar-split-line"></div>
      <div class="ui-toolbar-btn-box"><button
          title="标题1"
          class="ui-toolbar-btn btn"
        ><i class="icon icon-h1"></i><span>标题1</span></button></div>
      <div class="ui-toolbar-btn-box"><button
          title="标题2"
          class="ui-toolbar-btn btn"
        ><i class="icon icon-h2"></i><span>标题2</span></button></div>
      <div class="ui-toolbar-btn-box"><button
          title="标题3"
          class="ui-toolbar-btn btn"
        ><i class="icon icon-h3"></i><span>标题3</span></button></div>
      <div class="ui-toolbar-btn-box"><button
          title="标题4"
          class="ui-toolbar-btn btn"
        ><i class="icon icon-h4"></i><span>标题4</span></button></div>
      <div class="toolbar-split-line"></div>
      <div class="ui-toolbar-btn-box"><button
          title="无序列表"
          class="ui-toolbar-btn btn"
        ><i class="icon icon-olist"></i><span>无序</span></button></div>
      <div class="ui-toolbar-btn-box"><button
          title="有序列表"
          class="ui-toolbar-btn btn clearfix"
        ><i class="icon icon-ulist"></i><span>有序</span></button></div>
      <div class="ui-toolbar-btn-box"><button
          title="待办事项"
          class="ui-toolbar-btn btn clearfix"
        ><i class="icon icon-task-list"></i><span>待办</span></button></div>
      <div class="ui-toolbar-btn-box"><button
          title="引用块"
          class="ui-toolbar-btn btn clearfix"
        ><i class="icon icon-blockquote"></i><span>引用块</span></button></div>
      <div class="ui-toolbar-code-btn"><button
          title="插入代码"
          class="ui-toolbar-btn btn clearfix"
        ><i class="icon icon-code"></i><span>代码块</span></button>
        <div
          class="code-selector-box-content"
          style="display: none;"
        >
          <div class="code-selector-box">
            <ul class="code-selector">
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Java</li>
              <li>Python</li>
              <li>PHP</li>
              <li>Go</li>
              <li>SQL</li>
              <li>ini</li>
              <li>Shell</li>
              <li>Docker</li>
              <li>YAML</li>
              <li>nginx</li>
              <li>C#</li>
              <li>C</li>
              <li>C++</li>
              <li>Markdown</li>
              <li>Objective-C</li>
              <li>Swift</li>
              <li>Lua</li>
              <li>TypeScript</li>
              <li>XML</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="toolbar-split-line"></div>
      <div class="ui-toolbar-btn-box"><button
          title="上传图片"
          class="ui-toolbar-btn btn clearfix"
        ><i class="icon icon-image"></i><span>图片</span></button></div>
      <div class="ui-toolbar-btn-box"><button
          title="插入表格"
          class="ui-toolbar-btn btn clearfix"
        ><i class="icon icon-table"></i><span>表格</span></button></div>
      <div class="ui-toolbar-btn-box"><button
          title="超链接"
          class="ui-toolbar-btn btn clearfix"
        ><i class="icon icon-link"></i><span>超链接</span></button></div>
      <div class="toolbar-split-line"></div>
      <div class="ui-toolbar-btn-box"><button
          title="导入文件"
          class="ui-toolbar-btn btn clearfix"
        ><i class="icon icon-import"></i><span>导入</span></button></div>
      <div class="ui-toolbar-btn-box"><button
          title="导出文件"
          class="ui-toolbar-btn btn clearfix"
        ><i class="icon icon-export"></i><span>导出</span></button></div>
      <div class="ui-toolbar-btn-box"><button
          title="历史版本"
          class="ui-toolbar-btn btn clearfix"
        ><i class="icon icon-history"></i><span>历史</span></button></div>
      <div class="ui-toolbar-btn-box"><button
          title="帮助"
          class="ui-toolbar-btn btn clearfix"
        ><i class="icon icon-help"></i><span>帮助</span></button></div>
      <div class="ui-toolbar-btn-box"><button
          title="撤销"
          class="ui-toolbar-btn btn clearfix"
        ><i class="icon icon-undo"></i><span>撤销</span></button></div>
      <div class="ui-toolbar-btn-box"><button
          title="重做"
          class="ui-toolbar-btn btn clearfix"
        ><i class="icon icon-redo"></i><span>重做</span></button></div>
      <div class="ui-toolbar-btn-box"><button
          title="保存"
          class="ui-toolbar-btn btn clearfix"
        ><i class="icon icon-save"></i><span>保存</span></button></div>

      <div class="ui-toolbar-btn-box"><button
          title="保存"
          class="ui-toolbar-btn btn clearfix"
        ><i class="icon icon-save"></i><span>模板</span></button></div>
    </nav>
  </div>

  <div id="main">
    <div id="ui-stackeditor-section">
      <textarea
        ref="cmeditor"
        id="cmeditor"
        autocomplete="off"
      ></textarea>
    </div>
    <div id="ui-center-toolbar-section">
      <div class="button-bar">
        <div class="button-bar-inner button-bar-inner-top">
          <button
            type="button"
            title="Toggle navigation bar"
            class="button-bar-btn button-bar-btn-on"
          ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="icon"
            >
              <path d="M19,8.977l-14,0l0,10l14,0m0,2l-14,0c-1.104,0 -2,-0.896 -2,-2l0,-10c0,-1.105 0.896,-2 2,-2l14,0c1.105,0 2,0.895 2,2l0,10c0,1.104 -0.895,2 -2,2Z"></path>
              <rect
                x="3"
                y="3.023"
                width="18"
                height="2"
              ></rect>
            </svg></button><button
            tour-step-anchor="editor"
            title="Toggle side preview"
            aria-label="Toggle side preview"
            class="button-bar-btn button-bar-btn-side-preview-toggler button button-bar-btn-on"
          ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="icon"
            >
              <path d="M11,20.977l-6,0c-1.104,0 -2,-0.896 -2,-2l0,-14c0,-1.105 0.896,-2 2,-2l14,0c1.105,0 2,0.895 2,2l0,14c0,1.104 -0.895,2 -2,2l-6,0l0,0.023l-2,0l0,-0.023Zm0,-2l0,-14l-6,0l0,14l6,0Zm8,-14l-6,0l0,14l6,0l0,-14Z"></path>
            </svg></button><button
            id="preview_btn"
            title="Reader mode"
            aria-label="Reader mode"
            class="button-bar-btn button-bar-btn-editor-toggler button"
          ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="icon"
            >
              <path d="M 11.9994,8.99813C 10.3424,8.99813 8.99941,10.3411 8.99941,11.9981C 8.99941,13.6551 10.3424,14.9981 11.9994,14.9981C 13.6564,14.9981 14.9994,13.6551 14.9994,11.9981C 14.9994,10.3411 13.6564,8.99813 11.9994,8.99813 Z M 11.9994,16.9981C 9.23841,16.9981 6.99941,14.7591 6.99941,11.9981C 6.99941,9.23714 9.23841,6.99813 11.9994,6.99813C 14.7604,6.99813 16.9994,9.23714 16.9994,11.9981C 16.9994,14.7591 14.7604,16.9981 11.9994,16.9981 Z M 11.9994,4.49813C 6.99741,4.49813 2.72741,7.60915 0.99941,11.9981C 2.72741,16.3871 6.99741,19.4981 11.9994,19.4981C 17.0024,19.4981 21.2714,16.3871 22.9994,11.9981C 21.2714,7.60915 17.0024,4.49813 11.9994,4.49813 Z "></path>
            </svg></button>
        </div>
        <div class="button-bar-inner button-bar-inner-bottom"><button
            title="Toggle focus mode"
            aria-label="Toggle focus mode"
            class="button-bar-btn button-bar-btn-focus-mode-toggler button button-bar-btn-on"
          ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="icon"
            >
              <path d="M 11.0013,2.0025L 11.0013,4.0725C 7.3825,4.53125 4.53125,7.3825 4.0725,11.0012L 2.0025,11.0012L 2.0025,12.9975L 4.0725,12.9975C 4.53125,16.6213 7.3825,19.4675 11.0013,19.9262L 11.0013,22.0025L 12.9975,22.0025L 12.9975,19.9313C 16.6212,19.4675 19.4675,16.6213 19.9263,12.9975L 22.0025,12.9975L 22.0025,11.0012L 19.9312,11.0012C 19.4675,7.3825 16.6212,4.53125 12.9975,4.0725L 12.9975,2.0025M 11.0013,6.08375L 11.0013,7.9975L 12.9975,7.9975L 12.9975,6.08875C 15.5175,6.51375 17.485,8.48625 17.915,11.0012L 16.0012,11.0012L 16.0012,12.9975L 17.91,12.9975C 17.485,15.5175 15.5125,17.485 12.9975,17.915L 12.9975,16.0012L 11.0013,16.0012L 11.0013,17.91C 8.48625,17.485 6.51375,15.5125 6.08375,12.9975L 7.9975,12.9975L 7.9975,11.0012L 6.08875,11.0012C 6.51375,8.48625 8.48625,6.51375 11.0013,6.08375 Z M 12.0025,11.0012C 11.445,11.0012 11.0013,11.445 11.0013,12.0025C 11.0013,12.5538 11.445,12.9975 12.0025,12.9975C 12.5537,12.9975 12.9975,12.5538 12.9975,12.0025C 12.9975,11.445 12.5537,11.0012 12.0025,11.0012 Z "></path>
            </svg></button><button
            title="Toggle scroll sync"
            aria-label="Toggle scroll sync"
            class="button-bar-btn button-bar-btn-scroll-sync-toggler button button-bar-btn-on"
          ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="icon"
            >
              <path d="M9,18l3,0l-4,4l-4,-4l3,0l0,-3l2,0l0,3Zm8,0l3,0l-4,4l-4,-4l3,0l0,-3l2,0l0,3Zm0.055,-5l-10.11,0l0,-2l10.11,0l0,2Zm-8.055,-4l-2,0l0,-3l-3,0l4,-4l4,4l4,-4l4,4l-3,0l0,3l-2,0l0,-3l-6,0l0,3Z"></path>
            </svg></button><button
            title="Toggle status bar"
            aria-label="Toggle status bar"
            class="button-bar-btn button-bar-btn-status-bar-toggler button button-bar-btn-on"
          ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="icon"
            >
              <path d="M19,15.023l-14,0l0,-10l14,0m0,-2l-14,0c-1.104,0 -2,0.896 -2,2l0,10c0,1.105 0.896,2 2,2l14,0c1.105,0 2,-0.895 2,-2l0,-10c0,-1.104 -0.895,-2 -2,-2Z"></path>
              <rect
                x="3"
                y="18.977"
                width="18"
                height="2"
              ></rect>
            </svg></button></div>
      </div>
    </div>
    <div id="ui-preview-section">
      <div
        ref="preview"
        id="preview"
        class="preview"
        v-html="preview"
      ></div>

    </div>
  </div>

  <div id="ui-bottom-toolbar-section">
    22
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
/*
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
*/

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

import MdT from "markdown-it-toc";
import MdC from "markdown-it-container";

// 代码提示功能 具体语言可以从 codemirror/addon/hint/ 下引入多个
require("codemirror/addon/hint/show-hint");



import {
  ITextEditor,
  TableEditor,
  Point,
  options,
  Alignment,
} from "@susisu/mte-kernel";

class TextEditorInterface {
  constructor(editor) {
    this.editor = editor;
    this.doc = editor.getDoc();
    this.transaction = false;
    this.onDidFinishTransaction = null;
  }

  getCursorPosition() {
    const { line, ch } = this.doc.getCursor();
    return new Point(line, ch);
  }

  setCursorPosition(pos) {
    this.doc.setCursor({ line: pos.row, ch: pos.column });
  }

  setSelectionRange(range) {
    this.doc.setSelection(
      { line: range.start.row, ch: range.start.column },
      { line: range.end.row, ch: range.end.column }
    );
  }

  getLastRow() {
    return this.doc.lineCount() - 1;
  }

  acceptsTableEdit() {
    return true;
  }

  getLine(row) {
    return this.doc.getLine(row);
  }

  insertLine(row, line) {
    const lastRow = this.getLastRow();
    if (row > lastRow) {
      const lastLine = this.getLine(lastRow);
      this.doc.replaceRange(
        "\n" + line,
        { line: lastRow, ch: lastLine.length },
        { line: lastRow, ch: lastLine.length }
      );
    } else {
      this.doc.replaceRange(
        line + "\n",
        { line: row, ch: 0 },
        { line: row, ch: 0 }
      );
    }
  }

  deleteLine(row) {
    const lastRow = this.getLastRow();
    if (row >= lastRow) {
      if (lastRow > 0) {
        const preLastLine = this.getLine(lastRow - 1);
        const lastLine = this.getLine(lastRow);
        this.doc.replaceRange(
          "",
          { line: lastRow - 1, ch: preLastLine.length },
          { line: lastRow, ch: lastLine.length }
        );
      } else {
        const lastLine = this.getLine(lastRow);
        this.doc.replaceRange(
          "",
          { line: lastRow, ch: 0 },
          { line: lastRow, ch: lastLine.length }
        );
      }
    } else {
      this.doc.replaceRange("", { line: row, ch: 0 }, { line: row + 1, ch: 0 });
    }
  }

  replaceLines(startRow, endRow, lines) {
    const lastRow = this.getLastRow();
    if (endRow > lastRow) {
      const lastLine = this.getLine(lastRow);
      this.doc.replaceRange(
        lines.join("\n"),
        { line: startRow, ch: 0 },
        { line: lastRow, ch: lastLine.length }
      );
    } else {
      this.doc.replaceRange(
        lines.join("\n") + "\n",
        { line: startRow, ch: 0 },
        { line: endRow, ch: 0 }
      );
    }
  }

  transact(func) {
    this.transaction = true;
    func();
    this.transaction = false;
    if (this.onDidFinishTransaction) {
      this.onDidFinishTransaction.call(undefined);
    }
  }
}


const yaml = require("js-yaml");
const axios = require("axios");


//axios.defaults.baseURL = window.config.api_domain;
export default {
  name: "App",
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
      show_help: false,
      tag_disable: false,
      show_source_url: false,
      show_language_section: false,
      history_modal_show: false,
      is_selected: true,
      input_keyword: false,
      add_keyword_btn: true,
      crows: 0,
      column: 0,
      base: "",
      drawerStyles: {
        padding: "16px 20px",
        height: "calc(100% - 55px)",
        overflow: "auto",
      },
      keyword_max_length: 15,
      keyword_max_limit: 5,
      etype: 0,
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
        blockcode: ["```"],
        link: ["[", "](#url#)"],
        image: ["![](", "#url#)"],
        table: [
          "",
          "| Column 1 | Column 2 | Column 3 |\n| ---- | ---- | ---- |\n| Text     | Text     | Text     |",
        ],
        horizontalRule: ["", "\n\n---\n\n"],
      },
      cm_options: {
        mode: "text/markdown",
		backdrop: "text/markdown",
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
		inputStyle: 'textarea',
		flattenSpans: true,
        addModeClass: true,
        extraKeys: {
          Enter: "newlineAndIndentContinueMarkdownList",
          Tab: "tabAndIndentMarkdownList",
          "Shift-Tab": "shiftTabAndUnindentMarkdownList",
        },
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        hintOptions: {
          completeSingle: false,
          hint: this.handleShowHint,
        },
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
          if (
            language.length > 0 &&
            Object.keys(Prism.languages).includes(language)
          ) {
            let tmp = Prism.highlight(
              code,
              Prism.languages[language],
              language
            );
            let tmp_code = Prism.highlight(
              code,
              Prism.languages[language],
              language
            );

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
  methods: {
    copyline() {
      const cmeditor = this.cmeditor;
      //新增行
      cmeditor.newlineAndIndent();
      //获取光标所在行
      let position = cmeditor.getCursor();

      //获取光标所在行的内容
      let line_content = cmeditor.getLine();
      //获取行句柄，设置行内容
      //cmeditor.getLineHandle(position.line+1)
    },
    initialize() {
		const that = this,opts = options({ smartCursor: true }),keyMap1 = {
				Enter: "newlineAndIndentContinueMarkdownList",
				Tab: (cm) => {
				  if (cm.somethingSelected()) {
					// 存在文本选择
					cm.indentSelection("add"); // 正向缩进文本
				  } else {
					// 无文本选择
					//cm.indentLine(cm.getCursor().line, "add");  // 整行缩进 不符合预期
					cm.replaceSelection(
					  Array(cm.getOption("indentUnit") + 1).join(" "),
					  "end",
					  "+input"
					); // 光标处插入 indentUnit 个空格
				  }
				},
				"Shift-Tab": (cm) => {
				  // 反向缩进
				  if (cm.somethingSelected()) {
					cm.indentSelection("subtract"); // 反向缩进
				  } else {
					// cm.indentLine(cm.getCursor().line, "subtract");  // 直接缩进整行
					const cursor = cm.getCursor();
					cm.setCursor({ line: cursor.line, ch: cursor.ch - 4 }); // 光标回退 indexUnit 字符
				  }
				  return;
				}
			},
		keyMap2 = CodeMirror.normalizeKeyMap({
			Tab: () => {
			  tableEditor.nextCell(opts);
			},
			"Shift-Tab": () => {
			  tableEditor.previousCell(opts);
			},
			Enter: () => {
			  tableEditor.nextRow(opts);
			},
			"Ctrl-Enter": () => {
			  tableEditor.escape(opts);
			},
			"Cmd-Enter": () => {
			  tableEditor.escape(opts);
			},
			"Shift-Ctrl-Left": () => {
			  tableEditor.alignColumn(Alignment.LEFT, opts);
			},
			"Shift-Cmd-Left": () => {
			  tableEditor.alignColumn(Alignment.LEFT, opts);
			},
			"Shift-Ctrl-Right": () => {
			  tableEditor.alignColumn(Alignment.RIGHT, opts);
			},
			"Shift-Cmd-Right": () => {
			  tableEditor.alignColumn(Alignment.RIGHT, opts);
			},
			"Shift-Ctrl-Up": () => {
			  tableEditor.alignColumn(Alignment.CENTER, opts);
			},
			"Shift-Cmd-Up": () => {
			  tableEditor.alignColumn(Alignment.CENTER, opts);
			},
			"Shift-Ctrl-Down": () => {
			  tableEditor.alignColumn(Alignment.NONE, opts);
			},
			"Shift-Cmd-Down": () => {
			  tableEditor.alignColumn(Alignment.NONE, opts);
			},
			"Ctrl-Left": () => {
			  tableEditor.moveFocus(0, -1, opts);
			},
			"Cmd-Left": () => {
			  tableEditor.moveFocus(0, -1, opts);
			},
			"Ctrl-Right": () => {
			  tableEditor.moveFocus(0, 1, opts);
			},
			"Cmd-Right": () => {
			  tableEditor.moveFocus(0, 1, opts);
			},
			"Ctrl-Up": () => {
			  tableEditor.moveFocus(-1, 0, opts);
			},
			"Cmd-Up": () => {
			  tableEditor.moveFocus(-1, 0, opts);
			},
			"Ctrl-Down": () => {
			  tableEditor.moveFocus(1, 0, opts);
			},
			"Cmd-Down": () => {
			  tableEditor.moveFocus(1, 0, opts);
			},
			"Ctrl-K Ctrl-I": () => {
			  tableEditor.insertRow(opts);
			},
			"Cmd-K Cmd-I": () => {
			  tableEditor.insertRow(opts);
			},
			"Ctrl-L Ctrl-I": () => {
			  tableEditor.deleteRow(opts);
			},
			"Cmd-L Cmd-I": () => {
			  tableEditor.deleteRow(opts);
			},
			"Ctrl-K Ctrl-J": () => {
			  tableEditor.insertColumn(opts);
			},
			"Cmd-K Cmd-J": () => {
			  tableEditor.insertColumn(opts);
			},
			"Ctrl-L Ctrl-J": () => {
			  tableEditor.deleteColumn(opts);
			},
			"Cmd-L Cmd-J": () => {
			  tableEditor.deleteColumn(opts);
			},
			"Alt-Shift-Ctrl-Left": () => {
			  tableEditor.moveColumn(-1, opts);
			},
			"Alt-Shift-Cmd-Left": () => {
			  tableEditor.moveColumn(-1, opts);
			},
			"Alt-Shift-Ctrl-Right": () => {
			  tableEditor.moveColumn(1, opts);
			},
			"Alt-Shift-Cmd-Right": () => {
			  tableEditor.moveColumn(1, opts);
			},
			"Alt-Shift-Ctrl-Up": () => {
			  tableEditor.moveRow(-1, opts);
			},
			"Alt-Shift-Cmd-Up": () => {
			  tableEditor.moveRow(-1, opts);
			},
			"Alt-Shift-Ctrl-Down": () => {
			  tableEditor.moveRow(1, opts);
			},
			"Alt-Shift-Cmd-Down": () => {
			  tableEditor.moveRow(1, opts);
			},
		});
		
		/*mdeditor = (this.mdeditor = MarkdownId(this.md_options).use(MdT).use(MdC, "success", {
          validate: function (params) {
            return params.trim() === "success";
          },
          render: (tokens, idx) => {
            if (tokens[idx].nesting === 1) {
              const icon = `<i class="markdown-it-vue-alert-icon markdown-it-vue-alert-icon-success"><svg viewBox="64 64 896 896" data-icon="check-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" class=""><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg></i>`;
              //${icon}
              return `<blockquote class="ui-success-section">`;
            } else {
              return "</blockquote>";
            }
          },
        })
        .use(MdC, "info", {
          validate: function (params) {
            return params.trim() === "info";
          },
          render: (tokens, idx) => {
            if (tokens[idx].nesting === 1) {
              const icon = `<i class="markdown-it-vue-alert-icon markdown-it-vue-alert-icon-info"><svg viewBox="64 64 896 896" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" class=""><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path></svg></i>`;
              return `<blockquote class="ui-info-section">`;
            } else {
              return "</blockquote>";
            }
          },
        }).use(MdC, "warning", {
          validate: function (params) {
            return params.trim() === "warning";
          },
          render: (tokens, idx) => {
            if (tokens[idx].nesting === 1) {
              const icon = `<i class="markdown-it-vue-alert-icon markdown-it-vue-alert-icon-warning"><svg viewBox="64 64 896 896" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" class=""><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path></svg></i>`;
              return `<blockquote class="ui-warning-section">`;
            } else {
              return "</blockquote>";
            }
          },
        }).use(MdC, "error", {
          validate: function (params) {
            return params.trim() === "error";
          },
          render: (tokens, idx) => {
            if (tokens[idx].nesting === 1) {
              const icon = `<i class="markdown-it-vue-alert-icon markdown-it-vue-alert-icon-error"><svg viewBox="64 64 896 896" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" class=""><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg></i>`;

              //${icon}
              return `<blockquote class="ui-error-section">`;
            } else {
              return "</blockquote>";
            }
          },
        }).use(MdC, "spoiler", {
          validate: function (params) {
            return params.trim().match(/^spoiler(\s+.*)?$/);
          },
          render: function (tokens, idx) {
            const m = tokens[idx].info.trim().match(/^spoiler(\s+.*)?$/);

            if (tokens[idx].nesting === 1) {
              // opening tag
              const summary = m[1] && m[1].trim();
              if (summary) {
                return `<details class="ui-details-section"><summary>${mdeditor.renderInline(
                  summary
                )}</summary>\n`;
              } else {
                return "<details>\n";
              }
            } else {
              // closing tag
              return "</details>\n";
            }
          },
        })
        .use(MdC, "cardimglist", {
          validate: function (params) {
            return params.trim() === "cardimglist";
          },
          render: (tokens, idx) => {
            let type = "cardimglist";
            const END_TYPE = `container_${type}_close`,
              _tokens$idx = tokens[idx],
              nesting = _tokens$idx.nesting,
              info = _tokens$idx.info;

            if (tokens[idx].nesting === 1) {
              let yamlStr = "";

              for (let i = idx; i < tokens.length; i++) {
                let _tokens$i = tokens[i],
                  type = _tokens$i.type,
                  content = _tokens$i.content,
                  _info = _tokens$i.info;
                if (type === END_TYPE) break; // 遇到结束的 ':::' 时
                if (!content) continue;
                if (type === "fence" && _info === "yaml") {
                  // 是代码块类型，并且是yaml代码
                  yamlStr = content;
                }
              }

              if (yamlStr) {
                // 正确解析出yaml字符串后
                const dataObj = yaml.load(yamlStr); // 将yaml字符串解析成js对象
                let dataList = [];

                if (dataObj) {
                  // 正确解析出数据对象
                  dataList = Array.isArray(dataObj) ? dataObj : dataObj.list;
                }

                if (dataList && dataList.length) {
                  // 有列表数据

                  // 每行显示几个
                  let row = Number(info.split(" ").pop());
                  if (!row || row > 4 || row < 1) {
                    row = 3; // 默认 3
                  }

                  let listDOM = "";
                  listDOM = this.getCardImgListDOM(dataList, row);
                  return `<div class="ui-imgcard-list-container"><div class="card-list">${listDOM}</div>`;
                }
              }
            } else {
              return "</div>";
            }
          },
        }));
		*/
		
		
		this.cm_options["extraKeys"] = keyMap1;
      let cmeditor = (this.cmeditor = CodeMirror.fromTextArea(
        this.$refs.cmeditor,
        this.cm_options
      ));
	
	
		const content = document.querySelector("#content").innerHTML;
		if(content.length>0){
			let tmp = content.replace('&gt;','>');
			cmeditor.setValue(tmp);
			//this.preview = this.mdeditor.render(tmp);
		}
		
		
		const editorIntf = new TextEditorInterface(cmeditor);
		const tableEditor = new TableEditor(editorIntf);
		
	  let updateActiveState = function () {
        if (tableEditor.cursorIsInTable(opts)) {
		  that.cmeditor.removeKeyMap(keyMap1);
          //that.cmeditor.addKeyMap(keyMap1);
          that.cmeditor.setOption("extraKeys", keyMap2);
        } else {
		  that.cmeditor.removeKeyMap(keyMap2);
          //that.cmeditor.addKeyMap(keyMap2);
          that.cmeditor.setOption("extraKeys", keyMap1);
        }
        tableEditor.resetSmartCursor();
      };
		
		
		
      cmeditor.on("cursorActivity", () => {
        if (!editorIntf.transaction) {
          updateActiveState();
        }
        
        //console.log(cmeditor);
      });

      cmeditor.on("changes", (cm) => {
        if (!editorIntf.transaction) {
          updateActiveState();
        }
        
        //this.preview = this.mdeditor.render(cm.getValue());
      });
    },
    bold() {
      this.italic();
      this.underline();
    },
    italic() {
      console.log("22");
    },
    underline() {
      console.log("33");
    },

    handleShowHint() {
      const hintList = [
        {
          name: "success",
          value: "success\n:::",
        },
        {
          name: "info",
          value: "info\n:::",
        },
        {
          name: "warning",
          value: "waring\n:::",
        },
        {
          name: "error",
          value: "error",
        },
        {
          name: "success",
          value: "success",
        },
      ];
      const cmeditor = this.cmeditor;
      // 得到光标
      let cursor = cmeditor.getCursor(),
        // 得到行内容
        cursorLine = cmeditor.getLine(cursor.line),
        // 得到光标位置
        end = cursor.ch,
        start = end,
        list = [];

      const one = cursorLine.substring(0, 3);
      const two = cursorLine.substring(0, 3);
      console.log(one);
      switch (one) {
        case ":::":
          hintList.forEach((e) => {
            list.push(e.name);
          });
          break;

        case "```":
          break;
        default:
          break;
      }

      switch (two) {
        case "::: ":
        //break;

        case "``` ":
        //break;
        default:
        //break;
      }
      /*
      if (Two === "$") {
        hintList.forEach((e) => {
          list.push(e.name);
        });
      } else if (One === ".") {
        let lastIndex = cursorLine.lastIndexOf("$", start);
        let key = cursorLine.substring(lastIndex + 2, start - 1);
        list = [];
        hintList.forEach((e) => {
          if (
            e.name === key &&
            lastIndex !== -1 &&
            Object.prototype.toString.call(e.value) === "[object Array]"
          ) {
            e.value.forEach((el) => {
              list.push(el.name);
            });
          }
        });
      }
      */
      console.log(list);
      // 得到光标标识
      let token = cmeditor.getTokenAt(cursor);
      return {
        list: list,
        hint: function () {
          console.log("11");
        },
        from: { ch: end, line: cursor.line },
        to: { ch: token.end, line: cursor.line },
      };
    },
    // 将数据解析成DOM结构 - 普通卡片列表
    getCardListDOM(dataList, row) {
      let listDOM = "";
      dataList.forEach((item) => {
        listDOM += `
      <${
        item.link ? 'a href="' + item.link + '" target="_blank"' : "span"
      } class="card-item ${row ? "row-" + row : ""}"
         style="${
           item.bgColor
             ? "background-color:" +
               item.bgColor +
               ";--randomColor:" +
               item.bgColor +
               ";"
             : "--randomColor: var(--bodyBg);"
         }${item.textColor ? "color:" + item.textColor + ";" : ""}"
      >
        ${
          item.avatar
            ? '<img src="' + withBase(item.avatar) + '" class="no-zoom">'
            : ""
        }
        <div>
          <p class="name">${item.name}</p>
          <p class="desc">${item.desc}</p>
        </div>
      </${item.link ? "a" : "span"}>
    `;
      });
      return listDOM;
    },

    // 将数据解析成DOM结构 - 图文卡片列表
    getCardImgListDOM(dataList, row) {
      let listDOM = "";
      dataList.forEach((item) => {
        listDOM += `
      <div class="card-item ${row ? "row-" + row : ""}" >
        <a href="${item.link}" target="_blank">
          <div class="box-img">
              <img src="${item.img}" class="no-zoom">
          </div>
          <div class="box-info">
              <p class="name">${item.name}</p>
              ${item.desc ? `<p class="desc">${item.desc}</p>` : ""}
          </div>

          ${
            item.avatar || item.author
              ? `<div class="box-footer">
              ${item.avatar ? `<img src="${item.avatar}" class="no-zoom">` : ""}
              ${item.author ? `<span>${item.author}</span>` : ""}
          </div>`
              : ""
          }
        </a>
      </div>
    `;
      });
      return listDOM;
    },
  },
  mounted() {
    this.initialize();

    this.cmeditor.on("inputRead", (cm) => {
      cm.showHint();
    });
  },
};
</script>

