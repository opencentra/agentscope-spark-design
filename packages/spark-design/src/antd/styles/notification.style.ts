import createGlobalStyle from '@/libs/createStyle';

export const useNotificationStyle = createGlobalStyle`
.${(p) => p.antPrefix}-notification {
  .${(p) => p.antPrefix}-notification-notice-wrapper {
    box-shadow: var(--${(p) => p.antPrefix}-box-shadow-secondary);
    border: 1px solid var(--${(p) => p.antPrefix}-color-border-secondary);
    
    .${(p) => p.sparkPrefix}-notification {
      .${(p) => p.antPrefix}-notification-notice-message {
        font-size: 16px;
        font-weight: 500;
      }
      
      .${(p) => p.antPrefix}-notification-notice-description {
        font-size: 14px;
        font-weight: normal;
        line-height: 24px;
        color: var(--${(p) => p.antPrefix}-color-text-secondary);
        margin-left: 32px;
      }
      
      .${(p) => p.antPrefix}-notification-notice-with-icon {
        .${(p) => p.antPrefix}-notification-notice-icon {
          display: flex;
          align-items: center;
          height: 24px;
        }
        
        .${(p) => p.antPrefix}-notification-notice-message {
          margin-inline-start: 32px;
        }
      }
      
      .${(p) => p.antPrefix}-notification-notice-close {
        color: var(--${(p) => p.antPrefix}-color-text);
      }
    }
  }
}
`;

export default useNotificationStyle;
