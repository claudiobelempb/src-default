import styled, { css } from 'styled-components';
import {
  borderBottomDefault,
  borderDefault,
  borderLeftDefault,
  borderRadiusBottomLeftDefault,
  borderRadiusBottomRightDefault,
  borderRadiusDefault,
  borderRadiusTopLeftDefault,
  borderRadiusTopRightDefault,
  borderRightDefault,
  borderTopDefault
} from '../../../assets/themes/functions/borderDefault';
import {
  boxShadowDefault,
  VariantObjDefault
} from '../../../assets/themes/functions/colorDefault';
import { flexDefault } from '../../../assets/themes/functions/flexDefault';
import {
  fontDefault,
  textDefault,
  TypeFontDefault
} from '../../../assets/themes/functions/fontDefault';
import {
  heightDynamicDefault,
  heightStaticDefault
} from '../../../assets/themes/functions/heightDefault';
import { paddingDefault } from '../../../assets/themes/functions/paddingDefault';
import {
  displayDefault,
  overflowDefault,
  visibilityDefault,
  zIndexDefault
} from '../../../assets/themes/functions/utilsDefault';
import {
  widthDynamicDefault,
  widthStaticDefault
} from '../../../assets/themes/functions/widthDefault';
import { TypeDefault } from '../../../assets/themes/TypeDefault';

export const ContainerTextDefault = styled.p<TypeDefault>`
  ${({ theme, variant, as, ...props }) => css`
    position: relative;
    font-size: 1.6rem;

    background-color: ${VariantObjDefault[
      variant?.background?.index || 'default'
    ][variant?.background?.value || 'transparent']};

    color: ${VariantObjDefault[variant?.color?.index || 'default'][
      variant?.color?.value || 'white'
    ]};

    /*HEIGHT DEFAULT  */
    ${props.heightStatic && heightStaticDefault(props.heightStatic)}
    ${props.heightDynamic && heightDynamicDefault(props.heightDynamic)}

    /*WIDTH DEFAULT  */
    ${props.widthStatic && widthStaticDefault(props.widthStatic)}
    ${props.widthDynamic && widthDynamicDefault(props.widthDynamic)}

    /*UTILS DEFAULT */
    ${props.display && displayDefault(props.display)}
    ${props.zindex && zIndexDefault(props.zindex)}
    ${props.Visibility && visibilityDefault(props.Visibility)}
    ${props.overflow && overflowDefault(props.overflow)}
    ${props.boxShadow && boxShadowDefault(props.boxShadow)}
    /*BORDER DEFAULT */
    ${props.border && borderDefault(props.border)}
    ${props.borderTop && borderTopDefault(props.borderTop)};
    ${props.borderRight && borderRightDefault(props.borderRight)};
    ${props.borderBottom && borderBottomDefault(props.borderBottom)};
    ${props.borderLeft && borderLeftDefault(props.borderLeft)};

    /*BORDER RADIUS DEFAULT */
    ${props.borderRadius && borderRadiusDefault(props.borderRadius)};
    ${props.borderRadiusTopRight &&
    borderRadiusTopRightDefault(props.borderRadiusTopRight)};
    ${props.borderRadiusTopLeft &&
    borderRadiusTopLeftDefault(props.borderRadiusTopLeft)};
    ${props.borderRadiusBottomRight &&
    borderRadiusBottomRightDefault(props.borderRadiusBottomRight)};
    ${props.borderRadiusBottomLeft &&
    borderRadiusBottomLeftDefault(props.borderRadiusBottomLeft)};

    /* Padding Static */
    ${props.paddingDefault && props.paddingDefault()};
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
    /* Padding Static */
    ${props.marginDefault && props.marginDefault()};
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
    /*BORDER RADIUS DEFAULT */
    ${props.borderRadiusDefault && props.borderRadiusDefault()};
    ${props.borderRadiusTopRightDefault && props.borderRadiusTopRightDefault()};
    ${props.borderRadiusTopLeftDefault && props.borderRadiusTopLeftDefault()};
    ${props.borderRadiusBottomRightDefault &&
    props.borderRadiusBottomRightDefault()};
    ${props.borderRadiusBottomLeftDefault &&
    props.borderRadiusBottomLeftDefault()};
    /*BORDER DEFAULT */
    ${props.borderDefault && props.borderDefault()};
    ${props.borderTopDefault && props.borderTopDefault()};
    ${props.borderRightDefault && props.borderRightDefault()};
    ${props.borderBottomDefault && props.borderBottomDefault()};
    ${props.borderLeftDefault && props.borderLeftDefault()};
    /*UTILS DEFAULT  */
    ${props.zIndexDefault && props.zIndexDefault()}
    ${props.imparDefault && props.imparDefault()}
    ${props.parDefault && props.parDefault()}
    ${props.boxShadowDefault && props.boxShadowDefault()}
    ${props.displayDefault && props.displayDefault()}
    /*HEIGHT DEFAULT  */
    ${props.heightStaticDefault && props.heightStaticDefault()}
    ${props.heightDynamicDefault && props.heightDynamicDefault()}
    /*WIDTH DEFAULT  */
    ${props.widthStaticDefault && props.widthStaticDefault()}
    ${props.widthDynamicDefault && props.widthDynamicDefault()}
    /*EFFECT DEFAULT */
    ${props.effectDefault && props.effectDefault()}
    ${props.effectHoverDefault && props.effectHoverDefault()}
    ${props.effectHoverBeforeDefault && props.effectHoverBeforeDefault()}
    ${props.effectHoverAfterDefault && props.effectHoverAfterDefault()}
    /*BEFORE DEFAULT  */
    ${props.beforeDefault && props.beforeDefault()};
    /*FLEX DEFAULT  */
    ${props.flexDirectionDefault &&
    flexDefault.flexDirectionDefault(props.flexDirectionDefault)}
    ${props.alignSelfDefault &&
    flexDefault.alignSelfDefault(props.alignSelfDefault)}
    ${props.flexGapDefault && flexDefault.flexGapDefault(props.flexGapDefault)}
    ${props.justifyContentDefault &&
    flexDefault.justifyContentDefault(props.justifyContentDefault)}
    ${props.alignItemsDefault &&
    flexDefault.alignItemsDefault(props.alignItemsDefault)}
    ${props.flexBasisDefault &&
    flexDefault.flexBasisDefault(props.flexBasisDefault)}
    ${props.flexGrowDefault &&
    flexDefault.flexGrowDefault(props.flexGrowDefault)}
    /*FONT DEFAULT  */
    ${props.fontSizeStatic &&
    fontDefault.fontSizeStaticDefault(props.fontSizeStatic)}
    ${props.fontSizeDynamic &&
    fontDefault.fontSizeDynamicDefault(props.fontSizeDynamic)}
    ${props.textTransform &&
    textDefault.textTransformDefault(props.textTransform)}
    ${props.textAlign && textDefault.textAlignDefault(props.textAlign)}
    ${props.textTitle && textDefault.textTitleDefault(props.textTitle)}
    ${props.textParagraph &&
    textDefault.textParagraphDefault(props.textParagraph)}
    ${props.fontFamily && fontDefault.fontFamilyDefault(props.fontFamily)}
    ${props.fontStyle && fontDefault.fontStyleDefault(props.fontStyle)}
    ${props.fontLineHeight &&
    fontDefault.fontLineHeightDefault(props.fontLineHeight)}
    ${props.textLineThrough &&
    textDefault.textLineThroughDefault(props.textLineThrough)}

    /*BORDER RADIUS DEFAULT */
    ${props.borderRadius && borderRadiusDefault(props.borderRadius)};
    ${props.borderRadiusTopRight &&
    borderRadiusTopRightDefault(props.borderRadiusTopRight)};
    ${props.borderRadiusTopLeft &&
    borderRadiusTopLeftDefault(props.borderRadiusTopLeft)};
    ${props.borderRadiusBottomRight &&
    borderRadiusBottomRightDefault(props.borderRadiusBottomRight)};
    ${props.borderRadiusBottomLeft &&
    borderRadiusBottomLeftDefault(props.borderRadiusBottomLeft)};

    /*PADING DEFAULT */
    ${props.paddingStatic && paddingDefault.paddingStatic(props.paddingStatic)};
    ${props.paddingDynamic &&
    paddingDefault.paddingDynamic(props.paddingDynamic)};
    ${props.paddingX && paddingDefault.paddingX(props.paddingX)};
    ${props.paddingY && paddingDefault.paddingY(props.paddingY)};

    ${props.fontSizeStaticDefault && props.fontSizeStaticDefault()}
    ${props.fontSizeDynamicDefault && props.fontSizeDynamicDefault()}
    ${props.textTransformDefault && props.textTransformDefault()}
    ${props.textAlignDefault && props.textAlignDefault()}
    ${props.textTitleDefault && props.textTitleDefault()}
    ${props.textParagraphDefault && props.textParagraphDefault()}
    ${props.fontFamilyDefault && props.fontFamilyDefault()}
    ${props.fontStyleDefault && props.fontStyleDefault()}
    ${props.fontLineHeightDefault && props.fontLineHeightDefault()}
    ${props.textDecoretionlineThrough && props.textDecoretionlineThrough()}
    ${props.iconDefault && props.iconDefault()};
    /*COLOR DEFAULT */
    ${props.backgroundColorDefault && props.backgroundColorDefault()}
    ${props.backgroundLinearGradientDefault &&
    props.backgroundLinearGradientDefault()}
    ${props.textColorDefault && props.textColorDefault()}
    ${props.iconDefault && props.iconDefault()}

    & strong {
      font-weight: bold;
    }
  `}
`;
function textDecoretionlineThrough(
  textLineThrough: TypeFontDefault
): import('styled-components').SimpleInterpolation {
  throw new Error('Function not implemented.');
}
function textparagraphDefault(
  textParagraph: TypeFontDefault
): import('styled-components').SimpleInterpolation {
  throw new Error('Function not implemented.');
}
