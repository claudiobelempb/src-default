import { FlattenSimpleInterpolation } from 'styled-components';
import { TypeBorderPropsDefault } from './functions/borderDefault';
import { TypeColorPropsDefault, TypeVariant } from './functions/colorDefault';
import { TypeFlexDefault, TypeFlexGapDefault } from './functions/flexDefault';
import {
  TypeFontDefault,
  TypeFontFamily,
  TypeFontLineHeight,
  TypeFontStyle,
  TypeTetxAlign,
  TypeTextTransform
} from './functions/fontDefault';
import { TypeHeightDefault } from './functions/heightDefault';
import { TypePaddingDefaultStatic } from './functions/paddingDefault';
import { TypeBoxShadonwPropsDefault } from './functions/utilsDefault';
import { TypeWidthDefault } from './functions/widthDefault';
import {
  CategoryDefault,
  LinksTypeDefault,
  PLansTypeDefault,
  PlansTypeOptionDefault,
  ThemeColorsText,
  ThemeMediaText,
  TypeThemeNumberDefault
} from './ThemeType';
import {
  ColorIndex,
  ColorValue,
  TypeVariantDefault,
  TypeVariantIndexDefault,
  VariantType
} from './types/TypeColorDefault';
import { TypePaddingDefault } from './types/TypePaddingDefault';
export type TypeDefault = {
  /*PADING DEFAULT */
  paddingX?: TypePaddingDefault;
  paddingY?: TypePaddingDefault;
  paddingStatic?: TypePaddingDefault;
  paddingDynamic?: TypePaddingDefault;
  variantType?: VariantType;

  // borderDefault?: TypeBorderDefault;

  target?: '_blank' | '_self';
  href?: string;
  title?: string;
  subTitle?: string;
  description?: string;
  fontColor?: TypeVariantDefault;
  bgColor?: TypeVariantDefault;
  colorIndex?: TypeVariantIndexDefault;
  colorValue?: ColorValue;
  colorType?: ColorIndex;

  text?: string;
  src?: string;
  alt?: string;
  label?: string;
  url?: string;
  size?: string;
  xsmall?: ThemeMediaText;
  small?: boolean;
  medium?: ThemeMediaText;
  large?: ThemeMediaText;
  xlarge?: ThemeMediaText;
  xxlarge?: ThemeMediaText;
  children?: React.ReactNode;

  as?:
  | 'fieldset'
  | 'header'
  | 'main'
  | 'footer'
  | 'section'
  | 'article'
  | 'aside'
  | 'nav'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'small'
  | 'form'
  | 'ul'
  | 'li'
  | 'a'
  | 'img'
  | 'figure'
  | 'label'
  | 'select'
  | 'textarea'
  | 'strong';
  isGridRepeat?: TypeThemeNumberDefault;
  visibility?: 'visible' | 'hidden' | 'collapse' | 'initial' | 'inherit';

  isIconLeft?: boolean;
  isIconRight?: boolean;

  isActive?: boolean;

  isBorder?: boolean;
  isOverflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
  isOpenNav?: boolean;

  categories?: CategoryDefault[];
  category?: string;
  price?: number;
  priceCut?: number;
  lowerPrice?: number;
  discount?: number;
  isCheck?: boolean;
  listPlans?: PLansTypeDefault[];
  plansOptions?: PlansTypeOptionDefault[];
  links?: LinksTypeDefault[];
  model?: 1 | 2 | 3 | 4 | 5;
  date?: string;

  variantColor?: {
    bgColor: ({
      colorIndex,
      colorValue
    }: TypeDefault) => FlattenSimpleInterpolation;
  };
  variantFunction?: {
    colorDefault: () => FlattenSimpleInterpolation;
  };

  variant?: TypeVariant;
  display?: 'flex' | 'grid' | 'block' | 'inline-block';
  zindex?: TypeThemeNumberDefault;
  Visibility?: 'hidden' | 'overlay' | 'scroll' | 'visible';
  overflow?: 'hidden' | 'overlay' | 'scroll' | 'visible';
  boxShadow?: TypeBoxShadonwPropsDefault;
  widthStatic?: TypeWidthDefault;
  widthDynamic?: TypeWidthDefault;
  heightStatic?: TypeHeightDefault;
  heightDynamic?: TypeHeightDefault;

  /*FONT DEFAULT */
  fontSizeStatic?: TypeFontDefault;
  fontSizeDynamic?: TypeFontDefault;
  textTransform?: TypeTextTransform;
  textAlign?: TypeTetxAlign;
  textTitle?: TypeFontDefault;
  textParagraph?: TypeFontDefault;
  fontFamily?: TypeFontFamily;
  fontStyle?: TypeFontStyle;
  fontLineHeight?: TypeFontLineHeight;
  textLineThrough?: TypeVariant;
  isHover?: boolean;

  isGridColumnsDefault?: boolean;
  parOuImparOption?: 'par' | 'impa';
  parOuImpar?: (
    valueStatic?: TypeThemeNumberDefault,
    valueDynamic?: TypeThemeNumberDefault,
    borderSize?: TypeThemeNumberDefault,
    borderColor?: ThemeColorsText,
    option?: 'par' | 'impa'
  ) => FlattenSimpleInterpolation;
  positionDefault?: () => FlattenSimpleInterpolation;
  beforeDefault?: () => FlattenSimpleInterpolation;
  afterDefault?: () => FlattenSimpleInterpolation;
  /* Padding Dynamic */
  effectDefault?: () => FlattenSimpleInterpolation;
  effectHoverDefault?: () => FlattenSimpleInterpolation;
  effectHoverBeforeDefault?: () => FlattenSimpleInterpolation;
  effectHoverAfterDefault?: () => FlattenSimpleInterpolation;
  backgroundImgDefault?: () => FlattenSimpleInterpolation;
  fcTransformDefault?: () => FlattenSimpleInterpolation;
  /* Padding Dynamic */
  paddingDefault?: () => FlattenSimpleInterpolation;
  paddingStaticDefault?: TypePaddingDefaultStatic;
  paddingStaticXDefault?: () => FlattenSimpleInterpolation;
  paddingStaticYDefault?: () => FlattenSimpleInterpolation;
  paddingDynamicDefault?: () => FlattenSimpleInterpolation;
  paddingDynamicXDefault?: () => FlattenSimpleInterpolation;
  paddingDynamicYDefault?: () => FlattenSimpleInterpolation;
  paddingTopDefault?: () => FlattenSimpleInterpolation;
  paddingRightDefault?: () => FlattenSimpleInterpolation;
  paddingBottomDefault?: () => FlattenSimpleInterpolation;
  paddingLeftDefault?: () => FlattenSimpleInterpolation;
  /* Margin DEFAULT*/
  marginDefault?: () => FlattenSimpleInterpolation;
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

  /*FONT DEFAULT */
  fontSizeStaticDefault?: () => FlattenSimpleInterpolation;
  fontSizeDynamicDefault?: () => FlattenSimpleInterpolation;
  textTransformDefault?: () => FlattenSimpleInterpolation;
  textAlignDefault?: () => FlattenSimpleInterpolation;
  textTitleDefault?: () => FlattenSimpleInterpolation;
  textParagraphDefault?: () => FlattenSimpleInterpolation;
  fontFamilyDefault?: () => FlattenSimpleInterpolation;
  fontStyleDefault?: () => FlattenSimpleInterpolation;
  fontLineHeightDefault?: () => FlattenSimpleInterpolation;
  textDecoretionlineThrough?: () => FlattenSimpleInterpolation;
  /*HEIGHT DEFAULT */
  heightStaticDefault?: () => FlattenSimpleInterpolation;
  heightDynamicDefault?: () => FlattenSimpleInterpolation;
  /*WIDTH DEFAULT */
  widthStaticDefault?: () => FlattenSimpleInterpolation;
  widthDynamicDefault?: () => FlattenSimpleInterpolation;

  /*GRID DEFAULT */
  gridTemplateColumnsStaticDefault?: () => FlattenSimpleInterpolation;

  /*BORDER DEFAULT */
  border?: TypeBorderPropsDefault;
  borderTop?: TypeBorderPropsDefault;
  borderRight?: TypeBorderPropsDefault;
  borderLeft?: TypeBorderPropsDefault;
  borderBottom?: TypeBorderPropsDefault;

  borderDefault?: () => FlattenSimpleInterpolation;
  borderTopDefault?: () => FlattenSimpleInterpolation;
  borderRightDefault?: () => FlattenSimpleInterpolation;
  borderLeftDefault?: () => FlattenSimpleInterpolation;
  borderBottomDefault?: () => FlattenSimpleInterpolation;

  /*BORDER RADIUS DEFAULT */
  borderRadius?: TypeBorderPropsDefault;
  borderRadiusTopRight?: TypeBorderPropsDefault;
  borderRadiusTopLeft?: TypeBorderPropsDefault;
  borderRadiusBottomRight?: TypeBorderPropsDefault;
  borderRadiusBottomLeft?: TypeBorderPropsDefault;

  borderRadiusDefault?: () => FlattenSimpleInterpolation;
  borderRadiusTopRightDefault?: () => FlattenSimpleInterpolation;
  borderRadiusTopLeftDefault?: () => FlattenSimpleInterpolation;
  borderRadiusBottomRightDefault?: () => FlattenSimpleInterpolation;
  borderRadiusBottomLeftDefault?: () => FlattenSimpleInterpolation;

  flexDefault?: () => FlattenSimpleInterpolation;
  gridDefault?: () => FlattenSimpleInterpolation;
  gridTemplateColumnsDefault?: () => FlattenSimpleInterpolation;
  gridTemplateRowsDefault?: () => FlattenSimpleInterpolation;
  gridColumnDefault?: () => FlattenSimpleInterpolation;
  gridRowDefault?: () => FlattenSimpleInterpolation;
  overallDefault?: () => FlattenSimpleInterpolation;
  /* FLEX DEFAULT */
  flexDirectionDefault?: TypeFlexDefault;
  alignSelfDefault?: TypeFlexDefault;
  flexGapDefault?: TypeFlexGapDefault;
  justifyContentDefault?: TypeFlexDefault;
  alignItemsDefault?: TypeFlexDefault;
  flexBasisDefault?: TypeFlexDefault;
  flexGrowDefault?: TypeFlexDefault;
  flexWrapDefault?: TypeFlexDefault;

  /* COLOR DEFAULT */
  backgroundDefault?: TypeVariant;
  focusDefault?: TypeVariant;
  placeholderDefault?: TypeVariant;
  colorDefault?: TypeVariant;
  hoverDefault?: TypeVariant;
  boxShadowDefault?: TypeColorPropsDefault;

  backgroundColorDefault?: () => FlattenSimpleInterpolation;
  textColorDefault?: () => FlattenSimpleInterpolation;
  textHoverDefault?: () => FlattenSimpleInterpolation;
  backgroundLinearGradientDefault?: () => FlattenSimpleInterpolation;
  iconDefault?: () => FlattenSimpleInterpolation;
  /* UTILS DEFAULT */
  zIndexDefault?: () => FlattenSimpleInterpolation;
  imparDefault?: () => FlattenSimpleInterpolation;
  parDefault?: () => FlattenSimpleInterpolation;
  displayDefault?: () => FlattenSimpleInterpolation;
  overflowDefault?: () => FlattenSimpleInterpolation;
  visibilityDefault?: () => FlattenSimpleInterpolation;
  disabled?: boolean;
};
