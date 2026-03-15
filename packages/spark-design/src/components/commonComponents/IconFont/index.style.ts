import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
@keyframes spinning {
  0% {
    transform: rotate(0deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
}

.${(p) => p.sparkPrefix}-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 1;
}

.${(p) => p.sparkPrefix}-icon-spin {
  animation: spinning 1s ease-in-out infinite;
}

.${(p) => p.sparkPrefix}-cursor-pointer {
  cursor: pointer;
  color: var(--${(p) => p.antPrefix}-color-icon);
  
  &:hover {
    color: var(--${(p) => p.antPrefix}-color-icon-hover);
  }
}
`;
