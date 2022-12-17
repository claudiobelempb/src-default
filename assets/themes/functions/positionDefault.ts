import { css } from 'styled-components';
import {
  ThemeColorsText,
  THEME_COLORS_DEFAULT,
  TypeThemeNumberDefault
} from '../ThemeType';

export type typePositionDefault = {
  position?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';
  zIndex?: TypeThemeNumberDefault;
  top?: TypeThemeNumberDefault;
  bottom?: TypeThemeNumberDefault;
  left?: TypeThemeNumberDefault;
  right?: TypeThemeNumberDefault;
  width?: TypeThemeNumberDefault;
  height?: TypeThemeNumberDefault;
  backgroundImg?: string;
  backgroundColor?: ThemeColorsText;
  clipPath?: boolean;
  transformX?: boolean;
  transformY?: boolean;
  translate?: TypeThemeNumberDefault;
};

export const positionDefault = ({
  position = 'absolute',
  zIndex = 0,
  top,
  bottom,
  left,
  right,
  width,
  height,
  backgroundColor = 'background',
  backgroundImg = '',
  clipPath = false,
  transformX = false,
  transformY = false,
  translate = 0
}: typePositionDefault) => css`
  & {
    position: ${position && position};
    z-index: ${zIndex && zIndex};
    top: calc(10 * ${top && top}%);
    bottom: calc(10 * ${bottom && bottom}%);
    left: calc(10 * ${left && left}%);
    right: calc(10 * ${right && right}%);
    width: calc(10 * ${width && width}%);
    height: calc(10 * ${height && height}%);
    background-image: url(${backgroundImg && backgroundImg});
    background-color: ${THEME_COLORS_DEFAULT[backgroundColor]};
    ${clipPath &&
    css`
      clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 100%, 0% 0%);
    `}
    ${transformX &&
    css`
      transform: translateX(${translate}0%);
    `}
    ${transformY &&
    css`
      transform: translateX(${translate}0%);
    `}
  }
`;
