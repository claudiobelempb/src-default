import { css } from 'styled-components';
import { TypeThemeNumberDefault } from '../ThemeType';

/**
  paddingStaticDefault?: () => FlattenSimpleInterpolation;
  paddingStaticXDefault?: () => FlattenSimpleInterpolation;
  paddingStaticYDefault?: () => FlattenSimpleInterpolation;
  paddingDynamicDefault?: () => FlattenSimpleInterpolation;
  paddingDynamicXDefault?: () => FlattenSimpleInterpolation;
  paddingDynamicYDefault?: () => FlattenSimpleInterpolation;
  paddingTopDefault?: () => FlattenSimpleInterpolation;
  paddingRightDefault?: () => FlattenSimpleInterpolation;
  paddingBottomDefault?: () => FlattenSimpleInterpolation;
  paddingLeftDefault?: () => FlattenSimpleInterpolation;

  paddingStaticDefault={props.paddingStaticDefault}
  paddingStaticXDefault={props.paddingStaticXDefault}
  paddingStaticYDefault={props.paddingStaticYDefault}
  paddingDynamicDefault={props.paddingDynamicDefault}
  paddingDynamicXDefault={props.paddingDynamicXDefault}
  paddingDynamicYDefault={props.paddingDynamicYDefault}
  paddingTopDefault={props.paddingTopDefault}
  paddingRightDefault={props.paddingRightDefault}
  paddingBottomDefault={props.paddingBottomDefault}
  paddingLeftDefault={props.paddingLeftDefault}

  ${props.paddingStaticDefault && props.paddingStaticDefault()}
  ${props.paddingStaticXDefault && props.paddingStaticXDefault()}
  ${props.paddingStaticYDefault && props.paddingStaticYDefault()}
  ${props.paddingDynamicDefault && props.paddingDynamicDefault()}
  ${props.paddingDynamicXDefault && props.paddingDynamicXDefault()}
  ${props.paddingDynamicYDefault && props.paddingDynamicYDefault()}
  ${props.paddingTopDefault && props.paddingTopDefault()}
  ${props.paddingRightDefault && props.paddingRightDefault()}
  ${props.paddingBottomDefault && props.paddingBottomDefault()}
  ${props.paddingLeftDefault && props.paddingLeftDefault()}

*/

type TypeUnit = 'px' | '%' | 'rem' | 'vw' | 'vh';
type TypePosition = 'padding' | 'top' | 'right' | 'left' | 'bottom';

export type TypePaddingDefault = {
  unit?: TypeUnit;
  value?: TypeThemeNumberDefault;
  valueX?: TypeThemeNumberDefault;
  valueY?: TypeThemeNumberDefault;
  valueTop?: TypeThemeNumberDefault;
  valueBottom?: TypeThemeNumberDefault;
  valueRight?: TypeThemeNumberDefault;
  valueLeft?: TypeThemeNumberDefault;
  vstatic?: TypeThemeNumberDefault;
  vdynamic?: TypeThemeNumberDefault;
  vs?: TypeThemeNumberDefault;
  vd?: TypeThemeNumberDefault;
  hs?: TypeThemeNumberDefault;
  hd?: TypeThemeNumberDefault;
  type?: TypePosition;
};

export type TypePaddingDefaultValue = {
  value?: TypeThemeNumberDefault;
};

export type TypePaddingDefaultStatic = {
  unit?: TypeUnit;
  valueX?: TypeThemeNumberDefault;
  valueY?: TypeThemeNumberDefault;
};

export type TypePaddingDefaultDynamic = {
  unit?: TypeUnit;
  value?: TypeThemeNumberDefault;
  fixed?: TypeThemeNumberDefault;
  dynamic?: TypeThemeNumberDefault;
};


export const paddingDefault = {
  paddingSectionDefault: () => css`
    padding: calc(2rem + 12vh) calc(2rem + 12vw);
  `,
  paddingStatic: ({ valueX = 0, valueY = 0 }: TypePaddingDefault) => css`
    padding: ${valueY && valueY}rem ${valueX && valueX}rem;
  `,
  paddingDynamic: ({
    value = 0,
    valueX = 0,
    valueY = 0
  }: TypePaddingDefault) => css`
    padding: calc(${value}rem + ${valueY}vh) calc(${value}rem + ${valueX}vw);
  `,
  paddingX: ({ valueLeft, valueRight }: TypePaddingDefault) => css`
    padding-left: ${valueLeft}rem;
    padding-right: ${valueRight}rem;
  `,
  paddingY: ({ valueTop, valueBottom }: TypePaddingDefault) => css`
    padding-top: ${valueTop}rem;
    padding-bottom: ${valueBottom}rem;
  `
};

export const paddingSectionDefault = () => css`
  padding: calc(2rem + 12vh) calc(2rem + 12vw);
`;

export const paddingStaticDefault = ({
  unit = 'rem',
  valueX = 1,
  valueY = 2
}: TypePaddingDefaultStatic) => css`
  padding: ${valueY && valueY}${unit} ${valueX && valueX}${unit};
`;

export const paddingDynamicDefault = ({
  value = 0,
  fixed = 0,
  dynamic = 0
}: TypePaddingDefaultDynamic) => css`
  padding: calc(${value}rem + ${fixed}vh) calc(${value}rem + ${dynamic}vw);
`;

export const paddingDynamicYDefault = ({
  vstatic,
  vdynamic
}: TypePaddingDefault) => css`
  padding-top: calc(${vstatic}rem + ${vdynamic}vh);
  padding-bottom: calc(${vstatic}rem + ${vdynamic}vh);
`;

export const paddingStaticYDefault = ({ vstatic }: TypePaddingDefault) => css`
  padding-top: ${vstatic}rem;
  padding-bottom: ${vstatic}rem;
`;

export const paddingDynamicXDefault = ({ fixed = 0, dynamic }: TypePaddingDefaultDynamic) => css`
  padding-right: calc(${fixed}rem + ${dynamic}vw);
  padding-left: calc(${fixed}rem + ${dynamic}vw);
`;

export const paddingStaticXDefault = ({ valueX }: TypePaddingDefaultStatic) => css`
  padding-right: ${valueX}rem;
  padding-left: ${valueX}rem;
`;

export const paddingTopDefault = ({ value }: TypePaddingDefaultValue) => css`
  padding-top: ${value}rem;
`;
export const paddingRightDefault = ({ value }: TypePaddingDefaultValue) => css`
  padding-right: ${value}rem;
`;
export const paddingBottomDefault = ({ value }: TypePaddingDefaultValue) => css`
  padding-bottom: ${value}rem;
`;
export const paddingLeftDefault = ({ value }: TypePaddingDefaultValue) => css`
  padding-left: ${value}rem;
`;
