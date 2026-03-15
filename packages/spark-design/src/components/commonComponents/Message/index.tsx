import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import { message, MessageArgsProps } from 'antd';
import { ConfigOptions, NoticeType } from 'antd/es/message/interface';

export interface SparkMessageArgsProps extends MessageArgsProps {
  // viewLink?: string;
  /**
   * @description 显示的内容
   * @descriptionEn content to be displayed
   * @default ""
   */
  conent?: string;
}

export type JointContent = string | SparkMessageArgsProps;

const types = {
  success: {
    type: 'success',
    icon: <CheckCircleOutlined />,
  },
  warning: {
    type: 'warning',
    icon: <ExclamationCircleOutlined />,
  },
  error: {
    type: 'error',
    icon: <CloseCircleOutlined />,
  },
  info: {
    type: 'info',
    icon: <InfoCircleOutlined />,
  },
};

const open = (type: NoticeType, props: JointContent) => {
  let messageProps: MessageArgsProps;
  if (typeof props === 'string') {
    messageProps = { content: props };
  } else {
    messageProps = { ...props };
  }
  const { content, ...restProps } = messageProps;
  message.open({
    type,
    content,
    icon: type === 'loading' ? undefined : types[type]?.icon,
    ...restProps,
  });
};

const useMessage = (config?: ConfigOptions) => {
  const [messageApi, contextHolder] = message.useMessage(config);
  const openApi = (type: NoticeType, options: JointContent) => {
    let newOptions: MessageArgsProps;
    if (typeof options === 'string') {
      newOptions = { content: options, type };
    } else {
      newOptions = { ...options, type };
    }
    messageApi[type]({ ...newOptions, icon: types[type]?.icon });
  };
  const newMessageApi = {
    ...messageApi,
    success: (options: JointContent) => openApi('success', options),
    warning: (options: JointContent) => openApi('warning', options),
    error: (options: JointContent) => openApi('error', options),
    info: (options: JointContent) => openApi('info', options),
    loading: (options: JointContent) => openApi('loading', options),
  };
  return [newMessageApi, contextHolder] as [
    typeof newMessageApi,
    typeof contextHolder,
  ];
};

export default {
  ...message,
  success: (props: JointContent) => open('success', props),
  warning: (props: JointContent) => open('warning', props),
  error: (props: JointContent) => open('error', props),
  info: (props: JointContent) => open('info', props),
  loading: (props: JointContent) => open('loading', props),
  useMessage,
};
