import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.sparkPrefix}-slider-input {
  display: flex;
  gap: 16px;
  height: 32px;
  box-sizing: content-box;
  align-items: center;
  &.${(p) => p.sparkPrefix}-slider-input-has-marks {
    padding: 12px;
  }
  .${(p) => p.antPrefix}-slider {
    flex: 1;
    
    &.${(p) => p.antPrefix}-slider-horizontal.${(p) =>
  p.antPrefix}-slider-with-marks {
      margin: 0;
    }
  }
  
  .${(p) => p.antPrefix}-input-number {
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
