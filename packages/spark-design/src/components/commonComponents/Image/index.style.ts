import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.antPrefix}-image {
  border-radius: var(--${(p) => p.antPrefix}-border-radius);
  overflow: hidden;
  
  .${(p) => p.antPrefix}-image-mask {
    background-color: var(--${(p) => p.antPrefix}-color-bg-mask);
    
    .${(p) => p.antPrefix}-image-mask-info {
      display: flex;
      align-items: center;
    }
    
    .${(p) => p.antPrefix}-image-mask-info-text {
      font-weight: 500;
      line-height: 24px;
    }
  }
}
`;
