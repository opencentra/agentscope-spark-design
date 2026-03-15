import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.sparkPrefix}-checkbox {
  .${(p) => p.antPrefix}-checkbox-wrapper-disabled {
    .${(p) => p.antPrefix}-checkbox-label {
      color: var(--${(p) => p.antPrefix}-color-text);
    }
  }
  
  .${(p) => p.antPrefix}-checkbox-inner {
    border: 1px solid var(--${(p) => p.antPrefix}-color-border-secondary);
  }
  
  .${(p) => p.antPrefix}-checkbox-wrapper:hover {
    .${(p) => p.antPrefix}-checkbox-inner {
      border-color: var(--${(p) => p.antPrefix}-color-border-secondary);
    }
  }
  
  .${(p) => p.antPrefix}-checkbox-checked {
    .${(p) => p.antPrefix}-checkbox-inner {
      border-color: var(--${(p) => p.antPrefix}-color-primary);
      background-color: var(--${(p) => p.antPrefix}-color-primary);
    }
  }
  
  .${(p) => p.antPrefix}-checkbox-checked.${(p) =>
  p.antPrefix}-checkbox-disabled {
    .${(p) => p.antPrefix}-checkbox-inner {
      background-color: var(--${(p) => p.antPrefix}-color-fill-disable);
      border-color: var(--${(p) => p.antPrefix}-color-fill-disable);
      
      &::after {
        border-color: var(--${(p) => p.antPrefix}-color-text-white);
      }
    }
  }
  
  .${(p) => p.antPrefix}-checkbox-disabled {
    .${(p) => p.antPrefix}-checkbox-inner {
      background-color: var(--${(p) => p.antPrefix}-color-fill-secondary);
      border-color: var(--${(p) => p.antPrefix}-color-fill-secondary);
    }
  }
}
`;
