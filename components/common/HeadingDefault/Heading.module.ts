import styled, { css } from 'styled-components';
import { TypeDefault } from '../../../assets/themes/TypeDefault';

export const HeadingDefaultContainer = styled.h1<TypeDefault>`
  ${({ theme, as, ...props }) => css`
    position: relative;
    font-size: 1.6rem;

    /*FONT DEFAULT  */
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

    /* COLOR DEFAULT */
    ${props.textColorDefault && props.textColorDefault()};
    ${props.backgroundColorDefault && props.backgroundColorDefault()};
    ${props.backgroundLinearGradientDefault &&
    props.backgroundLinearGradientDefault()}

    ${props.iconDefault && props.iconDefault()}
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
    /*BORDER DEFAULT  */
    ${props.borderDefault && props.borderDefault()}
    /*WIDTH DEFAULT */
    ${props.widthStaticDefault && props.widthStaticDefault};
    ${props.widthDynamicDefault && props.widthDynamicDefault};
    /*HEIGHT DEFAULT */
    ${props.heightStaticDefault && props.heightStaticDefault};
    ${props.heightDynamicDefault && props.heightDynamicDefault};
    /*EFFECT DEFAULT */
    /*AFTER DEFAULT  */
    ${props.afterDefault && props.afterDefault()};
    /*BEFORE DEFAULT  */
    ${props.beforeDefault && props.beforeDefault()};
  `}
`;
