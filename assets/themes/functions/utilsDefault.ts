import { css } from 'styled-components';
import { TypeThemeNumberDefault } from '../ThemeType';
import { TypeVariant, VariantObjDefault } from './colorDefault';

type TypeUtilsPropsDefault = {
  variant?: TypeVariant;
  value?: TypeThemeNumberDefault;
  vstatic?: TypeThemeNumberDefault;
  vdynamic?: TypeThemeNumberDefault;
  offsetY?: TypeThemeNumberDefault;
  offsetX?: TypeThemeNumberDefault;
  blurRadius?: TypeThemeNumberDefault;
  spreadRadius?: TypeThemeNumberDefault;
  type?: 'par' | 'impar' | 'nth-child' | 'box-shadow';
  element?: 'border-top' | 'border-right' | 'border-bottom' | 'border-left';
};

/**
  zIndexDefault?: () => FlattenSimpleInterpolation;
  imparDefault?: () => FlattenSimpleInterpolation;
  parDefault?: () => FlattenSimpleInterpolation;
  boxShadowDefault?: () => FlattenSimpleInterpolation;
  displayDefault?: () => FlattenSimpleInterpolation;
  overflowDefault?: () => FlattenSimpleInterpolation;

  zIndexDefault={props.zIndexDefault}
  imparDefault={props.imparDefault}
  parDefault={props.parDefault}
  boxShadowDefault={props.boxShadowDefault}
  displayDefault={props.displayDefault}
  overflowDefault={props.overflowDefault}

  ${props.zIndexDefault && props.zIndexDefault()}
  ${props.imparDefault && props.imparDefault()}
  ${props.parDefault && props.parDefault()}
  ${props.boxShadowDefault && props.boxShadowDefault()}
  ${props.displayDefault && props.displayDefault()}
  ${props.overflowDefault && props.overflowDefault()}

*/

export const zIndexDefault = (value: TypeThemeNumberDefault) =>
  css`
    z-index: ${value};
  `;
export const overflowDefault = (
  overflow?: 'hidden' | 'overlay' | 'scroll' | 'visible'
) =>
  css`
    overflow: ${overflow && overflow};
  `;

export const visibilityDefault = (
  visibility?: 'hidden' | 'overlay' | 'scroll' | 'visible'
) =>
  css`
    visibility: ${visibility && visibility};
    display: none;
    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {
      display: none;
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
      display: none;
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
      display: flex;
    }

    // X-Large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
      display: flex;
    }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {
      display: flex;
    }
  `;

export const displayDefault = (
  value: 'flex' | 'grid' | 'block' | 'inline-block'
) =>
  css`
    display: ${value};
  `;

export const imparDefault = ({
  vstatic,
  vdynamic,
  variant,
  element = 'border-top'
}: TypeUtilsPropsDefault) =>
  css`
    ${element &&
    css`
      &:nth-child(${vstatic}n + ${vdynamic}) {
        ${element}: ${vstatic}px solid ${variant?.color &&
        VariantObjDefault[variant.color?.index || 'primary'][
          variant.color?.value || 'v500'
        ]};
      }
      // sm applies to x-small devices (portrait phones, less than 576px)
      @media (max-width: 320px) {
        ${element && element}: none;
      }

      // md applies to small devices (landscape phones, less than 768px)
      @media (min-width: 320px) and (max-width: 576px) {
        ${element && element}: none;
      }

      // lg applies to medium devices (tablets, less than 992px)
      @media (min-width: 576px) and (max-width: 768px) {
        ${element && element}: none;
      }

      // xl applies to large devices (desktops, less than 1200px)
      @media (min-width: 768px) and (max-width: 992px) {
        ${element && element}: none;
      }

      // xxl applies to x-large devices (large desktops, less than 1400px)
      @media (min-width: 992px) and (max-width: 1200px) {
      }
      // xxl applies to x-large devices (large desktops, less than 1400px)
      @media (min-width: 1200px) and (max-width: 1400px) {
      }
    `}
  `;

export const parDefault = ({
  vstatic,
  variant,
  element = 'border-top'
}: TypeUtilsPropsDefault) =>
  css`
    ${element &&
    css`
      &:nth-child(${vstatic}n) {
        ${element && element}: ${vstatic}px solid ${variant?.color &&
        VariantObjDefault[variant.color?.index || 'primary'][
          variant.color?.value || 'v500'
        ]};
        // sm applies to x-small devices (portrait phones, less than 576px)
        @media (max-width: 320px) {
          ${element && element}: none;
        }

        // md applies to small devices (landscape phones, less than 768px)
        @media (min-width: 320px) and (max-width: 576px) {
          ${element && element}: none;
        }

        // lg applies to medium devices (tablets, less than 992px)
        @media (min-width: 576px) and (max-width: 768px) {
          ${element && element}: none;
        }

        // xl applies to large devices (desktops, less than 1200px)
        @media (min-width: 768px) and (max-width: 992px) {
          ${element && element}: none;
        }

        // xxl applies to x-large devices (large desktops, less than 1400px)
        @media (min-width: 992px) and (max-width: 1200px) {
        }
        // xxl applies to x-large devices (large desktops, less than 1400px)
        @media (min-width: 1200px) and (max-width: 1400px) {
        }
      }
    `}
  `;

export type TypeBoxShadonwPropsDefault = {
  variant?: TypeVariant;
  offsetY?: TypeThemeNumberDefault;
  offsetX?: TypeThemeNumberDefault;
  blurRadius?: TypeThemeNumberDefault;
  spreadRadius?: TypeThemeNumberDefault;
};
export const boxShadowDefault = ({
  variant,
  offsetX,
  offsetY,
  blurRadius,
  spreadRadius
}: TypeBoxShadonwPropsDefault) =>
  css`
    box-shadow: ${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px
      ${variant?.color &&
      VariantObjDefault[variant.color?.index || 'primary'][
        variant.color?.value || 'v500'
      ]};
  `;
