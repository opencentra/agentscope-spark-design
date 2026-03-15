import createGlobalStyle from '@/libs/createStyle';

export const usePopoverStyle = createGlobalStyle`
.${(p) => p.antPrefix}-popover {
  .${(p) => p.antPrefix}-popover-inner {
    max-width: 500px;
    padding: 12px 16px;
    box-shadow: var(--${(p) => p.antPrefix}-box-shadow);
    border: 1px solid var(--${(p) => p.antPrefix}-color-border-secondary);
    
    .${(p) => p.antPrefix}-popover-title {
      margin-bottom: 4px;
    }
  }
}
`;

export default usePopoverStyle;
