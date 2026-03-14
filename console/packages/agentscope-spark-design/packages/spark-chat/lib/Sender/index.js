function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["styles", "classNames", "className", "rootClassName", "style", "defaultValue", "value", "readOnly", "enableFocusExpand", "sendDisabled", "submitType", "onSubmit", "loading", "onCancel", "onChange", "onFocus", "onBlur", "actions", "onKeyPress", "onKeyDown", "disabled", "header", "onPaste", "allowSpeech", "onPasteFile", "components", "initialRows", "scalable"];
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { Flex, Input } from 'antd';
import classnames from 'classnames';
import { useMergedState } from 'rc-util';
import pickAttrs from 'rc-util/lib/pickAttrs';
import getValue from 'rc-util/lib/utils/get';
import React, { useState } from 'react';
import { useFocusWithin, useEventListener } from 'ahooks';
import useProxyImperativeHandle from "../Util/hooks/use-proxy-imperative-handle";
import { useProviderContext } from "./..";
import SenderHeader, { SendHeaderContext } from "./SenderHeader";
import { ActionButtonContext } from "./components/ActionButton";
import ClearButton from "./components/ClearButton";
import LoadingButton from "./components/LoadingButton";
import SendButton from "./components/SendButton";
import SpeechButton from "./components/SpeechButton";
import Style from "./style";
import useSpeech from "./useSpeech";
import ModeSelect from "./ModeSelect";
import { SparkEnlargeLine, SparkShrinkLine } from '@agentscope-ai/icons';
import { IconButton } from '@agentscope-ai/design';
import BeforeUIContainer from "./BeforeUIContainer";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
function getComponent(components, path, defaultComponent) {
  return getValue(components, path) || defaultComponent;
}
var ForwardSender = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _ref = props,
    _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    _ref$classNames = _ref.classNames,
    classNames = _ref$classNames === void 0 ? {} : _ref$classNames,
    className = _ref.className,
    rootClassName = _ref.rootClassName,
    style = _ref.style,
    defaultValue = _ref.defaultValue,
    value = _ref.value,
    readOnly = _ref.readOnly,
    _ref$enableFocusExpan = _ref.enableFocusExpand,
    enableFocusExpand = _ref$enableFocusExpan === void 0 ? false : _ref$enableFocusExpan,
    _ref$sendDisabled = _ref.sendDisabled,
    sendDisabled = _ref$sendDisabled === void 0 ? false : _ref$sendDisabled,
    _ref$submitType = _ref.submitType,
    submitType = _ref$submitType === void 0 ? 'enter' : _ref$submitType,
    onSubmit = _ref.onSubmit,
    loading = _ref.loading,
    onCancel = _ref.onCancel,
    onChange = _ref.onChange,
    _onFocus = _ref.onFocus,
    _onBlur = _ref.onBlur,
    actions = _ref.actions,
    onKeyPress = _ref.onKeyPress,
    onKeyDown = _ref.onKeyDown,
    disabled = _ref.disabled,
    header = _ref.header,
    onPaste = _ref.onPaste,
    allowSpeech = _ref.allowSpeech,
    onPasteFile = _ref.onPasteFile,
    components = _ref.components,
    _ref$initialRows = _ref.initialRows,
    initialRows = _ref$initialRows === void 0 ? 2 : _ref$initialRows,
    scalable = _ref.scalable,
    rest = _objectWithoutProperties(_ref, _excluded);
  var zoomable = scalable;
  var _useState = useState(zoomable ? false : undefined),
    _useState2 = _slicedToArray(_useState, 2),
    zoom = _useState2[0],
    setZoom = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    focus = _useState4[0],
    setFocus = _useState4[1];
  var autoSize = React.useMemo(function () {
    return zoom ? {
      maxRows: 5,
      minRows: 5
    } : {
      maxRows: 5,
      minRows: initialRows
    };
  }, [zoomable, zoom]);
  var _useProviderContext = useProviderContext(),
    direction = _useProviderContext.direction,
    getPrefixCls = _useProviderContext.getPrefixCls;
  var prefixCls = getPrefixCls('sender');
  var containerRef = React.useRef(null);
  var inputRef = React.useRef(null);
  useProxyImperativeHandle(ref, function () {
    var _inputRef$current, _inputRef$current2;
    return {
      nativeElement: containerRef.current,
      focus: (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus,
      blur: (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.blur
    };
  });
  useFocusWithin(containerRef, {
    onFocus: function onFocus(e) {
      setFocus(true);
      _onFocus === null || _onFocus === void 0 || _onFocus();
    },
    onBlur: function onBlur() {
      if (containerRef.current && !containerRef.current.contains(document.activeElement)) {
        setFocus(false);
        _onBlur === null || _onBlur === void 0 || _onBlur();
      }
    }
  });
  useEventListener('click', function (e) {
    setFocus(true);
    _onFocus === null || _onFocus === void 0 || _onFocus();
  }, {
    target: containerRef
  });
  var inputCls = "".concat(prefixCls, "-input");
  var mergedCls = classnames(prefixCls, className, rootClassName, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), "".concat(prefixCls, "-disabled"), disabled), "".concat(prefixCls, "-focus"), focus && enableFocusExpand), "".concat(prefixCls, "-blur"), !focus && enableFocusExpand));
  var actionBtnCls = "".concat(prefixCls, "-actions-btn");
  var actionListCls = "".concat(prefixCls, "-actions-list");
  var _useMergedState = useMergedState(defaultValue || '', {
      value: value
    }),
    _useMergedState2 = _slicedToArray(_useMergedState, 2),
    innerValue = _useMergedState2[0],
    setInnerValue = _useMergedState2[1];
  var triggerValueChange = function triggerValueChange(nextValue, event) {
    setInnerValue(nextValue);
    if (onChange) {
      onChange(nextValue, event);
    }
  };
  var _useSpeech = useSpeech(function (transcript) {
      triggerValueChange("".concat(innerValue, " ").concat(transcript));
    }, allowSpeech),
    _useSpeech2 = _slicedToArray(_useSpeech, 3),
    speechPermission = _useSpeech2[0],
    triggerSpeech = _useSpeech2[1],
    speechRecording = _useSpeech2[2];
  var InputTextArea = getComponent(components, ['input'], Input.TextArea);
  var domProps = pickAttrs(rest, {
    attr: true,
    aria: true,
    data: true
  });
  var inputProps = _objectSpread(_objectSpread({}, domProps), {}, {
    ref: inputRef
  });

  // ============================ Events ============================
  var triggerSend = function triggerSend() {
    if (!contextValue.onSendDisabled && onSubmit && !loading) {
      onSubmit(innerValue);
    }
  };
  var triggerClear = function triggerClear() {
    triggerValueChange('');
  };

  // ============================ Submit ============================
  var isCompositionRef = React.useRef(false);
  var onInternalCompositionStart = function onInternalCompositionStart() {
    isCompositionRef.current = true;
  };
  var onInternalCompositionEnd = function onInternalCompositionEnd() {
    isCompositionRef.current = false;
  };
  var onInternalKeyPress = function onInternalKeyPress(e) {
    var canSubmit = e.key === 'Enter' && !isCompositionRef.current;

    // Check for `submitType` to submit
    switch (submitType) {
      case 'enter':
        if (canSubmit && !e.shiftKey) {
          e.preventDefault();
          triggerSend();
        }
        break;
      case 'shiftEnter':
        if (canSubmit && e.shiftKey) {
          e.preventDefault();
          triggerSend();
        }
        break;
    }
    if (onKeyPress) {
      onKeyPress(e);
    }
  };
  var onInternalPaste = function onInternalPaste(e) {
    var _e$clipboardData;
    if (!onPasteFile) {
      onPaste === null || onPaste === void 0 || onPaste(e);
      return;
    }
    // Try to get files from clipboardData.files
    var files = Array.from(((_e$clipboardData = e.clipboardData) === null || _e$clipboardData === void 0 ? void 0 : _e$clipboardData.files) || []);
    if (files.length === 0) {
      var _e$clipboardData2;
      var items = Array.from(((_e$clipboardData2 = e.clipboardData) === null || _e$clipboardData2 === void 0 ? void 0 : _e$clipboardData2.items) || []);
      files = items.filter(function (item) {
        return item.kind === 'file';
      }).map(function (item) {
        return item.getAsFile();
      }).filter(function (file) {
        return file !== null;
      });
    }
    if (files.length > 0) {
      files.forEach(function (file) {
        return onPasteFile(file);
      });
      e.preventDefault();
    } else {
      onPaste === null || onPaste === void 0 || onPaste(e);
    }
  };

  // ============================ Focus =============================
  var onContentMouseDown = function onContentMouseDown(e) {
    var _containerRef$current, _inputRef$current3;
    // If input focused but click on the container,
    // input will lose focus.
    // We call `preventDefault` to prevent this behavior
    if (e.target !== ((_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.querySelector(".".concat(inputCls)))) {
      e.preventDefault();
    }
    (_inputRef$current3 = inputRef.current) === null || _inputRef$current3 === void 0 || _inputRef$current3.focus();
  };
  var prefix = React.useMemo(function () {
    var nodes = Array.isArray(props.prefix) ? _toConsumableArray(props.prefix) : [props.prefix];
    if (zoomable) {
      nodes.push( /*#__PURE__*/_jsx(IconButton, {
        onClick: function onClick() {
          return setZoom(!zoom);
        },
        bordered: false,
        icon: zoom ? /*#__PURE__*/_jsx(SparkShrinkLine, {}) : /*#__PURE__*/_jsx(SparkEnlargeLine, {})
      }, "zoom"));
    }
    return nodes;
  }, [props.prefix, zoomable, zoom, allowSpeech]);
  var actionNode = /*#__PURE__*/_jsx(Flex, {
    className: "".concat(actionListCls, "-presets"),
    children: loading ? /*#__PURE__*/_jsx(LoadingButton, {
      loading: loading,
      disabled: !!disabled
    }) : /*#__PURE__*/_jsx(SendButton, {
      disabled: !!disabled
    })
  });
  if (typeof actions === 'function') {
    actionNode = actions(actionNode, {
      components: {
        SendButton: SendButton,
        ClearButton: ClearButton,
        LoadingButton: LoadingButton
      }
    });
  } else if (actions) {
    actionNode = actions;
  }
  var contextValue = {
    prefixCls: actionBtnCls,
    onSend: triggerSend,
    onSendDisabled: !innerValue || !innerValue.trim() || sendDisabled,
    onClear: triggerClear,
    onClearDisabled: !innerValue,
    onCancel: onCancel,
    onCancelDisabled: !loading,
    onSpeech: function onSpeech() {
      return triggerSpeech(false);
    },
    onSpeechDisabled: !speechPermission,
    speechRecording: speechRecording,
    disabled: !!disabled
  };
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Style, {}), /*#__PURE__*/_jsxs("div", {
      ref: containerRef,
      className: mergedCls,
      style: style,
      children: [header && /*#__PURE__*/_jsx(SendHeaderContext.Provider, {
        value: {
          prefixCls: prefixCls,
          focus: focus,
          enableFocusExpand: enableFocusExpand
        },
        children: header
      }), /*#__PURE__*/_jsxs("div", {
        className: "".concat(prefixCls, "-content"),
        children: [/*#__PURE__*/_jsx(InputTextArea, _objectSpread(_objectSpread({}, inputProps), {}, {
          disabled: !!disabled,
          style: styles.input,
          className: classnames(inputCls, classNames.input),
          autoSize: autoSize,
          value: innerValue.slice(0, props.maxLength || Number.MAX_SAFE_INTEGER),
          onChange: function onChange(event) {
            triggerValueChange(event.target.value, event);
            triggerSpeech(true);
          },
          onPressEnter: onInternalKeyPress,
          onCompositionStart: onInternalCompositionStart,
          onCompositionEnd: onInternalCompositionEnd,
          onKeyDown: onKeyDown,
          onPaste: onInternalPaste,
          variant: "borderless",
          readOnly: readOnly
        })), /*#__PURE__*/_jsxs("div", {
          className: "".concat(prefixCls, "-content-bottom"),
          children: [prefix.length > 0 && /*#__PURE__*/_jsx("div", {
            className: classnames("".concat(prefixCls, "-prefix"), classNames.prefix),
            style: styles.prefix,
            children: /*#__PURE__*/_jsxs(Flex, {
              gap: 8,
              children: [allowSpeech && /*#__PURE__*/_jsx(ActionButtonContext.Provider, {
                value: contextValue,
                children: /*#__PURE__*/_jsx(SpeechButton, {})
              }), prefix]
            })
          }), /*#__PURE__*/_jsxs("div", {
            className: classnames(actionListCls, classNames.actions),
            style: styles.actions,
            children: [props.maxLength ? /*#__PURE__*/_jsxs("div", {
              className: "".concat(actionListCls, "-length"),
              children: [innerValue.length, "/", props.maxLength]
            }) : null, /*#__PURE__*/_jsx(ActionButtonContext.Provider, {
              value: contextValue,
              children: actionNode
            })]
          })]
        })]
      })]
    })]
  });
});
var Sender = ForwardSender;
Sender.Header = SenderHeader;
Sender.ModeSelect = ModeSelect;
Sender.BeforeUIContainer = BeforeUIContainer;
export default Sender;