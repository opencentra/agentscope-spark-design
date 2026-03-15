import createGlobalStyle from '@/libs/createStyle';

export const useSegmentStyle = createGlobalStyle`
.${(p) => p.antPrefix}-segmented {
  .${(p) => p.antPrefix}-segmented-item-selected {
    box-shadow: none;
  }
  
  .${(p) => p.antPrefix}-segmented-thumb {
    box-shadow: none !important;
  }
}
`;

export default useSegmentStyle;
