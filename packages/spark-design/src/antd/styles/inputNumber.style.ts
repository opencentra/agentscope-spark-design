import createGlobalStyle from '@/libs/createStyle';

export const useInputNumberStyle = createGlobalStyle`
.${(p) => p.antPrefix}-input-number {
  background-color: var(--${(p) => p.antPrefix}-color-bg-base);
}

.${(p) => p.antPrefix}-input-number-disabled {
  background-color: var(--${(p) => p.antPrefix}-color-fill-tertiary) !important;
}

.${(p) => p.antPrefix}-input-number-outlined,
.${(p) => p.antPrefix}-input-number-outlined.${(p) =>
  p.antPrefix}-input-number-disabled {
  border-color: var(--${(p) => p.antPrefix}-color-border-secondary);
}

.${(p) => p.antPrefix}-input-number-sm {
  font-size: 12px;
  height: 24px;
}
`;

export default useInputNumberStyle;
