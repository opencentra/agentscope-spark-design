import createGlobalStyle from '@/libs/createStyle';

export const useMessageStyle = createGlobalStyle`
.${(p) => p.antPrefix}-message-notice-content {
  border: 1px solid var(--${(p) => p.antPrefix}-color-border-secondary);
}
`;

export default useMessageStyle;
