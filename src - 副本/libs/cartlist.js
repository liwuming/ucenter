// 渲染md容器的卡片列表
function renderCardList (tokens, idx, type) {
  const END_TYPE = `container_${type}_close`,
    _tokens$idx = tokens[idx],
    nesting = _tokens$idx.nesting,
    info = _tokens$idx.info;

  if (nesting === 1) { // 渲染开头的 ':::' 标记
    let yamlStr = '';

    for (let i = idx; i < tokens.length; i++) {
      let _tokens$i = tokens[i],
        type = _tokens$i.type,
        content = _tokens$i.content,
        _info = _tokens$i.info;
      if (type === END_TYPE) break; // 遇到结束的 ':::' 时
      if (!content) continue;
      if (type === 'fence' && _info === 'yaml') { // 是代码块类型，并且是yaml代码
        yamlStr = content
      }
    }

    if (yamlStr) { // 正确解析出yaml字符串后
      const dataObj = yaml.safeLoad(yamlStr) // 将yaml字符串解析成js对象
      let dataList = []

      if (dataObj) { // 正确解析出数据对象
        dataList = Array.isArray(dataObj) ? dataObj : dataObj.list
      }

      if (dataList && dataList.length) { // 有列表数据

        // 每行显示几个
        let row = Number(info.split(' ').pop())
        if (!row || row > 4 || row < 1) {
          row = 3 // 默认 3
        }

        let listDOM = ''
        if (type === CARD_LIST) { // 普通卡片列表
          listDOM = getCardListDOM(dataList, row)
        } else if (type === CARD_IMG_LIST) { // 卡片图片列表
          listDOM = getCardImgListDOM(dataList, row)
        }

        return `<div class="${type}Container"><div class="card-list">${listDOM}</div>`
      }
    }
  } else { // 渲染':::' 结尾
    return '</div>'
  }
}


// 将数据解析成DOM结构 - 普通卡片列表
function getCardListDOM (dataList, row) {
  let listDOM = ''
  dataList.forEach(item => {
    listDOM += `
      <${item.link ? 'a href="' + item.link + '" target="_blank"' : 'span'} class="card-item ${row ? 'row-' + row : ''}"
         style="${item.bgColor ? 'background-color:' + item.bgColor + ';--randomColor:' + item.bgColor + ';' : '--randomColor: var(--bodyBg);'}${item.textColor ? 'color:' + item.textColor + ';' : ''}"
      >
        ${item.avatar ? '<img src="' + withBase(item.avatar) + '" class="no-zoom">' : ''}
        <div>
          <p class="name">${item.name}</p>
          <p class="desc">${item.desc}</p>
        </div>
      </${item.link ? 'a' : 'span'}>
    `
  })
  return listDOM
}


// 将数据解析成DOM结构 - 图文卡片列表
function getCardImgListDOM (dataList, row) {
  let listDOM = ''
  dataList.forEach(item => {
    listDOM += `
      <div class="card-item ${row ? 'row-' + row : ''}" >
        <a href="${item.link}" target="_blank">
          <div class="box-img">
              <img src="${withBase(item.img)}" class="no-zoom">
          </div>
          <div class="box-info">
              <p class="name">${item.name}</p>
              ${item.desc ? `<p class="desc">${item.desc}</p>` : ''}
          </div>

          ${item.avatar || item.author ? `<div class="box-footer">
              ${item.avatar ? `<img src="${withBase(item.avatar)}" class="no-zoom">` : ''}
              ${item.author ? `<span>${item.author}</span>` : ''}
          </div>`: ''}
        </a>
      </div>
    `
  })
  return listDOM
}