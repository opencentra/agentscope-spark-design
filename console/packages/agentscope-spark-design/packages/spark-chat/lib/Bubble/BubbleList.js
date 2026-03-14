function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["key"];
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import Bubble from "./Bubble";
import ScrollToBottom from "./ScrollToBottom";
import { StickToBottom, useStickToBottomContext } from "../StickToBottom";
import Style from "./style/list";
import { useProviderContext } from "./..";
import React, { useCallback, useEffect, useRef, useState } from 'react';
import cls from 'classnames';
import { useInViewport, useMount, usePrevious } from 'ahooks';
import { usePaginationItems } from "./hooks/usePaginationItemsData";
import { Spin } from 'antd';
import { jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
function BubbleListContent(_ref) {
  var items = _ref.items,
    paginationItems = _ref.paginationItems,
    noMore = _ref.noMore,
    loadMore = _ref.loadMore,
    prefixCls = _ref.prefixCls,
    listClassName = _ref.listClassName,
    children = _ref.children;
  var _useStickToBottomCont = useStickToBottomContext(),
    scrollRef = _useStickToBottomCont.scrollRef;
  var handleLoadMore = useCallback(function () {
    return loadMore(scrollRef);
  }, [loadMore, scrollRef]);
  return /*#__PURE__*/_jsxs(StickToBottom.Content, {
    className: cls("".concat(prefixCls), listClassName),
    children: [noMore ? null : /*#__PURE__*/_jsx(LoadMore, {
      handleLoadMore: handleLoadMore
    }), children ? children : paginationItems.map(function (_ref2, index) {
      var key = _ref2.key,
        bubble = _objectWithoutProperties(_ref2, _excluded);
      var isLast = index === items.length - 1;
      return /*#__PURE__*/_createElement(Bubble, _objectSpread(_objectSpread({}, bubble), {}, {
        isLast: isLast,
        key: bubble.id || key
      }));
    })]
  });
}
function LoadMore(_ref3) {
  var handleLoadMore = _ref3.handleLoadMore;
  var ref = useRef(null);
  var _useInViewport = useInViewport(ref),
    _useInViewport2 = _slicedToArray(_useInViewport, 1),
    inViewport = _useInViewport2[0];
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var previousInViewport = usePrevious(inViewport);
  var _useProviderContext = useProviderContext(),
    getPrefixCls = _useProviderContext.getPrefixCls;
  var prefixCls = getPrefixCls('bubble-list');
  useEffect(function () {
    if (inViewport && previousInViewport === undefined) return;
    if (loading) return;
    if (inViewport) {
      setLoading(true);
      handleLoadMore().finally(function () {
        setLoading(false);
      });
    }
  }, [previousInViewport, inViewport, loading, handleLoadMore]);
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    className: "".concat(prefixCls, "-load-more"),
    children: /*#__PURE__*/_jsx(Spin, {
      spinning: true
    })
  });
}
var BubbleList = function BubbleList(props, ref) {
  var _props$classNames, _props$classNames2;
  var _props$items = props.items,
    items = _props$items === void 0 ? [] : _props$items,
    _props$smooth = props.smooth,
    smooth = _props$smooth === void 0 ? true : _props$smooth;
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    initial = _useState4[0],
    setInitial = _useState4[1];
  var scrollToBottomRef = React.useRef();
  var _useProviderContext2 = useProviderContext(),
    getPrefixCls = _useProviderContext2.getPrefixCls;
  var prefixCls = getPrefixCls('bubble-list');
  React.useImperativeHandle(ref, function () {
    return {
      scrollToBottom: function scrollToBottom() {
        // @ts-ignore
        scrollToBottomRef.current.scrollToBottom();
      }
    };
  });
  useMount(function () {
    setInitial(true);
  });
  var resize = initial ? smooth ? 'smooth' : 'instant' : 'instant';
  var _usePaginationItems = usePaginationItems(items, {
      enable: props.pagination
    }),
    paginationItems = _usePaginationItems.items,
    noMore = _usePaginationItems.noMore,
    loadMore = _usePaginationItems.loadMore;
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Style, {}), /*#__PURE__*/_jsxs(StickToBottom, {
      enabled: !!smooth || !initial,
      id: props.id,
      className: cls("".concat(prefixCls, "-wrapper"), (_props$classNames = props.classNames) === null || _props$classNames === void 0 ? void 0 : _props$classNames.wrapper),
      resize: resize,
      initial: "instant",
      style: props.style,
      children: [/*#__PURE__*/_jsx(BubbleListContent, {
        items: items,
        paginationItems: paginationItems,
        noMore: noMore,
        loadMore: loadMore,
        prefixCls: prefixCls,
        listClassName: (_props$classNames2 = props.classNames) === null || _props$classNames2 === void 0 ? void 0 : _props$classNames2.list,
        children: props.children
      }), /*#__PURE__*/_jsx(ScrollToBottom, {
        ref: scrollToBottomRef
      })]
    })]
  });
};
var ForwardBubbleList = /*#__PURE__*/React.forwardRef(BubbleList);
export default ForwardBubbleList;