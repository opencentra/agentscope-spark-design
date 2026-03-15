import createGlobalStyle from '@/libs/createStyle';

export const useFloatButtonStyle = createGlobalStyle`
/* 取消所有button的boxShadow */
.${(p) => p.antPrefix}-float-btn {
  box-shadow: var(--${(p) => p.antPrefix}-box-shadow);
  
  &.${(p) => p.antPrefix}-float-btn-default {
    border: 1px solid var(--${(p) => p.antPrefix}-color-border-secondary);
  }
}
`;

export default useFloatButtonStyle;
