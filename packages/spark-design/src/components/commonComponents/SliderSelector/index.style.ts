import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.sparkPrefix}-slider-selector {
  display: flex;
  gap: 16px;
  height: 32px;
  margin: 12px;
  
  .${(p) => p.antPrefix}-slider {
    flex: 1;
    
    &.${(p) => p.antPrefix}-slider-horizontal.${(p) =>
  p.antPrefix}-slider-with-marks {
      margin: 0;
    }
  }
  
  .${(p) => p.antPrefix}-input-number {
    flex: 1;
    width: 100%;
    height: 100%;
  }
  
  .${(p) => p.antPrefix}-input-number .${(p) =>
  p.antPrefix}-input-number-outlined {
    margin-top: 16px;
  }
  
  .${(p) => p.antPrefix}-slider-dot {
    opacity: 0;
  }
}
`;
