import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`

.${(p) => p.antPrefix}-anchor-wrapper .${(p) => p.antPrefix}-anchor .${(p) =>
  p.antPrefix}-anchor-link-title {
  color: var(--${(p) => p.antPrefix}-color-text-secondary);
  line-height: 32px;
  padding: 0 16px;
}

.${(p) => p.antPrefix}-anchor-link {
  --${(p) => p.antPrefix}-anchor-link-padding-block: 0;
  --${(p) => p.antPrefix}-anchor-link-padding-inline-start: 0;
}
`;
