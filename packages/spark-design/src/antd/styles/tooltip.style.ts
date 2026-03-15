import createGlobalStyle from '@/libs/createStyle';

export const useTooltipStyle = createGlobalStyle`
.${(p) => p.antPrefix}-tooltip {
  .${(p) => p.antPrefix}-tooltip-inner {
    border: 1px solid var(--${(p) => p.antPrefix}-color-border-secondary);
    box-shadow: var(--${(p) => p.antPrefix}-box-shadow);
  }
}
`;

export default useTooltipStyle;
