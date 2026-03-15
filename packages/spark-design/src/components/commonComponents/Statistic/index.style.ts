import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.antPrefix}-statistic {
  .${(p) => p.antPrefix}-statistic-title {
    color: var(--${(p) => p.antPrefix}-color-text-tertiary);
    line-height: 24px;
    margin-bottom: 0;
  }
  
  .${(p) => p.antPrefix}-statistic-content {
    color: var(--${(p) => p.antPrefix}-color-text);
    line-height: 36px;
  }
}
`;
