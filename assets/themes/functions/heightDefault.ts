import { css } from 'styled-components';
import { TypeThemeNumberDefault } from '../ThemeType';

export type TypeHeightDefault = {
  unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  value?: TypeThemeNumberDefault;
};

export const heightStaticDefault = ({ value, unit }: TypeHeightDefault) => css`
  height: ${value}${unit};
`;
export const heightDynamicDefault = ({ value, unit }: TypeHeightDefault) => css`
  height: calc(16 * ${value}${unit});
`;
