import { css } from 'styled-components';
import {
  Index,
  TypeColorPropsDefault,
  TypeVariant,
  Value,
  VariantObjDefault
} from './functions/colorDefault';
import { TypeThemeNumberDefault } from './ThemeType';
import {
  ColorIndex,
  ColorValue,
  TypeVariantDefault
} from './types/TypeColorDefault';

type TypeUnit = 'px' | '%' | 'rem' | 'vw' | 'vh';
type TypePosition = 'padding' | 'margin' | 'top' | 'right' | 'left' | 'bottom';
type TypePadding = { value?: number; unit?: string };
export type TypeBorderDefault = {
  unit?: TypeUnit;
  width?: TypeThemeNumberDefault;
  style?: 'solid' | 'dashed ';
  color?: {
    index: Index;
    value: Value;
  };
  outline?: {
    index: Index;
    value: Value;
  };
  variant?: TypeVariantDefault;
};

export type variantType = {
  colorIndex: ColorIndex;
  colorValue: ColorValue;
};

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
  width?: TypeThemeNumberDefault;
  style?: 'solid' | 'dashed ';
  color?: {
    index: Index;
    value: Value;
  };
  outline?: {
    index: Index;
    value: Value;
  };
  variant?: TypeVariantDefault;
};

export const ThemeDefault = {
  title: 'theme-proxul',
  variant: {
    backgroundDefault: ({ background }: TypeVariant) =>
      css`
        ${background &&
        css`
          background-color: ${VariantObjDefault[background?.index][
            background?.value
          ]};
        `}
      `,
    colorDefault: ({ color }: TypeVariant) =>
      css`
        ${color &&
        css`
          color: ${VariantObjDefault[color?.index][color?.value]};
        `}
      `,
    focusDefault: ({ focus }: TypeVariant) =>
      css`
        &:focus {
          ${focus?.color &&
          css`
            border-color: ${VariantObjDefault[focus.color?.index][
              focus.color?.value
            ]};
          `}
        }
      `,
    borderDefault: ({ border }: TypeVariant) =>
      css`
        ${border?.color &&
        css`
          border-color: ${VariantObjDefault[border?.color.index][
            border?.color.value
          ]};
        `}
      `,
    placeholderDefault: ({ placeholder }: TypeVariant) =>
      css`
        &::placeholder {
          ${placeholder?.background &&
          css`
            background-color: ${VariantObjDefault[
              placeholder.background?.index
            ][placeholder.background?.value]};
          `}

          ${placeholder?.color &&
          css`
            color: ${VariantObjDefault[placeholder.color?.index][
              placeholder.color?.value
            ]};
          `}
        }
      `,
    hoverDefault: ({ hover }: TypeVariant) =>
      css`
        &:hover {
          filter: brightness(0.6);
          ${hover?.background &&
          css`
            background-color: ${hover?.background &&
            VariantObjDefault[hover.background?.index][
              hover.background?.value
            ]};
          `}
          ${hover?.color &&
          css`
            color: ${VariantObjDefault[hover.color?.index][hover.color?.value]};
          `}
        }
      `,
    boxShadowDefault: ({
      color,
      offsetX,
      offsetY,
      blurRadius,
      spreadRadius
    }: TypeColorPropsDefault) =>
      css`
        box-shadow: ${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px
          ${color &&
          VariantObjDefault[color?.index || 'primary'][color?.value || 'v500']};
      `
  },
  padding: {
    paddingStatic: ({ position, value, unit = 'rem' }: TypeDefault) => {
      return css`
        padding: ${value}${unit};
      `;
    },
    paddingDynamic: ({ svh, dvh, svw, dvw }: TypeDefault) => {
      return css`
        padding: calc(${svh}rem + ${dvh}vh) calc(${svw}rem + ${dvw}vw);
      `;
    },
    paddingX: ({ value, unit = 'rem' }: TypePadding) => {
      return css`
        padding-left: ${value}${unit};
        padding-right: ${value}${unit};
      `;
    },
    paddingY: ({ value, unit = 'rem' }: TypePadding) => {
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
      value: 'Roboto' | 'Roboto Mono' | 'baloo' | 'oswald' | 'plusJakarta'
    ) => css`
      font-family: ${value}, sans-serif, monospace;
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
      color,
      outline
    }: TypeBorderDefault) =>
      css`
        border: ${width}${unit} ${style} ${color && VariantObjDefault[color.index][color.value]};
        ${outline &&
        css`
          outline: ${width}${unit} ${style} ${outline && VariantObjDefault[outline.index][outline.value]};
        `}
      `,
    borderTopDefault: ({
      unit = 'px',
      width = 1,
      style = 'solid',
      color
    }: TypeDefault) =>
      css`
        border-top: ${width}${unit} ${style} ${color && VariantObjDefault[color.index][color.value]};
      `,
    borderRightDefault: ({
      unit = 'px',
      width = 1,
      style = 'solid',
      color
    }: TypeDefault) =>
      css`
        border-right: ${width}${unit} ${style} ${color && VariantObjDefault[color.index][color.value]};
      `,
    borderBottomDefault: ({
      unit = 'px',
      width = 1,
      style = 'solid',
      color
    }: TypeDefault) =>
      css`
        border-bottom: ${width}${unit} ${style} ${color && VariantObjDefault[color.index][color.value]};
      `,
    borderLeftDefault: ({
      unit = 'px',
      width = 1,
      style = 'solid',
      color
    }: TypeDefault) =>
      css`
        border-left: ${width}${unit} ${style} ${color && VariantObjDefault[color.index][color.value]};
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
