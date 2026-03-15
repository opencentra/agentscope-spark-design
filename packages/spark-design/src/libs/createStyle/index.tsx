import { useCommonConfig } from '@agentscope-ai/design/config';
import {
  CSSStyle,
  createGlobalStyle as originCreateGlobalStyle,
} from 'antd-style';
import { GlobalTheme } from 'antd-style/lib/factories/createGlobalStyle';
import { useRef } from 'react';

export default function createGlobalStyle(
  ...styles: CSSStyle<
    GlobalTheme & { sparkPrefix: string; antPrefix: string; blPrefix: string }
  >
) {
  return function () {
    const { sparkPrefix, antPrefix, blPrefix } = useCommonConfig();
    // @ts-ignore
    const Style = originCreateGlobalStyle(...styles);
    const ref = useRef(function () {
      // @ts-ignore
      return (
        <Style
          // @ts-ignore
          sparkPrefix={sparkPrefix}
          antPrefix={antPrefix}
          blPrefix={blPrefix}
        />
      );
    });
    return ref.current;
  };
}
