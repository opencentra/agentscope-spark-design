import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.antPrefix}-input-outlined,
.${(p) => p.antPrefix}-input-outlined.${(p) => p.antPrefix}-input-disabled,
.${(p) => p.antPrefix}-input-outlined[disabled] {
  border-color: var(--${(p) => p.antPrefix}-color-border-secondary);
}

.${(p) => p.antPrefix}-input-outlined {
  background-color: var(--${(p) => p.antPrefix}-color-bg-base);
}

.${(p) => p.antPrefix}-input {
  font-weight: 400;
  border-radius: 6px;
  
  .${(p) => p.antPrefix}-input-show-count-suffix,
  .${(p) => p.antPrefix}-input-data-count-suffix {
    color: var(--${(p) => p.antPrefix}-color-text-tertiary);
  }
  
  &::placeholder {
    color: var(--${(p) => p.antPrefix}-color-text-tertiary);
  }
}

/* prefix间距 */
.${(p) => p.antPrefix}-input-affix-wrapper {
  .${(p) => p.antPrefix}-input-prefix {
    margin-inline-end: 8px;
    color: var(--${(p) => p.antPrefix}-color-text-tertiary);
  }
}

.${(p) => p.antPrefix}-input-affix-wrapper .${(p) =>
  p.antPrefix}-input-clear-icon {
  font-size: 15px;
}

.${(p) => p.antPrefix}-input-round {
  border-radius: 999px;
}

.${(p) => p.antPrefix}-text-area {
  border-color: var(--${(p) => p.antPrefix}-color-border-secondary);
}

.${(p) => p.antPrefix}-input-sm {
  height: 24px;
  font-size: 12px;
}
`;
