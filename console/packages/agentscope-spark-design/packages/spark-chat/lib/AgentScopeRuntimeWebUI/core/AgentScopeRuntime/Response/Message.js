import React from "react";
import { Markdown } from "../../../..";
import { AgentScopeRuntimeContentType, AgentScopeRuntimeRunStatus } from "../types";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
var Message = /*#__PURE__*/React.memo(function (_ref) {
  var _data$content;
  var data = _ref.data;
  if (!((_data$content = data.content) !== null && _data$content !== void 0 && _data$content.length)) return null;
  return /*#__PURE__*/_jsx(_Fragment, {
    children: data.content.map(function (item, index) {
      switch (item.type) {
        case AgentScopeRuntimeContentType.TEXT:
          return /*#__PURE__*/_jsx(Markdown, {
            content: item.text,
            cursor: item.status === AgentScopeRuntimeRunStatus.InProgress ? true : false
          }, index);
        case AgentScopeRuntimeContentType.REFUSAL:
          return /*#__PURE__*/_jsx(Markdown, {
            raw: true,
            content: item.refusal
          }, index);
        default:
          return /*#__PURE__*/_jsx("div", {
            children: JSON.stringify(item)
          }, index);
      }
    })
  });
});
export default Message;