import { css } from 'styled-components';
import { TypeThemeNumberDefault } from './ThemeType';
import {
  TypeColorValueDefault,
  TypeColorVariantDefault,
  TypeVariantIndex,
  TypeVariantValue
} from './types/TypeColorDefault';

type TypeUnit = 'px' | '%' | 'rem' | 'vw' | 'vh';
type TypePosition = 'padding' | 'margin' | 'top' | 'right' | 'left' | 'bottom';

type TypeDefault = {
  svh?: TypeThemeNumberDefault;
  dvh?: TypeThemeNumberDefault;
  svw?: TypeThemeNumberDefault;
  dvw?: TypeThemeNumberDefault;
  value?: TypeThemeNumberDefault;
  position?: TypePosition;
  unit?: TypeUnit;
  offsetY?: TypeThemeNumberDefault;
  offsetX?: TypeThemeNumberDefault;
  blurRadius?: TypeThemeNumberDefault;
  spreadRadius?: TypeThemeNumberDefault;
  variant?: string;
  width?: TypeThemeNumberDefault;
  style?: 'solid' | 'dashed ';
  colorIndex?: TypeVariantIndex;
  colorValue?: TypeVariantValue;
};

export const themePhoxul = {
  title: 'theme-proxul',
  fontColor: TypeColorValueDefault,
  bgColor: TypeColorValueDefault,
  variant: TypeColorVariantDefault,
  padding: {
    paddingStatic: ({ position, value, unit = 'rem' }: TypeDefault) => {
      return css`
        ${position === 'padding' &&
        css`
          padding: ${value}${unit};
        `}
        ${position === 'top' &&
        css`
          padding-top: ${value}${unit};
        `}
        ${position === 'left' &&
        css`
          padding-left: ${value}${unit};
        `}
        ${position === 'right' &&
        css`
          padding-right: ${value}${unit};
        `}
        ${position === 'bottom' &&
        css`
          padding-bottom: ${value}${unit};
        `}
      `;
    },
    paddingDynamic: ({ svh, dvh, svw, dvw }: TypeDefault) => {
      return css`
        padding: calc(${svh}rem + ${dvh}vh) calc(${svw}rem + ${dvw}vw);
      `;
    },
    paddingX: ({ value, unit = 'rem' }: TypeDefault) => {
      return css`
        padding-left: ${value}${unit};
        padding-right: ${value}${unit};
      `;
    },
    paddingY: ({ value, unit = 'rem' }: TypeDefault) => {
      return css`
        padding-top: ${value}${unit};
        padding-bottom: ${value}${unit};
      `;
    }
  },
  margin: {
    marginStatic: ({ position, value, unit = 'rem' }: TypeDefault) => {
      return css`
        ${position === 'margin' &&
        css`
          margin: ${value}${unit};
        `}
        ${position === 'top' &&
        css`
          margin-top: ${value}${unit};
        `}
        ${position === 'left' &&
        css`
          margin-left: ${value}${unit};
        `}
        ${position === 'right' &&
        css`
          margin-right: ${value}${unit};
        `}
        ${position === 'bottom' &&
        css`
          margin-bottom: ${value}${unit};
        `}
      `;
    },
    marginDynamic: ({ svh, dvh, svw, dvw }: TypeDefault) => {
      return css`
        margin: calc(${svh}rem + ${dvh}vh) calc(${svw}rem + ${dvw}vw);
      `;
    },
    marginX: ({ value, unit = 'rem' }: TypeDefault) => {
      return css`
        margin-left: ${value}${unit};
        margin-right: ${value}${unit};
      `;
    },
    marginY: ({ value, unit = 'rem' }: TypeDefault) => css`
      margin-top: ${value}${unit};
      margin-bottom: ${value}${unit};
    `
  },
  text: {
    textTransformDefault: (
      type:
        | 'none'
        | 'capitalize'
        | 'uppercase'
        | 'lowercase'
        | 'full-width'
        | 'full-size-kana'
    ) => css`
      text-transform: ${type};
    `,
    textAlignDefault: (
      value:
        | 'start'
        | 'end'
        | 'left'
        | 'right'
        | 'center'
        | 'justify'
        | 'justify-all'
        | 'match-parent'
    ) => css`
      text-align: ${value};
    `,
    textTitleDefault: () => css`
      font-size: calc(1rem + 1.5vw);
      font-weight: 900;
    `,
    textParagraphDefault: () => css`
      font-size: 1.5rem;
      color: hsl(0, 0%, 100%);
    `,
    textDecoretionlineThrough: () => css`
      text-decoration: line-through;
    `
  },
  font: {
    fontSizeStaticDefault: ({ value }: TypeDefault) => css`
      font-size: ${value}rem;
    `,
    fontSizeDynamicDefault: ({ value, dvw }: TypeDefault) => css`
      font-size: calc(${value}rem + ${dvw}vw);
    `,

    fontFamilyDefault: (
      value: 'roboto' | 'baloo' | 'oswald' | 'plusJakarta'
    ) => css`
      font-family: ${value};
    `,
    fontStyleDefault: (
      value: 'normal' | 'italic' | 'oblique' | 'initial' | 'inherit'
    ) => css`
      font-style: ${value};
    `,
    fontLineHeightDefault: (value: '65%' | '130%' | '160%') => css`
      line-height: ${value};
    `,
    fontWeightDefault: (
      value:
        | '100'
        | '200'
        | '300'
        | '400'
        | '500'
        | '600'
        | '700'
        | '800'
        | '900'
        | 'bold'
        | 'extraBold'
    ) => css`
      font-weight: ${value};
    `
  },
  utils: {
    boxShadowDefault: ({
      offsetX,
      offsetY,
      blurRadius,
      spreadRadius
    }: TypeDefault) =>
      css`
        box-shadow: ${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px;
      `,
    displayDefault: (value: 'flex' | 'grid' | 'block' | 'inline-block') =>
      css`
        display: ${value};
      `,
    visibility: (visibility?: 'hidden' | 'overlay' | 'scroll' | 'visible') =>
      css`
        visibility: ${visibility && visibility};
        display: none;
      `,
    zindex: ({ value }: TypeDefault) =>
      css`
        z-index: ${value};
      `,
    overflow: (overflow?: 'hidden' | 'overlay' | 'scroll' | 'visible') =>
      css`
        overflow: ${overflow && overflow};
      `
  },
  wifth: {
    widthStatic: ({ value, unit = 'rem' }: TypeDefault) => css`
      width: ${value}${unit};
    `,
    widthDynamic: ({ svw, dvw, unit = 'vw' }: TypeDefault) => css`
      width: calc(${svw}rem + ${dvw}${unit});
    `
  },
  height: {
    widthStatic: ({ value, unit = 'rem' }: TypeDefault) => css`
      height: ${value}${unit};
    `,
    widthDynamic: ({ svh, dvh, unit = 'vw' }: TypeDefault) => css`
      height: calc(${svh}rem + ${dvh}${unit});
    `
  },
  border: {
    borderDefault: ({
      unit = 'px',
      width = 1,
      style = 'solid',
      variant
    }: TypeDefault) =>
      css`
        border: ${width}${unit} ${style} ${variant};
      `,
    borderTopDefault: ({
      unit = 'px',
      width = 1,
      style = 'solid',
      variant
    }: TypeDefault) =>
      css`
        border-top: ${width}${unit} ${style} ${variant};
      `,
    borderRightDefault: ({
      unit = 'px',
      width = 1,
      style = 'solid',
      variant
    }: TypeDefault) =>
      css`
        border-right: ${width}${unit} ${style} ${variant};
      `,
    borderBottomDefault: ({
      unit = 'px',
      width = 1,
      style = 'solid',
      variant
    }: TypeDefault) =>
      css`
        border-bottom: ${width}${unit} ${style} ${variant};
      `,
    borderLeftDefault: ({
      unit = 'px',
      width = 1,
      style = 'solid',
      variant
    }: TypeDefault) =>
      css`
        border-left: ${width}${unit} ${style} ${variant};
      `,
    borderRadiusDefault: ({ unit = '%', value }: TypeDefault) =>
      css`
        border-radius: calc(10 * ${value}${unit});
      `,
    borderRadiusTopRightDefault: ({ unit = '%', value }: TypeDefault) =>
      css`
        border-top-right-radius: calc(10 * ${value}${unit});
      `,
    borderRadiusTopLeftDefault: ({ unit = '%', value }: TypeDefault) =>
      css`
        border-top-left-radius: calc(10 * ${value}${unit});
      `,
    borderRadiusBottomRightDefault: ({ unit = '%', value }: TypeDefault) =>
      css`
        border-bottom-right-radius: calc(10 * ${value}${unit});
      `,
    borderRadiusBottomLeftDefault: ({ unit = '%', value }: TypeDefault) =>
      css`
        border-bottom-left-radius: calc(10 * ${value}${unit});
      `
  }
};
