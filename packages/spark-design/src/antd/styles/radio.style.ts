import createGlobalStyle from '@/libs/createStyle';

export const useRadioStyle = createGlobalStyle`
.${(p) => p.antPrefix}-radio-button-wrapper {
  .${(p) => p.antPrefix}-wave {
    display: none !important;
  }
}

.${(p) => p.antPrefix}-radio-wrapper {
  .${(p) => p.antPrefix}-radio-inner {
    border-color: var(--${(p) => p.antPrefix}-color-border-secondary);
  }
  
  .${(p) => p.antPrefix}-radio-disabled {
    .${(p) => p.antPrefix}-radio-inner {
      border-color: var(--${(p) => p.antPrefix}-color-border-secondary);
    }
    
    &.${(p) => p.antPrefix}-radio-checked {
      .${(p) => p.antPrefix}-radio-inner {
        background-color: var(--${(p) => p.antPrefix}-color-border-secondary);
        
        &::after {
          background-color: var(--${(p) => p.antPrefix}-color-bg-base);
        }
      }
    }
  }
}
`;

export default useRadioStyle;
