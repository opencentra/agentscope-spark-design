import createGlobalStyle from '@/libs/createStyle';

export const useBreadcrumbStyle = createGlobalStyle`
.${(p) => p.antPrefix}-breadcrumb {
  .${(p) => p.antPrefix}-breadcrumb-link {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    color: var(--${(p) => p.antPrefix}-color-text-secondary);
  }
  
  li:last-child {
    color: var(--${(p) => p.antPrefix}-color-text);
  }
}
`;

export default useBreadcrumbStyle;
