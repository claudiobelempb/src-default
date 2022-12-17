import { css } from 'styled-components';
import { TypeThemeNumberDefault } from '../ThemeType';
import { TypeVariant, VariantObjDefault } from './colorDefault';

export type TypeFontDefault = {
  variant?: TypeVariant;
  unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  value?: TypeThemeNumberDefault;
  dynamic?: TypeThemeNumberDefault;
};

/**
 * 
  fontSizeStatic?: TypeFontDefault;
  fontSizeDynamic?: TypeFontDefault;
  textTransform?: TypeFontDefault;
  textAlign?: TypeFontDefault;
  textTitle?: TypeFontDefault;
  textParagraph?: TypeFontDefault;
  fontFamily?: TypeFontDefault;
  fontStyle?: TypeFontDefault;
  fontLineHeight?: TypeFontDefault;
  textLineThrough?: TypeFontDefault;  

  fontSizeStatic={props.fontSizeStatic}
  fontSizeDynamic={props.fontSizeDynamic}
  textTransform={props.textTransform}
  textAlign={props.textAlign}
  textTitle={props.textTitle}
  textParagraph={props.textParagraph}
  fontFamily={props.fontFamily}
  fontStyle={props.fontStyle}
  fontLineHeight={props.fontLineHeight}
  textLineThrough={props.textLineThrough}

  ${props.fontSizeStatic && props.fontSizeStaticDefault(props.fontSizeStatic)}
  ${props.fontSizeDynamic && props.fontSizeDynamicDefault(props.fontSizeDynamic)}
  ${props.textTransform && props.textTransformDefault(props.textTransform)}
  ${props.textAlign && props.textAlignDefault(props.textAlign)}
  ${props.textTitle && props.textTitleDefault(props.textTitle)}
  ${props.textParagraph && props.textparagraphDefault(props.textParagraph)}
  ${props.fontFamily && props.fontFamilyDefault(props.fontFamily)}
  ${props.fontStyle && props.fontStyleDefault(props.fontStyle)}
  ${props.fontLineHeight && props.fontLineHeightDefault(props.fontLineHeight)}
  ${props.textLineThrough && props.textDecoretionlineThrough(props.textLineThrough)}
  

  fontSizeStaticDefault?: () => FlattenSimpleInterpolation;
  fontSizeDynamicDefault?: () => FlattenSimpleInterpolation;
  textTransformDefault?: () => FlattenSimpleInterpolation;
  textAlignDefault?: () => FlattenSimpleInterpolation;
  tetxTitleDefault?: () => FlattenSimpleInterpolation;
  textParagraphDefault?: () => FlattenSimpleInterpolation;
  fontFamilyDefault?: () => FlattenSimpleInterpolation;
  fontStyleDefault?: () => FlattenSimpleInterpolation;
  fontLineHeightDefault?: () => FlattenSimpleInterpolation;
  textDecoretionlineThrough?: () => FlattenSimpleInterpolation;

  fontSizeStaticDefault={props.fontSizeStaticDefault}
  fontSizeDynamicDefault={props.fontSizeDynamicDefault}
  textTransformDefault={props.textTransformDefault}
  textAlignDefault={props.textAlignDefault}
  textTitleDefault={props.textTitleDefault}
  textParagraphDefault={props.textParagraphDefault}
  fontFamilyDefault={props.paddingTopDefault}
  fontStyleDefault={props.fontStyleDefault}
  fontLineHeightDefault={props.fontLineHeightDefault}
  textDecoretionlineThrough={props.textDecoretionlineThrough}

  ${props.fontSizeStaticDefault && props.fontSizeStaticDefault()}
  ${props.fontSizeDynamicDefault && props.fontSizeDynamicDefault()}
  ${props.textTransformDefault && props.textTransformDefault()}
  ${props.textAlignDefault && props.textAlignDefault()}
  ${props.textTitleDefault && props.textTitleDefault()}
  ${props.textParagraphDefault && props.textparagraphDefault()}
  ${props.fontFamilyDefault && props.fontFamilyDefault()}
  ${props.fontStyleDefault && props.fontStyleDefault()}
  ${props.fontLineHeightDefault && props.fontLineHeightDefault()}
  ${props.textDecoretionlineThrough && props.textDecoretionlineThrough()}

*/

export const fontDefault = {
  fontSizeStaticDefault: ({ value, unit = 'rem' }: TypeFontDefault) => css`
    font-size: ${value}${unit};
  `,
  fontSizeDynamicDefault: ({ value, unit = 'vw' }: TypeFontDefault) => css`
    font-size: calc(10 * ${value}${unit});
  `,
  fontFamilyDefault: (value: TypeFontFamily) => css`
    font-family: ${value};
  `,
  fontStyleDefault: (value: TypeFontStyle) => css`
    font-style: ${value};
  `,
  fontLineHeightDefault: (value: TypeFontLineHeight) => css`
    line-height: ${value};
  `
};

export const textDefault = {
  textTransformDefault: (value: TypeTextTransform) => css`
    text-transform: ${value};
  `,
  textAlignDefault: (value: TypeTetxAlign) => css`
    text-align: ${value};
  `,
  textTitleDefault: ({ value }: TypeFontDefault) => css`
    font-size: calc(10rem + ${value || 1.5}vw);
    font-weight: 900;
  `,
  textParagraphDefault: ({ value }: TypeFontDefault) => css`
    font-size: ${value}rem;
    color: hsl(0, 0%, 100%);
  `,
  textLineThroughDefault: (variant?: TypeVariant) => css`
    color: ${variant?.color &&
    VariantObjDefault[variant.color?.index || 'primary'][
      variant.color?.value || 'v500'
    ]};
    text-decoration: line-through;
  `
};

export const fontSizeStaticDefault = ({
  value,
  unit = 'rem'
}: TypeFontDefault) => css`
  font-size: ${value}${unit};
`;

export const fontSizeDynamicDefault = ({
  value,
  unit,
  dynamic
}: TypeFontDefault) => css`
  font-size: calc(${value}${unit} + ${dynamic}vw);
`;

export type TypeTextTransform =
  | 'none'
  | 'capitalize'
  | 'uppercase'
  | 'lowercase'
  | 'full-width'
  | 'full-size-kana';

export const textTransformDefault = (value: TypeTextTransform) => css`
  text-transform: ${value};
`;

export type TypeTetxAlign =
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'justify-all'
  | 'match-parent';

export const textAlignDefault = (value: TypeTetxAlign) => css`
  text-align: ${value};
`;

export const textTitleDefault = ({ value }: TypeFontDefault) => css`
  font-size: calc(10rem + ${value || 1.5}vw);
  font-weight: 900;
`;

export const textParagraphDefault = ({ value }: TypeFontDefault) => css`
  font-size: ${value}rem;
  color: hsl(0, 0%, 100%);
`;

export type TypeFontFamily =
  | 'roboto'
  | 'Roboto Mono'
  | 'baloo'
  | 'oswald'
  | 'plusJakarta';

export const fontFamilyDefault = (value: TypeFontFamily) => css`
  font-family: ${value}, sans-serif, monospace;
`;

export type TypeFontStyle =
  | 'normal'
  | 'italic'
  | 'oblique'
  | 'initial'
  | 'inherit';

export const fontStyleDefault = (value: TypeFontStyle) => css`
  font-style: ${value};
`;

export type TypeFontLineHeight = '65%' | '130%' | '160%';

export const fontLineHeightDefault = (value: TypeFontLineHeight) => css`
  line-height: ${value};
`;

export type TypeFontWeigh =
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
  | 'extraBold';

export const fontWeightDefault = (value: TypeFontWeigh) => css`
  font-weight: ${value};
`;

export const textLineThrough = (variant?: TypeVariant) => css`
  color: ${variant?.color &&
  VariantObjDefault[variant.color?.index || 'primary'][
    variant.color?.value || 'v500'
  ]};
  text-decoration: line-through;
`;
