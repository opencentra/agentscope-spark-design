import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.sparkPrefix}-switch {
  background: var(--${(p) => p.antPrefix}-color-primary-bg);
  background-image: none !important;
  
  &.${(p) => p.antPrefix}-switch-checked {
    background: var(--${(p) => p.antPrefix}-color-primary);
  }
  
  &.${(p) => p.antPrefix}-switch-disabled {
    opacity: 1;
    background: var(--${(p) => p.antPrefix}-color-fill-disable);
    
    &.${(p) => p.antPrefix}-switch-checked {
      background: var(--${(p) => p.antPrefix}-color-primary-border-hover);
    }
  }
}

.${(p) => p.sparkPrefix}-switch-label {
  font-size: 14px;
  font-weight: 500;
}
`;
