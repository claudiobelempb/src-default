import { css, FlattenSimpleInterpolation } from 'styled-components';
import { TypeThemeNumberDefault } from '../ThemeType';

export type TypeTansFormDefault = {
  /* Function values */
  matrix?: (...value: TypeThemeNumberDefault[]) => FlattenSimpleInterpolation;
  matrix3d?: (...value: TypeThemeNumberDefault[]) => FlattenSimpleInterpolation;
  perspective?: (
    valueNumber: TypeThemeNumberDefault,
    valueString: string
  ) => FlattenSimpleInterpolation;
  rotate?: (
    value?: TypeThemeNumberDefault | string
  ) => FlattenSimpleInterpolation;
  rotate3d?: (...value: TypeThemeNumberDefault[]) => FlattenSimpleInterpolation;
  rotateX?: (value: TypeThemeNumberDefault) => FlattenSimpleInterpolation;
  rotateY?: (value: TypeThemeNumberDefault) => FlattenSimpleInterpolation;
  rotateZ?: (value: TypeThemeNumberDefault) => FlattenSimpleInterpolation;
  translate?: (
    ...value: TypeThemeNumberDefault[]
  ) => FlattenSimpleInterpolation;
  translate3d?: (
    ...value: TypeThemeNumberDefault[]
  ) => FlattenSimpleInterpolation;
  translateX?: (value: TypeThemeNumberDefault) => FlattenSimpleInterpolation;
  translateY?: (value: TypeThemeNumberDefault) => FlattenSimpleInterpolation;
  translateZ?: (value: TypeThemeNumberDefault) => FlattenSimpleInterpolation;
  scale?: 'scale';
  scale3d?: (...value: TypeThemeNumberDefault[]) => FlattenSimpleInterpolation;
  scaleX?: (value: TypeThemeNumberDefault) => FlattenSimpleInterpolation;
  scaleY?: (value: TypeThemeNumberDefault) => FlattenSimpleInterpolation;
  scaleZ?: (value: TypeThemeNumberDefault) => FlattenSimpleInterpolation;
  skew?: (...value: TypeThemeNumberDefault[]) => FlattenSimpleInterpolation;
  skewX?: (value: TypeThemeNumberDefault) => FlattenSimpleInterpolation;
  skewY?: (value: TypeThemeNumberDefault) => FlattenSimpleInterpolation;

  /* Multiple function values */
  transformMult?: TypeTansFormDefault[];
  // transform: translateX(10px) rotate(10deg) translateY(5px);
  // transform: perspective(500px) translate(10px, 0, 20px) rotateY(3deg);

  /* Global values */
  globalValues?:
    | 'none'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'revert-layer'
    | 'unset';
};

type TypeEffectDefault = {
  transformValue?: TypeThemeNumberDefault[];
  translateValueX?: TypeThemeNumberDefault[];
  translateValueY?: TypeThemeNumberDefault[];
  tranHover?: TypeThemeNumberDefault[];
  tranValue?: TypeThemeNumberDefault[];
  transformArray?: TypeTansFormDefault;
  transformOrigin?:
    | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'center'
    | 'initial'
    | 'unset'
    | 'unset'
    | 'revert'
    | 'inherit';

  color?: TypeValueIndexPropsDefault;
  backgroundColor?: TypeValueIndexPropsDefault;
  unit?: 'px' | 'rem' | '%' | 'vw' | 'vh' | 'deg';
  transform?:
    | 'scale'
    | 'translateX'
    | 'none'
    | 'matrix'
    | 'matrix3d'
    | 'perspective'
    | 'scale'
    | 'rotate'
    | 'rotate3d'
    | 'rotateX'
    | 'rotateY'
    | 'rotateZ'
    | 'translate'
    | 'translate3d'
    | 'translateX'
    | 'translateY'
    | 'translateZ'
    | 'scale'
    | 'scale3d'
    | 'scaleX'
    | 'scaleY'
    | 'scaleZ'
    | 'skew'
    | 'skewX'
    | 'skewY';
  translateX?:
    | 'scale'
    | 'translateX'
    | 'none'
    | 'matrix'
    | 'matrix3d'
    | 'perspective'
    | 'scale'
    | 'rotate'
    | 'rotate3d'
    | 'rotateX'
    | 'rotateY'
    | 'rotateZ'
    | 'translate'
    | 'translate3d'
    | 'translateX'
    | 'translateY'
    | 'translateZ'
    | 'scale'
    | 'scale3d'
    | 'scaleX'
    | 'scaleY'
    | 'scaleZ'
    | 'skew'
    | 'skewX'
    | 'skewY';
  translateY?:
    | 'scale'
    | 'translateX'
    | 'none'
    | 'matrix'
    | 'matrix3d'
    | 'perspective'
    | 'scale'
    | 'rotate'
    | 'rotate3d'
    | 'rotateX'
    | 'rotateY'
    | 'rotateZ'
    | 'translate'
    | 'translate3d'
    | 'translateX'
    | 'translateY'
    | 'translateZ'
    | 'scale'
    | 'scale3d'
    | 'scaleX'
    | 'scaleY'
    | 'scaleZ'
    | 'skew'
    | 'skewX'
    | 'skewY';
  transitionProperty?:
    | 'none'
    | 'all'
    | 'height'
    | 'color'
    | 'background'
    | 'transform'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'revert-layer'
    | 'unset';
  element?:
    | 'none'
    | 'a'
    | 'img'
    | 'p'
    | 'color'
    | 'background-color'
    | 'background'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'revert-layer'
    | 'unset';
  isElement?: boolean;
  transitionDuration?: TypeThemeNumberDefault;
  secondsDuration?: 's' | 'sm';
  transitionTimingFunction?:
    | 'ease'
    | 'ease-in'
    | 'ease-out'
    | 'ease-in-out'
    | 'linear'
    | 'step-start'
    | 'step-end'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'revert-layer'
    | 'unset';
  transitionDelay?: TypeThemeNumberDefault;
  secondsDelay?: 's' | 'sm';
};

/*
  effectDefault?: () => FlattenSimpleInterpolation;
  effectHoverDefault?: () => FlattenSimpleInterpolation;
  effectHoverbeforeDefault?: () => FlattenSimpleInterpolation;
  effectHoverAfterDefault?: () => FlattenSimpleInterpolation;

  effectDefault={props.effectDefault}
  effectHoverDefault={props.effectHoverDefault}
  effectHoverbeforeDefault={props.effectHoverbeforeDefault}
  effectHoverAfterDefault={props.effectHoverAfterDefault}

  ${props.effectDefault && props.effectDefault()}
  ${props.effectHoverDefault && props.effectHoverDefault()}
  ${props.effectHoverbeforeDefault && props.effectHoverbeforeDefault()}
  ${props.effectHoverAfterDefault && props.effectHoverAfterDefault()}
*/

export const effectDefault = ({
  unit,
  transformValue = [0],
  transformArray,
  transform,
  element,
  transitionTimingFunction = 'ease-in-out',
  transitionProperty,
  secondsDuration = 's',
  transitionDuration = 0.5,
  secondsDelay = 's',
  transitionDelay,
  translateValueX,
  translateX = 'translateX',
  translateValueY,
  translateY = 'translateY'
}: TypeEffectDefault) => css`
  /* transition: all 0.6s ease-in-out; */
  /* transition: all 0.25s ease-in-out; */
  /* transition: <property> <duration> <timing-function> <delay>; */
  transform: ${transform && transform}(${transformValue}${unit && unit})
    ${translateX && translateX}(${translateValueX + 'rem'})
    ${translateY && translateY}(${translateValueY + 'rem'});
  transition: ${transitionProperty} ${transitionDuration}${secondsDuration ||
    secondsDuration} ${transitionTimingFunction} ${transitionDuration}${secondsDelay ||
    secondsDelay};
  &:hover {
    /* transform: ${transform}(${transformValue}${unit && unit}); */
    /* cursor: pointer; */
    /* background-color: red; */
    /* transform: scale(0.95); */
    /* transform: translateX(-50%); */
  }
`;

export const effectHoverDefault = ({
  unit,
  transformValue,
  color = 'blackHsl',
  backgroundColor = 'whiteHsl',
  transform,
  element,
  isElement,
  transitionTimingFunction = 'ease-in-out',
  transitionProperty = 'all',
  secondsDuration = 's',
  transitionDuration = 0.6,
  transformOrigin,
  secondsDelay,
  transitionDelay
}: TypeEffectDefault) => css`
  /* transition: all 0.6s ease-in-out; */
  /* transition: all 0.25s ease-in-out; */
  /* transition: <property> <duration> <timing-function> <delay>; */
  transform: ${transform && transform}
    (${transformValue && transformValue}${unit && unit});
  transition: ${transitionProperty && transitionProperty}
    ${transitionDuration && transitionDuration}${secondsDuration ||
    secondsDuration} ${transitionTimingFunction} ${transitionDelay}${secondsDelay ||
    secondsDelay};
  transform-origin: ${transformOrigin && transformOrigin};
  & ${element}:hover {
    transform: ${transform}(${transformValue}${unit && unit});
    transition: ${transitionProperty} ${transitionDuration}${secondsDuration ||
      secondsDuration} ${transitionTimingFunction} ${transitionDelay}${secondsDelay ||
      secondsDelay};
    transform-origin: ${transformOrigin && transformOrigin};
    background-color: ${backgroundColor &&
    TypeColorValueDefault[backgroundColor]};
    color: ${color && TypeColorValueDefault[color]};
    /* cursor: pointer; */
    /* transform: scale(0.95); */
    /* transform: translateX(-50%); */
  }
  ${!element &&
  css`
    &:hover {
      transform: ${transform}(${transformValue}${unit && unit});
      transition: ${transitionProperty} ${transitionDuration}${secondsDuration ||
        secondsDuration} ${transitionTimingFunction} ${transitionDelay}${secondsDelay ||
        secondsDelay};
      transform-origin: ${transformOrigin && transformOrigin};
      background-color: ${backgroundColor &&
      TypeColorValueDefault[backgroundColor]};
      color: ${color && TypeColorValueDefault[color]};
      /* cursor: pointer; */
      /* transform: scale(0.95); */
      /* transform: translateX(-50%); */
    }
  `}
`;

export const effectHoverBeforeDefault = ({
  unit,
  transformValue,
  transformOrigin,
  color = 'blackHsl',
  backgroundColor,
  transform,
  transitionTimingFunction = 'ease-in-out',
  transitionProperty,
  secondsDuration = 's',
  transitionDuration,
  secondsDelay,
  transitionDelay
}: TypeEffectDefault) => css`
  &:hover::before {
    transform: ${transform}(${transformValue}${unit && unit});
    transition: ${transitionProperty} ${transitionDuration}${secondsDuration ||
      secondsDuration} ${transitionTimingFunction} ${transitionDelay}${secondsDelay ||
      secondsDelay};
    transform-origin: ${transformOrigin && transformOrigin};
    background-color: ${backgroundColor &&
    TypeColorValueDefault[backgroundColor]};
    color: ${color && TypeColorValueDefault[color]};
    cursor: pointer;

    /* transform: ${transform && transform}
      (${transformValue && transformValue}${unit && unit}); */
    /* transform: scale(1);
    transform-origin: left; */
    /* transition: transform 0.5s ease-in-out; */
    /* transform: scale(0.95); */
    /* transform: translateX(-50%); */
  }
`;

export const effectHoverAfterDefault = ({
  unit,
  transformValue,
  transformOrigin,
  color = 'blackHsl',
  backgroundColor = 'grayDarkHsl',
  transform,
  transitionTimingFunction = 'ease-in-out',
  transitionProperty,
  secondsDuration = 's',
  transitionDuration,
  secondsDelay,
  transitionDelay
}: TypeEffectDefault) => css`
  &:hover::after {
    background-color: red;
    transform: ${transform}(${transformValue}${unit && unit});
    transition: ${transitionProperty} ${transitionDuration}${secondsDuration ||
      secondsDuration} ${transitionTimingFunction} ${transitionDelay}${secondsDelay ||
      secondsDelay};
    transform-origin: ${transformOrigin && transformOrigin};
    background-color: ${backgroundColor &&
    TypeColorValueDefault[backgroundColor]};
    color: ${color && TypeColorValueDefault[color]};
    cursor: pointer;

    /* transform: ${transform && transform}
      (${transformValue && transformValue}${unit && unit}); */
    /* transform: scale(1);
    transform-origin: left; */
    /* transition: transform 0.5s ease-in-out; */
    /* transform: scale(0.95); */
    /* transform: translateX(-50%); */
  }
`;

export const effectRotateDefault = (
  rotate?: TypeThemeNumberDefault | string
) => css`
  transform: rotate(${rotate}deg);
`;
export const effectTranslateXDefault = (
  translateX?: TypeThemeNumberDefault | string
) => css`
  transform: translateX(${translateX}rem);
`;
export const effectTranslateYDefault = (
  translateY?: TypeThemeNumberDefault | string
) => css`
  transform: translateY(${translateY}rem);
`;

/* Keyword values
transform: none;
*/

/* Function values
transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
transform: perspective(17px);
transform: rotate(0.5turn);
transform: rotate3d(1, 2.0, 3.0, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
transform: translate(12px, 50%);

transform: translate3d(12px, 50%, 3em);
transform: translateX(2em);
transform: translateY(3in);
transform: translateZ(2px);
transform: scale(2, 0.5);
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleX(2);
transform: scaleY(0.5);
transform: scaleZ(0.3);
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);
*/

/* Multiple function values
transform: translateX(10px) rotate(10deg) translateY(5px);
transform: perspective(500px) translate(10px, 0, 20px) rotateY(3deg);
*/

/* Global values
transform: inherit;
transform: initial;
transform: revert;
transform: revert-layer;
transform: unset;
*/
