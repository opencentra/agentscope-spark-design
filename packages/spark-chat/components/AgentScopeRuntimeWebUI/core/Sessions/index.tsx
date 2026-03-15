import { useContextSelector } from "use-context-selector";
import { ChatAnywhereSessionsContext, useChatAnywhereSessions } from "../Context/ChatAnywhereSessionsContext";
import { Button, IconButton, Tooltip } from "@agentscope-ai/design";
import { ChatAnywhereInputContext } from "../Context/ChatAnywhereInputContext";
import { useProviderContext } from "@agentscope-ai/chat";
import { useChatAnywhereOptions } from "../Context/ChatAnywhereOptionsContext";
import React, { useContext, useMemo, useState } from "react";
import { SparkDeleteLine, SparkOperateLeftLine, SparkOperateRightLine, SparkPlusLine, SparkTimeLine } from "@agentscope-ai/icons";
import { HistoryPanel } from '@agentscope-ai/chat';
import { ChatAnyWhereLayoutContext } from "../Context/ChatAnywhereLayoutContext";
import cls from 'classnames';


export default function Sessions() {
  const { collapsed } = useContext(ChatAnyWhereLayoutContext);
  const prefixCls = useProviderContext().getPrefixCls('chat-anywhere-sessions');
  const leftHeader = useChatAnywhereOptions(v => v.theme?.leftHeader) || {};

  return <>
    <div className={`${prefixCls}`}>
      {
        React.isValidElement(leftHeader) ? leftHeader : <InnerHeader />
      }
      <div className={`${prefixCls}-content`} style={{ display: collapsed ? 'none' : 'flex' }}>
        <InnerAdder />
        <InnerList />
      </div>
    </div>
  </>;
}


export function InnerHeader({ className }: { className?: string }) {
  const leftHeader = useChatAnywhereOptions(v => v.theme?.leftHeader) || {};
  const prefixCls = useProviderContext().getPrefixCls('chat-anywhere-sessions');
  const { toggleCollapsed, collapsed } = useContext(ChatAnyWhereLayoutContext);
  const multiple = useChatAnywhereOptions(v => v.session.multiple);


  const {
    logo = 'https://img.alicdn.com/imgextra/i2/O1CN01lmoGYn1kjoXATy4PX_!!6000000004720-2-tps-200-200.png',
    title = 'Runtime WebUI'
  } = leftHeader as { logo?: string; title?: string };

  return <>
    <div className={cls(`${prefixCls}-header`, className)}>
      <div className={`${prefixCls}-header-left`}>
        {
          logo && <img src={logo} alt="logo" height={32} />
        }
        <span>{title}</span>
      </div>

      {
        multiple && <IconButton
          className={`${prefixCls}-header-collapse`}
          bordered={false}
          icon={!collapsed ? <SparkOperateLeftLine /> : <SparkOperateRightLine />}
          onClick={toggleCollapsed}
        />
      }
    </div>
  </>
}

export function InnerAdder(props: { style?: React.CSSProperties; narrowMode?: boolean }) {
  const loading = useContextSelector(ChatAnywhereInputContext, v => v.loading);
  const { createSession, createTemporarySession } = useChatAnywhereSessions();
  const prefixCls = useProviderContext().getPrefixCls('chat-anywhere-sessions');
  const { toggleCollapsed } = useContext(ChatAnyWhereLayoutContext);

  return <div className={`${prefixCls}-adder`} style={props.style}>
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Button block type="primary" icon={<SparkPlusLine />} disabled={!!loading} onClick={async () => {
        await createSession();
        if (props.narrowMode) {
          toggleCollapsed();
        }
      }}>
        New Chat
      </Button>
      <Tooltip title="Temporary chat">
        <IconButton
          icon={<SparkTimeLine />}
          disabled={!!loading}
          onClick={async () => {
            if (createTemporarySession) {
              await createTemporarySession();
            }
            if (props.narrowMode) {
              toggleCollapsed();
            }
          }}
        />
      </Tooltip>
    </div>
  </div>
}

export function InnerList(props: { style?: React.CSSProperties, narrowMode?: boolean }) {
  const prefixCls = useProviderContext().getPrefixCls('chat-anywhere-sessions');
  const sessions = useContextSelector(ChatAnywhereSessionsContext, v => v.sessions);
  const { changeCurrentSessionId, removeSession, clearAllSessions } = useChatAnywhereSessions();
  const currentSessionId = useContextSelector(ChatAnywhereSessionsContext, v => v.currentSessionId);
  const { toggleCollapsed } = useContext(ChatAnyWhereLayoutContext);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  const items = useMemo(() => sessions.map(session => ({
    key: session.id,
    label: session.name || 'New Chat',
  })), [sessions]);

  const handleClearAll = async () => {
    if (clearAllSessions) {
      await clearAllSessions();
    }
    setShowClearConfirm(false);
  };


  return <div className={`${prefixCls}-list`} style={props.style}>
    {sessions.length > 0 && (
      <div style={{ padding: '8px 0', borderBottom: '1px solid var(--color-border-secondary)' }}>
        <Tooltip title="Clear all chat history">
          <Button
            block
            type="text"
            danger
            size="small"
            icon={<SparkDeleteLine />}
            onClick={() => setShowClearConfirm(true)}
            style={{ justifyContent: 'flex-start' }}
          >
            Clear History
          </Button>
        </Tooltip>
        {showClearConfirm && (
          <div style={{ padding: '8px', background: 'var(--color-bg-layout)', marginTop: 4, borderRadius: 4 }}>
            <div style={{ marginBottom: 8, fontSize: 12 }}>Clear all chat history?</div>
            <div style={{ display: 'flex', gap: 8 }}>
              <Button size="small" onClick={() => setShowClearConfirm(false)}>Cancel</Button>
              <Button size="small" type="primary" danger onClick={handleClearAll}>Clear</Button>
            </div>
          </div>
        )}
      </div>
    )}
    <HistoryPanel items={items}
      menu={[
        {
          key: 'delete',
          icon: <SparkDeleteLine />,
          danger: true,
          onClick: async (session) => await removeSession({ id: session.key }),
        },
      ]}
      activeKey={currentSessionId}
      onActiveChange={(key) => {
        changeCurrentSessionId(key);
        if (props.narrowMode) {
          toggleCollapsed();
        }
      }}
    />
  </div>;
}