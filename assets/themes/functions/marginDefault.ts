import { css } from 'styled-components';
import { TypeThemeNumberDefault } from '../ThemeType';

type TypeMarginDefault = {
  value?: TypeThemeNumberDefault;
  vstatic?: TypeThemeNumberDefault;
  vdynamic?: TypeThemeNumberDefault;
  unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  vs?: TypeThemeNumberDefault;
  vd?: TypeThemeNumberDefault;
  hs?: TypeThemeNumberDefault;
  hd?: TypeThemeNumberDefault;
  type?: 'margin' | 'top' | 'right' | 'left' | 'bottom';
};

export const marginDefault = ({
  vs,
  vd,
  hs,
  hd,
  type
}: TypeMarginDefault) => css`
  ${type === 'margin' &&
  css`
    margin-top: calc(${vs}rem + ${vd}vh);
    margin-right: calc(${hs}rem + ${hd}vw);
    margin-bottom: calc(${vs}rem + ${vd}vh);
    margin-left: calc(${hs}rem + ${hd}vw);
  `}
  ${type === 'top' &&
  css`
    margin-top: ${vs}rem;
  `}
  ${type === 'right' &&
  css`
    margin-right: ${hs}rem;
  `}
  ${type === 'bottom' &&
  css`
    margin-bottom: ${vs}rem;
  `}
  ${type === 'left' &&
  css`
    margin-left: ${hs}rem;
  `}
`;

/**
  marginStaticDefault?: () => FlattenSimpleInterpolation;
  marginStaticXDefault?: () => FlattenSimpleInterpolation;
  marginStaticYDefault?: () => FlattenSimpleInterpolation;
  marginDynamicDefault?: () => FlattenSimpleInterpolation;
  marginDynamicXDefault?: () => FlattenSimpleInterpolation;
  marginDynamicYDefault?: () => FlattenSimpleInterpolation;
  marginTopDefault?: () => FlattenSimpleInterpolation;
  marginRightDefault?: () => FlattenSimpleInterpolation;
  marginBottomDefault?: () => FlattenSimpleInterpolation;
  marginLeftDefault?: () => FlattenSimpleInterpolation;

  marginStaticDefault={props.marginStaticDefault}
  marginStaticXDefault={props.marginStaticXDefault}
  marginStaticYDefault={props.marginStaticYDefault}
  marginDynamicDefault={props.marginDynamicDefault}
  marginDynamicXDefault={props.marginDynamicXDefault}
  marginDynamicYDefault={props.marginDynamicYDefault}
  marginTopDefault={props.marginTopDefault}
  marginRightDefault={props.marginRightDefault}
  marginBottomDefault={props.marginBottomDefault}
  marginLeftDefault={props.marginLeftDefault}

  ${props.marginStaticDefault && props.marginStaticDefault()}
  ${props.marginStaticXDefault && props.marginStaticXDefault()}
  ${props.marginStaticYDefault && props.marginStaticYDefault()}
  ${props.marginDynamicDefault && props.marginDynamicDefault()}
  ${props.marginDynamicXDefault && props.marginDynamicXDefault()}
  ${props.marginDynamicYDefault && props.marginDynamicYDefault()}
  ${props.marginTopDefault && props.marginTopDefault()}
  ${props.marginRightDefault && props.marginRightDefault()}
  ${props.marginBottomDefault && props.marginBottomDefault()}
  ${props.marginLeftDefault && props.marginLeftDefault()}
*/

export const marginStaticDefault = ({ value }: TypeMarginDefault) => css`
  margin-top: ${value}rem;
  margin-right: ${value}rem;
  margin-bottom: ${value}rem;
  margin-left: ${value}rem;
`;

export const marginDynamicDefault = ({
  vstatic,
  vdynamic
}: TypeMarginDefault) => css`
  margin-top: calc(${vstatic}rem + ${vdynamic}vh);
  margin-right: calc(${vstatic}rem + ${vdynamic}vw);
  margin-bottom: calc(${vstatic}rem + ${vdynamic}vh);
  margin-left: calc(${vstatic}rem + ${vdynamic}vw);
`;

export const marginDynamicYDefault = ({
  vstatic,
  vdynamic
}: TypeMarginDefault) => css`
  margin-top: calc(${vstatic}rem + ${vdynamic}vh);
  margin-bottom: calc(${vstatic}rem + ${vdynamic}vh);
`;

export const marginStaticYDefault = ({ vstatic }: TypeMarginDefault) => css`
  margin-top: ${vstatic}rem;
  margin-bottom: ${vstatic}rem;
`;

export const marginDynamicXDefault = ({
  vstatic,
  vdynamic
}: TypeMarginDefault) => css`
  margin-right: calc(${vstatic}rem + ${vdynamic}vw);
  margin-left: calc(${vstatic}rem + ${vdynamic}vw);
`;

export const marginStaticXDefault = ({ vstatic }: TypeMarginDefault) => css`
  margin-right: ${vstatic}rem;
  margin-left: ${vstatic}rem;
`;

export const marginTopDefault = ({ vstatic }: TypeMarginDefault) => css`
  margin-top: ${vstatic}rem;
`;
export const marginRightDefault = ({ vstatic }: TypeMarginDefault) => css`
  margin-right: ${vstatic}rem;
`;
export const marginBottomDefault = ({ vstatic }: TypeMarginDefault) => css`
  margin-bottom: ${vstatic}rem;
`;
export const marginLeftDefault = ({ vstatic }: TypeMarginDefault) => css`
  margin-left: ${vstatic}rem;
`;
