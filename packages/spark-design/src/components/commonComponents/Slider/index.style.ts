import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.antPrefix}-slider.${(p) => p.sparkPrefix}-slider.${(p) =>
  p.sparkPrefix}-slider-no-marks {
  margin: 0;
}
`;
