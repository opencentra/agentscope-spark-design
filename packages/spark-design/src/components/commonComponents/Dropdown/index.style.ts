import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.antPrefix}-dropdown .${(p) => p.antPrefix}-dropdown-menu .${(p) =>
  p.antPrefix}-dropdown-menu-item-icon {
  font-size: var(--${(p) => p.antPrefix}-font-size-lg);
}

.${(p) => p.antPrefix}-dropdown-check-wrapper {
  display: flex;
  align-items: center;
  margin: 0;
  padding-inline-end: calc(var(--${(p) =>
    p.antPrefix}-control-padding-horizontal) + var(--${(p) =>
  p.antPrefix}-font-size-sm));
}

.${(p) => p.antPrefix}-dropdown-check-icon {
  position: absolute;
  opacity: 0;
  font-size: 20px;
  inset-inline-end: var(--${(p) => p.antPrefix}-padding-xs);
}

.${(p) => p.antPrefix}-dropdown .${(p) => p.antPrefix}-dropdown-menu .${(p) =>
  p.antPrefix}-dropdown-menu-item.${(p) =>
  p.antPrefix}-dropdown-menu-item-selected {
  background-color: transparent;
  
  .${(p) => p.antPrefix}-dropdown-check-icon {
    opacity: 1;
  }
}

.${(p) => p.antPrefix}-dropdown-menu-submenu-popup {
  box-shadow: var(--${(p) => p.antPrefix}-box-shadow);
  border: 1px solid var(--${(p) => p.antPrefix}-color-border-secondary);
  border-radius: var(--${(p) => p.antPrefix}-border-radius-lg);
  overflow-y: auto;
}

/*
.${(p) => p.antPrefix}-dropdown-menu .${(p) =>
  p.antPrefix}-dropdown-menu-submenu {
  box-shadow: var(--${(p) => p.antPrefix}-box-shadow);
  border: 1px solid var(--${(p) => p.antPrefix}-color-border-secondary);
}
*/
`;
