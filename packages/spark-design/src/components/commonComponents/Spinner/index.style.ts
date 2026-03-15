import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.${(p) => p.sparkPrefix}-spinner {
  display: inline-block;
  
  .${(p) => p.sparkPrefix}-indicator {
    display: flex;
    justify-content: center;
    align-items: center;
    
    .${(p) => p.sparkPrefix}-default-indicator {
      width: 40px;
      height: 40px;
      animation: loading 1s linear infinite;
    }
  }
  
  .${(p) => p.sparkPrefix}-title {
    margin-top: 12px;
    font-weight: 400;
    font-size: 14px;
    color: var(--${(p) => p.antPrefix}-color-text);
  }
}

.${(p) => p.sparkPrefix}-spinner-overlay {
  position: relative;
  display: inline-block;
  
  .${(p) => p.sparkPrefix}-spinner-content.${(p) => p.sparkPrefix}-spinning {
    position: relative;
    opacity: 0.3;
  }
  
  .${(p) => p.sparkPrefix}-spinner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 4;
  }
}

/* 
.${(p) => p.sparkPrefix}-spinner-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 4;
}

.${(p) => p.sparkPrefix}-indicator {
  margin-bottom: 8px;
}

.${(p) => p.sparkPrefix}-title {
  color: var(--${(p) => p.antPrefix}-color-text);
}
*/
`;
