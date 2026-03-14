function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { CodeHighlighter, Mermaid } from '@ant-design/x';
import { useProviderContext } from "../../..";
import { useCallback, useState } from 'react';
import { SparkCopyLine, SparkDownloadLine, SparkTrueLine } from '@agentscope-ai/icons';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var LANG_EXT_MAP = {
  javascript: 'js',
  typescript: 'ts',
  python: 'py',
  ruby: 'rb',
  rust: 'rs',
  kotlin: 'kt',
  csharp: 'cs',
  markdown: 'md',
  yaml: 'yml',
  shell: 'sh',
  bash: 'sh',
  zsh: 'sh',
  mermaid: 'mmd',
  jsx: 'jsx',
  tsx: 'tsx'
};
var Code = function Code(props) {
  var _className$match;
  var className = props.className,
    children = props.children;
  var lang = (className === null || className === void 0 || (_className$match = className.match(/language-(\w+)/)) === null || _className$match === void 0 ? void 0 : _className$match[1]) || '';
  if (typeof children !== 'string') return null;
  if (lang === 'mermaid') {
    return /*#__PURE__*/_jsx(Mermaid, {
      header: /*#__PURE__*/_jsx(CodeHeader, {
        lang: "mermaid",
        content: children
      }),
      children: children
    });
  }
  return /*#__PURE__*/_jsx(CodeHighlighter, {
    lang: lang,
    header: /*#__PURE__*/_jsx(CodeHeader, {
      lang: lang,
      content: children
    }),
    children: children
  });
};
function CodeHeader(_ref) {
  var lang = _ref.lang,
    content = _ref.content;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    copied = _useState2[0],
    setCopied = _useState2[1];
  var _useProviderContext = useProviderContext(),
    getPrefixCls = _useProviderContext.getPrefixCls;
  var prefixCls = getPrefixCls('code-header');
  var handleDownload = useCallback(function () {
    var ext = LANG_EXT_MAP[lang] || lang || 'txt';
    var blob = new Blob([content], {
      type: 'text/plain;charset=utf-8'
    });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = "code.".concat(ext);
    a.click();
    URL.revokeObjectURL(url);
  }, [lang, content]);
  return /*#__PURE__*/_jsxs("div", {
    className: prefixCls,
    children: [/*#__PURE__*/_jsx("div", {
      className: "".concat(prefixCls, "-lang"),
      children: lang
    }), /*#__PURE__*/_jsxs("div", {
      className: "".concat(prefixCls, "-actions"),
      children: [/*#__PURE__*/_jsx(SparkDownloadLine, {
        className: "".concat(prefixCls, "-download"),
        onClick: handleDownload
      }), copied ? /*#__PURE__*/_jsx(SparkTrueLine, {
        className: "".concat(prefixCls, "-copied")
      }) : /*#__PURE__*/_jsx(SparkCopyLine, {
        className: "".concat(prefixCls, "-icon"),
        onClick: function onClick() {
          navigator.clipboard.writeText(content);
          setCopied(true);
          setTimeout(function () {
            setCopied(false);
          }, 1000);
        }
      })]
    })]
  });
}
export default Code;