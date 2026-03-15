import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.sparkPrefix}-form {
  .${(p) => p.sparkPrefix}-required-mark {
    color: var(--${(p) => p.antPrefix}-color-error);
    line-height: 1;
    margin-top: 0;
    font-size: 16px;
  }
  
  .${(p) => p.antPrefix}-form-item .${(p) => p.antPrefix}-form-item-label {
    text-align: left;
  }
}

.${(p) => p.antPrefix}-form-item .${(p) =>
  p.antPrefix}-form-item-label > label {
  font-weight: 500;
  white-space: normal;
  font-size: 13px;
  line-height: 20px;
  color: var(--${(p) => p.antPrefix}-color-text);
  gap: 4px;
}

.${(p) => p.sparkPrefix}-form-label-margin-small {
  .${(p) => p.antPrefix}-form-item-label > label {
    margin-right: 8px;
  }
}

.${(p) => p.antPrefix}-col {
  min-height: unset;
}
`;
