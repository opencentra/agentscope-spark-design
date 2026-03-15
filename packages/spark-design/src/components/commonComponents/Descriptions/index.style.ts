import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.antPrefix}-descriptions {
  .${(p) => p.antPrefix}-descriptions-item-label {
    color: var(--${(p) => p.antPrefix}-color-text-tertiary);
  }
  
  .${(p) => p.antPrefix}-descriptions-item-content {
    color: var(--${(p) => p.antPrefix}-color-text);
  }
  
  .${(p) => p.antPrefix}-descriptions-item-label,
  .${(p) => p.antPrefix}-descriptions-item-content {
    line-height: 24px;
  }
}

.${(p) => p.antPrefix}-descriptions-vertical {
  .${(p) => p.antPrefix}-descriptions-item:has(.${(p) =>
  p.antPrefix}-descriptions-item-label) {
    padding-bottom: var(--${(p) =>
      p.antPrefix}-descriptions-vertical-label-padding-bottom);
  }
  
  .${(p) => p.antPrefix}-descriptions-item:has(.${(p) =>
  p.antPrefix}-descriptions-item-content) {
    padding-bottom: var(--${(p) =>
      p.antPrefix}-descriptions-vertical-content-padding-bottom);
  }
}
`;
