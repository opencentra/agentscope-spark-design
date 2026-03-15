import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.antPrefix}-card {
  border-radius: 6px;
  background-color: var(--${(p) => p.antPrefix}-color-bg-base);
  border: 1px solid var(--${(p) => p.antPrefix}-color-border-secondary);
}

.${(p) => p.sparkPrefix}-card {
  transition: box-shadow 0.4s ease;
  cursor: pointer;
  
  .${(p) => p.antPrefix}-card-body {
    padding: 0;
  }
  
  &:hover {
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.08);
  }
}

.${(p) => p.sparkPrefix}-card-wrapper {
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  gap: 4px;
  
  > *:only-child {
    gap: 0;
  }
  
  .${(p) => p.sparkPrefix}-title {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    /* 中性色/color-text */
    color: var(--${(p) => p.antPrefix}-color-text);
  }
  
  .${(p) => p.sparkPrefix}-info {
    font-size: 12px;
    font-weight: normal;
    line-height: 18px;
    color: var(--${(p) => p.antPrefix}-color-text-tertiary);
  }
}
`;
