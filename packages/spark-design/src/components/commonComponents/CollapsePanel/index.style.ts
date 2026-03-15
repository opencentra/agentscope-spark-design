import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.sparkPrefix}-collapse-panel {
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--${(p) => p.antPrefix}-color-border-secondary);
  transition: all 0.3s ease;
  background-color: var(--${(p) => p.antPrefix}-color-bg-base);
  
  &.collapsible:not(.expanded) {
    cursor: pointer;
  }
  
  .${(p) => p.sparkPrefix}-collapse-panel-header {
    display: flex;
    justify-content: space-between;
    background: var(--${(p) => p.antPrefix}-color-fill-secondary);
    height: 32px;
    line-height: 32px;
    border-radius: 7px 7px 0 0;
    align-items: center;
    user-select: none;
    position: relative;
    cursor: pointer;
    padding: 0 12px;
    
    .collapsible:hover & {
      background: #f0f2f3;
    }
  }
  
  .${(p) => p.sparkPrefix}-collapse-panel-extra {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    float: right;
  }
  
  .${(p) => p.sparkPrefix}-collapse-panel-title {
    color: var(--${(p) => p.antPrefix}-color-text);
    font-size: 14px;
    display: flex;
  }
  
  .${(p) => p.sparkPrefix}-collapse-panel-icon-wrapper {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 4px;
  }
  
  .${(p) => p.sparkPrefix}-collapse-panel-icon {
    font-size: 18px;
    transition: transform 0.3s ease;
  }
  
  .${(p) => p.sparkPrefix}-collapse-panel-content {
    position: relative;
    border-radius: 0 0 6px 6px;
    transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
  }
  
  .${(p) => p.sparkPrefix}-collapse-panel-contentWrapper {
    &.scrollable {
      height: 100%;
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: var(--${(p) => p.antPrefix}-color-fill) transparent;
      
      &::-webkit-scrollbar {
        width: 6px;
      }
      
      &::-webkit-scrollbar-track {
        background: transparent;
      }
      
      &::-webkit-scrollbar-thumb {
        background-color: var(--${(p) => p.antPrefix}-color-fill);
        border-radius: 3px;
      }
      
      &::-webkit-scrollbar-thumb:hover {
        background-color: var(--${(p) => p.antPrefix}-color-fill);
      }
    }
  }
  
  .${(p) => p.sparkPrefix}-collapse-panel-mask {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      var(--${(p) => p.antPrefix}-color-bg-base) 100%
    );
    pointer-events: none;
    opacity: 1;
    transition: opacity 0.3s ease;
  }
  
  .${(p) => p.sparkPrefix}-collapse-panel-expanded {
    .${(p) => p.sparkPrefix}-collapse-panel-mask {
      opacity: 0;
    }
  }
}
`;
