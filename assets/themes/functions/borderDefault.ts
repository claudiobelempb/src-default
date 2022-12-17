import { css } from 'styled-components';
import { TypeThemeNumberDefault } from '../ThemeType';
import { TypeVariant, VariantObjDefault } from './colorDefault';

export type TypeBorderPropsDefault = {
  unit?: 'px' | '%' | 'rem' | 'w' | 'h';
  type?:
    | 'border'
    | 'radius'
    | 'radius-top'
    | 'radius-bottom'
    | 'top'
    | 'right'
    | 'left'
    | 'bottom';
  width?: TypeThemeNumberDefault;
  style?: 'solid' | 'dashed ';
  variant?: TypeVariant;
};

export const borderDefault = ({
  unit = 'px',
  width,
  style = 'solid',
  variant
}: TypeBorderPropsDefault) =>
  css`
    ${variant?.border &&
    css`
      border: ${width}${unit} ${style} ${VariantObjDefault[variant.border?.color.index][variant.border?.color.value]};
    `}

    ${variant?.outline &&
    css`
      outline: ${width}${unit} ${style} ${VariantObjDefault[variant.outline?.color.index][variant.outline?.color.value]};
    `}
  `;

export const borderTopDefault = ({
  unit = 'px',
  width,
  style = 'solid',
  variant
}: TypeBorderPropsDefault) =>
  css`
    border-top-width: ${width && width}${unit};
    border-top-style: ${style && style};
    border-top-color: ${variant &&
    VariantObjDefault[variant.border?.color.index || 'primary'][
      variant.border?.color.value || 'v500'
    ]};
  `;

export const borderRightDefault = ({
  unit = 'px',
  width,
  style = 'solid',
  variant
}: TypeBorderPropsDefault) =>
  css`
    border-right-width: ${width && width}${unit};
    border-right-style: ${style && style};
    border-right-color: ${variant &&
    VariantObjDefault[variant.border?.color.index || 'primary'][
      variant.border?.color.value || 'v500'
    ]};
  `;

export const borderBottomDefault = ({
  unit = 'px',
  width,
  style = 'solid',
  variant
}: TypeBorderPropsDefault) =>
  css`
    border-bottom-width: ${width && width}${unit};
    border-bottom-style: ${style && style};
    border-bottom-color: ${variant &&
    VariantObjDefault[variant.border?.color.index || 'primary'][
      variant.border?.color.value || 'v500'
    ]};
  `;

export const borderLeftDefault = ({
  unit = 'px',
  width,
  style = 'solid',
  variant
}: TypeBorderPropsDefault) =>
  css`
    border-left-width: ${width && width}${unit};
    border-left-style: ${style && style};
    border-left-color: ${variant &&
    VariantObjDefault[variant.border?.color.index || 'primary'][
      variant.border?.color.value || 'v500'
    ]};
  `;

export const borderRadiusDefault = ({
  unit = 'rem',
  width
}: TypeBorderPropsDefault) =>
  css`
    border-radius: calc(10 * ${width && width}${unit});
    /* border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial; */
  `;

export const borderRadiusTopRightDefault = ({
  unit = 'rem',
  width
}: TypeBorderPropsDefault) =>
  css`
    border-top-right-radius: calc(10 * ${width && width}${unit});
  `;
export const borderRadiusTopLeftDefault = ({
  unit = 'rem',
  width
}: TypeBorderPropsDefault) =>
  css`
    border-top-left-radius: calc(10 * ${width && width}${unit});
  `;

export const borderRadiusBottomRightDefault = ({
  unit = 'rem',
  width
}: TypeBorderPropsDefault) =>
  css`
    border-bottom-right-radius: calc(10 * ${width && width}${unit});
  `;

export const borderRadiusBottomLeftDefault = ({
  unit = 'rem',
  width
}: TypeBorderPropsDefault) =>
  css`
    border-bottom-left-radius: calc(10 * ${width && width}${unit});
  `;
