import styled, { css } from 'styled-components';
import { VariantObjDefault } from '../../../assets/themes/functions/colorDefault';
import { flexDefault } from '../../../assets/themes/functions/flexDefault';
import { TypeDefault } from '../../../assets/themes/TypeDefault';

export const ContentDefaultStyle = styled.div<TypeDefault>`
  ${({ theme, as, variant, ...props }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 90%;
    height: 100%;

    background-color: ${VariantObjDefault[
    variant?.background?.index || 'default'
    ][variant?.background?.value || 'transparent']};

    color: ${VariantObjDefault[variant?.color?.index || 'primary'][
    variant?.color?.value || 'v500'
    ]};

    /*UTILS DEFAULT */
    ${props.zIndexDefault && props.zIndexDefault()}
    ${props.imparDefault && props.imparDefault()}
    ${props.parDefault && props.parDefault()}

    /*POSITION DEFAULT  */
    ${props.positionDefault && props.positionDefault()};
    /*EFFECT DEFAULT  */
    ${props.effectDefault && props.effectDefault()};
    /*AFTER DEFAULT  */
    ${props.afterDefault && props.afterDefault()};
    /*BEFORE DEFAULT  */
    ${props.beforeDefault && props.beforeDefault()};
    /*BACKGROUND IMG DEFAULT  */
    ${props.backgroundImgDefault && props.backgroundImgDefault()};
    /*BORDER DEFAULT  */
    ${props.borderDefault && props.borderDefault()}
    ${props.borderRadiusDefault && props.borderRadiusDefault()}
    /*COLOR DEFAULT  */
    ${props.backgroundColorDefault && props.backgroundColorDefault()}
    ${props.backgroundLinearGradientDefault &&
    props.backgroundLinearGradientDefault()}
    ${props.textColorDefault && props.textColorDefault()}
    ${props.iconDefault && props.iconDefault()}

    /*HEIGHT DEFAULT  */
    ${props.heightStaticDefault && props.heightStaticDefault()}
    ${props.heightDynamicDefault && props.heightDynamicDefault()}
    ${props.widthStaticDefault && props.widthStaticDefault()}
    ${props.widthDynamicDefault && props.widthDynamicDefault()}

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

    ${props.gridTemplateColumnsDefault && props.gridTemplateColumnsDefault()}
    ${props.gridTemplateColumnsStaticDefault &&
    props.gridTemplateColumnsStaticDefault()}
    ${props.gridTemplateRowsDefault && props.gridTemplateRowsDefault()}
    ${props.gridColumnDefault && props.gridColumnDefault()}
    ${props.gridRowDefault && props.gridRowDefault()}
    ${props.overallDefault && props.overallDefault()}
    /* FLEX DEFAULT */
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


    ${props.backgroundLinearGradientDefault &&
    props.backgroundLinearGradientDefault()};

    /* UTILS DEFAULT */
    ${props.zIndexDefault && props.zIndexDefault()}
    ${props.imparDefault && props.imparDefault()}
    ${props.parDefault && props.parDefault()}
  `}
`;
