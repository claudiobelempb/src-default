import { css } from 'styled-components';
import {
  ThemeColorsText,
  THEME_COLORS_DEFAULT,
  TypeThemeNumberDefault
} from '../ThemeType';

export type typePositionDefault = {
  position?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';
  backgroundAttachment?:
    | 'fixed'
    | 'scroll'
    | 'inherit'
    | 'initial'
    | 'local'
    | 'revert-layer'
    | 'unset'
    | 'revert';
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

export const backgroundImgDefault = ({
  position = 'absolute',
  backgroundAttachment = 'initial',
  zIndex = 0,
  top = 0,
  bottom = 0,
  left = 0,
  right = 0,
  width = 0,
  height = 0,
  backgroundColor = 'background',
  backgroundImg = '',
  clipPath = false,
  transformX = false,
  transformY = false,
  translate = 0
}: typePositionDefault) => css`
  & {
    position: ${position};
    z-index: ${zIndex};
    top: calc(10 * ${top}%);
    bottom: calc(10 * ${bottom}%);
    left: calc(10 * ${left}%);
    right: calc(10 * ${right}%);
    width: calc(10 * ${width}%);
    height: calc(10 * ${height}%);
    background-image: url(${backgroundImg});
    background-color: ${THEME_COLORS_DEFAULT[backgroundColor]};
    background-attachment: ${backgroundAttachment};
    background-size: cover;
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
