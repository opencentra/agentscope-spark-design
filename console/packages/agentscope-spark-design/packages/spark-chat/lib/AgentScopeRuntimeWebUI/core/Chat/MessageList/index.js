import { Bubble, useProviderContext } from "../../../..";
import { ChatAnywhereMessagesContext } from "../../Context/ChatAnywhereMessagesContext";
import { useContextSelector } from "use-context-selector";
import { ChatAnywhereSessionsContext } from "../../Context/ChatAnywhereSessionsContext";
import cls from 'classnames';
import Welcome from "../Welcome";
import { ChatAnywhereInputContext } from "../../Context/ChatAnywhereInputContext";
import { jsx as _jsx } from "react/jsx-runtime";
export default function MessageList(props) {
  var loading = useContextSelector(ChatAnywhereInputContext, function (v) {
    return v.loading;
  });
  var messages = useContextSelector(ChatAnywhereMessagesContext, function (v) {
    return v.messages;
  });
  var prefixCls = useProviderContext().getPrefixCls('chat-anywhere-message-list');
  var currentSessionId = useContextSelector(ChatAnywhereSessionsContext, function (v) {
    return v.currentSessionId;
  });
  if (messages.length === 0) return /*#__PURE__*/_jsx("div", {
    className: cls(prefixCls, "".concat(prefixCls, "-welcome")),
    children: /*#__PURE__*/_jsx(Welcome, {
      onSubmit: props.onSubmit
    })
  });
  return /*#__PURE__*/_jsx(Bubble.List, {
    smooth: !!loading,
    pagination: true,
    classNames: {
      wrapper: prefixCls
    },
    items: messages
  }, currentSessionId);
}