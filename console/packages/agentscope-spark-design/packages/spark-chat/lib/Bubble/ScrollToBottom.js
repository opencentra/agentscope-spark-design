import React from 'react';
import { useProviderContext } from "./..";
import cls from 'classnames';
import { useStickToBottomContext } from "../StickToBottom";
import { IconButton } from '@agentscope-ai/design';
import { SparkDownArrowLine } from '@agentscope-ai/icons';
import { jsx as _jsx } from "react/jsx-runtime";
var ScrollToBottomButton = function ScrollToBottomButton(_, ref) {
  var _useProviderContext = useProviderContext(),
    getPrefixCls = _useProviderContext.getPrefixCls;
  var _useStickToBottomCont = useStickToBottomContext(),
    isAtBottom = _useStickToBottomCont.isAtBottom,
    scrollToBottom = _useStickToBottomCont.scrollToBottom;
  React.useImperativeHandle(ref, function () {
    return {
      scrollToBottom: function (_scrollToBottom) {
        function scrollToBottom(_x) {
          return _scrollToBottom.apply(this, arguments);
        }
        scrollToBottom.toString = function () {
          return _scrollToBottom.toString();
        };
        return scrollToBottom;
      }(function (options) {
        options = options || {
          animation: 'instant'
        };
        scrollToBottom(options);
      })
    };
  });
  var prefixCls = getPrefixCls('bubble-list-scroll-to-bottom');
  return /*#__PURE__*/_jsx("div", {
    className: cls(prefixCls, "".concat(prefixCls, "-").concat(!isAtBottom ? 'show' : 'hide')),
    children: /*#__PURE__*/_jsx(IconButton, {
      icon: /*#__PURE__*/_jsx(SparkDownArrowLine, {}),
      shape: "circle",
      onClick: function onClick() {
        return scrollToBottom({
          animation: 'instant'
        });
      }
    })
  });
};
export default /*#__PURE__*/React.forwardRef(ScrollToBottomButton);