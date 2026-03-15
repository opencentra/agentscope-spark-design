/**
 * @function loadStyle(url, options) 加载style方法
 * @param url 样式文件地址
 * @param options 参数
 * @param options.head 是否插入head标签中，默认false则插入body标签中
 */
export function loadStyle(url: string | string[], opts: any) {
  if (Array.isArray(url)) {
    return Promise.all(url.map((link) => loadStyle(link, opts)));
  }
  if (!url) {
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    const link = document.createElement('link');

    link.setAttribute('rel', 'stylesheet');

    link.onload = resolve;
    link.onerror = resolve;

    link.href = addExtVersion(url, '.css');
    append(link, opts);
  });
}

function addExtVersion(url, ext) {
  const src = url.includes(ext) ? url : `${url}${ext}`;
  return src;
}

function append(node, { head = false }: any = {}) {
  if (head === 'after') {
    const first = document.body.firstChild || document.body.childNodes[0];
    document.body.insertBefore(node, first);
  } else if (head) {
    document.head.appendChild(node);
  } else {
    document.body.appendChild(node);
  }
}
