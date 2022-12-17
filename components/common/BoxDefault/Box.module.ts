import styled, { css } from 'styled-components';
import { boxShadowDefault } from '../../../assets/themes/functions/colorDefault';
import { flexDefault } from '../../../assets/themes/functions/flexDefault';
import {
  heightDynamicDefault,
  heightStaticDefault
} from '../../../assets/themes/functions/heightDefault';
import { paddingStaticDefault } from '../../../assets/themes/functions/paddingDefault';
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

export const BoxDefaultStyle = styled.div<TypeDefault>`
  ${({ theme, ...props }) => css`
    /* z-index: -30; */
    /* height: 100%; */
    position: relative;
    width: 100%;
    /* background-color: red; */

    /* Padding Static */
    ${props.paddingDefault && props.paddingDefault()};
    ${props.paddingStaticDefault && paddingStaticDefault(props.paddingStaticDefault)}
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

    /*HEIGHT DEFAULT  */
    ${props.heightStatic && heightStaticDefault(props.heightStatic)}
    ${props.heightDynamic && heightDynamicDefault(props.heightDynamic)}
    ${props.heightStaticDefault && props.heightStaticDefault()}
    ${props.heightDynamicDefault && props.heightDynamicDefault()}
    /*WIDTH DEFAULT  */
    ${props.widthStatic && widthStaticDefault(props.widthStatic)}
    ${props.widthDynamic && widthDynamicDefault(props.widthDynamic)}
    ${props.widthStaticDefault && props.widthStaticDefault()}
    ${props.widthDynamicDefault && props.widthDynamicDefault()}

     /*EFFECT DEFAULT */
     ${props.effectDefault && props.effectDefault()}
    ${props.effectHoverDefault && props.effectHoverDefault()}
    ${props.effectHoverBeforeDefault && props.effectHoverBeforeDefault()}
    ${props.effectHoverAfterDefault && props.effectHoverAfterDefault()}
    /*BEFORE DEFAULT  */
    ${props.beforeDefault && props.beforeDefault()};
    /*FONT DEFAULT  */
    ${props.textTransformDefault && props.textTransformDefault()};
    ${props.textDecoretionlineThrough && props.textDecoretionlineThrough()};
    /*FONTSIZE DEFAULT  */
    ${props.fontSizeStaticDefault && props.fontSizeStaticDefault()}
    ${props.fontSizeDynamicDefault && props.fontSizeDynamicDefault()};
    ${props.textAlignDefault && props.textAlignDefault()};
    ${props.flexDefault && props.flexDefault()}
    /* GRID DEFAULT */
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

    ${props.iconDefault && props.iconDefault()}
    ${props.backgroundColorDefault && props.backgroundColorDefault()}

    /*UTILS DEFAULT */
    ${props.display && displayDefault(props.display)}
    ${props.zindex && zIndexDefault(props.zindex)}
    ${props.Visibility && visibilityDefault(props.Visibility)}
    ${props.overflow && overflowDefault(props.overflow)}
    ${props.boxShadow && boxShadowDefault(props.boxShadow)}


    ${props.zIndexDefault && props.zIndexDefault()}
    ${props.imparDefault && props.imparDefault()}
    ${props.parDefault && props.parDefault()}

    ${props.displayDefault && props.displayDefault()}
    ${props.positionDefault && props.positionDefault()}
    ${props.visibilityDefault && props.visibilityDefault()}

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {
      /* grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr)); */
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
    }

    // X-Large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
    }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {
    }
  `}
`;
