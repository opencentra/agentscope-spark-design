import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.sparkPrefix}-file-card {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 8px;
  background: var(--${(p) => p.antPrefix}-color-bg-container);
  border: 1px solid var(--${(p) => p.antPrefix}-color-border-secondary);
}

.${(p) => p.sparkPrefix}-file-card-info {
  font-size: 12px;
  color: var(--${(p) => p.antPrefix}-color-text);
}

.${(p) => p.sparkPrefix}-file-card-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}

.${(p) => p.sparkPrefix}-file-card-size {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  color: var(--${(p) => p.antPrefix}-color-text-quaternary);
}
`;
