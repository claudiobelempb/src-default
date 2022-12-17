import { css } from 'styled-components';
import { TypeThemeNumberDefault } from '../ThemeType';

export type TypeWidthDefault = {
  unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  value?: TypeThemeNumberDefault;
};

export const widthStaticDefault = ({
  value,
  unit = '%'
}: TypeWidthDefault) => css`
  width: ${value}${unit};
`;

export const widthDynamicDefault = ({
  value,
  unit = '%'
}: TypeWidthDefault) => css`
  width: calc(10 * ${value}${unit});
`;
