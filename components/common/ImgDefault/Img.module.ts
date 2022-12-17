import styled, { css } from 'styled-components';
import { TypeDefault } from '../../../assets/themes/TypeDefault';

export const ImgDefaultContainer = styled.img<TypeDefault>`
  ${({ ...props }) => css`
    position: relative;
    z-index: 0;
    width: ${props.width}rem;
    height: ${props.height}rem;

    /*EFFECT DEFAULT */
    ${props.effectDefault && props.effectDefault()}
    ${props.effectHoverDefault && props.effectHoverDefault()}
    ${props.effectHoverBeforeDefault && props.effectHoverBeforeDefault()}
    ${props.effectHoverAfterDefault && props.effectHoverAfterDefault()}
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

    ${props.zIndexDefault && props.zIndexDefault()}
    ${props.imparDefault && props.imparDefault()}
    ${props.parDefault && props.parDefault()}
    ${props.boxShadowDefault && props.boxShadowDefault()}
  `}
`;

export const FigureDefaultContainer = styled.figure<TypeDefault>`
  ${({ ...props }) => css`
    position: relative;
    display: flex;

    /*WIDTH DEFAULT */
    ${props.widthStaticDefault && props.widthStaticDefault};
    ${props.widthDynamicDefault && props.widthDynamicDefault};
    /*HEIGHT DEFAULT */
    ${props.heightStaticDefault && props.heightStaticDefault};
    ${props.heightDynamicDefault && props.heightDynamicDefault};
    /*EFFECT DEFAULT */
    ${props.effectDefault && props.effectDefault()}
    ${props.effectHoverDefault && props.effectHoverDefault()}
    ${props.effectHoverBeforeDefault && props.effectHoverBeforeDefault()}
    ${props.effectHoverAfterDefault && props.effectHoverAfterDefault()}
    /*UTILS DEFAULT */
    ${props.positionDefault && props.positionDefault()};
    ${props.beforeDefault && props.beforeDefault()};
    ${props.afterDefault && props.afterDefault()};
    ${props.gridTemplateColumnsDefault && props.gridTemplateColumnsDefault()}
    ${props.gridTemplateRowsDefault && props.gridTemplateRowsDefault()}
    ${props.gridColumnDefault && props.gridColumnDefault()}
    ${props.gridRowDefault && props.gridRowDefault()}
    ${props.overallDefault && props.overallDefault()}

    ${props.textColorDefault && props.textColorDefault()};
    ${props.backgroundColorDefault && props.backgroundColorDefault()};

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

    /*Utils Static */
    ${props.zIndexDefault && props.zIndexDefault()}
    ${props.imparDefault && props.imparDefault()}
    ${props.parDefault && props.parDefault()}
    ${props.boxShadowDefault && props.boxShadowDefault()}
    ${props.displayDefault && props.displayDefault()}
    ${props.overflowDefault && props.overflowDefault()}

    /*DISPLAY FLEX Static */
    ${props.flexDirectionDefault && props.flexDirectionDefault()}
    ${props.alignSelfDefault && props.alignSelfDefault()}
    ${props.flexGapDefault && props.flexGapDefault()}
    ${props.justifyContentDefault && props.justifyContentDefault()}
    ${props.alignItemsDefault && props.alignItemsDefault()}
    ${props.flexBasisDefault && props.flexBasisDefault()}
    ${props.flexGrowDefault && props.flexGrowDefault()}
  `}
`;
