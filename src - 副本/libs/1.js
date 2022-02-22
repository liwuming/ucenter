
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