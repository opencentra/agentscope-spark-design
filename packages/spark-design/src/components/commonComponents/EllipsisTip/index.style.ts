import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
div.${(p) => p.sparkPrefix}-ellipsis-tip {
  margin-bottom: 0;
  color: unset;
  line-height: 1.5;
  font-size: unset;
}
`;
