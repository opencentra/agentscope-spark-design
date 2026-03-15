import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.sparkPrefix}-upload.${(p) => p.antPrefix}-upload-wrapper {
  .${(p) => p.antPrefix}-upload.${(p) => p.antPrefix}-upload-select {
    border: var(--${(p) => p.antPrefix}-line-width) dashed var(--${(p) =>
  p.antPrefix}-color-border-secondary);
    background-color: var(--${(p) => p.antPrefix}-color-fill-tertiary);
  }
  
  .${(p) => p.antPrefix}-upload-drag {
    border: var(--${(p) => p.antPrefix}-line-width) dashed var(--${(p) =>
  p.antPrefix}-color-border-secondary);
    background-color: var(--${(p) => p.antPrefix}-color-fill-tertiary);
    
    .${(p) => p.antPrefix}-upload-btn {
      padding: 32px 48px;
    }
    
    .${(p) => p.antPrefix}-upload-drag-container {
      text-align: center;
      
      .${(p) => p.antPrefix}-upload-icon {
        display: inline-grid;
        place-items: center;
        width: 40px;
        height: 40px;
        border-radius: 8px;
        background: var(--${(p) => p.antPrefix}-color-bg-base);
      }
      
      .${(p) => p.antPrefix}-upload-text {
        margin-top: 8px;
        margin-bottom: 0;
        color: var(--${(p) => p.antPrefix}-color-text);
        font-weight: 500;
        line-height: 24px;
      }
      
      .${(p) => p.antPrefix}-upload-hint {
        margin-top: 4px;
        margin-bottom: 0;
        color: var(--${(p) => p.antPrefix}-color-text-secondary);
        line-height: 20px;
      }
    }
  }
}

.${(p) => p.sparkPrefix}-upload.${(p) => p.sparkPrefix}-custom-uploaded {
  .${(p) => p.antPrefix}-upload-list {
    &:first-child {
      margin-top: 0;
      width: 242px;
    }
    
    .${(p) => p.antPrefix}-upload-list-item {
      display: flex;
      align-items: center;
      height: 60px;
      padding: 9px 12px;
      margin-top: 20px;
      border-color: var(--${(p) => p.antPrefix}-color-border-secondary);
      border-style: solid;
      
      .${(p) => p.antPrefix}-upload-list-item-thumbnail {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
      }
      
      .${(p) => p.antPrefix}-upload-list-item-name {
        width: 150px;
        color: var(--${(p) => p.antPrefix}-color-text);
        line-height: 24px;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      
      .${(p) => p.antPrefix}-upload-list-item-actions {
        .${(p) => p.antPrefix}-btn {
          width: 32px;
          height: 32px;
          color: var(--${(p) => p.antPrefix}-color-text-tertiary);
        }
      }
      
      .${(p) => p.antPrefix}-upload-list-item-progress {
        bottom: 6px;
        padding-left: 48px;
        
        .${(p) => p.antPrefix}-progress {
          display: flex;
          align-items: center;
          height: 20px;
        }
      }
      
      &.${(p) => p.antPrefix}-upload-list-item-error {
        border-color: var(--${(p) => p.antPrefix}-color-border-secondary);
        
        .${(p) => p.antPrefix}-upload-list-item-name {
          color: var(--${(p) => p.antPrefix}-color-error);
        }
        
        .${(p) => p.antPrefix}-btn-icon .anticon {
          color: var(--${(p) => p.antPrefix}-color-text-tertiary);
        }
      }
    }
  }
}
`;
