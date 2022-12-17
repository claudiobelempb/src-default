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
import {
  heightDynamicDefault,
  heightStaticDefault
} from '../../../assets/themes/functions/heightDefault';
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

export const ButtonDefaultContainer = styled.button<TypeDefault>`
  ${({ theme, paddingX, paddingY, variant, ...props }) => css`
    position: relative;
    display: flex;
    gap: 1rem;
    border: 2px solid transparent;
    border-radius: 0.5rem;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    padding: 1rem 2rem;
    font-weight: bold;

    & svg {
      width: 2rem;
      height: 2rem;
    }

    background-color: ${VariantObjDefault[
    variant?.background?.index || 'green'
    ][variant?.background?.value || 'v500']};

    color: ${VariantObjDefault[variant?.color?.index || 'default'][
    variant?.color?.value || 'white'
    ]};

    /* opacity: 0.6; */
    transition: ease-in-out 0.3s;
    cursor: pointer;

    ${props.disabled &&
    css`
      &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
      }
    `}

    &:not(:disabled):hover {
      /* opacity: 1; */
      filter: brightness(0.9);
      ${variant?.hover &&
    css`
        background-color: ${VariantObjDefault[
      variant?.background?.index || 'primary'
      ][variant?.background?.value || 'v500']};
      `}

      ${variant?.hover &&
    css`
        color: ${VariantObjDefault[variant?.hover?.color?.index || 'primary'][
      variant?.hover?.color?.value || 'v500'
      ]};
      `}
    }

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

    ${props.variantFunction?.colorDefault &&
    props.variantFunction?.colorDefault()};

    ${props.paddingDefault && props.paddingDefault()};
    ${props.paddingStaticDefault && props.paddingStaticDefault}
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
    /*FONT DEFAULT  */
     ${props.textTransformDefault && props.textTransformDefault()};
    ${props.textDecoretionlineThrough && props.textDecoretionlineThrough()};
    ${props.fontSizeStaticDefault && props.fontSizeStaticDefault()};
    ${props.fontSizeDynamicDefault && props.fontSizeDynamicDefault()};
    ${props.textAlignDefault && props.textAlignDefault()};
    ${props.textColorDefault && props.textColorDefault()};
    ${props.backgroundColorDefault && props.backgroundColorDefault()};

    /*BORDER DEFAULT */
    ${props.borderDefault && props.borderDefault()}
    ${props.borderTopDefault && props.borderTopDefault()};
    ${props.borderRightDefault && props.borderRightDefault()};
    ${props.borderBottomDefault && props.borderBottomDefault()};
    ${props.borderLeftDefault && props.borderLeftDefault()};

    /*BORDER RADIUS DEFAULT */
    ${props.borderRadiusDefault && props.borderRadiusDefault()};
    ${props.borderRadiusTopRightDefault && props.borderRadiusTopRightDefault()};
    ${props.borderRadiusTopLeftDefault && props.borderRadiusTopLeftDefault()};
    ${props.borderRadiusBottomRightDefault &&
    props.borderRadiusBottomRightDefault()};
    ${props.borderRadiusBottomLeftDefault &&
    props.borderRadiusBottomLeftDefault()};
    /*HEIGHT DEFAULT  */
    ${props.heightStaticDefault && props.heightStaticDefault()}
    ${props.heightDynamicDefault && props.heightDynamicDefault()}
    /*WIDTH DEFAULT  */
    ${props.widthStaticDefault && props.widthStaticDefault()}
    ${props.widthDynamicDefault && props.widthDynamicDefault()}
    /*AFTER DEFAULT  */
    ${props.afterDefault && props.afterDefault()};
    ${props.effectHoverDefault && props.effectHoverDefault()};
    /*BEFORE DEFAULT  */
    ${props.beforeDefault && props.beforeDefault()};
    /* GRID DEFAULT */
    ${props.gridTemplateColumnsDefault && props.gridTemplateColumnsDefault()}
    ${props.gridTemplateRowsDefault && props.gridTemplateRowsDefault()}
    ${props.gridColumnDefault && props.gridColumnDefault()}
    ${props.gridRowDefault && props.gridRowDefault()}
    ${props.overallDefault && props.overallDefault()}
    /* FLEX DEFAULT */

    ${props.positionDefault && props.positionDefault()}
    ${props.zIndexDefault && props.zIndexDefault()}


    ${props.iconDefault && props.iconDefault()}
    ${props.backgroundColorDefault && props.backgroundColorDefault()}
  `}
`;
