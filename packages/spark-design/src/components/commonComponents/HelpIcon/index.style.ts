import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.sparkPrefix}-help-icon {
  color: var(--${(p) => p.antPrefix}-color-text-tertiary);
}

.${(p) => p.blPrefix}-info-icon {
  color: var(--${(p) => p.antPrefix}-color-icon);
  margin-left: var(--${(p) => p.antPrefix}-margin-xxs);
  font-size: 14px;
  
  &.${(p) => p.blPrefix}-info-icon-no-margin {
    margin: 0;
  }
}
`;
